import React from "react";

const Services = (props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 bg-purple-600 rounded-full">
              <svg
                className="w-10 h-10 text-white"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          Es kann schwierig sein, neue Kunden zu finden
        </h2>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          Sie wissen, dass Sie mehr Kunden finden müssen, um zu wachsen, aber
          Ihre verfügbaren Kontakte neigen sich dem Ende.
        </p>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
          KRAUSS Neukundengewinnung ist die Antwort. Wir generieren
          qualifizierte Verkaufschancen für Sie, indem wir potenzielle Kunden
          ansprechen, die an Ihrem Produkt oder Ihrer Dienstleistung
          interessiert sind. Mit unserer Hilfe können Sie das beste aus Ihrer
          Zeit machen und mehr Kunden gewinnen.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://i.ibb.co/tMHpCBZ/Ohne-Titel-1167-1152-px.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Telefonakquise
          </h5>
          <p className="text-gray-700">
            Unsere erfahrenen Fachleute ermitteln Entscheider aus unserer
            umfangreichen Datenbank, schätzen deren Bedürfnisse ein und
            vereinbaren einen Termin mit Ihnen. Alle unsere Kunden erhalten
            Unterlagen über Ihr Produkt oder Ihre Dienstleistung und werden auf
            unseren Marktplatz weitergeleitet, damit sie mehr erfahren und einen
            Termin buchen können, bevor wir sie erneut kontaktieren. Lassen Sie
            uns für Sie Verkaufschancen erarbeiten und konzentrieren Sie sich
            auf das, was Sie am besten können - hochwertige Produkte und
            Dienstleistungen anbieten!
          </p>
        </div>
        {/*<div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://i.ibb.co/HGsJvVk/Mitarbeiter-Interview-Krauss-Gmb-H-1-59-screenshot.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Vertriebstraining
          </h5>
          <p className="text-gray-700">
            Mit unserem Vertriebstraining können Sie sicher sein, dass Ihre
            Vertriebsmitarbeiter die Fähigkeiten und die Unterstützung erhalten,
            die sie benötigen, um erfolgreich neue Geschäfte abzuschließen.
            Unser Training unterstützt dabei die Telefonakquise, so dass Sie von
            hochqualifizierten Leads und begeisterten Kunden profitieren können.
            Mit unserer Hilfe lernen Ihre Vertriebsmitarbeiter, mit Einwänden
            umzugehen und die Vorteile Ihres Produkts oder Ihrer Dienstleistung
            so zu präsentieren, dass potenzielle Kunden überzeugt sind, mit
            Ihnen ins Geschäft zu kommen. Lassen Sie uns Ihnen helfen, Ihre
            Verkaufsziele zu erreichen und Ihr Geschäft noch heute auszubauen!
          </p>
        </div>*/}
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=markus-winkler-IrRbSND5EUc-unsplash.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Online Lead Generierung
          </h5>
          <p className="text-gray-700">
            Wir bieten Ihnen alles aus einer Hand, was Sie zur
            Neukundengewinnung benötigen, von persönlichen Anrufen bis hin zu
            gezielten Marketingkampagnen. Außerdem erstellen wir täglich neue
            Inhalte für Ihre Zielgruppe, damit Sie bei den Entscheidungsträgern
            von heute stets im Mittelpunkt stehen.
          </p>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
