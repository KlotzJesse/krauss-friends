/** @type {import('next').NextConfig} */
module.exports = {
  //swcMinify: true,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["www.krauss-friends.com", "i.ibb.co", "image.jimcdn.com"],
  },
  env: {
    BASE_URL: process.env.NEXT_PUBLIC_TRACKING_ID,
  },
};
