import React from "react";
import Features from "./hp/Features";
import Footer from "./hp/Footer";
import Hero from "./hp/Hero";
import SearchBar from "./hp/SearchBar";

const TempBuilder = (props) => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Features />
      <Footer />
    </div>
  );
};

export default TempBuilder;
