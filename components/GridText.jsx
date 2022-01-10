import React from "react";

const GridText = (props) => {
  return (
    <div className="py-5">
      <h1
        className="px-5 mb-8 text-xl font-semibold leading-tight text-gray-800 md:text-center dark:text-white xl:text-4xl xl:leading-tight"
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
          Erkennen Sie
        </span>{" "}
        Ihren Vertrieb hier wieder?
      </h1>
      <section className="text-gray-400 body-font">
        <div className="container mx-auto md:px-5 2xl:w-3/5">
          <div className="flex flex-wrap">
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font text-md"
                    style={{ textTransform: "none" }}
                  >
                    <strong>Zu wenig Abschlüsse</strong> aus der
                    Angebotsnachbearbeitung
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font text-md"
                    style={{ textTransform: "none" }}
                  >
                    Die Kunden sagen &quot;
                    <strong>Wir haben keinen Bedarf</strong>&quot; oder
                    &quot;Kein Interesse&quot;
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font"
                    style={{ textTransform: "none" }}
                  >
                    Entscheider können nicht mehr besucht werden, weil Sie im
                    Home-Office sind oder <strong>nur selten vor Ort</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font"
                    style={{ textTransform: "none" }}
                  >
                    Es bleibt <strong>keine Zeit für Neukundengewinnung</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font"
                    style={{ textTransform: "none" }}
                  >
                    <strong>Termine vor Ort</strong> nicht mehr möglich
                    (Abstandsregeln, Kettengeschäft...)
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full p-2 cursor-pointer md:w-1/3">
              <div className="flex items-center h-full p-4">
                <div className="flex-shrink-0 w-4 h-4 mr-4 fas fa-long-arrow-alt-right"></div>
                <div className="flex-grow">
                  <p
                    className="font-medium text-gray-400 title-font"
                    style={{ textTransform: "none" }}
                  >
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
