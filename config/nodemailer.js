import nodemailer from 'nodemailer'

const email = process.env.NEXT_PUBLIC_EMAIL
const emailTo = process.env.NEXT_PUBLIC_EMAIL_TO || email
const pass = process.env.NEXT_PUBLIC_EMAIL_PASS

export const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: email,
		pass,
	},
})

export const mailOptions = {
	from: 'HR FBA <' + email + '>',
	to: emailTo,
	subject: 'CV отправлено с сайта FBA.ink',
}
