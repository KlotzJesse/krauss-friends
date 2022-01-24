import React from "react";
import { InlineWidget } from "react-calendly";

const appointment = (props) => {
  return (
    <div className="max-h-screen">
      <InlineWidget
        styles={{
          height: "100vh",
        }}
        className="max-h-screen"
        pageSettings={{
          backgroundColor: "ffffff",
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: "009def",
          textColor: "4d5055",
        }}
        prefill={{
          guests: ["natasha.rodriguez@krauss-friends.com"],
        }}
        url="https://calendly.com/krauss-friends/kennenlerngesprach-coach-ausbildung"
      />
    </div>
  );
};

export default appointment;
