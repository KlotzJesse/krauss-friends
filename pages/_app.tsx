import "@typeform/embed/build/css/popup.css";
import * as Fathom from "fathom-client";
import type { AppProps } from "next/app";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
import CookieConsent from "./../components/CookieConsent";

// Record a pageview when route changes
Router.events.on("routeChangeComplete", () => {
  Fathom.trackPageview();
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    Fathom.load("YKCURMCH", {
      url: "https://cheeky-pleasurable.krauss-training.de/script.js",
      auto: false,
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
