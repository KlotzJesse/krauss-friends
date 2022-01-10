import React from "react";

const CTASection = (props) => {
  return (
    <section id="your-profit" className="container px-5 mx-auto 2xl:w-3/5">
      <div className="py-3">
        <div className="flex flex-col items-start mx-auto my-12 sm:container md:flex-row">
          <div className="sticky flex flex-col w-full mt-2 md:top-36 lg:w-1/2 md:px-8">
            <p className="font-semibold text-gray-400 uppercase tracking-loose">
              So kann ich Ihnen helfen
            </p>
            <h1
              className="mb-12 text-4xl font-semibold leading-tight text-gray-800 dark:text-white xl:leading-tight"
              style={{
                fontFamily: '"Frank Ruhl Libre", serif',
                textTransform: "none",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient( 0deg , rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #fde479 10%, #fde479 35%, rgba(255,0,255,0) 35%)",
                }}
              >
                Verdoppeln Sie Ihre Verkaufsleistung
              </span>{" "}
              mit unserem Vertriebstraining.
            </h1>
            <a
              href="https://calendly.com/krauss-friends/kennenlerngespraech"
              style={{ color: "white !important" }}
              className="flex items-center self-start px-12 py-4 mr-2 font-medium text-white uppercase transition duration-500 ease-in-out transform border-0 rounded-lg shadow-lg primary-cta hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none text-md"
            >
              Erstgespräch reservieren
              <svg
                className="w-5 h-5 ml-2 fill-current color-white"
                id="Layer_1"
                x="0px"
                y="0px"
                viewBox="-49 141 512 512"
              >
                <path
                  id="XMLID_11_"
                  d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0 l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0 c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                ></path>
              </svg>
            </a>
            <p className="self-start pt-3 text-sm text-gray-400 cursor-pointer">
              In nur 60 Sekunden online einen freien Termin suchen
            </p>
          </div>
          <div className="sticky pt-10 ml-0 md:ml-12 lg:w-1/2 md:pt-0">
            <div className="w-full h-full mx-auto sm:container">
              <p className="text-lg font-medium text-gray-400">
                {/*<u>Wenn Ihre Antwort auf die vorige Frage <strong>“ja”</strong> lautet</u>, kann ich Ihnen helfen.<br />
                        <br />*/}
                Für namhafte Marken{" "}
                <span className="underline">
                  betreiben wir seit vielen Jahren in unserem Vertriebsteam die
                  tägliche Terminvereinbarung in der Neukundenakquise
                </span>
                . Und deshalb glauben wir zu wissen was die Herausforderungen
                jetzt und zukünftig sein werden -{" "}
                <strong>Wir leben Vertrieb.</strong>
                <br />
                <br />
                {/*Wir verstehen, dass Ihr Vertrieb damit beschäftigt ist Kunden zu betreuen. Um so wichtiger ist es deshalb Ihren Vertrieb ständig bei Ihrer Neukundengewinnung zu unterstützen, um Ihr
                        Geschäft wachsen zu lassen.<br />
                        <br/>*/}
                Wir <strong>motivieren &amp; trainieren</strong> Ihr Team in
                echten Praxis Situationen auch außerhalb des Seminarraums und
                machen Erfolg erlebbar. Die gewonnen Erkenntnisse aus der Übung
                machen Lust auf Verhaltensänderungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CTASection.propTypes = {};

export default CTASection;
