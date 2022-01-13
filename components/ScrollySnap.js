import React from "react";

const ScrollySnap = (props) => {
  return (
    <main className="max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth bg-background">
      <div className="w-full h-screen overflow-hidden snap-start">
        <div className="w-screen overflow-hidden"></div>
      </div>
      <div className="w-full h-screen snap-start"></div>
    </main>
  );
};

ScrollySnap.propTypes = {};

export default ScrollySnap;
