import React, { useState } from "react";
export default function SearchBar() {
  const [show3, setShow3] = useState(false);

  return (
    <>
      <div className="py-12 mx-auto container">
        {/* Hero */}
        <div className="flex w-full flex-col items-center justify-center py-16 xl:px-0 px-4">
          <h1 className="lg:text-6xl text-3xl text-secondary-500 font-bold text-center">
            Wonach suchen Sie?
          </h1>
          <h2 className="lg:text-2xl text-lg text-gray-600 pt-6 text-center lg:mb-0 mb-4">
            Coach Ausbildung, Verkaufstraining, Online-Marketing-Training und
            vieles mehr.
          </h2>
          <div className="flex flex-col w-full sm:w-1/2 md:ml-4 mt-3 md:mt-10">
            <div className="relative w-full">
              <div
                className="lg:absolute bg-gray-100 lg:border-r lg:border-t lg:border-b lg:mb-0 mb-4 lg:py-5 py-3 border-gray-300 cursor-pointer flex items-center justify-between pr-3 right-0 h-full z-30"
                onClick={() => setShow3(!show3)}
              >
                <p className="lg:text-2xl text-lg leading-tight tracking-normal text-gray-700 px-4">
                  Alle Kategorien
                </p>
                {show3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Hide"
                    className="icon  icon-tabler icon-tabler-chevron-up"
                    id="andicators5"
                    width={24}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 15 12 9 18 15" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Show"
                    className="icon block icon-tabler icon-tabler-chevron-down"
                    id="andicators4"
                    width={24}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="#718096"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                )}
                {show3 && (
                  <ul
                    className="bg-white w-64 shadow-lg p-4  duration-300 opacity-100 mt-56 absolute z-40 lg:-ml-16"
                    id="listHolder2"
                  >
                    <li className="hover:opacity-75 py-3 text-base">
                      Alle Kategorien
                    </li>
                    <li className="hover:opacity-75 py-3 text-base">
                      Coach Ausbildung
                    </li>
                    <li className="hover:opacity-75 py-3 text-base">
                      Verkaufstraining
                    </li>
                    <li className="hover:opacity-75 py-3 text-base">Blog</li>
                  </ul>
                )}
              </div>
              <div className="absolute inset-0 lg:mt-0 mt-8 w-16 text-gray-700 flex items-center pl-6 h-full lg:py-5 z-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={28}
                  height={28}
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <circle
                    cx="11.6667"
                    cy="11.6667"
                    r="8.16667"
                    stroke="#4A5568"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M24.5 24.5L17.5 17.5"
                    stroke="#4A5568"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <input
                id="search"
                className="w-full text-text-gray-600 focus:outline-none focus:border font-normal pl-16 pr-24 lg:py-5 py-2 flex items-center text-2xl border-gray-300 rounded border relative z-10"
                placeholder="Suche"
              />
            </div>
          </div>
          <div className="sm:flex justify-center items-center pt-12">
            <button className="w-full sm:w-auto py-4 px-8 bg-secondary-500 text-white lg:text-2xl border border-secondary-500 hover:opacity-75 text-lg mr-4 focus:outline-none">
              Suchen
            </button>
            <button className="w-full sm:w-auto mt-4 sm:mt-0 py-4 px-8 bg-transparent border border-secondary-500 text-secondary-500 text-text-secondary-700 hover:opacity-75 lg:text-2xl text-lg focus:outline-none">
              Zu den Trainings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
