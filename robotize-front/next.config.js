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
            },
            {
                hostname: 'arc-static.glanacion.com'
            },
            {
                hostname: "www.cronica.com.ar"
            }
        ],
        dangerouslyAllowSVG: true,
    }
}

module.exports = nextConfig
