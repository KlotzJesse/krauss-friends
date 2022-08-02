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
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import { Fragment, useRef } from "react";
import { openPopupWidget } from "react-calendly";

const resources = [
  {
    name: "Unsere Methode",
    anchor: "method",
  },
  {
    name: "Referenz",
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

export default function BeyondHost({ blok, page }) {
  const onClick = () => {
    if (page.calendlyURL) {
      trackGoal("03RLAFSO", 0); //03RLAFSO
      openPopupWidget({
        url: page.calendlyURL,
      });
      return;
    }
    if (page.typeformId) {
      const params = Object.fromEntries(new URLSearchParams(location.search));
      const { toggle } = createPopup(page.typeformId, { hidden: params });
      trackGoal("MPOZNNML", 0);
      toggle();
      return;
    }
  };

  const header = useRef();

  return (
    <div className="relative bg-gray-50 scroll-smooth font-beyond">
      <div className="relative overflow-hidden">
        <Popover className="fixed top-0 left-0 z-20 w-screen bg-white shadow">
          <div ref={header} className="max-w-5xl px-4 mx-auto sm:px-6 ">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">BeyondHost</span>
                  <img
                    className="w-auto h-8 sm:h-12"
                    src="/beyondHost.png"
                    alt=""
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
                  Erstgespräch sichern!
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
              {({ close }) => (
                <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                  <div className="px-5 pt-5 pb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <img className="w-auto h-8" src="/beyondHost.png" />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
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
                                  document.getElementById(link.anchor)
                                    .offsetTop -
                                  header.current.offsetHeight -
                                  40,
                                left: 0,
                                behavior: "smooth",
                              });
                              close();
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
                      Erstgespräch sichern!
                    </button>
                  </div>
                </div>
              )}
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="relative h-full">
          <video
            className="absolute top-0 left-0 object-cover w-screen h-full"
            autoPlay
            playsInline
            muted
            src="https://beyond.host/wp-content/uploads/website.mp4"
          />
          <div className="absolute top-0 left-0 w-screen h-full bg-white opacity-90"></div>
          <div className="relative z-10 w-full max-w-5xl px-4 pt-24 pb-20 mx-auto text-center lg:pt-36 lg:text-left sm:px-6">
            <h1 className="font-medium tracking-tight md:text-2xl text-secondary-500">
              Für Veranstaltungs- und Tagungsleiter:
            </h1>
            <p className="text-xl md:text-[2.6em] font-bold tracking-tight pt-5 md:leading-10">
              Mehr Umsatz dank perfekten Service durch ein Service-Ruf-System.
            </p>
            <div className="grid w-full gap-5 pt-10 grid- md:grid-cols-2">
              <div className="flex flex-col-reverse md:flex-col">
                <ul className="mb-8 text-left text-black rounded list-reset text-grey-darker">
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                    <p>
                      <b className="underline">Kosten senken</b>, da wir Ihre
                      Prozesse durch eine digitale Lösung optimieren.
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                    <p>
                      <b className="underline">Höhere Mitarbeiterbindung</b>,
                      weil wir Ihr Service Team entlasten
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />

                    <p>
                      <b className="underline">Mehr Gäste & Umsatz gewinnen</b>,
                      da wir Ihre Servicequalität verbessern.
                    </p>
                  </li>
                </ul>
                <button
                  onClick={onClick}
                  className="w-full px-10 py-3 mb-5 text-white transition-all duration-300 ease-in-out transform md:m-0 bg-secondary-500 hover:scale-110"
                >
                  <span className="text-lg md:text-[1.375em] font-bold">
                    Jetzt Erstgespräch sichern!
                  </span>
                  <span className="block font-medium text-gray-200">
                    kostenfrei & unverbindlich
                  </span>
                </button>
              </div>
              <div className="order-first md:order-none ">
                <iframe
                  height="315"
                  src="https://www.youtube-nocookie.com/embed/zVEf_b60u6o"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full shadow-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
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
            Als <u>Geschäftsführer</u>, <u>Veranstaltungs-</u> und{" "}
            <u>Tagungsleiter</u> kommen Ihnen die folgenden Punkte sicherlich
            bekannt vor:
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
              <span className="text-md md:text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
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
          src="https://beyond.host/wp-content/uploads/Demotermin_Bild.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 hidden w-full h-full md:block bg-gradient-to-r from-white via-white"></div>
        <div className="relative max-w-5xl mx-auto text-center md:text-left">
          <div className="max-w-3xl py-20">
            <h2 className="text-2xl md:text-[2.1875em] font-semibold">
              Möchten Sie die maximale Auslastung Ihrer Räumlichkeiten, die
              Effizienz Ihrer Mitarbeiter steigern und gleichzeitig nicht
              unnötig Gäste verlieren, sodass Ihre monatlichen Ergebnisse sich
              sichtbar verbessern?
            </h2>
            <p className="text-md md:text-[1.375em] pt-3">
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
              Tagungsräume kann jeder bereitstellen – wir bieten Service auf den
              Punkt in jedem Tagungsraum.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="max-w-6xl px-10 py-20 mx-auto">
          <h2 id="method" className="text-2xl md:text-[2.1875em] font-semibold">
            So läuft Ihr Service wie ein Uhrwerk, in dem jeder Prozess
            reibungslos aufeinander abgestimmt ist
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
        <div className="relative h-[350px] -mt-48 bg-[url('https://i.postimg.cc/fyWmkg2w/Design-ohne-Titel-15.png')] bg-cover">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-80"></div>

          <div className="relative flex items-center justify-center px-10 pt-40">
            <button
              onClick={onClick}
              className="w-full max-w-3xl px-10 py-3 mx-auto text-white transition-all duration-300 ease-in-out transform md:relative top-1/2 bg-secondary-500 hover:scale-110"
            >
              <span className="text-[1.5625em] font-medium">
                Fragen Sie jetzt ein unverbindliches Erstgespräch an!
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
            Erfolgsgeschichten von einem Hotel, welches in einer ähnlichen Lage
            war, wie Sie es gerade sind
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
                          <strong>Branche:</strong> {study.group}
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
              <span className="text-md md:text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
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
            Beyond.Host
          </h2>
          <p className="text-[1.5625em]">
            Digitaler Service Assistent für Ihren Eventbereich
          </p>
          <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-10"></hr>
          <div className="flex flex-col pt-10 space-y-10 md:space-x-10 md:space-y-0 md:flex-row">
            <div className="text-[1.0625em] md:w-1/2">
              <p>
                Wir kommen aus der Branche und haben in unserer jahrelangen
                Erfahrung in den Bereichen Hotellerie, F&B, Bankett, Management,
                Eventmanagement und Technik die Bedürfnisse der Kunden erkannt.
                Mit Beyond.Host haben wir die Kommunikation im Tagungsraum
                weitergedacht und setzen einen neuen Standard für die optimale
                Ausstattung.
              </p>
              <p className="pt-5">
                <span className="underline">Unser Erfolgsgarantie:</span> Mit
                Beyond.Host gehen wir den nächsten Schritt in der
                Gast-Kommunikation und freuen uns Teil Ihrer Erfolgsgeschichte
                zu sein.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://beyond.host/wp-content/uploads/team.jpg"
                className="object-cover aspect-video"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse pt-10 md:flex-row md:space-x-10">
            <div className="w-full pt-10 md:w-2/4 md:pt-0">
              <img
                src="https://beyond.host/wp-content/uploads/Demotermin_Bild.jpg"
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
                    das wir mehr als ein Service-Ruf-System sind: Beyond.Host
                    bietet eine unkomplizierte, intuitive Oberfläche
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />

                  <p>
                    das unser Fokus auf dem Gast und gleichzeitig auf den
                    täglichen Aufgaben im Bankett und Tagungsgeschäft liegt
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    das mit einer intuitiven Bedienung die verschiedenen
                    Service-Anfrage-Optionen vom Referenten gewählt werden, per
                    Smartwatch an die Mitarbeiter übermittelt und von einem
                    bestätigt werden.
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    das wir die wichtigen Bedürfnisse der Referenten bereits
                    kennen
                  </p>
                </li>
              </ul>

              <button
                onClick={onClick}
                className="w-full px-10 py-3 text-white transition-all duration-300 ease-in-out transform bg-secondary-500 hover:scale-110"
              >
                <span className="text-[1.125em] font-medium">
                  Hier klicken, um uns persönlich kennenzulernen!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full">
        <img
          className="absolute top-0 left-0 object-cover w-screen h-full"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>
        <div className="relative z-10 w-full max-w-5xl px-4 pt-16 pb-20 mx-auto text-center lg:py-24 sm:px-6">
          <h1 className="text-2xl md:text-[2.1875em] font-semibold tracking-tight">
            Für Veranstaltungs- und Tagungsleiter:
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
              <span className="text-md md:text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
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
    title: "Termin anfragen",
    description:
      "Vereinbaren Sie jetzt ein kostenloses Erstgespräch und verabreden mit uns einen passenden Termin.",
  },
  {
    title: "Erstgespräch",
    description:
      "Wir lernen uns per Telefon kennen und sprechen über Ihre aktuellen Herausforderungen.",
  },
  {
    title: "Lösung",
    description:
      "Sie bekommen eine auf Ihre Situation angepasste Lösung, um Ihr Unternehmen optimal für die Zukunft aufzustellen.",
  },
];

const casestudies = [
  {
    company: "Munich Marriott Hotel",
    title: `Mehr Interaktion mit dem Service und entlastung der Mitarbeiter und somit zufriedenere Gäste`,
    group: "Hotel",
    workers: "80",
    start: `Sollten Sie eine Veranstaltung planen, werden Sie unsere vielseitigen Veranstaltungsräumlichkeiten wie unseren großen Ballsaal schätzen. Dank unserer idealen Lage in Schwabing sind die Sehenswürdigkeiten Münchens, wie der Englische Garten schnell und einfach zu erreichen. Erleben Sie einen unvergesslichen Aufenthalt in unserem Hotel in München-Schwabing. Wir haben gezielt nach einer Lösung gesucht, die uns von unserem Comp-Set unterscheidet, da besonders in Schwabing in den vergangenen Jahren viele neue Tagungsflächen entstanden sind und wir bewusst auf Innovation setzen möchten. `,
    solution: `Die Größe und das Layout unseres Veranstaltungsbereichs ermöglicht es uns eine Vielzahl verschiedener Segmente zu bedienen. Ganz besonders wichtig dabei, auch die technische Ausstattung immer auf einem aktuelle Level zu halten und wann immer möglich einen Schritt weiter zu denken. Mit Beyond.Host haben wir genau das getan. Wir sind einen Schritt weiter gegangen, um unseren internationalen Gäste innovative und intuitive Kommutation in unserem Tagungsbereich bieten zu können. `,
    end: `Mitarbeiter und Gäste sind begeistert und haben Beyond.Host direkt vom ersten Tag an sehr gut angenommen.`,
    img: "/mc_logo_L.webp",
  },
  {
    company: "Felix Hotel Leipzig",
    title: `Mehr Interaktion mit dem Service und entlastung der Mitarbeiter und somit zufriedenere Gäste`,
    group: "Hotel",
    workers: "80",
    start: `Eine gute Zusammenarbeit direkt vom Start weg! Mit den modernen Event- und Tagungsflächen mit Panoramaverglasung, dem eindrucksvollen Blick über den gesamten Augustusplatz in Leipzig. Egal ob offener Konferenzsaal oder mehrere geschlossene Meetingräume: mobile Trennwände ermöglichen nahezu unbegrenzte Gestaltungsfreiheit. Eine großformatige Lichtkunstinstallation setzt Ihr Event individuell und stimmungsvoll in Szene.`,
    solution: `Diese Räumlichkeiten und Möglichkeiten schreien immer nach Innovation und so war es eine leichte Entscheidung unsere Kommunikation im Eventbereich neu zu denken und mit Beyond.Host zu arbeiten. Dadurch haben unsere Gäste neue Möglichkeiten der Interaktion während Ihrer Events und meine Mitarbeiter werden entlastet. `,
    end: `Beyond.Host ist ein tolles Beispiel für eine gelungene digitale Anwendung mit dem Fokus Kommunikation im Event Bereich neu zu denken!`,
    img: "/logo_felix.png",
  },
];

const process = [
  {
    title: "Analyse & Demo-Termin",
    points: [
      "Jedes Hotel ist individuell. Wir prüfen Ihre Situation und finden die versteckten Ursachen, die Ihre Effizienz gerade drosseln.",
      "Wir sehen auf Ihre komplexe Situation und identifizieren, an welchen Stellen Sie den größten Effekt in kurzer Zeit erzielen können.",
    ],
  },
  {
    title: "Konzeption & Beratung",
    points: [
      "Auf Grundlage der Analyse erstellen wir einen klar strukturierten Handlungsplan mit dem Ziel, Ihren Service für Tagungen produktiver zu gestalten.",
      "Bei der Erstellung unserer Strategie lassen wir unsere geballte Erfahrung mit einfließen, die wir in vielen Kundenprojekten gesammelt haben.",
    ],
  },
  {
    title: "Umsetzung & Training",
    points: [
      "Im Anschluss setzen wir die Strategie gemeinsam mit Ihnen um. Wir installieren die notwendige Hardware und schulen Ihre Mitarbeiter in dessen Umgang.",
      "Während des kompletten Prozesses können Sie sich sicher fühlen, weil wir diesen Weg bereits unzählige Male gegangen sind.",
      "Außerdem arbeiten wir maximal transparent und sprechen jeden Schritt mit Ihnen ab. So behalten Sie stets die volle Kontrolle.",
    ],
  },
];

const wollen = [
  "Wollen auch Sie ein gutes Gefühl haben, wenn Sie an Ihre Kennzahlen denken, weil Sie wissen, dass in Ihrem Tagungsraum alles reibungslos läuft?",
  "Möchten Sie das maximale Auslastung Ihrer Räumlichkeiten, die Effizienz Ihrer Mitarbeiter steigern und gleichzeitig unnötig verlorene Gäste eliminieren, sodass sich Ihr Ertrag in Ihrer monatlichen Auswertung sichtbar verbessert?",
  "Dann brauchen Sie ein maßgeschneidertes Tool, das Ihr Service Team befähigt, genau dort zu sein wo Gäste sie benötigen.",
  "Deshalb haben wir Beyond.Host aus der Branche für die Branche entwickelt.",
];

const blocks = [
  {
    text: `Beobachten Sie seit Längerem, dass in Ihrem Tagungsraum eigentlich viel mehr Potenzial steckt?`,
  },
  {
    text: `Das Problem ist, Sie wissen auch schon, an welchen Stellen es liegt, aber Ihr Service Team steht vor scheinbar unlösbaren Herausforderungen, da die Erfahrung fehlt und Anforderungen stetig steigen.`,
  },
  {
    text: `Dazu kommt der hohe Druck, weil Ihre Räume nicht ausgelastet werden. Wir unterstützen Sie mit Service auf den Punkt, da wir Ihr Team und Ihre Kunden verbinden und so keine Service-Anfrage unbeantwortet bleibt!`,
  },
  {
    text: `Der Fachkräftemangel macht Ihnen zu schaffen, da Ihr Service Team bereits unterbesetzt ist? Daher muss erst Recht die Produktivität erhöht und Ineffizienz eliminiert werden!`,
  },
  {
    text: `Außerdem müssten Sie dringend Ihr Ressourcenverteilung optimieren, weil die Kosten explodieren und Sie Ihre Zahlen aber profitabel halten wollen?`,
  },
  {
    text: `Sie stehen vor der Herausforderung, Ihre Tagungsräume digitalisieren zu wollen und benötigen Unterstützung das effizient und profitabel zu machen?`,
  },
];
