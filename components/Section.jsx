import React from "react";
import DynamicComponent from "./DynamicComponent";

const layouts = {
  none: "",
  normal: "px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24",
};

export const Section = ({ blok }) => {
  return (
    <div className={layouts[blok.layout]}>
      {blok.body.map((container) => {
        return (
          <DynamicComponent
            key={container._uid}
            className=""
            blok={container}
          />
        );
      })}
    </div>
  );
};

export default Section;
