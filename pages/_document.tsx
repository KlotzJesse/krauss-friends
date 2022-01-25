import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="de">
        <Head>
          <script
            defer
            src="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.js"
          ></script>
          <script
            type="text/plain"
            data-cookiecategory="analytics"
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-216631308-1"
          ></script>
          <script
            type="text/plain"
            data-cookiecategory="analytics"
            async
            src="/test.js"
          ></script>
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/orestbida/cookieconsent@v2.8.0/dist/cookieconsent.css"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
