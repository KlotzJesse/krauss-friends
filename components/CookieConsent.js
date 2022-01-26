import { useEffect } from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-NR8JX5P",
};

export default function CookieConsent() {
  useEffect(() => {
    const cc = window.initCookieConsent();

    TagManager.initialize(tagManagerArgs);

    cc.run({
      // your config

      current_lang: "de",

      autoclear_cookies: true,
      page_scripts: true,
      languages: {
        de: {
          consent_modal: {
            title: "Wir verwenden Cookies! 🍪",
            description:
              'Diese Website verwendet essentielle Cookies, um ihren ordnungsgemäßen Betrieb zu gewährleisten, und Tracking-Cookies, um zu verstehen, wie Sie mit ihr interagieren. Letztere werden nur nach Zustimmung gesetzt. <button type="button" data-cc="c-settings" class="cc-link">Einstellungen</button>',
            primary_btn: {
              text: "Alle akzeptieren",
              role: "accept_all", // 'accept_selected' or 'accept_all'
            },
            secondary_btn: {
              text: "Nur Notwendige",
              role: "accept_necessary", // 'settings' or 'accept_necessary'
            },
          },
          settings_modal: {
            title: "Cookie Präferenzen",
            save_settings_btn: "Einstellungen speichern",
            accept_all_btn: "Alle akzeptieren",
            reject_all_btn: "Nur Notwendige",
            close_btn_label: "Close",
            cookie_table_headers: [
              { col1: "Name" },
              { col2: "Domain" },
              { col3: "Expiration" },
              { col4: "Description" },
            ],
            blocks: [
              {
                title: "Verwendung von Cookies 📢",
                description:
                  'Wir verwende Cookies, um die Grundfunktionen der Website zu gewährleisten und Ihr Online-Erlebnis zu verbessern. Sie können für jede Kategorie wählen, ob Sie sich ein- oder austragen möchten. Für weitere Details zu Cookies und anderen sensiblen Daten, lesen Sie bitte die vollständige <a href="/privacy" class="cc-link">Datenschutzerklärung</a>.',
              },
              {
                title: "Strikt notwendige Cookies",
                description:
                  "Diese Cookies sind für das ordnungsgemäße Funktionieren dieser Website unerlässlich. Ohne diese Cookies würde die Website nicht richtig funktionieren",
                toggle: {
                  value: "necessary",
                  enabled: true,
                  readonly: true, // cookie categories with readonly=true are all treated as "necessary cookies"
                },
                cookie_table: [
                  {
                    col1: "cc_cookie",
                    col2: "First Party",
                    col3: "182 days",
                    col4: "Enhält ein Objekt welches die Einstellungen und Freigabe der Cookie Einstellungen enthält.",
                  },
                ],
              },
              {
                title: "Leistungs- und Analyse-Cookies",
                description:
                  "Diese Cookies ermöglichen es der Website, sich an die von Ihnen in der Vergangenheit getroffenen Auswahlen zu erinnern",
                toggle: {
                  value: "analytics", // your cookie category
                  enabled: false,
                  readonly: false,
                },
                cookie_table: [
                  // list of all expected cookies
                  {
                    col1: "^_ga", // match all cookies starting with "_ga"
                    col2: "google.com",
                    col3: "2 years",
                    col4: "Enthält eine zufallsgenerierte User-ID. Anhand dieser ID kann Google Analytics wiederkehrende User auf dieser Website wiedererkennen und die Daten von früheren Besuchen zusammenführen.",
                    is_regex: true,
                  },
                  {
                    col1: "_gid",
                    col2: "google.com",
                    col3: "1 day",
                    col4: "Enthält eine zufallsgenerierte User-ID. Anhand dieser ID kann Google Analytics wiederkehrende User auf dieser Website wiedererkennen und die Daten von früheren Besuchen zusammenführen.",
                  },
                  {
                    col1: "_gat_gtag_xxx",
                    col2: "google.com",
                    col3: "1 minute",
                    col4: "Bestimmte Daten werden nur maximal einmal pro Minute an Google Analytics gesendet. Das Cookie hat eine Lebensdauer von einer Minute. Solange es gesetzt ist, werden bestimmte Datenübertragungen unterbunden.",
                  },
                ],
              },
              {
                title: "Werbe- und Targeting-Cookies",
                description:
                  "Diese Cookies sammeln Informationen darüber, wie Sie die Website nutzen, welche Seiten Sie besuchen und welche Links Sie angeklickt haben. Alle Daten sind anonymisiert und können nicht verwendet werden, um Sie zu identifizieren",
                toggle: {
                  value: "targeting",
                  enabled: false,
                  readonly: false,
                },
              },
              {
                title: "Mehr Informationen",
                description:
                  'Bei Fragen zu unserer Cookie-Politik und Ihren Einstellungsmöglichkeiten wenden Sie sich bitte <a class="cc-link" href="/contact">an uns</a>.',
              },
            ],
          },
        },
      },
    });
  }, []);

  return null;
}
