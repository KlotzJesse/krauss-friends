import Image from "next/image";
import React from "react";

const TestimonialGrid = (props) => {
  return (
    <section className="container mx-auto text-gray-600 body-font md:px-5 2xl:w-3/5">
      <div className="container flex flex-col px-5 mx-auto md:py-20 md:flex-wrap">
        <div className="flex flex-wrap w-full mb-20">
          <h1 className="mb-4 text-4xl font-semibold leading-tight text-gray-800 dark:text-white xl:leading-tight lg:w-1/3 lg:mb-0">
            Eindrücke aus unserem{" "}
            <span
              className="bg-gradient-to-r from-primary-200 to-primary-200
              bg-no-repeat [background-position:0_88%]
              [background-size:100%_0.3em]
              motion-safe:transition-all motion-safe:duration-200
              hover:[background-size:100%_100%]
              focus:[background-size:100%_100%]"
            >
              Vertriebstraining
            </span>
          </h1>
          <p className="mx-auto text-base font-medium leading-relaxed text-gray-600 lg:pl-6 lg:w-2/3">
            Unsere Trainingsmethoden gewährleisten Wissensaufbau durch
            systemische Arbeitssequenzen. Der Wissenstransfer reduziert sich auf
            das Wesentliche und ist sofort für die Praxis nutzbar. Ihr Vertrieb
            hat die Möglichkeit sofort seine Leistung zu verdoppeln. Wir
            trainieren nach Ihren Anforderungen sowohl online als auch offline.
            Wirksam und Praxisnah.
          </p>
        </div>
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/2">
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="Training Gruppenarbeit"
                width="253"
                height="184"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://image.jimcdn.com/app/cms/image/transf/dimension=660x10000:format=png/path/s136c472730450c10/image/ib3ff735be07090b9/version/1621596236/training-gruppenarbeit.png"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="Golf Analogieübung beim Vertriebstraining"
                width="253"
                height="184"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://www.krauss-friends.com/app/download/8105144261/_DSC4647-min.png?t=1625756283"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <Image
                alt="Flipchart bearbeiten im Team"
                width="523"
                height="356"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://www.krauss-friends.com/app/download/8105144061/_DSC4662-min.png?t=1625756102"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2 mx-auto">
            <div className="w-full p-1 md:p-2">
              <Image
                alt="gallery"
                width="523"
                height="294"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://www.krauss-friends.com/app/download/8105114861/Mitarbeiter+Interview+Krauss+GmbH+2-19+screenshot.png?t=1625750993"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width="253"
                height="253"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://www.krauss-friends.com/app/download/8111814061/20210729_112121.jpeg?t=1629117333"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <Image
                alt="gallery"
                width="253"
                height="253"
                layout="responsive"
                className="block object-cover object-center w-full h-full rounded"
                src="https://www.krauss-friends.com/app/download/8105144761/_DSC4611-min.png?t=1625756542"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full mx-auto">
            <div className="w-1/2 p-1 md:p-2">
              <p className="text-left text-gray-600">
                Präsenz Vertriebstraining mit erlebnisreicher Golf
                Analogieübung, um das eigene Verhalten zu reflektieren, für mehr
                Erfolg im nächsten Verkaufsgespräch.
              </p>
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <p className="text-right text-gray-600">
                Online Vertriebstraining mit interaktiven Whiteboard für
                motivierte Übung um das nächste Verkaufsgespräch direkt zu
                gewinnen und mehr Umsatz zu erzielen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

TestimonialGrid.propTypes = {};

export default TestimonialGrid;
