import {
  AcademicCapIcon,
  AnnotationIcon,
  BadgeCheckIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { BeakerIcon } from "@heroicons/react/solid";
import React from "react";
import Layout from "./Layout";

const steps = [
  {
    tag: "Kennen-lernen",
    icon: AnnotationIcon,
  },
  {
    tag: "Training auswählen",
    icon: SearchIcon,
  },
  {
    tag: "Individuelles Konzept",
    icon: BadgeCheckIcon,
  },
  {
    tag: "Probe-training",
    icon: BeakerIcon,
  },
  {
    tag: "Trainings-beginn",
    icon: AcademicCapIcon,
  },
];

const Process = (props) => {
  return (
    <Layout>
      <div className="grid md:grid-cols-5 gap-8 max-w-fit mx-auto">
        {steps.map((step) => {
          /*text-stone-800 group-last:hidden absolute top-1/2 -right-[18px] transform -translate-y-1/2*/
          return (
            <div
              className="bg-stone-800 w-[138px] last:bg-secondary-500 group rounded-xl text-white font-semibold text-lg px-5 py-5 relative first:place-self-end"
              key={step.tag}
            >
              <step.icon className="w-1/3" />
              <p className="w-min mt-3">{step.tag}</p>
              <svg
                width="18"
                height="33"
                viewBox="0 0 18 33"
                className="text-stone-800 group-last:hidden absolute left-1/2 md:left-auto top-[111%] rotate-90 md:rotate-0 origin-top-right md:origin-center md:top-1/2 md:-right-[18px] md:transform md:-translate-y-1/2"
                fill="none"
              >
                <path
                  d="M0 0L16.3917 15.0257C17.2564 15.8184 17.2564 17.1816 16.3917 17.9743L0 33V0Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

Process.propTypes = {};

export default Process;
