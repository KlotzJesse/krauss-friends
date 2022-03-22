import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const CTASection = ({ page }) => {
  const onClick = () => {
    if (page.calendlyURL) {
      trackGoal("03RLAFSO", 0); //03RLAFSO
      openPopupWidget({
        url: page.calendlyURL,
      });
      return;
    }
    if (page.typeformId) {
      const { toggle } = createPopup(page.typeformId);
      trackGoal("MPOZNNML", 0);
      toggle();
      return;
    }
  };
  return (
    <section id="your-profit" className="container px-5 mx-auto 2xl:w-3/5">
      <div className="py-3">
        <div className="flex flex-col items-start mx-auto my-12 sm:container md:flex-row">
          <div className="sticky flex flex-col w-full mt-2 md:top-36 lg:w-1/2 md:px-8">
            <p className="font-semibold text-gray-600 uppercase tracking-loose">
              So können wir Ihnen helfen
            </p>
            <h1 className="mb-12 text-4xl font-semibold leading-tight text-gray-800 xl:leading-tight">
              <span
                className="bg-gradient-to-r from-primary-200 to-primary-200
                bg-no-repeat [background-position:0_88%]
                [background-size:100%_0.3em]
                motion-safe:transition-all motion-safe:duration-200
                hover:[background-size:100%_100%]
                focus:[background-size:100%_100%]"
              >
                Verdoppeln Sie Ihre Verkaufsleistung
              </span>{" "}
              mit unserem Vertriebstraining.
            </h1>
            <button
              onClick={onClick}
              className="flex items-center self-start px-12 py-4 mr-2 font-medium text-white uppercase transition duration-500 ease-in-out transform border-0 rounded-lg shadow-lg bg-secondary-400 primary-cta hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none text-md"
            >
              {page.call_to_action_btn}
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
            </button>
            <p className="self-start pt-3 text-sm text-gray-600">
              Geschenk - nur für kurze Zeit. Kurzer Fragebogen. In nur 1 Minute.
              Wir melden uns noch heute. Unverbindlich und komplett Kostenlos.
            </p>
          </div>
          <div className="sticky pt-10 ml-0 md:ml-12 lg:w-1/2 md:pt-0">
            <div className="w-full h-full mx-auto sm:container">
              <p className="text-lg font-medium text-gray-600">
                <u>
                  Wenn Ihre Antwort auf die vorige Frage <strong>“ja”</strong>{" "}
                  lautet
                </u>
                , können Wir Ihnen helfen.
                <br />
                <br />
                Für namhafte Marken betreiben wir seit vielen Jahren{" "}
                <span className="underline">
                  in unserem Vertriebsteam die tägliche Terminvereinbarung
                </span>{" "}
                in der Neukundenakquise. Und deshalb glauben wir zu wissen was
                die Herausforderungen jetzt und zukünftig sein werden -{" "}
                <strong>Wir leben Vertrieb.</strong>
                <br />
                <br />
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
