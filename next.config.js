/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
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
        {
          source: "/",
          has: [{ type: "host", value: "coach-ausbildung.krauss-training.de" }],
          destination: "/coach-ausbildung",
        },
        {
          source: "/",
          has: [{ type: "host", value: "coach-ausbildung.krauss-friends.com" }],
          destination: "/coach-ausbildung",
        },

        {
          source: "/",
          has: [
            { type: "host", value: "vertriebstraining.krauss-friends.com" },
          ],
          destination: "/vertrieb-trainieren",
        },
        {
          source: "/",
          has: [
            { type: "host", value: "vertriebstraining.krauss-training.de" },
          ],
          destination: "/vertrieb-trainieren",
        },
      ],
    };
  },
};
