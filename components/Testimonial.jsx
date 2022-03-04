import Image from "next/image";
import React from "react";

const Testimonial = (props) => {
  return (
    <section className="container px-5 mx-auto text-gray-600 2xl:w-3/5">
      <h1 className=" my-8 text-4xl font-semibold leading-tight text-gray-800 md:text-center dark:text-white xl:text-4xl xl:leading-tight">
        Das sagen{" "}
        <span
          className="bg-gradient-to-r from-primary-200 to-primary-200
          bg-no-repeat [background-position:0_88%]
          [background-size:100%_0.3em]
          motion-safe:transition-all motion-safe:duration-200
          hover:[background-size:100%_100%]
          focus:[background-size:100%_100%]"
        >
          unsere Kunden
        </span>
      </h1>
      <div className="container flex flex-col py-16 mx-auto lg:items-center md:flex-row">
        <div className="w-full mb-10 lg:w-5/6 lg:max-w-lg md:w-1/2">
          <Image
            className="object-cover object-center rounded"
            alt="Artur Polak - Gebietsverkaufsleiter"
            width="512"
            height="427"
            layout="responsive"
            src="https://www.krauss-friends.com/app/download/8105062461/8693ac.png?t=1625738080"
          />
        </div>
        <div className="flex flex-col items-start text-left lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16">
          <p className="mb-12 text-base font-medium leading-relaxed text-gray-600">
            &quot;Das Vertriebstraining war{" "}
            <i>
              sehr kurzweilig, abwechslungsreich und vor allem praxisbezogen
            </i>
            . Den größten Aha-Effekt löste bei mir die Übung aus, andere
            Verkäufer aus der Kundenrolle zu erleben und zu analysieren. Seitdem
            nehme ich auch in meinem Arbeitsalltag gedanklich immer wieder die
            Perspektive des Kunden ein,{" "}
            <strong>
              behalte so die Gesprächsführung und bin erfolgreicher
            </strong>
            .&quot;
          </p>
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black text-gray-600 uppercase title-font">
            Artur Polak
            <br />
            Gebietsverkaufsleiter Gebiet Süd/Ost
          </h2>
        </div>
      </div>
    </section>
  );
};

Testimonial.propTypes = {};

export default Testimonial;
