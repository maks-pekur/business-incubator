import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO || email
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS

export const sendEmail = (text, attachment) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: email,
			pass,
		},
	})

	const mailOptions = {
		from: 'HR FBA <' + email + '>',
		to: emailTo,
		subject: 'CV отправлено с сайта FBA.ink',
		html: `<div>${text}</div>`,
		attachments: [
			{
				path: attachment?.path,
				filename: attachment?.name,
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
