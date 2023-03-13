export const sendContactForm = async data =>
	fetch('/api/send', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'Content-Type': 'multipart/mixed',
		},
	}).then(res => {
		if (!res.ok) throw new Error('Failed to send message')
		return res.json()
	})
