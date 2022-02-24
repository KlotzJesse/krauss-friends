import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import Image from "next/image";
import React from "react";

const Hero = ({ page }) => {
  const { toggle } = createPopup(page.typeformId);
  const onClick = () => {
    trackGoal("MPOZNNML", 0); //03RLAFSO
    /*openPopupWidget({
      url: page.calendlyURL,
    });*/
    toggle();
  };
  return (
    <div className="overflow-hidden bg-slate-100 md:max-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow mx-auto space-y-5 text-center text-gray-700 xl:flex-row xl:space-x-32 md:space-y-0 xl:py-0 md:pb-28 xl:p-40 xl:text-left">
        <div className="w-full text-gray-700 transition duration-500 ease-in-out transform">
          <div className="flex flex-col flex-wrap p-5 mx-auto md:items-center md:flex-row">
            <div className="inline-flex items-center mx-auto md:mx-0">
              <Image
                priority
                alt="Test"
                width="160"
                height="54"
                src="https://www.krauss-friends.com/app/download/8035797161/Krauss-Logo-Boden.png?t=1625756538"
              />
            </div>
            <div className="flex-1" />
            <a
              className="w-auto px-8 py-2 my-2 text-base font-medium text-gray-800"
              href="tel:+4981919375923"
            >
              Rufen Sie jetzt unseren Vertrieb an:
              <br className="md:hidden" />
              <span className="text-gray-800 underline">+49 8191 93759-23</span>
            </a>
          </div>
        </div>
      </div>
      <section className="flex flex-col items-center justify-center flex-grow mx-auto text-center text-gray-700 xl:flex-row xl:space-x-32 xl:px-40 md:h-screen xl:text-left">
        <div className="flex flex-col flex-initial w-2/3 xl:py-40">
          <h1 className="mb-8 text-xl font-semibold leading-tight text-gray-800 md:text-2xl dark:text-white xl:text-4xl xl:leading-tight">
            Verkaufserfolg ist trainierbar.
            <br />
            <span
              style={{
                background:
                  "linear-gradient( 0deg , rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #fde479 10%, #fde479 35%, rgba(255,0,255,0) 35%)",
              }}
            >
              Endlich mehr Neukunden.
            </span>
          </h1>
          <p className="mb-8 text-base font-medium text-gray-500 md:text-2xl">
            Wir unterstützen Ihren Vertrieb, Potenziale zu erkennen und Chancen
            im Verkaufsgespräch zu ergreifen, um mit gewonnener Motivation mehr
            Neukunden zu gewinnen.
          </p>
          <div className="flex flex-col items-center mb-8 space-x-3 space-y-3 md:flex-row md:space-y-0">
            <div className="flex -space-x-2 overflow-hidden">
              <Image
                alt="Gert Behre"
                width="32px"
                height="32px"
                className="inline-block rounded-full ring-2 ring-white"
                src="https://i.ibb.co/1zj9jvz/Gert-Behre.png"
              />{" "}
              <Image
                alt="Stephan Kotterer"
                width="32px"
                height="32px"
                className="z-10 inline-block rounded-full ring-2 ring-white"
                src="https://i.ibb.co/bd3kKfB/Stephan-Kotterer.png"
              />{" "}
              <Image
                alt="Jan Hauschildt"
                width="32px"
                height="32px"
                className="z-20 inline-block rounded-full ring-2 ring-white"
                src="https://i.ibb.co/Js04MG9/Jan-Hauschildt.png"
              />{" "}
              <Image
                alt="Michael Schwab"
                width="32px"
                height="32px"
                className="z-30 inline-block rounded-full ring-2 ring-white"
                src="https://i.ibb.co/yVPhbgQ/Michael-Schwab.png"
              />{" "}
            </div>
            <p className="text-xs">
              <b>Herr Michael Schwab, Leiter CRM Innendienst</b> und{" "}
              <b>über 913 erfolgreiche Verkäufer</b> trainieren regelmäßig für
              mehr Erfolg im Verkauf.
            </p>
          </div>
          <button
            onClick={onClick}
            className="items-center self-start hidden px-12 py-4 mr-2 text-lg font-medium text-white uppercase transition duration-500 ease-in-out transform bg-orange-400 border-0 rounded-lg shadow-lg xl:flex primary-cta hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none"
          >
            Erstgespräch anfragen
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
          <p className="self-start hidden pt-3 text-sm text-gray-500 cursor-pointer md:block">
            In nur 60 Sekunden online einen freien Termin suchen
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-5/6 xl:w-1/2 md:self-end">
          <a
            href="https://calendly.com/krauss-friends/kennenlerngespraech"
            className="flex items-center px-12 py-4 text-xs font-medium text-white uppercase transition duration-500 ease-in-out transform bg-orange-400 border-0 rounded-lg shadow-lg xl:hidden primary-cta hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none"
          >
            Erstgespräch anfragen
          </a>
          <p className="pt-3 text-sm text-gray-500 cursor-pointer xl:hidden">
            In nur 60 Sekunden online einen freien Termin suchen
          </p>

          <div className="w-full h-full pt-10 md:pt-0">
            <Image
              src="https://i.ibb.co/SB421rq/Johannes-Krauss.png"
              alt="Johannes Krauss"
              width="624"
              height="745"
              priority
              quality={100}
              layout="responsive"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

Hero.propTypes = {};

export default Hero;
