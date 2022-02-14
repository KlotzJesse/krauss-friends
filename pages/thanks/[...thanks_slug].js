import { ShieldCheckIcon } from "@heroicons/react/solid";
import { trackGoal } from "fathom-client";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import SimpleFooter from "./../../components/SimpleFooter";

const goals = new Map(
  ["vertrieb-trainieren", "Q55TCXUC"],
  ["coach-ausbildung", "1CRLFZ5Q"]
);

const ThanksPage = (props) => {
  const router = useRouter();
  const { thanks_slug } = router.query;

  useEffect(() => {
    trackGoal(goals.get(thanks_slug) ?? "ZJJHYTQN", 100);
  }, []);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex items-center justify-center w-full px-4 py-12 lg:px-20 lg:py-20 md:px-6 ">
        <div className="relative w-full py-12 overflow-hidden bg-indigo-700 border rounded-md max-w-7xl lg:py-20 md:py-16">
          <div className="absolute bottom-0 right-0 z-0 md:hidden">
            <img src="https://i.ibb.co/bJP553D/Vector-2.png" />
          </div>
          <div className="absolute bottom-0 left-0 z-0 md:hidden">
            <img src="https://i.ibb.co/0m03kPF/Vector-1.png" />
          </div>
          <div className="absolute bottom-0 right-0 z-0 hidden md:block lg:hidden">
            <img src="https://i.ibb.co/S3NqCPm/Vector-1-3.png" />
          </div>
          <div className="absolute bottom-0 left-0 z-0 hidden md:block lg:hidden">
            <img src="https://i.ibb.co/TkcMPsM/Vector-1-2.png" />
          </div>
          <div className="absolute bottom-0 right-0 z-0 hidden lg:block">
            <img src="https://i.ibb.co/pzpth1G/Vector-1-1.png" />
          </div>
          <div className="absolute bottom-0 left-0 z-0 hidden lg:block">
            <img src="https://i.ibb.co/W3HTXFv/Vector-1.png" />
          </div>
          <div className="relative z-20 px-4 text-center text-white lg:px-0 sm:px-12">
            <div className="text-6xl font-bold lg:text-8xl md:text-7xl">
              <ShieldCheckIcon className="mx-auto h-28 w-28" />
            </div>
            <div className="mt-6 text-2xl font-bold lg:text-5xl md:text-4xl">
              Vielen Dank für Ihren Terminvorschlag!
            </div>
            <div className="mt-4 text-base">
              Wir werden uns in dem von Ihnen ausgewählten Zeitraum{" "}
              <br className="hidden md:block" /> telefonisch melden!
            </div>
            <div className="justify-center mt-12 sm:flex gap-x-4">
              <a
                href="https://www.krauss-friends.com"
                className="grid w-full px-12 py-4 text-indigo-700 bg-white border rounded-md sm:w-auto hover:bg-gray-200 place-items-center"
              >
                Zur Trainings Website
              </a>
              <a className="grid w-full px-6 py-4 mt-4 text-white bg-transparent border rounded-md hover:bg-indigo-800 place-items-center sm:w-auto sm:mt-0">
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
