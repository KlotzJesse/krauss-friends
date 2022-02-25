import {
  ChartBarIcon,
  CursorClickIcon,
  DatabaseIcon,
  IdentificationIcon,
  LightningBoltIcon,
  PhoneOutgoingIcon,
  ShieldCheckIcon,
  WifiIcon,
} from "@heroicons/react/outline";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const features = [
  {
    name: "100%ig genaue Termine",
    description:
      "Wir übernehmen die gesamte Arbeit für Sie, so dass Ihre Vertriebsmitarbeiter nur die Termine wahrnehmen müssen, die von beiden Seiten gewünscht werden.",
    icon: CursorClickIcon,
  },
  {
    name: "Keine Kaltakquise dank Datenbank eigener Kunden",
    description:
      "Verabschieden Sie sich von der Kaltakquise. Unsere Kunden bestehen nur aus solchen, die Interesse an neuen Produkten wie Ihren haben, was garantiert, dass nur hochqualifizierte Leads kontaktiert werden.",
    icon: DatabaseIcon,
  },
  {
    name: "Professionelle Assistenz",
    description:
      "Wir verfügen über sehr erfahrene Fachleute, die sich mit Ihrer Zielgruppe perfekt auskennen, auf Ihr Produkt geschult werden und trainiert darin sind, Ihre potenziellen Kunden von Ihrer Lösung zu begeistern, eine Beziehung aufzubauen und sowohl lang- als auch kurzfristig Termine für Sie zu erzielen.",
    icon: PhoneOutgoingIcon,
  },
  {
    name: "Schneller mehr Termine vereinbaren",
    description:
      "Wir sind bereits mit Ihrer Branche vertraut - es gibt also kein 'Herumirren' mehr. Wir wissen genau, was erwartet wird, wenn es darum geht, Einwände anzusprechen oder Kunden auf Vorteile hinzuweisen.",
    icon: LightningBoltIcon,
  },
  {
    name: "Wir kennen Ihre zukünftigen Käufer",
    description:
      "Riskieren Sie keine Zeitverschwendung bei der Akquise von Terminen durch Kaltakquise, wenn wir das für Sie erledigen! Wir behalten im Auge, wer sich für was interessiert, damit wir qualifizierte Interessenten direkt zu Ihnen bringen können, wenn sie bereit sind zu kaufen.",
    icon: IdentificationIcon,
  },
  {
    name: "Akquise nur für Sie",
    description:
      "Wenn wir in Ihrem Namen anrufen, bedeutet das, dass wir nicht im Namen von jemand anderem anrufen. So erhalten Sie mehr Leads und mehr Verkäufe.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Mehr Umsatz bei bestehenden Vertriebskapazitäten",
    description:
      "High Performer für Ihr Vertriebsteam zu gewinnen ist zunehmend herausfordernd. Wir erhöhen Ihre Termindichte bei Ihrem bestehenden Vertriebsteam und ermöglichen Ihnen somit Mehr Umsatz.",
    icon: ChartBarIcon,
  },
  {
    name: "Digitale Neukundengewinnung",
    description:
      "Zeitgemäße Neukundenakquise, die funktioniert. Wir vernetzen die innovative KRAUSS Telefonakquise mit digitalen Inhalten und sind für Ihre Neukunden so jederzeit in Echtzeit erreichbar.",
    icon: WifiIcon,
  },
];
const metrics = [
  {
    id: 1,
    stat: "305K+",
    emphasis: "Entscheider-Kontakte",
    rest: "werden jährlich qualifiziert.",
  },
  {
    id: 2,
    stat: "3.2K+",
    emphasis: "Key Accounts-Zentralkunden",
    rest: "mit deren Objektstruktur.",
  },
  {
    id: 3,
    stat: "Potenzialdaten",
    emphasis: "Anzahl Essen, Objekte, Betten",
    rest: "bis hin zum Geburtstag.",
  },
  {
    id: 4,
    stat: "Küchenkonzepte",
    emphasis: "Produktions-, Verteil-, oder Cook & Chill",
    rest: "- wir wissen wie Betriebe kochen.",
  },
];

const threeColFeatures = ({ blok, page }) => {
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
    <>
      {/* Gradient Feature Section */}
      <div className="bg-gradient-to-r from-purple-800 to-indigo-700">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-white">
            Keine Zeit verschwenden - mehr Umsatz erzielen!
          </h2>
          <p className="max-w-3xl mt-4 text-lg text-purple-200">
            Es ist nicht leicht, sein Produkt zu verkaufen. Es erfordert viel
            Zeit und Energie. Und eine Menge Geld. Mit unserem
            Terminvereinbarungsservice können Sie sowohl Zeit als auch Geld
            sparen. Wir bringen die Verkaufschancen zu Ihnen.
          </p>
          <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name}>
                <div>
                  <span className="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
                    <feature.icon
                      className="w-6 h-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="mt-6">
                  <h3 className="text-lg font-medium text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base text-purple-200">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats section */}
      <div className="relative bg-gray-900">
        <div className="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
          <div className="w-full h-full xl:grid xl:grid-cols-2">
            <div className="h-full xl:relative xl:col-start-2">
              <img
                className="object-cover w-full h-full opacity-25 xl:absolute xl:inset-0"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                alt="People working on laptops"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
              />
            </div>
          </div>
        </div>
        <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
          <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
            <h2 className="text-sm font-semibold tracking-wide uppercase">
              <span className="text-transparent bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text">
                Verkaufschancen statt Datenwald
              </span>
            </h2>
            <p className="mt-3 text-3xl font-extrabold text-white">
              Erhalten Sie verwertbare Daten, die Ihnen helfen, Ihr Geschäft
              auszubauen.
            </p>
            <p className="mt-5 text-lg text-gray-300">
              Sie erhalten aus Ihrem Verkaufsgebiet und Ihrer Zielgruppe
              potentialstarke Verkaufschancen.
            </p>
            <div className="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
              {metrics.map((item) => (
                <p key={item.id}>
                  <span className="block text-2xl font-bold text-white">
                    {item.stat}
                  </span>
                  <span className="block mt-1 text-base text-gray-300">
                    <span className="font-medium text-white">
                      {item.emphasis}
                    </span>{" "}
                    {item.rest}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bereit für mehr Termine?</span>
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">
              Vereinbaren Sie ein Kennenlerngespräch.
            </span>
          </h2>
          <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
            <button
              onClick={onClick}
              className="flex items-center justify-center px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border hover:from-purple-700 hover:to-indigo-700"
            >
              Mehr Informationen
            </button>
            <button
              onClick={onClick}
              className="flex items-center justify-center px-4 py-3 text-base font-medium text-indigo-800 border border-transparent rounded-md shadow-sm bg-indigo-50 hover:bg-indigo-100"
            >
              Termin anfragen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

threeColFeatures.propTypes = {};

export default threeColFeatures;
