/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {}
=======
const nextConfig = {
    images:{
        remotePatterns: [{hostname: "images.unsplash.com"}],
    },
    experimental:{
        serverActions: true,
    },
};
>>>>>>> 974a4fa9e3bcb682a4b639c8e1ecd17511769a33

module.exports = nextConfig
