import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="de">
      <Head>
        <script
          defer
          src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css"
        ></link>
        <link
          rel="preload"
          href="/FontFont - Mark Pro Bold.otf"
          as="font"
          type="font/otf"
          crossOrigin=""
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
