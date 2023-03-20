import nodemailer from 'nodemailer'

const emailFrom = process.env.NEXT_PUBLIC_EMAIL
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO || emailFrom
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS

export const sendEmail = (fields, attachments) => {
	const { name, email, phone, message, position } = fields

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: emailFrom,
			pass,
		},
	})

	const mailOptions = {
		from: 'HR FBA <' + email + '>',
		to: emailTo,
		subject: 'CV отправлено с сайта FBA.ink',
		html: `
		<!DOCTYPE html>
		<html>
			<head>
				<meta name="viewport" content="width=device-width,initial-scale=1">
				<meta name="x-apple-disable-message-reformatting">
				<title></title>
			</head>
			<body style="margin:0;padding:0;">
			<div style="width:100%; font-size:18px";>
				<div>Имя: ${name}</div>
				<div>Email: ${email}</div>
				<div>Phone: ${phone}</div>
				<div>Position: ${position}</div>
				<div>Message: ${message}</div>
				</div>
			</body>
		</html>
		`,
		attachments,
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.error(error)
		} else {
			console.log(`Email sent: ${info.response}`)
		}
	})
}
