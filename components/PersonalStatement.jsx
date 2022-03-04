import Image from "next/image";
import React from "react";

const PersonalStatement = (props) => {
  return (
    <div className="h-70" style={{ backgroundColor: "#F5F6FA" }}>
      <section className="flex flex-col-reverse items-center justify-center flex-grow h-full py-20 mx-auto text-center text-gray-700 xl:flex-row xl:space-x-32 md:space-y-0 xl:py-0 xl:p-40 md:w-5/6 xl:text-left">
        <div className="flex flex-col items-center justify-center w-5/6 xl:w-1/2">
          <div className="relative w-full h-96 md:pt-32">
            <Image
              objectFit="contain"
              src="https://www.krauss-friends.com/app/download/8104229161/johannes-krauss-1+%281%29.png?t=1625479308"
              alt="Johannes Krauss - Vertriebstrainer"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 py-4 text-left md:flex-initial md:w-2/3 md:py-16">
          <p className="font-semibold text-gray-800 uppercase">Über mich</p>
          <h1 className="mb-8 text-2xl font-semibold leading-tight text-gray-800 xl:text-5xl xl:leading-tight">
            Ich{" "}
            <span
              className="bg-gradient-to-r from-primary-200 to-primary-200
              bg-no-repeat [background-position:0_88%]
              [background-size:100%_0.3em]
              motion-safe:transition-all motion-safe:duration-200
              hover:[background-size:100%_100%]
              focus:[background-size:100%_100%]"
            >
              lebe jeden Tag
            </span>{" "}
            was ich trainiere.
          </h1>
          <p className="mb-10 text-lg font-medium text-gray-500 md:mb-20">
            Mit unseren weiteren Unternehmen befinden wir uns in der täglichen
            Akquise und bringen Ihnen Erfahrung aus über 9 Jahren
            Neukundengewinnung mit.
            <br />
            <br />
            Deshalb glauben wir zu wissen, was die Herausforderungen jetzt und
            in den nächsten Jahren sein werden. Wir wissen, dass Sie mit
            Motivation und der daraus resultierenden Performance Verbesserung zu
            mehr Erfolg kommen.
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};

PersonalStatement.propTypes = {};

export default PersonalStatement;
