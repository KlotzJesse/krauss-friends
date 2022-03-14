import React from "react";

const Testimonial = (props) => {
  return (
    <div className="pb-4 pt-28">
      <p className="pl-5 font-semibold text-gray-600 uppercase md:text-center tracking-loose">
        Erfahrungsberichte
      </p>
      <h1 className="pl-5 text-4xl font-semibold leading-tight text-gray-800 md:my-8 md:text-center xl:text-4xl xl:leading-tight">
        Was unsere{" "}
        <span
          className="bg-gradient-to-r from-primary-200 to-primary-200
          bg-no-repeat [background-position:0_88%]
          [background-size:100%_0.3em]
          motion-safe:transition-all motion-safe:duration-200
          hover:[background-size:100%_100%]
          focus:[background-size:100%_100%]"
        >
          Kunden sagen
        </span>
      </h1>
      <div className="container grid gap-6 px-10 py-20 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:px-20">
        <div>
          <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-md cursor-pointer group hover:bg-primary-500 md:p-12">
            <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
              <svg
                width={26}
                height={27}
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="24.5767"
                      height={27}
                      fill="white"
                      transform="translate(25.2578 27) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="mt-4 text-base leading-normal text-center xl:w-80">
                Im Training konnten Teilnehmer reale Fälle aus dem Berufsalltag
                einbringen, die wir gemeinsam analysierten und dafür einen
                Lösungsansatz erarbeitet haben. Durch die offene
                Gruppenatmosphäre war das sehr gut möglich und hat mir viel
                gebracht. Auch die geübten Einwandbehandlungen sind ein
                wichtiges Thema in der Praxis.
              </p>
            </div>
            <div className="absolute bottom-0 -mb-6 text-white group-hover:text-primary-500">
              <svg
                width={34}
                height={28}
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd)">
                  <path
                    d="M17 19L28.2583 3.25H5.74167L17 19Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd"
                    x="0.741699"
                    y="0.25"
                    width="32.5167"
                    height="27.75"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius={1}
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={3} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <img
              src="/Nicolai Zull.jpg"
              alt="profile pictre"
              className="w-12 h-12 rounded-full"
            />
            <p className="my-2 text-base font-semibold leading-4 text-gray-800">
              Nicolai Zull
            </p>
            <p className="text-base leading-4 text-center text-gray-600">
              Gebietsverkaufsleiter
            </p>
          </div>
        </div>
        <div>
          <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-md cursor-pointer group hover:bg-primary-500 md:p-12">
            <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
              <svg
                width={26}
                height={27}
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="24.5767"
                      height={27}
                      fill="white"
                      transform="translate(25.2578 27) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="mt-4 text-base leading-normal text-center xl:w-80">
                Das Vertriebstraining war sehr kurzweilig, abwechslungsreich und
                vor allem praxisbezogen. Den größten Aha-Effekt löste bei mir
                die Übung aus, andere Verkäufer aus der Kundenrolle zu erleben
                und zu analysieren. Seitdem nehme ich auch in meinem
                Arbeitsalltag gedanklich immer wieder die Perspektive des Kunden
                ein, behalte so die Gesprächsführung und bin erfolgreicher.
              </p>
            </div>
            <div className="absolute bottom-0 -mb-6 text-white group-hover:text-primary-500">
              <svg
                width={34}
                height={28}
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd)">
                  <path
                    d="M17 19L28.2583 3.25H5.74167L17 19Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd"
                    x="0.741699"
                    y="0.25"
                    width="32.5167"
                    height="27.75"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius={1}
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={3} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <img
              src="/Artur Polak.jpg"
              alt="profile pictre"
              className="w-12 h-12 rounded-full"
            />
            <p className="my-2 text-base font-semibold leading-4 text-gray-800">
              Artur Polak
            </p>
            <p className="text-base leading-4 text-center text-gray-600">
              Gebietsverkaufsleiter
            </p>
          </div>
        </div>
        <div>
          <div className="relative flex flex-col items-center w-full p-6 bg-white shadow-md cursor-pointer group hover:bg-primary-500 md:p-12">
            <div className="flex flex-col items-center text-gray-600 group-hover:text-white">
              <svg
                width={26}
                height={27}
                viewBox="0 0 26 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M25.2578 14.3309H19.2969C19.3988 9.55819 20.6309 9.01642 22.1785 8.86178L22.7753 8.78051V3.53242L22.0874 3.57292C20.0666 3.69783 17.8323 4.09805 16.3417 6.11965C15.035 7.89183 14.459 10.7871 14.459 15.2316V23.4673H25.2578V14.3309Z"
                    fill="currentColor"
                  />
                  <path
                    d="M11.48 23.4673V14.3309H5.59859C5.70049 9.55819 6.89283 9.01642 8.44042 8.86178L8.99749 8.78051V3.53242L8.34931 3.57292C6.32844 3.69783 4.07421 4.09805 2.5836 6.11965C1.27707 7.89183 0.681147 10.7871 0.681147 15.2316V23.4673H11.48Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect
                      width="24.5767"
                      height={27}
                      fill="white"
                      transform="translate(25.2578 27) rotate(-180)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="mt-4 text-base leading-normal text-center xl:w-80">
                Im Verkaufstraining hat mich vor allem der Praxisteil mit den
                Testberatungen überzeugt. Vieles weiß man, aber man muss es
                einfach immer wieder üben. Das Training war kurzweilig und
                spannend, der Trainer konnte das Wissen mit seiner direkten Art
                sehr gut vermitteln.
              </p>
            </div>
            <div className="absolute bottom-0 -mb-6 text-white group-hover:text-primary-500">
              <svg
                width={34}
                height={28}
                viewBox="0 0 34 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_dd)">
                  <path
                    d="M17 19L28.2583 3.25H5.74167L17 19Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_dd"
                    x="0.741699"
                    y="0.25"
                    width="32.5167"
                    height="27.75"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      radius={1}
                      operator="erode"
                      in="SourceAlpha"
                      result="effect1_dropShadow"
                    />
                    <feOffset dy={4} />
                    <feGaussianBlur stdDeviation={3} />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feOffset dy={2} />
                    <feGaussianBlur stdDeviation="2.5" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow"
                      result="effect2_dropShadow"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10">
            <img
              src="/Michael Schwab.jpg"
              alt="profile pictre"
              className="w-12 h-12 rounded-full"
            />
            <p className="my-2 text-base font-semibold leading-4 text-gray-800">
              Michael Schwab
            </p>
            <p className="text-base leading-4 text-center text-gray-600">
              Leiter CRM Innendienst
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

Testimonial.propTypes = {};

export default Testimonial;

{
  /*<section className="container px-5 mx-auto text-gray-600 2xl:w-3/5">
      <h1 className="my-8 text-4xl font-semibold leading-tight text-gray-800 md:text-center xl:text-4xl xl:leading-tight">
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
  </section>*/
}
