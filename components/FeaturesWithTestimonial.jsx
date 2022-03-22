import { ChartPieIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const FeaturesWithTestimonial = ({ page }) => {
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
    <div className="relative pt-16 pb-32 overflow-hidden bg-white">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-md">
                  <ChartPieIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Konzentrieren Sie sich auf den Verkauf an Kunden, die
                  tatsächlich an Ihrem Angebot interessiert sind.
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Stellen Sie sich vor, wie viel einfacher Ihre Arbeit sein
                  wird, wenn Sie nur noch Termine mit Menschen wahrnehmen
                  müssen, die bei Ihnen kaufen wollen. Verschaffen Sie sich
                  einen Wettbewerbsvorteil gegenüber Konkurrenten, die noch
                  immer auf eigene Kaltakquise oder Messen setzen.
                </p>
                <div className="mt-6">
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
                    Kurzer Fragebogen. In nur 1 Minute. Wir melden uns noch
                    heute. Unverbindlich und komplett Kostenlos.
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 mt-8 border-t border-gray-200">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Warum haben wir eine bessere Abschlussquote bei Ihren
                    Verkaufschancen als bei unseren eigenen?&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="w-6 h-6 rounded-full"
                        src="https://hszteam.de/wp-content/uploads/2021/01/avatar-placeholder.gif"
                        alt=""
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700">
                      Langfristiger Kunde, Vorstand
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/Funnel.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-md">
                  <TrendingUpIcon
                    className="w-6 h-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  Erzielen Sie einen besseren ROI für Ihr Marketingbudget.
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  Mit unserer Telefonakquise erreichen wir für Sie direkt die
                  Entscheider und wecken am Telefon dann Bedarf an Ihrer Lösung.
                  Mit unserer Datenbank an über 300.000 Entscheidern, können wir
                  persönlich genau das Potenzial im Markt ansprechen, welches
                  für Ihr Unternehmen interessant ist.
                </p>
                <div className="mt-6">
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
                    Kurzer Fragebogen. In nur 1 Minute. Wir melden uns noch
                    heute. Unverbindlich und komplett Kostenlos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src="/DashboardExample.png"
                alt="Customer profile user interface"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FeaturesWithTestimonial.propTypes = {};

export default FeaturesWithTestimonial;
