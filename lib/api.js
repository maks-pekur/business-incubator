import nodemailer from 'nodemailer'

export const sendEmail = async (fields, attachments) => {
	const { name, email, phone, message, position } = fields

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.NEXT_PUBLIC_EMAIL,
			pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
		},
	})

	const server = await new Promise((resolve, reject) => {
		transporter.verify(function (error, success) {
			if (success) {
				resolve(success)
			}
			reject(error)
		})
	})
	if (!server) {
		res.status(500).json({ error: 'Error failed' })
	}

	const mailOptions = {
		from: `${name} <${email}>`,
		to: process.env.NEXT_PUBLIC_EMAIL_TO,
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

	const success = await new Promise((resolve, reject) => {
		transporter.sendMail(mailOptions, (error, info) => {
			if (error) {
				reject(err)
				console.error(error)
			} else {
				console.log(`Email sent: ${info.response}`)
				resolve(true)
			}
		})
	})
}
