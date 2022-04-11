/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  CheckIcon,
  GlobeIcon,
  LockOpenIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  XIcon,
} from "@heroicons/react/outline";
import { Fragment, useRef } from "react";

const resources = [
  {
    name: "Unsere Methode",
    anchor: "method",
  },
  {
    name: "Referenzen",
    anchor: "customers",
  },
  {
    name: "Über Uns",
    anchor: "about-us",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CloudProjektLP({ blok, page }) {
  const onClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const header = useRef();

  return (
    <div className="relative bg-gray-50 scroll-smooth">
      <div className="relative overflow-hidden">
        <Popover className="fixed top-0 left-0 z-20 w-screen bg-white shadow">
          <div ref={header} className="max-w-5xl px-4 mx-auto sm:px-6 ">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">CloudProjekt</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/logo-cloudprojekt.png"
                    alt="CloudProjekt"
                  />
                </a>
              </div>
              <div className="-my-2 -mr-2 md:hidden">
                <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                  <span className="sr-only">Menü öffnen</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </Popover.Button>
              </div>

              <div className="hidden space-x-10 md:flex">
                {resources.map((link) => {
                  return (
                    <button
                      key={link.name}
                      href={link.href}
                      onClick={() => {
                        window.scrollTo({
                          top:
                            document.getElementById(link.anchor).offsetTop -
                            header.current.offsetHeight -
                            40,
                          left: 0,
                          behavior: "smooth",
                        });
                      }}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {link.name}
                    </button>
                  );
                })}
              </div>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                <button
                  onClick={onClick}
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent bg-secondary-500 whitespace-nowrap hover:bg-secondary-600"
                >
                  Messekarte sichern!
                </button>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="duration-200 ease-out"
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
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="/logo-cloudprojekt.png"
                        alt="CloudProjekt"
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                        <span className="sr-only">Close menu</span>
                        <XIcon className="w-6 h-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      {resources.map((link) => (
                        <button
                          key={link.name}
                          href={link.href}
                          onClick={() => {
                            window.scrollTo({
                              top:
                                document.getElementById(link.anchor).offsetTop -
                                header.current.offsetHeight -
                                40,
                              left: 0,
                              behavior: "smooth",
                            });
                          }}
                          className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded-md hover:bg-gray-50"
                        >
                          {link.name}
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <button
                    onClick={onClick}
                    className="items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent bg-secondary-500 whitespace-nowrap hover:bg-secondary-600"
                  >
                    Messekarte sichern!
                  </button>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <div className="relative overflow-hidden bg-gray-800">
          <div
            className="hidden sm:block sm:absolute sm:inset-0"
            aria-hidden="true"
          >
            <svg
              className="absolute bottom-0 right-0 mb-48 text-gray-700 transform translate-x-1/2 lg:top-0 lg:mt-28 lg:mb-0 xl:transform-none xl:translate-x-0"
              width={364}
              height={384}
              viewBox="0 0 364 384"
              fill="none"
            >
              <defs>
                <pattern
                  id="eab71dd9-9d7a-47bd-8044-256344ee00d0"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} fill="currentColor" />
                </pattern>
              </defs>
              <rect
                width={364}
                height={384}
                fill="url(#eab71dd9-9d7a-47bd-8044-256344ee00d0)"
              />
            </svg>
          </div>
          <div className="relative pt-6 pb-16 sm:pb-24">
            <main className="mt-16 sm:mt-24">
              <div className="mx-auto max-w-7xl">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                  <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                    <div>
                      <div
                        href="#"
                        className="inline-flex items-center p-1 pr-2 text-white bg-gray-900 rounded-full sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                      >
                        <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-secondary-500 rounded-full">
                          Kostenlose Messekarte für
                        </span>
                        <span className="pr-2 ml-4 text-sm">
                          Altenpflege Messe Essen
                        </span>
                      </div>
                      <h1 className="mt-4 text-lg font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-xl xl:text-wxl">
                        <span className="pr-5">Wann? </span>{" "}
                        <span className="text-secondary-400">
                          26. - 28. April 22 in Essen
                        </span>
                      </h1>
                      <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-4xl xl:text-5xl">
                        <span className="md:block">Sichern Sie sich Ihre</span>{" "}
                        <span className="text-secondary-400 md:block">
                          kostenlose Messekarte
                        </span>
                      </h1>
                      <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                        Mit unserem Gesamtpaket für WLAN, TV, Telefonie und
                        Notruflösungen heben sich unsere Kunden von der
                        Konkurrenz ab und erhöhen die Zufriedenheit Ihrer
                        Patienten und Bewohner.
                      </p>
                      <p className="mt-8 text-sm font-semibold tracking-wide text-white uppercase sm:mt-10">
                        Treffen Sie uns auf der
                      </p>
                      <div className="w-full mt-5 sm:mx-auto sm:max-w-lg lg:ml-0">
                        <div className="flex items-start justify-center space-x-2">
                          <div className="flex justify-center w-1/3 px-2 py-3 bg-white rounded-2xl">
                            <img
                              className="h-5 sm:h-8"
                              src="/ap-logo.png"
                              alt="Altenpflege Messe Essen"
                            />
                          </div>
                          <div className="flex justify-center w-1/3 px-2 py-3 bg-white rounded-2xl">
                            <img
                              className="h-5 sm:h-8"
                              src="/dmea.svg"
                              alt="DMEA Berlin"
                            />
                          </div>
                          <div className="flex justify-center w-1/3 px-2 py-3 bg-white rounded-2xl">
                            <img
                              className="h-5 sm:h-8"
                              src="/gworld.svg"
                              alt="@gastronomy.world"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
                    <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                      <div className="px-4 py-8 sm:px-10">
                        <div>
                          <p className="text-3xl font-medium text-center text-gray-700">
                            Kostenlose Messekarte sichern
                          </p>
                        </div>

                        <div className="relative mt-6">
                          <div
                            className="absolute inset-0 flex items-center"
                            aria-hidden="true"
                          >
                            <div className="w-full border-t border-gray-300" />
                          </div>
                          <div className="relative flex justify-center text-sm"></div>
                        </div>

                        <div className="mt-6">
                          <form
                            action="https://formsubmit.co/anfrage@krauss-gmbh.com"
                            method="POST"
                            className="space-y-6"
                          >
                            <input
                              type="hidden"
                              name="_next"
                              value="https://cloudprojekt.gastronomy.world/thanks/cloudprojekt"
                            ></input>
                            <input
                              type="hidden"
                              name="_subject"
                              value="Messekarte Altenpflegemesse Essen Anfrage"
                            ></input>
                            <input
                              type="hidden"
                              name="_captcha"
                              value="false"
                            ></input>
                            <div>
                              <label htmlFor="name" className="sr-only">
                                Name
                              </label>
                              <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                placeholder="Vollständiger Name"
                                required
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
                              />
                            </div>

                            <div>
                              <label htmlFor="email" className="sr-only">
                                E-Mail
                              </label>
                              <input
                                type="text"
                                name="email"
                                id="email"
                                autoComplete="email"
                                placeholder="E-Mail"
                                required
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
                              />
                            </div>

                            <div>
                              <label htmlFor="phone" className="sr-only">
                                Telefon
                              </label>
                              <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Telefon"
                                autoComplete="tel"
                                required
                                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
                              />
                            </div>

                            <div>
                              <div className="max-w-sm mx-auto">
                                <button
                                  type="submit"
                                  className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
                                >
                                  <span className="text-[1.375em] font-bold">
                                    Jetzt Messekarte sichern!
                                  </span>
                                  <span className="block font-medium text-gray-200">
                                    kostenfrei & unverbindlich
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                      <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                        <p className="text-xs leading-5 text-gray-500">
                          Mit dem absenden, aktzeptieren Sie die{" "}
                          <a
                            href="https://www.gastronomy.world/j/privacy"
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium text-gray-900 hover:underline"
                          >
                            Datenschutzerklärung
                          </a>
                          .
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
      <div className="text-white bg-slate-900">
        <div className="max-w-5xl px-10 pt-20 pb-20 mx-auto text-center">
          {/*<!--<h2 className="text-[1.75em] font-semibold">
            Haben auch Sie das Gefühl, in Ihrem Vertrieb müsste eine Veränderung
            geschehen, allerdings wissen Sie nicht genau, wie Sie vorgehen
            sollen?
                      </h2>
          <div className="py-7">
            <hr className="mx-auto border-t border-secondary-500 border-[5px] w-[125px]" />
          </div>
          */}
          <p className="text-[1.75em] font-semibold">
            Als Altenheim kommen Ihnen die folgenden Punkte sicherlich bekannt
            vor:
          </p>
          <div className="py-7">
            <hr className="mx-auto border-t border-secondary-500 border-[5px] w-[125px]" />
          </div>
          <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
            {blocks.map(function (block, index) {
              return (
                <div
                  key={index}
                  className="relative px-5 py-10 text-center text-black align-middle bg-white"
                >
                  <div className="h-[40px] w-[40px] rounded-full bg-secondary-500 absolute -top-5 -left-5 text-center align-middle text-white font-bold italic text-3xl">
                    {index + 1}
                  </div>
                  <p className="text-[1.0625em]">{block.text}</p>
                </div>
              );
            })}
          </div>
          <h3 className="text-[1.4375em] pt-14 font-semibold">
            Mussten Sie bei einem dieser 6 Punkte innerlich mit dem Kopf nicken?
          </h3>
          <p className="text-[1.375em]">
            Dann werden die kommenden Zeilen Goldwert für Sie sein…
          </p>
          <div className="max-w-sm mx-auto pt-14">
            <button
              onClick={onClick}
              className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Messekarte sichern!
              </span>
              <span className="block font-medium text-gray-200">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative px-10">
        <img
          className="absolute top-0 right-0 hidden object-cover w-1/2 h-full md:block"
          src="https://cloudprojekt.de/wp-content/uploads/2018/04/cloudprojekt_kind.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 hidden w-full h-full md:block bg-gradient-to-r from-white via-white"></div>
        <div className="relative max-w-5xl mx-auto text-center md:text-left">
          <div className="max-w-3xl py-20">
            <h2 className="text-2xl md:text-[2.1875em] font-semibold">
              Modernes Entertainment und Infotainment spart Zeit und Geld
            </h2>
            <p className="text-lg md:text-[1.375em] pt-3">
              Aus diesem Grund ist die Verantwortung, die Sie haben, sehr groß.
            </p>
            <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-3 mx-auto md:mx-0"></hr>
            <ul className="list-reset text-black mb-8 text-grey-darker rounded text-[1.0625em] pt-10">
              {wollen.map((will) => {
                return (
                  <li
                    key={will}
                    className="flex flex-col items-center mb-3 md:flex-row"
                  >
                    <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                    <p>{will}</p>
                  </li>
                );
              })}
            </ul>
            <p className="text-[1.375em] font-semibold">
              In einer Zusammenarbeit geben wir Ihnen einen Röntgenblick auf
              Ihre aktuelle Situation und helfen Ihnen bei der kompletten
              Umsetzung.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="max-w-5xl px-10 py-20 mx-auto">
          <h2 id="method" className="text-2xl md:text-[2.1875em] font-semibold">
            So läuft Ihre Einrichtung wie ein Uhrwerk, in dem jeder Prozess
            kostensparend, reibungslos aufeinander abgestimmt ist
          </h2>
          <hr className="border-t border-secondary-500 border-[4px] w-[125px] mx-auto mt-7"></hr>
          <p className="text-[1.25em] pt-7">
            Eine Zusammenarbeit mit uns setzt sich aus einem erfolgserprobten
            3-Stufen-Prozess zusammen:
          </p>
          <div className="grid grid-cols-1 gap-10 pt-20 text-left md:grid-cols-3">
            {process.map((proc, index) => {
              return (
                <div key={proc} className="bg-white p-[20px] shadow-xl z-10">
                  <span className="block w-fit bg-secondary-500 px-5 py-1 text-white font-semibold text-[1.0625em]">
                    Schritt {index + 1}
                  </span>
                  <p className="text-[1.375em] font-semibold pt-5">
                    {proc.title}
                  </p>
                  <ul className="list-reset text-black mb-8 text-grey-darker rounded text-[1.0625em] pt-5">
                    {proc.points.map((point) => {
                      return (
                        <li key={point} className="flex items-center mb-3">
                          <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                          <p className="text-[0.9375em]">{point}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        <div className="relative h-[350px] -mt-48 bg-[url('https://s4c680ef60d53e150.jimcontent.com/download/version/1643875265/module/8675965315/name/peter-olexa-p-L7-Ire-X9-AGY-unsplash-10%20%281%29.png')] bg-cover">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-80"></div>

          <div className="relative flex items-center justify-center px-10 pt-40">
            <button
              onClick={onClick}
              className="w-full max-w-3xl px-10 py-3 mx-auto text-white transition-all duration-300 ease-in-out transform md:relative top-1/2 bg-secondary-500 hover:scale-110"
            >
              <span className="text-[1.5625em] font-medium">
                Besuchen Sie uns jetzt an unserem Messestand kostenlos!
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="max-w-5xl px-10 py-20 mx-auto">
          <h2
            id="customers"
            className="text-2xl md:text-[2.1875em] font-semibold"
          >
            Erfolgsgeschichten von Altenheimen / Krankenhäusern, die in einer
            ähnlichen Lage waren, wie Sie es gerade sind
          </h2>
          <hr className="border-t border-secondary-500 border-[4px] w-[125px] mx-auto mt-7"></hr>
          {casestudies.map((study, index) => {
            return (
              <div key={study.company} className="relative pt-20 text-left ">
                <div className=" absolute top-0 -left-36 text-[12.5em] italic font-semibold text-gray-200">
                  {index + 1}
                </div>
                <div className="flex flex-col-reverse items-center md:flex-row">
                  <div>
                    <h3 className="text-[1.25em] font-semibold text-secondary-500">
                      {study.company}
                    </h3>
                    <p className="text-[1.5625em] font-semibold pt-2">
                      {study.title}
                    </p>
                    <ul className="list-reset text-black mb-8 text-grey-darker rounded text-[1.0625em] pt-10">
                      <li className="flex items-center mb-3">
                        <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                        <p>
                          <strong>WLAN Sender:</strong> {study.group}
                        </p>
                      </li>
                      <li className="flex items-center mb-3">
                        <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                        <p>
                          <strong>Anzahl Betten:</strong> {study.workers}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img src={study.img} className="md:m-h-[300px] w-full" />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                  <div className="bg-white">
                    <span className="block py-2 pl-3 font-semibold text-white bg-gray-500">
                      Ausgangssituation:
                    </span>
                    <p className="px-3 py-3">{study.start}</p>
                  </div>
                  <div className="bg-white">
                    <span className="block py-2 pl-3 font-semibold text-white bg-gray-700">
                      Lösung:
                    </span>
                    <p className="px-3 py-3">{study.solution}</p>
                  </div>
                  <div className="bg-white">
                    <span className="block py-2 pl-3 font-semibold text-white bg-secondary-500">
                      Ergebnis:
                    </span>
                    <p className="px-3 py-3">{study.end}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="max-w-sm mx-auto pt-14">
            <button
              onClick={onClick}
              className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Messekarte sichern!
              </span>
              <span className="block font-medium text-gray-200">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-5xl px-10 py-20 mx-auto">
          <h2
            id="about-us"
            className="text-2xl md:text-[2.1875em] font-semibold"
          >
            CloudProjekt
          </h2>
          <p className="text-[1.5625em]">
            Wir setzen neue Maßstäbe in allen Bereichen des Gäste- und
            Patientenentertain­ments.
          </p>
          <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-10"></hr>
          <div className="flex flex-col pt-10 space-y-10 md:space-x-10 md:space-y-0 md:flex-row">
            <div className="text-[1.0625em] md:w-1/2">
              <p>
                Das Unternehmen Cloudprojekt GmbH beschäftigt sich mit dem
                Design & der Abrechnung von TV- / WLAN- und
                Kommunikations-Lösungen, sowie der Digitalisierung (und somit
                Optimierung) von kostenintensiven Prozessen wie z.B. der
                Tagesablauf eines Reha-Patienten. Unsere Kunden sind in erster
                Linie Krankenhäuser, Reha-Einrichtungen sowie
                Senioren-Wohnheime.
              </p>
              <p className="pt-5">
                <span className="underline">Unser Erfolgsgarantie:</span> Wir
                legen die oberste Priorität bei unserer Beratung auf eine
                individuelle, auf den jeweiligen Kunden angepasste
                Wirtschaftlichkeitsbetrachtung für die Nutzung von
                Entertainment- und Infotainmentdiensten.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://i.ibb.co/RBPJ5Fw/DSC05982-Fotor2-1030x609-1.jpg"
                className="object-cover aspect-video"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse pt-10 md:flex-row md:space-x-10">
            <div className="w-full pt-10 md:w-2/4 md:pt-0">
              <img
                src="https://i.ibb.co/MscPZ5w/shutterstock-1937848336-Demenzhilfe.jpg"
                className="object-cover aspect-square"
              />
            </div>
            <div>
              <h2 className="text-[1.5625em] font-semibold">
                Unsere Kunden schätzen an uns besonders:
              </h2>
              <ul className="pt-5 mb-8 text-black rounded list-reset text-grey-darker">
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    die Flexibilität bei den verschiedenen
                    Finanzierungsvarianten
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />

                  <p>die Budgetneutralität durch Fachberatung</p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    die Kosteneinsparung durch Wegfall antiquierter Prozesse
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>die Positive Bewertung durch Patienten und Kostenträger</p>
                </li>
              </ul>

              <button
                onClick={onClick}
                className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
              >
                <span className="text-[1.125em] font-medium">
                  Hier klicken, um uns auf der Messe persönlich kennenzulernen!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img
          className="absolute top-0 left-0 object-cover w-screen h-full"
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=national-cancer-institute-BxXgTQEw1M4-unsplash.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>
        <div className="relative z-10 w-full max-w-5xl px-4 pt-16 pb-20 mx-auto text-center lg:py-24 sm:px-6">
          <h1 className="text-2xl md:text-[2.1875em] font-semibold tracking-tight">
            Für Altenheime / Krankenhäuser:
          </h1>
          <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
            {steps.map((step, index) => {
              return (
                <div key={index} className="px-5 py-5 pb-10 bg-white shadow-xl">
                  <div className="rounded-full bg-secondary-500 italic text-white text-[3.125em] h-[80px] w-[80px] mx-auto font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-[1.5625em] font-semibold pt-5">
                    {step.title}
                  </h4>
                  <p className="text-[1.0625em] pt-5">{step.description}</p>
                </div>
              );
            })}
          </div>
          <div className="max-w-sm mx-auto pt-14">
            <button
              onClick={onClick}
              className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Messekarte sichern!
              </span>
              <span className="block font-medium text-gray-200">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="text-white bg-slate-900">
        <div className="grid max-w-5xl grid-cols-1 gap-10 px-10 mx-auto md:gap-0 md:grid-cols-3 py-14">
          <div>
            <img src="/gworld-light.svg" className="w-3/5 md:w-3/4" />
          </div>
          <div className="flex flex-col">
            <p className="text-[1.25em] font-semibold pb-2">Informationen</p>
            <a
              href="https://www.gastronomy-world.com/about"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <GlobeIcon className="inline-block h-5 mr-2 text-secondary-500" />
              Impressum
            </a>
            <a
              href="https://www.gastronomy.world.com/j/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <LockOpenIcon className="inline-block h-5 mr-2 text-secondary-500" />
              Datenschutz
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-[1.25em] font-semibold pb-2">Kontakt</p>
            <a
              href="tel:+49 8191 93759-23"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <PhoneIcon className="inline-block h-5 mr-2 text-secondary-500" />
              +49 8191 93759-23
            </a>
            <a
              href="mail:info@gastronomy.world"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <MailIcon className="inline-block h-5 mr-2 text-secondary-500" />
              info@gastronomy.world
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const steps = [
  {
    title: "Kostenlose Messekarte",
    description:
      "Wir schenken Ihnen eine kostenlose Messekarte, um uns bei unserem Event besuchen zu können.",
  },
  {
    title: "Messe Besuch",
    description:
      "Wir lernen uns an unserem Messestand kennen und sprechen über Ihre aktuellen Herausforderungen.",
  },
  {
    title: "Persönlicher Termin",
    description:
      "Sie bekommen eine auf Ihre Situation angepasste Lösung, um Ihr Unternehmen optimal für die Zukunft aufzustellen.",
  },
];

const casestudies = [
  {
    company: "Reha Zentrum Lübbe",
    title: `Steigerung der Patientenzufriedenheit durch Optimierung des Entertainmentsystems und der Prozesse`,
    group: "72",
    workers: "230",
    start: `Für ein modernes Entertainmentsystem waren die reparturanfälligen Röhrenfernseher nicht mehr zeitgemäß. Für uns galt, im Rheazentrum Lübben den Spagat zwischen Finanzierbarkeit und die Anforderungen der Patienten zu schaffen. Eine Internetnutzung
    war nur in den Aufenthaltsbereichen zu nutzen.`,
    solution: `Durch eine optimale Prozess- und Layoutgestaltung und die Optimierung der bestehenden Flächenressourcen konnten wir die Unternehmensentwicklung nachhaltig verbessern. Die Röhrenfernseher wurden durch moderne 32” Zoll Fernsehgeräte ersetzt, welche durch ein innovatives Abrechnungssystem automatisiert freigeschaltet und abgerechnet werden können. Des weiteren wurde durch Ausbau der Infrastruktur Vorort, dem Haus erstmals ein flächendeckendes WLAN ermöglicht.`,
    end: `Durch die Neuerungen konnte die Patientenzufriedenheit um ein Vielfaches verbessert werden. Durch das Abrechnungssystem wurde eine transparente Kostenkontrolle sichergestellt, wo zuvor auf die Ehrlichkeit der Patienten vertraut werden musste. Letzentlich konnte die Cloudprojekt Gmbh durch die Optimierung der Telefonieverträge und die bessere Ausnutzung sowie die belegbare Einnahmenkontrolle eine WIN-WIN Situtaion für beide Parteien erzielen.`,
    img: "https://www.rehazentrum.com/assets/images/rzl_logo.svg",
  },
];

const process = [
  {
    title: "Analyse",
    points: [
      "Jedes Altenheim / Krankenhaus ist individuell. Wir prüfen Ihre Situation und finden die versteckten Ursachen, die Ihre Effizienz gerade drosseln.",
      "Als erfahrene Fachberater blicken wir mit einer Vogelperspektive auf Ihre komplexe Situation und sehen deshalb nachweislich und schnell, an welchen Stellen Sie den größten Effekt in kurzer Zeit erzielen können.",
    ],
  },
  {
    title: "Konzeption",
    points: [
      "Auf Grundlage der Potenzialanalyse erstellen wir einen klar strukturierten Handlungsplan mit dem Ziel, Ihre Wettbewerbsfähigkeit als Altenheim / Krankenhaus zu erhöhen.",
      "Bei der Erstellung unserer Strategie lassen wir unsere geballte Erfahrung mit einfließen, die wir in allen Kundenprojekten gesammelt haben.",
    ],
  },
  {
    title: "Umsetzung",
    points: [
      "Im Anschluss setzen wir die Digitalisierungsstrategie gemeinsam mit Ihnen um.",
      "Während des kompletten Prozesses können Sie sich sicher fühlen, weil wir diesen Weg bereits unzählige Male gegangen sind.",
      "Außerdem arbeiten wir maximal transparent und sprechen jeden Schritt mit Ihnen ab. So behalten Sie stets die volle Kontrolle.",
    ],
  },
];

const wollen = [
  "Wollen auch Sie ein gutes Gefühl haben, wenn Sie an Ihre Kennzahlen denken, weil Sie wissen, dass in Ihre Prozesse digitalisiert und Kostengemindert sind?",
  "Möchten auch Sie eine Differenzierung gegenüber dem Wettbewerb, indem Sie Ihr Entertainmentsystem und Ihre Prozesse digitalisieren?",
  "Dann brauchen Sie ein maßgeschneidertes Konzept, welche Ihre Einrichtung Budgetneutral berät, das auch wirklich Wirtschaftlich ist.",
  "Zudem benötigen Sie einen glasklaren Schritt-für-Schritt-Plan, den Sie im Anschluss 1:1 umsetzen können.",
];

const blocks = [
  {
    text: `Beobachten Sie seit Längerem, dass das aufwendige Prozesse wie z.B. der Tagesblauf bei Reha-Patienten sehr kostenintesiv sind?`,
  },
  {
    text: `Das Problem ist, Sie wissen auch schon, an welchen Stellen es liegt, aber Ihnen fehlt ein glasklarer Fahrplan, der Ihnen zeigt, wie Sie Ihr Vorhaben am besten umsetzen.`,
  },
  {
    text: `Dazu kommt der hohe Druck, weil Patienten und Bewohner mehr Komfort fordern. Es wird Zeit, dass Sie die Effizienz Ihrer Einrichtung erhöhen.`,
  },
  {
    text: `Die Wirtschaftlichkeit macht Ihnen zu schaffen, da antiquierte Prozesse kostenintensiv sind? Daher muss erst recht die Produktivität erhöht und wo möglich digitalisiert werden!`,
  },
  {
    text: `Außerdem müssten Sie dringend ein modernes Entertainmentsystem integrieren, weil das derzeitige Reperaturanfällig ist und Sie Ihren Bewohnern und Patienten noch bessere Qualität liefern möchten?`,
  },
  {
    text: `Sie stehen vor der Herausforderung, Ihr Entertainment- und Infotainment den Anforderungen Ihrer Patienten und Bewohnern gerecht zu machen und benötigen Unterstützung in der Umsetzung?`,
  },
];
