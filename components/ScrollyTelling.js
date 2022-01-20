import lax from "lax.js";
import React, { useEffect } from "react";

const ScrollyTellings = (props) => {
  useEffect(() => {
    // Setup lax
    lax.init();

    lax.addDriver("scrollY", function (e) {
      return window.scrollY;
    });

    // Add your elements
    lax.addElements(
      ".spinMe",
      {
        scrollY: {
          opacity: [
            [300, 900, 1500],
            [0, 1, 0],
          ],
        },
      },
      []
    );

    // Add your elements
    lax.addElements(
      ".spinMeT",
      {
        scrollY: {
          opacity: [
            [1500, 2100, 2700],
            [0, 1, 0],
          ],
        },
      },
      []
    );

    lax.addElements(
      ".spinMeX",
      {
        scrollY: {
          opacity: [
            [2700, 3200, 3800],
            [0, 1, 0],
          ],
        },
      },
      []
    );
  }, []);

  return (
    <div className="h-[3200px] lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="sticky top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen text-center ">
        <div className="absolute font-serif spinMe space-y-20">
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-6xl">
            Warum Mitarbeiter coachen – Ich führe doch schon?
          </h2>
          <p className="text-6xl">...</p>
          <p className="text-4xl">
            „Ja, ich bin ein großartiger Coach, und ich coache mein Team einmal
            pro Woche. Wir haben nämlich Teammeetings einmal pro Woche“.
          </p>
        </div>
        <div className="absolute font-serif spinMeT space-y-20">
          <h2 className="text-5xl">... denn „Team Meetings sind wichtig.“</h2>
          <p className="text-6xl">...</p>
          <p className="text-3xl  leading-8 tracking-tight text-center text-gray-900 sm:text-5xl">
            <span className="font-extrabold">Doch das ist kein Coaching.</span>{" "}
            Vor allem ist das <br />
            <span
              className="bg-gradient-to-r from-primary-200 to-primary-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]"
            >
              kein effektives Coaching
            </span>{" "}
            und unterstützt ihr Team nicht bei der Suche nach eigenen Lösungen.
          </p>
        </div>
        <div className="absolute font-serif spinMeX space-y-20 ">
          <h2 className="text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-5xl">
            Bei einem sogenannten coachenden Führungsstil wird der Chef zum
            Mentor, der auf Augenhöhe mit dem Mitarbeiter agiert.
          </h2>
          <p className="text-6xl">...</p>
          <p className="text-5xl ">
            „Der hat mir gezeigt, wie ich das Beste aus mir rausholen kann.{" "}
            <span
              className="bg-gradient-to-r from-primary-200 to-primary-200
      bg-no-repeat [background-position:0_88%]
      [background-size:100%_0.2em]
      motion-safe:transition-all motion-safe:duration-200
      hover:[background-size:100%_100%]
      focus:[background-size:100%_100%]"
            >
              Er hat mich gefördert
            </span>{" "}
            – für ihn arbeite ich auch die nächsten Jahre gerne!“
          </p>
        </div>
      </div>
    </div>
  );
};

ScrollyTellings.propTypes = {};

export default ScrollyTellings;
