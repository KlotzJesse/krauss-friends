import { ShieldCheckIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import SimpleFooter from "./../../components/SimpleFooter";

const ThanksPage = (props) => {
  const router = useRouter();
  const { thanks_slug } = router.query;
  return (
    <div className="overflow-hidden h-screen">
      <div className="lg:px-20 lg:py-20 py-12 md:px-6 px-4 w-full flex items-center justify-center w-full ">
        <div className="relative bg-indigo-700 border rounded-md max-w-7xl w-full lg:py-20 md:py-16 py-12 overflow-hidden">
          <div className="z-0 md:hidden absolute bottom-0 right-0">
            <img src="https://i.ibb.co/bJP553D/Vector-2.png" />
          </div>
          <div className="z-0 md:hidden absolute bottom-0 left-0">
            <img src="https://i.ibb.co/0m03kPF/Vector-1.png" />
          </div>
          <div className="z-0 hidden md:block absolute bottom-0 right-0 lg:hidden">
            <img src="https://i.ibb.co/S3NqCPm/Vector-1-3.png" />
          </div>
          <div className="z-0 hidden md:block absolute bottom-0 left-0 lg:hidden">
            <img src="https://i.ibb.co/TkcMPsM/Vector-1-2.png" />
          </div>
          <div className="z-0 hidden lg:block absolute bottom-0 right-0">
            <img src="https://i.ibb.co/pzpth1G/Vector-1-1.png" />
          </div>
          <div className="z-0 hidden lg:block absolute bottom-0 left-0">
            <img src="https://i.ibb.co/W3HTXFv/Vector-1.png" />
          </div>
          <div className="relative z-20 text-white text-center lg:px-0 sm:px-12 px-4">
            <div className="font-bold lg:text-8xl md:text-7xl text-6xl">
              <ShieldCheckIcon className="h-28 w-28 mx-auto" />
            </div>
            <div className="font-bold lg:text-5xl md:text-4xl text-2xl mt-6">
              Vielen Dank für Ihren Terminvorschlag!
            </div>
            <div className="text-base mt-4">
              Wir werden uns in dem von Ihnen ausgewählten Zeitraum{" "}
              <br className="md:block hidden" /> telefonisch melden!
            </div>
            <div className="sm:flex justify-center gap-x-4 mt-12">
              <a
                href="https://www.krauss-friends.com"
                className="bg-white sm:w-auto w-full text-indigo-700 px-12 border rounded-md hover:bg-gray-200 grid place-items-center py-4"
              >
                Zur Trainings Website
              </a>
              <a className="bg-transparent text-white px-6 border rounded-md hover:bg-indigo-800 grid place-items-center py-4 sm:w-auto w-full sm:mt-0 mt-4">
                Weitere E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </div>
      <SimpleFooter />
    </div>
  );
};

ThanksPage.propTypes = {};

export default ThanksPage;
