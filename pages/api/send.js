import formidable from 'formidable'
import { Writable } from 'stream'
import { sendEmail } from '../../lib/api'

const formidableConfig = {
	keepExtensions: true,
	maxFileSize: 10_000_000,
	maxFieldsSize: 10_000_000,
	maxFields: 7,
	allowEmptyFiles: false,
	multiples: false,
}

export const config = {
	api: {
		bodyParser: false,
	},
}

function formidablePromise(req, opts) {
	return new Promise((accept, reject) => {
		const form = formidable(opts)

		form.parse(req, (err, fields, files) => {
			if (err) {
				return reject(err)
			}
			return accept({ fields, files })
		})
	})
}

const fileConsumer = acc => {
	const writable = new Writable({
		write: (chunk, _enc, next) => {
			acc.push(chunk)
			next()
		},
	})

	return writable
}

export default async (req, res) => {
	if (req.method !== 'POST') return res.status(404).end()

	try {
		const chunks = []

		const { fields, files } = await formidablePromise(req, {
			...formidableConfig,
			// consume this, otherwise formidable tries to save the file to disk
			fileWriteStreamHandler: () => fileConsumer(chunks),
		})
		// or the actual field name you used in the front end
		const { careerCV } = files

		const fileData = Buffer.concat(chunks)
		const filename = careerCV?.originalFilename
		const attachment = [{ content: fileData, filename }]

		sendEmail(fields, attachment)

		return res.status(204).end()
	} catch (err) {
		return res.status(500).json({ error: 'Internal Server Error' })
	}
}
