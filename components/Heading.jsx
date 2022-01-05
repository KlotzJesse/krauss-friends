import { sbEditable } from "@storyblok/storyblok-editable";
import React from "react";

const classes = {
  h1: "text-5xl md:text-7xl capitalize",
  h2: "text-3xl md:text-5xl capitalize",
  h3: "text-xl md:text-3xl capitalize",
  h4: "text-lg md:text-xl capitalize",
  h5: "text-base md:text-lg",
  h6: "text-md md:text-base",
};

export const Heading = ({ blok }) => {
  return (
    <blok.type
      className={classes[blok.type]}
      {...sbEditable(blok)}
      key={blok._uid}
    >
      {blok.text}
    </blok.type>
  );
};

export default Heading;
