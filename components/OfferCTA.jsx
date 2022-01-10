import React from "react";

const OfferCTA = (props) => {
  return (
    <div className="flex items-center justify-center -mb-10 bg-white">
      <div className="relative flex flex-col items-center w-full max-w-6xl p-10 mx-auto text-center transform rounded-lg shadow-2xl md:p-16 lg:block bg-gradient-to-br from-yellow-300 via-yellow-300 to-yellow-200 -translate-y-28">
        <h2
          className="my-4 text-3xl font-extrabold tracking-tight text-black sm:text-4xl md:text-5xl lg:my-0 xl:text-4xl sm:leading-tight"
          style={{
            fontFamily: '"Frank Ruhl Libre", serif',
            textTransform: "none",
          }}
        >
          Kostenloses Erstgespräch
        </h2>
        <p className="mt-1 mb-10 text-sm font-medium text-black xl:text-base xl:tracking-wider">
          Vereinbaren Sie jetzt Ihr <i>kostenloses Erstgespräch</i> und erhalten
          Sie ein kostenloses Vertriebstraining zum Thema{" "}
          <strong>Einwandbehandlung: „Einwände lieben lernen“</strong> um Ihr
          Team bei neuen Vorwänden zu unterstützen,{" "}
          <u>sodass Ihr Vertrieb mehr Abschlüsse erzielt</u>.
        </p>
        <div className="flex mb-8 lg:mt-6 lg:mb-0">
          <div className="inline-flex mx-auto">
            <a
              href="https://calendly.com/krauss-friends/kennenlerngespraech"
              style={{ color: "white !important", background: "#ff0021" }}
              className="flex items-center self-start px-12 py-4 mr-2 font-medium text-white uppercase transition duration-500 ease-in-out transform border-0 rounded-lg shadow-lg hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none text-md"
            >
              Erstgespräch reservieren
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
            </a>
          </div>
        </div>
        <p className="self-start pt-3 text-sm text-gray-600 cursor-pointer">
          In nur 60 Sekunden online einen freien Termin suchen
        </p>
      </div>
    </div>
  );
};

OfferCTA.propTypes = {};

export default OfferCTA;
