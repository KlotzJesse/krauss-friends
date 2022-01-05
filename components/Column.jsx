import React from "react";
import DynamicComponent from "./DynamicComponent";

const horizontalAlignment = {
  left: "flex justify-start",
  center: "flex justify-center",
  right: "flex justify-end",
  between: "flex justify-between",
};

const horizontalSpaceBetween = {
  4: "space-x-4",
  8: "space-x-8",
  12: "space-x-12",
  16: "space-x-16",
  20: "space-x-20",
  24: "space-x-24",
  28: "space-x-28",
  32: "space-x-32",
  36: "space-x-36",
  40: "space-x-40",
  44: "space-x-44",
  48: "space-x-48",
  52: "space-x-52",
  56: "space-x-56",
  60: "space-x-60",
  64: "space-x-64",
};

export const Column = ({ blok }) => {
  return (
    <div
      className={`${horizontalAlignment[blok.horizontalSpacing]} ${
        horizontalSpaceBetween[blok.horizontalSpaceBetween]
      }`}
    >
      {blok.columns.map((container) => {
        return (
          <div
            key={container._uid}
            className={
              container.Body && container.Body.length == 0 ? "flex-1" : ""
            }
          >
            <DynamicComponent blok={container} />
          </div>
        );
      })}
    </div>
  );
};

export default Column;
