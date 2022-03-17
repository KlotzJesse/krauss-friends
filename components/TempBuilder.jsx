import React from "react";
import Features from "./hp/Features";
import Footer from "./hp/Footer";
import Hero from "./hp/Hero";
import Process from "./hp/Process";
import SearchBar from "./hp/SearchBar";
import TeaserGrid from "./hp/TeaserGrid";

const TempBuilder = (props) => {
  return (
    <div>
      <Hero />
      <SearchBar />
      <Features />
      <Process />
      <TeaserGrid />
      <Footer />
    </div>
  );
};

export default TempBuilder;
