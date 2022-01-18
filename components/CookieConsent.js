import { useEffect } from "react";

export default function CookieConsent() {
  useEffect(() => {
    const cc = window.initCookieConsent();
    console.log(cc);

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
                    col4: "description ...",
                    is_regex: true,
                  },
                  {
                    col1: "_gid",
                    col2: "google.com",
                    col3: "1 day",
                    col4: "description ...",
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
