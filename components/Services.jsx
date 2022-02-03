import React from "react";

const Services = (props) => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-6 sm:mx-auto sm:text-center md:mb-10 lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Wie</span>
          </span>{" "}
          Zeitgemäße Neukundengewinnung zu mehr Terminen führt
        </h2>
        <p className="mb-1 text-xs font-semibold tracking-wide uppercase md:mb-2">
          New History
        </p>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid gap-6 row-gap-5 lg:grid-cols-3">
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://i.ibb.co/tMHpCBZ/Ohne-Titel-1167-1152-px.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Telefonakquise
          </h5>
          <p className="text-gray-700">
            O for awesome, this chocka full cuzzie is as rip-off as a cracker.
            Meanwhile, in behind the bicycle shed, Hercules Morse.
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://i.ibb.co/HGsJvVk/Mitarbeiter-Interview-Krauss-Gmb-H-1-59-screenshot.png"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Vertriebstraining
          </h5>
          <p className="text-gray-700">
            I'll be sure to note that in my log. Smooth as an android's bottom,
            eh, Data? When has justice ever been as simple as a rule book?
          </p>
        </div>
        <div>
          <img
            className="object-cover w-full h-64 mb-6 rounded shadow-lg lg:h-80 xl:h-96"
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=markus-winkler-IrRbSND5EUc-unsplash.jpg"
            alt=""
          />
          <h5 className="mb-2 text-xl font-bold leading-none sm:text-2xl">
            Online Lead Generierung
          </h5>
          <p className="text-gray-700">
            Yolo ipsum dolor sit amet, consectetur adipiscing elit. Ut ac
            suscipit leo. Carpe diem vulputate est nec commodo rutrum.
          </p>
        </div>
      </div>
    </div>
  );
};

Services.propTypes = {};

export default Services;
