import React from "react";
import DynamicComponent from "./DynamicComponent";

export const Column = ({ blok }) => {
  return (
    <div className="flex justify-between">
      {blok.columns.map((container) => {
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

export default Column;
