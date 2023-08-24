/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'www.lanacion.com.ar'
            },
            {
                hostname: "resizer.glanacion.com"
            },
            {
                hostname: "www.clarin.com"
            }
        ]
    }
}

module.exports = nextConfig
