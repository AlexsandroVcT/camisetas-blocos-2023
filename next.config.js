/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['files.stripe.com'],
	},
	experimental: {
		appDir: true,

		experimental: {
			images: {
				allowFutureImage: true,
			},
		},
	},
}

module.exports = nextConfig
