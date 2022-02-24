import { ChartPieIcon, TrendingUpIcon } from "@heroicons/react/outline";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";

const FeaturesWithTestimonial = ({ page }) => {
  const { toggle } = createPopup(page.typeformId);
  const onClick = () => {
    trackGoal("MPOZNNML", 0); //03RLAFSO
    /*openPopupWidget({
      url: page.calendlyURL,
    });*/
    toggle();
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
                    className="inline-flex px-4 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700"
                  >
                    Kennenlerngespräch vereinbaren
                  </button>
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
                src="https://i.ibb.co/sPYMMpT/inbox-app-screenshot-2-min.png"
                alt="Inbox user interface"
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
                    className="inline-flex px-4 py-2 text-base font-medium text-white bg-purple-600 border border-transparent rounded-md shadow-sm hover:bg-purple-700"
                  >
                    Kennenlerngespräch vereinbaren
                  </button>
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
