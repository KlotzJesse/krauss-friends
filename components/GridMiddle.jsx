import {
  AnnotationIcon,
  BookOpenIcon,
  CashIcon,
  CurrencyEuroIcon,
  PhoneOutgoingIcon,
  TrendingUpIcon,
} from "@heroicons/react/solid";
import React from "react";

const GridMiddle = ({ page }) => {
  return (
    <section className="z-50 text-gray-600 transform -translate-y-16 body-font">
      <div className="container px-5 pt-10 mx-auto md:pt-0 2xl:w-3/5">
        <div className="flex flex-wrap">
          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg  flex-col text-center ">
              <BookOpenIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Die Preiserhöhungen erfolgreich beim Kunden durchsetzen
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg  flex-col text-center ">
              <TrendingUpIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Motivieren durch mehr Erfolg in der Neukundengewinnung
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg flex-col text-center ">
              <CurrencyEuroIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Mit der Einwandbehandlung den Abschluss vorbereiten
                </h2>
              </div>
            </div>
          </div>

          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg  flex-col text-center ">
              <CashIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Erfolgreiches Verkaufsgespräch führen
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg flex-col text-center ">
              <AnnotationIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Im Kopf des Kunden argumentieren
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full p-2 md:w-1/3">
            <div className="flex items-center h-full p-4 bg-white rounded-lg flex-col text-center ">
              <PhoneOutgoingIcon className="flex-shrink-0 w-6 h-6 mr-4" />
              <div className="flex-grow">
                <h2 className="font-medium text-gray-900 title-font">
                  Bedarf wecken - seinen eigenen Markt machen
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

GridMiddle.propTypes = {};

export default GridMiddle;
