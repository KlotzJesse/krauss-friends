import React from "react";
import DynamicComponent from "./DynamicComponent";

export const Container = ({ blok }) => {
  return blok.Body.map((container) => {
    return <DynamicComponent key={container._uid} blok={container} />;
  });
};

export default Container;
