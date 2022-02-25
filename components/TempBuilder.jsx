import React from "react";
import Footer from "./hp/Footer";
import Hero from "./hp/Hero";
import SearchBar from "./hp/SearchBar";

const TempBuilder = (props) => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Footer />
    </div>
  );
};

export default TempBuilder;
