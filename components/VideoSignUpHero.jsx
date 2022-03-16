import { Popover } from "@headlessui/react";
import { createPopup } from "@typeform/embed";
import cookieCutter from "cookie-cutter";
import { trackGoal } from "fathom-client";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { openPopupWidget } from "react-calendly";

const navigation = [];

export default function HeroSignUp({ blok, page }) {
  const videoFrame = useRef(null);
  const router = useRouter();
  useEffect(() => {
    if (
      cookieCutter.get("bucket") &&
      blok.variants[cookieCutter.get("bucket")]
    ) {
      setHeadline(blok.variants[cookieCutter.get("bucket")].text);
    }
  });

  const [headline, setHeadline] = useState(blok.headline);

  const onClick = () => {
    if (page.calendlyURL) {
      trackGoal("03RLAFSO", 0); //03RLAFSO
      openPopupWidget({
        url: page.calendlyURL,
      });
      return;
    }
    if (page.typeformId) {
      const { toggle } = createPopup(page.typeformId);
      trackGoal("MPOZNNML", 0);
      toggle();
      return;
    }
  };

  return (
    <div
      className={`relative overflow-hidden  ${
        page.color == "gold" ? "bg-background-500" : "bg-white"
      }`}
    >
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 transform translate-x-64 -translate-y-8 left-1/2"
          width={640}
          height={784}
          fill="none"
          viewBox="0 0 640 784"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x={118}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect
                x={0}
                y={0}
                width={4}
                height={4}
                className="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y={72}
            width={640}
            height={640}
            className="text-white"
            fill="currentColor"
          />
          <rect
            x={118}
            width={404}
            height={784}
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24 lg:pb-32">
        <Popover className="fixed top-0 z-50 w-full bg-white shadow-md">
          <nav
            className="relative flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6"
            aria-label="Global"
          >
            <div className="flex items-center flex-1">
              <div className="flex flex-col items-center justify-center w-full md:flex-row">
                <div>
                  <span className="sr-only">KRAUSS Training</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/KRAUSS Logo Blau.svg"
                    alt=""
                  />
                </div>
                <div className="flex-1 pt-4 text-center md:py-0">
                  Jetzt anrufen:{" "}
                  <a
                    href="tel:+49 8191 93759-23"
                    className="underline text-secondary-500"
                  >
                    +49 8191 93759-23
                  </a>
                  {/*<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-600 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="w-6 h-6" aria-hidden="true" />
                  </Popover.Button>*/}
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:space-x-10">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium text-gray-500 hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="hidden text-right md:block">
              <span className="inline-flex rounded-md shadow-md ring-1 ring-black ring-opacity-5">
                <button
                  onClick={onClick}
                  className={`inline-flex items-center px-4 py-2 text-base font-medium border border-transparent rounded-md ${
                    page.color == "gold"
                      ? "text-white bg-secondary-500"
                      : "text-white bg-gradient-to-r from-purple-600 to-indigo-600"
                  } hover:bg-secondary-600`}
                >
                  Kostenlose Beratung erhalten
                </button>
              </span>
            </div>
          </nav>

          {/*<Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute inset-x-0 top-0 z-10 p-2 transition origin-top-right transform md:hidden"
            >
              <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                <div className="flex items-center justify-between px-5 pt-4">
                  <div>
                    <img
                      className="w-auto h-8"
                      src="/KRAUSS Logo Gold.svg"
                      alt=""
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-600 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="w-6 h-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <button
                  onClick={onClick}
                  className={`block w-full px-5 py-3 font-medium text-center text-primary-500 bg-gray-50 hover:bg-gray-100 ${
                    page.color == "gold"
                      ? "text-primary-600"
                      : "text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text"
                  } `}
                >
                  Unverbindlichen Termin vereinbaren
                </button>
              </div>
            </Popover.Panel>
          </Transition>*/}
        </Popover>

        <main className="px-4 pt-12 mx-auto mt-16 max-w-7xl sm:mt-24 sm:px-6 lg:mt-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold tracking-wide text-gray-500 uppercase sm:text-base lg:text-sm xl:text-base">
                  {blok.subHeadline}
                </span>
                <span className="block mt-1 text-2xl font-extrabold tracking-tight xl:text-5xl">
                  <span className="text-gray-900">
                    {headline.split("<br>")[0]}
                  </span>
                  <span
                    className={` ${
                      page.color == "gold"
                        ? "text-primary-600"
                        : "text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text"
                    }`}
                  >
                    {" "}
                    {headline.split("<br>")[1]}
                  </span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                {blok.description}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                {blok.reference && (
                  <div className="flex flex-col items-center mb-8 space-x-3 space-y-3 md:flex-row md:space-y-0">
                    <div className="flex flex-grow -space-x-2">
                      <img
                        alt="Gert Behre"
                        width="32px"
                        height="32px"
                        className="inline-block rounded-full ring-2 ring-white"
                        src="https://i.ibb.co/1zj9jvz/Gert-Behre.png"
                      />{" "}
                      <img
                        alt="Stephan Kotterer"
                        width="32px"
                        height="32px"
                        className="z-10 inline-block rounded-full ring-2 ring-white"
                        src="https://i.ibb.co/bd3kKfB/Stephan-Kotterer.png"
                      />{" "}
                      <img
                        alt="Jan Hauschildt"
                        width="32px"
                        height="32px"
                        className="z-20 inline-block rounded-full ring-2 ring-white"
                        src="https://i.ibb.co/Js04MG9/Jan-Hauschildt.png"
                      />{" "}
                      <img
                        alt="Michael Schwab"
                        width="32px"
                        height="32px"
                        className="z-30 inline-block rounded-full ring-2 ring-white"
                        src="https://i.ibb.co/yVPhbgQ/Michael-Schwab.png"
                      />{" "}
                    </div>
                    <p className="text-xs md:pl-14 ">
                      <b>Herr Michael Schwab, Leiter CRM Innendienst</b> und{" "}
                      {blok.reference}
                    </p>
                  </div>
                )}
                <button
                  onClick={onClick}
                  className="flex items-center self-start px-12 py-4 mx-auto font-medium text-white uppercase transition duration-500 ease-in-out transform border-0 rounded-lg shadow-lg md:mx-0 bg-secondary-400 primary-cta hover:shadow-inner hover:-translate-y-1 hover:scale-110 focus:outline-none text-md"
                >
                  Kostenlose Beratung erhalten
                  <svg
                    className="w-5 h-5 ml-2 fill-current color-white"
                    id="Layer_1"
                    x="0px"
                    y="0px"
                    viewBox="-49 141 512 512"
                  >
                    <path
                      id="XMLID_11_"
                      d="M-24,422h401.645l-72.822,72.822c-9.763,9.763-9.763,25.592,0,35.355c9.763,9.764,25.593,9.762,35.355,0 l115.5-115.5C460.366,409.989,463,403.63,463,397s-2.634-12.989-7.322-17.678l-115.5-115.5c-9.763-9.762-25.593-9.763-35.355,0 c-9.763,9.763-9.763,25.592,0,35.355l72.822,72.822H-24c-13.808,0-25,11.193-25,25S-37.808,422-24,422z"
                    ></path>
                  </svg>
                </button>
                <p className="self-start pt-3 text-sm text-gray-600">
                  In nur 1 Minute. Wir melden uns noch heute. Unverbindlich und
                  komplett kostenlos.
                </p>
                {/* <p className="text-base font-medium text-gray-900">
                  Kontaktieren Sie uns heute
                </p>
                <div className="mt-3 sm:flex">
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    onChange={(event) => {
                      setMail(event.currentTarget.value);
                    }}
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full py-3 text-base placeholder-gray-500 border-gray-300 rounded-md shadow-sm focus:ring-secondary-500 focus:border-secondary-500 sm:flex-1"
                    placeholder="Geben Sie hier Ihre E-Mail ein"
                  />
                  <button
                    onClick={onClick}
                    className="w-full px-6 py-3 mt-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                  >
                    Termin anfragen
                  </button>
                </div>
                <p className="mt-3 text-sm text-gray-500">
                  Vereinbaren Sie unverbindlich ein Kennenlerngespräch innerhalb
                  der nächsten Tage.{" "}
                  <a
                    href="https://www.krauss-friends.com/j/privacy"
                    className="font-medium text-gray-900 underline"
                  >
                    Datenschutz
                  </a>
                  .
                  </p>*/}
              </div>
            </div>
            <div className="relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 origin-top transform scale-75 -translate-x-1/2 -translate-y-8 left-1/2 sm:scale-100 lg:hidden"
                width={640}
                height={784}
                fill="none"
                viewBox="0 0 640 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x={118}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y={72}
                  width={640}
                  height={640}
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x={118}
                  width={404}
                  height={784}
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md">
                {blok.videoask && (
                  <iframe
                    src={blok.videoask}
                    allow="camera *; microphone *; autoplay *; encrypted-media *; fullscreen *; display-capture *;"
                    width="100%"
                    height="600px"
                    style={{ border: "none", borderRadius: "24px" }}
                  ></iframe>
                )}
                {(blok.video.url || blok.placeholder.filename) && (
                  <button
                    type="button"
                    onClick={() => {
                      if (blok.video.url) {
                        videoFrame.current.src = blok.video.url;
                        videoFrame.current.classList.toggle("hidden");
                      }
                    }}
                    className="relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                  >
                    <span className="sr-only">
                      Watch our video to learn more
                    </span>
                    <img
                      className="w-full"
                      src={blok.placeholder.filename}
                      alt=""
                    />

                    {blok.video.url && (
                      <div
                        className="absolute inset-0 flex items-center justify-center w-full h-full"
                        aria-hidden="true"
                      >
                        <svg
                          className="w-20 h-20 text-secondary-500"
                          fill="currentColor"
                          viewBox="0 0 84 84"
                        >
                          <circle
                            opacity="0.9"
                            cx={42}
                            cy={42}
                            r={42}
                            fill="white"
                          />
                          <path d="M55.5039 40.3359L37.1094 28.0729C35.7803 27.1869 34 28.1396 34 29.737V54.263C34 55.8604 35.7803 56.8131 37.1094 55.9271L55.5038 43.6641C56.6913 42.8725 56.6913 41.1275 55.5039 40.3359Z" />
                        </svg>
                      </div>
                    )}
                    {blok.video.url && (
                      <div
                        className="absolute inset-0 flex items-center justify-center w-full h-full "
                        aria-hidden="true"
                      >
                        <iframe
                          ref={videoFrame}
                          width="448"
                          height="252"
                          className="hidden"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
