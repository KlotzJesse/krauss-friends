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
  }, []);

  return (
    <div className="h-[2000px] lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="sticky top-0 bottom-0 left-0 right-0 h-screen flex justify-center items-center text-center ">
        <h1 className="spinMe absolute text-6xl font-serif">
          Probleme, die jede Führungskraft kennt
        </h1>
        <h1 className="spinMeT text-6xl absolute font-serif">
          Kennen Sie das?
          <br />
          Sie sind Geschäftsführer, Team- oder Abteilungsleiter und möchten
          erfolgreich mit Ihrem Team sein… aber irgendwie kommt es doch wieder
          zu Situationen, die nicht entstehen sollten?
        </h1>
      </div>
    </div>
  );
};

ScrollyTellings.propTypes = {};

export default ScrollyTellings;
