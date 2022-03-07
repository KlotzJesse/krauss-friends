import { ArrowRightIcon } from "@heroicons/react/solid";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const GridText = ({ page }) => {
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
    <div className="py-5">
      <h1 className="px-5 mb-8 text-4xl font-semibold leading-tight text-gray-800 md:text-center xl:text-4xl xl:leading-tight">
        <span
          className="bg-gradient-to-r from-primary-200 to-primary-200
         bg-no-repeat [background-position:0_88%]
         [background-size:100%_0.3em]
         motion-safe:transition-all motion-safe:duration-200
         hover:[background-size:100%_100%]
         focus:[background-size:100%_100%]"
        >
          Erkennen Sie
        </span>{" "}
        Ihren Vertrieb hier wieder?
      </h1>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto md:px-5 2xl:w-3/5">
          <div className="flex flex-wrap">
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font text-md">
                    <strong>Zu wenig Abschlüsse</strong> aus der
                    Angebotsnachbearbeitung
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font text-md">
                    Die Kunden sagen &quot;
                    <strong>Wir haben keinen Bedarf</strong>&quot; oder
                    &quot;Kein Interesse&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font">
                    Entscheider können nicht mehr besucht werden, weil Sie im
                    Home-Office sind oder <strong>nur selten vor Ort</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font">
                    Es bleibt <strong>keine Zeit für Neukundengewinnung</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font">
                    <strong>Termine vor Ort</strong> nicht mehr möglich
                    (Abstandsregeln, Kettengeschäft...)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 md:w-1/3">
              <div className="flex items-center h-full p-4">
                <ArrowRightIcon className="flex-shrink-0 w-4 h-4 mr-4 " />
                <div className="flex-grow">
                  <p className="font-medium text-gray-600 title-font">
                    Kunde behauptet &quot;Das Produkt ist{" "}
                    <strong>zu teuer</strong>&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

GridText.propTypes = {};

export default GridText;
