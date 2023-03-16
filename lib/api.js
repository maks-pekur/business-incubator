export const sendContactForm = async data =>
	fetch('/api/send', {
		method: 'POST',
		headers: { 'content-type': 'application/json' },
		body: JSON.stringify({
			name: data.name,
			email: data.email,
			phone: data.phone,
			message: data.message,
			position: data.position,
			file: data.file,
		}),
	}).then(res => {
		if (!res.ok) throw new Error('Failed to send message')
		return res.json()
	})
