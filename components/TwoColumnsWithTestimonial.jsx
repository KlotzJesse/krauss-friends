import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const TwoColumnsWithTestimonial = ({ page }) => {
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
    <div className="py-16 overflow-hidden">
      <div className="px-4 mx-auto space-y-8 max-w-7xl sm:px-6 lg:px-8">
        <div className="mx-auto text-base max-w-prose lg:max-w-none">
          <h2 className="text-base font-semibold tracking-wide text-purple-600 uppercase">
            Mehr Termine, mehr Umsatz
          </h2>
          <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Wie Sie mehr Termine erhalten
          </p>
        </div>
        <div className="relative z-10 mx-auto text-base max-w-prose lg:max-w-5xl lg:mx-0 lg:pr-72">
          <p className="text-lg text-gray-500">
            Es ist schwierig, mit dem richtigen Entscheidungsträger in einem
            Unternehmen in Kontakt zu kommen. Sie verbringen Stunden mit
            Recherchen und Kaltakquise, nur um ein &quot;Nein&quot; zu erhalten
            oder an jemanden weitergeleitet zu werden, der Ihnen nicht
            weiterhelfen kann.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
          <div className="relative z-10">
            <div className="mx-auto prose text-gray-500 prose-purple lg:max-w-none">
              <p>
                Zeit ist Geld, und wenn Sie Ihre Zeit nicht sinnvoll nutzen,
                entgehen Ihnen potenzielle Aufträge. Sie müssen in der Lage
                sein, schnell und einfach mit der richtigen Person in Kontakt zu
                treten, um einen Verkauf abzuschließen.
              </p>
              <ul role="list">
                <li>
                  Erhöhen Sie Ihre Erfolgschancen mit qualifizierten Terminen
                </li>
                <li>
                  Zugang zu einer Datenbank mit über 300.000
                  Entscheidungsträgern
                </li>
                <li>Wir kennen Ihre Kunden und haben alle Informationen</li>
              </ul>

              <h3>Erhalten Sie jetzt zielsichere Termine</h3>
              <p>
                Der Terminservice ist die Lösung für Sie. Wir verfügen über eine
                Datenbank mit über 300.000 Entscheidungsträgern, mit denen wir
                Sie schnell und einfach verbinden können. Wir wissen alles über
                unsere Kunden, so dass Sie keine Zeit mit der Suche nach ihnen
                verschwenden müssen, und wir kontaktieren interessierte Kunden
                in Ihrem Namen, so dass Sie sich auf den Verkauf konzentrieren
                können.
              </p>
            </div>
            <div className="mx-auto mt-10 text-base max-w-prose lg:max-w-none">
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
                <b>Geschenk - nur für kurze Zeit.</b> Kurzer Fragebogen. In nur
                1 Minute. Wir melden uns noch heute. Unverbindlich und komplett
                Kostenlos.
              </p>
            </div>
          </div>
          <div className="relative mx-auto mt-12 text-base max-w-prose lg:mt-0 lg:max-w-none">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
              />
            </svg>
            <blockquote className="relative bg-white rounded-lg shadow-lg">
              <div className="px-6 py-8 rounded-t-lg sm:px-10 sm:pt-10 sm:pb-8">
                {/*<img
                  src="https://tailwindui.com/img/logos/workcation-logo-indigo-600-mark-gray-800-and-indigo-600-text.svg"
                  alt="Workcation"
                  className="h-8"
  />*/}
                <div className="relative mt-8 text-lg font-medium text-gray-700">
                  <svg
                    className="absolute top-0 left-0 w-8 h-8 text-gray-200 transform -translate-x-3 -translate-y-2"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative">
                    Warum haben wir eine bessere Abschlussquote bei Ihren
                    Terminen als bei unseren eigenen?
                  </p>
                </div>
              </div>
              <cite className="relative flex items-center px-6 py-5 not-italic bg-purple-600 rounded-b-lg sm:items-start sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                <div className="relative border-2 border-white rounded-full sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                  <img
                    className="w-12 h-12 bg-purple-300 rounded-full sm:w-20 sm:h-20"
                    src="https://renderapi.s3.amazonaws.com/eJQVu3p1G.png"
                    alt=""
                  />
                </div>
                <span className="relative ml-4 font-semibold leading-6 text-purple-300 sm:ml-24 sm:pl-1">
                  <p className="font-semibold text-white sm:inline">
                    Geschäftsführer
                  </p>{" "}
                  <p className="sm:inline">im Gastgewerbe</p>
                </span>
              </cite>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
};

TwoColumnsWithTestimonial.propTypes = {};

export default TwoColumnsWithTestimonial;
