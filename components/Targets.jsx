import React from "react";

const Targets = (props) => {
  return (
    <section className="container px-5 mx-auto 2xl:w-3/5">
      <div className="py-3">
        <div className="flex flex-col items-start mx-auto my-12 sm:container md:flex-row md:my-24">
          <div className="sticky flex flex-col w-full mt-2 md:top-36 lg:w-1/2 md:mt-12 md:px-8">
            <p className="font-semibold text-gray-600 uppercase tracking-loose">
              Was Sie erwartet
            </p>
            <h1 className="mb-16 text-4xl font-semibold leading-tight text-gray-800 dark:text-white xl:leading-tight">
              So unterstützt das Vertriebstraining Ihre Verkäufer{" "}
              <span
                className="bg-gradient-to-r from-primary-200 to-primary-200
               bg-no-repeat [background-position:0_88%]
               [background-size:100%_0.3em]
               motion-safe:transition-all motion-safe:duration-200
               hover:[background-size:100%_100%]
               focus:[background-size:100%_100%]"
              >
                die Ziele zu erreichen.
              </span>
            </h1>
            <a
              href="https://calendly.com/krauss-friends/kennenlerngespraech"
              className="flex items-center self-start px-12 py-4 mr-2 font-medium text-white uppercase transition duration-500 ease-in-out transform bg-secondary-400 border-0 rounded-lg shadow-lg hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none text-md"
            >
              Erstgespräch reservieren
              <svg
                className="w-5 h-5 ml-2 fill-current color-white"
                x="0px"
                y="0px"
                viewBox="-49 141 512 512"
              >
                <path d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0 l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0 c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"></path>
              </svg>
            </a>
            <p className="self-start pt-3 text-sm text-gray-600 cursor-pointer">
              In nur 60 Sekunden online einen freien Termin suchen
            </p>
          </div>
          <div className="flex"></div>
          <div className="sticky pt-10 ml-0 md:ml-12 lg:w-1/2 md:pt-0">
            <div className="w-full h-full mx-auto space-y-6 sm:container sss">
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/interview.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Erstgespräch &amp; Kennenlernen
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Nicht nur die Menschen, Trainer &amp; Mitarbeiter, sondern
                  auch die Inhalte müssen mit <b>Ihren Herausforderungen</b>{" "}
                  zusammen passen.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/24-sport-and-awards/challenge-target.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Briefing &amp; Klare Zielsetzung
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Zusammen identifizieren wir und legen klare Ziele für Ihr
                  Verkaufstraining fest und fokussieren uns auf die Entwicklung
                  Ihrer Stärken.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/positive-thoughts.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Verhaltensänderung Ihrer Mitarbeiter
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Analogie Übungen in einem positiven Lernumfeld sichern ein
                  intensives Trainieren an der eigenen Performance. Die
                  Verhaltensänderung ist durch erfolgreiches Erleben umgesetzt.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/44-hand-gestures/freedom.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Langfristige Verbesserung
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Effektive Follow-up Aktivitäten unterstützen eine nachhaltig
                  wirksame Trainingsinvestition.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/meeting.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Sofortige Anwendung
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Unsere Trainingsmethoden gewährleisten Wissensaufbau durch
                  systemische Arbeitssequenzen. Der Wissenstransfer reduziert
                  sich auf das Wesentliche und ist sofort für die Praxis
                  nutzbar.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/12-peoples-avatars/motivation.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Mehr Motivation und Freude
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Motivation und Engagement der Mitarbeiter wachsen, somit wird
                  die Realisierung ambitionierter, und Unternehmensziele
                  wahrscheinlicher.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/analysis.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Maximale Vertriebsperformance
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Im Vertrieb sind Trainings notwendig, um ihre Mitarbeiter zu
                  unterstützen und deren Performance zu verbessern, das
                  verschafft Ihrem Unternehmen Wettbewerbsvorteile.
                </p>
              </div>
              <div className="relative flex items-center p-4 bg-white rounded-lg shadow-xl">
                <img
                  alt="team"
                  className="flex-shrink-0 w-12 h-12 mr-4"
                  src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/successful-businessman.svg"
                />
                <div className="flex-grow">
                  <h2 className="font-medium text-gray-900 title-font">
                    Intervalltrainings für zeitnahe Erfolge bei sich und Ihren
                    Mitarbeitern
                  </h2>
                </div>
              </div>
              <div className="relative md:">
                <p className="font-semibold text-gray-500 text-md">
                  Intervall heißt für Ihren Vertrieb: kontinuierliches Lernen
                  und Umsetzen in Themeneinheiten, sind der Schlüssel zum
                  Erfolg.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Targets.propTypes = {};

export default Targets;
