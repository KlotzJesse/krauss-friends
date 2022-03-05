import React, { useState } from "react";
export default function SearchBar() {
  const [show3, setShow3] = useState(false);

  return (
    <>
      <div className="container py-12 mx-auto">
        {/* Hero */}
        <div className="flex flex-col items-center justify-center w-full px-4 py-16 xl:px-0">
          <h1 className="text-3xl font-bold text-center lg:text-6xl text-secondary-500">
            Wonach suchen Sie?
          </h1>
          <h2 className="pt-6 mb-4 text-lg text-center text-gray-600 lg:text-2xl lg:mb-0">
            Coach Ausbildung, Verkaufstraining, Online-Marketing-Training und
            vieles mehr.
          </h2>
          <div className="flex flex-col w-full mt-3 sm:w-1/2 md:ml-4 md:mt-10">
            <div className="relative w-full">
              <div
                className="right-0 z-30 flex items-center justify-between h-full py-3 pr-3 mb-4 bg-gray-100 border-gray-300 cursor-pointer lg:absolute lg:border-r lg:border-t lg:border-b lg:mb-0 lg:py-5"
                onClick={() => setShow3(!show3)}
              >
                <p className="px-4 text-lg leading-tight tracking-normal text-gray-700 lg:text-2xl">
                  Alle Kategorien
                </p>
                {show3 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Hide"
                    className="icon icon-tabler icon-tabler-chevron-up"
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
                    className="block icon icon-tabler icon-tabler-chevron-down"
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
                    className="absolute z-40 w-64 p-4 mt-56 duration-300 bg-white shadow-lg opacity-100 lg:-ml-16"
                    id="listHolder2"
                  >
                    <li className="py-3 text-base hover:opacity-75">
                      Alle Kategorien
                    </li>
                    <li className="py-3 text-base hover:opacity-75">
                      Coach Ausbildung
                    </li>
                    <li className="py-3 text-base hover:opacity-75">
                      Verkaufstraining
                    </li>
                    <li className="py-3 text-base hover:opacity-75">Blog</li>
                  </ul>
                )}
              </div>
              <div className="absolute inset-0 z-20 flex items-center w-16 h-full pl-6 mt-8 text-gray-700 lg:mt-0 lg:py-5">
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
                className="relative z-10 flex items-center w-full py-2 pl-16 pr-24 text-2xl font-normal border border-gray-300 rounded text-text-gray-600 focus:outline-none focus:border lg:py-5"
                placeholder="Suche"
              />
            </div>
          </div>
          <div className="items-center justify-center pt-12 sm:flex">
            <button className="w-full px-8 py-4 mr-4 text-lg text-white border sm:w-auto bg-secondary-500 lg:text-2xl border-secondary-500 hover:opacity-75 focus:outline-none">
              Suchen
            </button>
            <button className="w-full px-8 py-4 mt-4 text-lg bg-transparent border sm:w-auto sm:mt-0 border-secondary-500 text-secondary-500 text-text-secondary-700 hover:opacity-75 lg:text-2xl focus:outline-none">
              Zu den Trainings
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
