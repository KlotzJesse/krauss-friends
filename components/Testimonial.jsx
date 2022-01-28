import Image from "next/image";
import React from "react";

const Testimonial = (props) => {
  return (
    <section className="container px-5 mx-auto text-gray-400 2xl:w-3/5">
      <h1 className="px-5 my-8 text-xl font-semibold leading-tight text-gray-800 md:text-center dark:text-white xl:text-4xl xl:leading-tight">
        Das sagen{" "}
        <span
          style={{
            background:
              "linear-gradient( 0deg , rgba(255,0,255,0) 0%, rgba(255,0,255,0) 10%, #fde479 10%, #fde479 35%, rgba(255,0,255,0) 35%)",
          }}
        >
          unsere Kunden
        </span>
      </h1>
      <div className="container flex flex-col px-5 py-16 mx-auto lg:items-center md:flex-row">
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
          <p className="mb-12 text-base font-medium leading-relaxed text-gray-400">
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
          <h2 className="mb-8 text-xs font-semibold tracking-widest text-black text-gray-400 uppercase title-font">
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
