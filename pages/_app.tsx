import "@typeform/embed/build/css/popup.css";
import * as Fathom from "fathom-client";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
const CookieConsent = dynamic(() => import("./../components/CookieConsent"));

// Record a pageview when route changes
/*Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});*/

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("YKCURMCH", {
      url: "https://cheeky-pleasurable.krauss-training.de/script.js",
    });
  }, []);

  return (
    <>
      <Component {...pageProps} />
      <CookieConsent />
    </>
  );
}

export default MyApp;
