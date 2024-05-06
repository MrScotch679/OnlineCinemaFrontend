/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	env: {
		APP_URL: process.env.REACT_APP_API_URL,
		APP_ENV: process.env.REACT_APP_ENV
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:3000/api/:path*`
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:3000/uploads/:path*`
			}
		]
	}
}

export default nextConfig
