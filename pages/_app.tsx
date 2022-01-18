import type { AppProps } from "next/app";
import "../styles/globals.css";
import CookieConsent from "./../components/CookieConsent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Component {...pageProps} />
      <CookieConsent />
    </div>
  );
}

export default MyApp;
