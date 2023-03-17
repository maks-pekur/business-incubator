import { sendEmail } from '../../lib/api'

export default async (req, res) => {
	if (req.method === 'POST') {

    sendEmail(req.body)

		res.status(200).json({ message: 'Email sent successfully.' })
	} else {
		res.status(405).json({ message: 'Method not allowed.' })
	}
}
