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
  rewrites() {
    return {
      beforeFiles: [
        // if the host is `app.acme.com`,
        // this rewrite will be applied
        {
          source: "/",
          has: [
            {
              type: "host",
              value: "neukunden.krauss-gmbh.com",
            },
          ],
          destination: "/neukundengewinnung",
        },
      ],
    };
  },
};
