import React from "react";

const PersonalStatement = (props) => {
  return (
    <div className="w-screen h-70" style={{ backgroundColor: "#F5F6FA" }}>
      <section className="flex flex-col-reverse items-center justify-center flex-grow h-full mx-auto text-center text-gray-700 xl:flex-row xl:space-x-32 md:space-y-10 md:space-y-0 xl:py-0 py-28 xl:p-40 md:w-5/6 xl:text-left">
        <div className="flex flex-col items-center justify-center w-5/6 xl:w-1/2 xl:h-5/6">
          <img
            src="https://www.krauss-friends.com/app/download/8104229161/johannes-krauss-1+%281%29.png?t=1625479308"
            alt="Johannes Krauss - Vertriebstrainer"
            className="w-full md:pt-32"
          />
        </div>
        <div className="flex flex-col justify-center px-5 text-left md:flex-initial md:w-2/3">
          <p className="font-semibold text-gray-800 uppercase">Über mich</p>
          <h1
            className="mb-8 text-2xl font-semibold leading-tight text-gray-800 dark:text-white xl:text-5xl xl:leading-tight"
            style={{
              fontFamily: '"Frank Ruhl Libre", serif',
              textTransform: "none",
            }}
          >
            Ich{" "}
            <span
              style={{
                fontFamily: '"Frank Ruhl Libre", serif',
                background:
                  "linear-gradient( 0deg , rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #fde479 10%, #fde479 35%, rgba(255,0,255,0) 35%)",
              }}
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
