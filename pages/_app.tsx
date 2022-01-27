import * as Fathom from "fathom-client";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import "../styles/globals.css";
import CookieConsent from "./../components/CookieConsent";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Initialize Fathom when the app loads
    // Example: yourdomain.com
    //  - Do not include https://
    //  - This must be an exact match of your domain.
    //  - If you're using www. for your domain, make sure you include that here.
    Fathom.load("YKCURMCH", {
      includedDomains: [
        "www.krauss-training.de",
        "krauss-training.de",
        "www.krauss-training.com",
        "krauss-training.com",
      ],
      url: "https://cheeky-pleasurable.krauss-training.de/script.js",
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    // Record a pageview when route changes
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    // Unassign event listener
    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return (
    <div className="">
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}

export default MyApp;
