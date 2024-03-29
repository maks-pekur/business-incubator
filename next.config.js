/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['www.datocms-assets.com'],
	},
	swcMinify: true,
	i18n,
	env: {
		NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN:
			process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
	},
}

module.exports = nextConfig
