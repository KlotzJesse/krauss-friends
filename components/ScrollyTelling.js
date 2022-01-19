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
    <div className="h-[2500px] lg:mx-auto lg:max-w-7xl lg:px-8">
      <div className="sticky top-0 bottom-0 left-0 right-0 flex items-center justify-center h-screen text-center ">
        <h1 className="absolute font-serif text-6xl spinMe">
          Sie sind Geschäftsführer, Team- oder Abteilungsleiter und möchten
          erfolgreich mit Ihrem Team sein… aber irgendwie kommt es doch wieder
          zu Situationen, in denen Ihre Mitarbeiter nicht weiter wissen
        </h1>
        <h1 className="absolute font-serif text-6xl spinMeT">
          Es geht jedem Menschen so: Gelingt es, seine Probleme selbstständig zu
          lösen, steigt das Vertrauen in die eigenen Fähigkeiten. Auch in der
          Zukunft wird er nun Probleme eher als Aufgaben oder Herausforderungen
          sehen und sich ihnen mit Selbstvertrauen stellen.
        </h1>
      </div>
    </div>
  );
};

ScrollyTellings.propTypes = {};

export default ScrollyTellings;
