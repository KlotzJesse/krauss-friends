import React from "react";

const ImageTextFull = (props) => {
  return (
    <section className="flex flex-wrap mx-auto section square-section">
      <div className="relative flex items-center justify-center w-full bg-blue-600 lg:w-1/2 aspect">
        <img
          className="absolute inset-0 object-cover w-full h-full b-lazy b-loaded"
          src="https://res.cloudinary.com/gastronomyworld/image/fetch/q_auto,f_auto/https://www.gastronomy.world/app/download/8637577615/Koch+Video+Webcall.png?t=1616156211"
        />
      </div>
      <div className="relative flex flex-col justify-center p-4 py-6 md:p-6 md:py-8 lg:w-1/2 md:p-12 md:py-12 lg:py-24 lg:px-20">
        <div className="relative flex flex-col mx-auto max-width-3">
          <h3 className="relative text-2xl leading-none md:text-3xl lg:text-4xl xl:text-5xl variant lg:flex lg:flex-col">
            Akquirieren Sie online Termine{" "}
            <span className="absolute top-0 right-0 flex items-center justify-center w-10 h-10 p-2 mx-auto -mt-4 text-xs text-white uppercase transform bg-blue-600 rounded-full md:w-12 md:h-12 rotate-5 md:mt-0 md:-translate-y-1/2 md:translate-x-1/2">
              Neu!
            </span>
            <br className="hidden md:block lg:hidden" />
            um auch auf Distanz zu verkaufen
          </h3>
          <p className="my-3 text-sm leading-snug md:text-base md:my-6">
            Remote Selling ist gekommen um zu bleiben - überzeugen Sie
            gewinnbringend auch auf Distanz Ihre Top Entscheider und fahren Sie
            zukünftig für Ihren Verkaufsabschluss vielleicht nur noch 1-mal
            persönlich zum Kunden.
          </p>
          <a
            className="px-8 py-3 mx-auto mt-2 font-semibold text-white text-blue-900 transition-colors duration-500 ease-in-out transform rounded-md hover:bg-blue-800 hover:text-white focus:shadow-outline focus:outline-none focus:ring-2 ring-0 ring-offset-current ring-offset-2 md:mt-8 md:ml-0 md:mr-auto"
            href="#"
          >
            Besuchs oder Web Termine gewinnen
          </a>
        </div>
      </div>
    </section>
  );
};

ImageTextFull.propTypes = {};

export default ImageTextFull;
