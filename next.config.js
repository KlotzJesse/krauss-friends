/** @type {import('next').NextConfig} */
module.exports = {
  swcMinify: true,
  reactStrictMode: false,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: [
      "www.krauss-friends.com",
      "i.ibb.co",
      "image.jimcdn.com",
      "amazonaws.com",
      "s3.amazonaws.com",
      "renderapi.s3.amazonaws.com",
    ],
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
        {
          source: "*",
          has: [{ type: "host", value: "krauss-friends.com" }],
          destination: "/vertrieb-trainieren",
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
        {
          source: "/altenpflege-messe",
          has: [{ type: "host", value: "cloudprojekt.gastronomy.world" }],
          destination: "/cloudprojekt",
        },
        {
          source: "/",
          has: [{ type: "host", value: "cloudprojekt.gastronomy.world" }],
          destination: "/cloudprojekt",
        },
        {
          source: "/dmea",
          has: [{ type: "host", value: "cloudprojekt.gastronomy.world" }],
          destination: "/cloudprojekt-dmea",
        },
        {
          source: "/thanks",
          has: [{ type: "host", value: "cloudprojekt.gastronomy.world" }],
          destination: "/thanks/cloudprojekt",
        },
        {
          source: "/",
          has: [{ type: "host", value: "socamel.gastronomy.world" }],
          destination: "/socamel",
        },
        {
          source: "/altenpflege-messe",
          has: [{ type: "host", value: "socamel.gastronomy.world" }],
          destination: "/socamel",
        },
        {
          source: "/internorga",
          has: [{ type: "host", value: "socamel.gastronomy.world" }],
          destination: "/socamel-internorga",
        },
        {
          source: "/thanks",
          has: [{ type: "host", value: "socamel.gastronomy.world" }],
          destination: "/thanks/socamel",
        },
        {
          source: "/thanks",
          has: [{ type: "host", value: "beyondhost.gastronomy.world" }],
          destination: "/thanks/beyondhost",
        },
        {
          source: "/",
          has: [{ type: "host", value: "beyondhost.gastronomy.world" }],
          destination: "/beyondhost",
        },
        {
          source: "/",
          has: [{ type: "host", value: "oscar.mysolutionfinder.de" }],
          destination: "/oscar",
        },
        {
          source: "/thanks",
          has: [{ type: "host", value: "oscar.mysolutionfinder.de" }],
          destination: "/thanks/oscar",
        },
      ],
    };
  },
};
