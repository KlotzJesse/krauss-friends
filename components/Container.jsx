import dynamic from "next/dynamic";
import React from "react";
const DynamicComponent = dynamic(() => import("./DynamicComponent"));

export const Container = ({ blok }) => {
  return blok.Body.map((container) => {
    return <DynamicComponent key={container._uid} blok={container} />;
  });
};

export default Container;
