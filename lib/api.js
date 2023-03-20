import nodemailer from 'nodemailer'

const emailFrom = process.env.NEXT_PUBLIC_EMAIL
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO || emailFrom
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS

export const sendEmail = (fields, attachment) => {
	const { name, email, phone, message, position } = fields

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: emailFrom,
			pass,
		},
	})

	const mailOptions = {
		from: 'HR FBA <' + emailFrom + '>',
		to: emailTo,
		subject: 'CV отправлено с сайта FBA.ink',
		html: `
		<div>
		<div>Имя: ${name}</div>
		<div>Email: ${email}</div>
		<div>Phone: ${phone}</div>
		<div>Position: ${position}</div>
		<div>Message: ${message}</div>
		</div>`,
		attachments: [
			{
				filename: attachment.filename,
				content: attachment.content,
			},
		],
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error)
		} else {
			console.log(`Email sent: ${info.response}`)
		}
	})
}
