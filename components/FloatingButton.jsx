import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React from "react";
import { openPopupWidget } from "react-calendly";

const FloatingButton = ({ page }) => {
  const onClick = () => {
    if (page.calendlyURL) {
      trackGoal("03RLAFSO", 0); //03RLAFSO
      openPopupWidget({
        url: page.calendlyURL,
      });
      return;
    }
    if (page.typeformId) {
      const { toggle } = createPopup(page.typeformId);
      trackGoal("MPOZNNML", 0);
      toggle();
      return;
    }
  };

  return (
    <div className="fixed bottom-0 left-0 z-40 flex items-center justify-center w-screen md:hidden bg-gradient-to-t from-white via-white to-transparent">
      <button
        onClick={onClick}
        className="flex items-center self-start px-12 py-4 mb-10 font-medium text-white uppercase border-0 rounded-lg shadow-lg bg-secondary-400 hover:shadow-inner focus:outline-none text-md"
      >
        Kostenlose Beratung erhalten
        <svg
          className="w-5 h-5 ml-2 fill-current color-white"
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
    </div>
  );
};

export default FloatingButton;
