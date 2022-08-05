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
import { trackGoal } from "fathom-client";
import { Fragment, useRef } from "react";

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
          <div ref={header} className="px-4 mx-auto max-w-7xl sm:px-6 ">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">Oscar Systems</span>
                  <img
                    className="w-auto h-8 sm:h-12"
                    src="/oscar.webp"
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
                        <img className="w-auto h-8" src="/oscar.webp" />
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
          <img
            className="absolute top-0 left-0 object-cover w-screen h-full"
            src="/bills.jpg"
          />
          <div className="absolute top-0 left-0 w-screen h-full bg-white opacity-90"></div>
          <div className="relative z-10 grid w-full grid-cols-2 px-4 pt-24 pb-20 mx-auto text-center max-w-7xl lg:pt-36 lg:text-left sm:px-6">
            <div className="">
              <h1 className="font-medium tracking-tight md:text-2xl text-secondary-500">
                Für Wirtschaftsprüfer:
              </h1>
              <p className="text-xl md:text-[2.6em] font-bold tracking-tight pt-5 md:leading-10">
                Wie Sie als Wirtschaftsprüfer erfolgreich die Saldenbestätigung
                digitalisieren & vereinfachen!
              </p>

              <ul className="mt-10 mb-8 text-left text-black rounded list-reset text-grey-darker">
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    <b className="underline">Kosten senken</b>, da Sie Ihre
                    Kanzlei und Ihre Mandanten bei der Saldenbestätigung
                    entlasten
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    <b className="underline">Zeit sparen</b>, da sich der
                    Prozess auf 3-5 Tage verkürzt
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />

                  <p>
                    <b className="underline">Alleinige Kontrolle</b>, da Ihre
                    Saldenbestätigung nur von Ihnen verfügbar ist
                  </p>
                </li>
              </ul>
            </div>
            <div className="order-first md:order-none ">
              <div className="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
                <div className="px-4 py-8 sm:px-10">
                  <div>
                    <p className="text-3xl font-medium text-center text-gray-700">
                      Jetzt Erstgespräch sichern!
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
                      onSubmit={() => {
                        trackGoal("0CNLDECK", 0);
                      }}
                      className="space-y-6"
                    >
                      <input
                        type="hidden"
                        name="_next"
                        value="https://oscar.mysolutionfinder.de/thanks/oscar"
                      ></input>
                      <input
                        type="hidden"
                        name="_subject"
                        value="Oscar Terminanfrage (Oscar)"
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
                          placeholder="Name"
                          required
                          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-secondary-500 focus:border-secondary-500 sm:text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="company" className="sr-only">
                          Firma
                        </label>
                        <input
                          type="text"
                          name="company"
                          id="company"
                          autoComplete="organization"
                          placeholder="Firma"
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
                            className="w-full py-3 text-white transition-all duration-300 ease-in-out transform px-7 bg-secondary-500 hover:scale-110"
                          >
                            <span className="text-[1.375em] font-bold">
                              Jetzt Erstgespräch sichern!
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
                      href="https://www.krauss-gmbh.com/j/privacy"
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
        </main>
      </div>
      <div className="text-white bg-slate-900">
        <div className="max-w-5xl px-10 pt-20 pb-20 mx-auto text-center">
          <p className="text-[1.75em] font-semibold">
            Als <u>Wirtschaftsprüfer</u> kommen Ihnen die folgenden Punkte
            sicherlich bekannt vor:
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
          src="/bills.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 hidden w-full h-full md:block bg-gradient-to-r from-white via-white"></div>
        <div className="relative max-w-5xl mx-auto text-center md:text-left">
          <div className="max-w-3xl py-20">
            <h2 className="text-2xl md:text-[2.1875em] font-semibold">
              Sie sparen pro Vorgang bis zu 992 Euro an Zeit, Material,
              Personal- und sonstigen Kosten
            </h2>
            <p className="text-md md:text-[1.375em] pt-3">
              für beliebig viele Saldenbestätigungsaktionen
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
              von der Ermittlung der Stichprobe über den Versand der
              Bestätigungsanfrage, die Verarbeitung der Rückantwort bis zur
              sicheren digitalen Dokumentation aller erforderlichen Daten.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="max-w-6xl px-10 py-20 mx-auto">
          <h2
            id="method"
            className="text-2xl md:text-[2.1875em] leading-normal font-semibold"
          >
            So läuft Ihre Saldenbestätigung wie ein Uhrwerk, in dem jeder
            Prozess reibungslos aufeinander abgestimmt ist
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
      {/*<div className="text-center">
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
        </div>*/}
      <div className="bg-white">
        <div className="max-w-5xl px-10 py-20 mx-auto">
          <h2
            id="about-us"
            className="text-2xl md:text-[2.1875em] font-semibold"
          >
            Oscar Audit Software
          </h2>
          <p className="text-[1.5625em]">
            Schnell. Sicher. Digital. Einfach oscar.
          </p>
          <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-10"></hr>
          <div className="flex flex-col pt-10 space-y-10 md:space-x-10 md:space-y-0 md:flex-row">
            <div className="text-[1.0625em] md:w-1/2">
              <p>
                oscar ist aus der Idee entstanden, ein einfach zu bedienendes
                Portal für Wirtschaftprüfer*innen zu entwickeln, das die
                Auswahl, Einholung und Dokumentation der
                Saldenbestätigungsanfragen digital abwickelt und ohne
                Installation und Schulungsaufwand in den Workflow der
                Jahresabschlussprüfung implementiert werden kann.
              </p>
              <p className="pt-5">
                <span className="underline">Unser Erfolgsgarantie:</span> Durch
                die Nutzung von oscar sparen Sie und der Mandant Ressourcen ein.
                Insbesondere kann der Mandant den Fortschritt der Prüfung
                verfolgen. Dateien und Dokumente werden zentral abgelegt. Der
                Download für die Dokumentation in der eigenen Prüfungssoftware
                ist möglich.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://le-cdn.website-editor.net/s/6f7e553b6c194b4798c336fa252f70c6/dms3rep/multi/opt/Ank-C3-BCndigung-WP-Tage-8ed59570-1152w.jpg?Expires=1661499087&Signature=iFjxqGv6soESi~9QVGwb0~zqqKUJXDkZuh8neffjgbFg1avUW7Wh7~Wu6RMjI4cDiyxv60~Sa-YrRSV6qzqWrPcykC29tJR~LmaISdrc-qiUXUvbAMKT37fUeR6CmdKpfRzS2f42oZavM0FlHnz6obIzGJsvA3V504tHKMuF8ajxjaApKp9rmEvA39f5GbsQ3rmDpbjeno1cAnUy7x4~uKxFwxZ7RqIVb4FdHrJcRMHuZrxJsCUhLMQLM-jxAzp3F~Uj6jchtpGzjiiCIDSI1O99XVZA~fhGhrbLbNmuPQhXalTUg-AIsHHO-G4A92Gd2HUz9uGuQHRx8uVtiBEe7w__&Key-Pair-Id=K2NXBXLF010TJW"
                className="object-cover aspect-video"
              />
            </div>
          </div>
          <div className="flex flex-col-reverse pt-10 md:flex-row md:space-x-10">
            <div>
              <h2 className="text-[1.5625em] font-semibold">
                Unsere Kunden schätzen an uns besonders:
              </h2>
              <ul className="pt-5 mb-8 text-black rounded list-reset text-grey-darker">
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    da unser gesamter Datentransfer verschlüsselt über deutsche
                    Server transportiert wird.
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />

                  <p>
                    das der Aufwand für Papier, Umschläge und doppeltes Porto
                    (Anschreiben plus frankiertes Rückkuvert entfällt)
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    das nur eine Jahresgebühr entsteht, es entfallen keine
                    versteckten Kosten
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none mr-2 w-7 text-secondary-500 " />
                  <p>
                    das qualifizierte Mitarbeiter endlich wieder für
                    qualifizierte Aufgaben eingesetzt werden können
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
            Für Wirtschaftsprüfer:
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
        <div className="grid max-w-5xl grid-cols-1 gap-10 px-10 mx-auto space-bet md:gap-0 md:grid-cols-2 py-14">
          <div className="flex flex-col">
            <p className="text-[1.25em] font-semibold pb-2">Informationen</p>
            <a
              href="https://www.krauss-gmbh.com/about"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <GlobeIcon className="inline-block h-5 mr-2 text-secondary-500" />
              Impressum
            </a>
            <a
              href="https://www.krauss-gmbh.com/j/privacy"
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
              href="mail:info@krauss-gmbh.com"
              target="_blank"
              rel="noreferrer"
              className="text-[1.0625em] w-fit"
            >
              <MailIcon className="inline-block h-5 mr-2 text-secondary-500" />
              info@krauss-gmbh.com
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
    title: "Oscar Audit einsetzen",
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
    title: "Kennenlernen & Demo-Termin",
    points: [
      "Wir prüfen Ihre Situation und finden die versteckten Ursachen, die Ihre Effizienz gerade drosseln.",
      "Wir sehen auf Ihre komplexe Situation und zeigen Ihnen, wie Sie Oscar Audit effektiv in kürzester Zeit einsetzen können.",
    ],
  },
  {
    title: "Einrichtung von Oscar bei Ihnen und Ihren Mandanten",
    points: [
      "10-Mal effizientere Bestätigungsaktionen. Entlasten Sie Ihre Mandanten, sparen Sie Zeit, dokumentieren Sie besser.",
      "oscar digitalisiert all diese Schritte und vereint Sie, den Wirtschaftsprüfer, Ihre Mandanten und deren Geschäftspartner (Kreditoren und Debitoren) auf einer Plattform.",
    ],
  },
  {
    title: "Los gehts mit der Saldenbestätigung",
    points: [
      "schnelle Möglichkeit für die Debitoren und Kreditoren, die Salden digital zu bestätigen",
      "Signifikante Effizienzsteigerung durch die Auswertungsmöglichkeiten aus oscar für die eigene Dokumentation der Prüfungshandlungen",
      "einfache Bedienung durch den Benutzer",
    ],
  },
];

const wollen = [
  "Wollen auch Sie ein gutes Gefühl haben, wenn Sie an Ihre Kennzahlen denken, weil Sie wissen, dass bei der Saldenbestätigung alles glatt läuft?",
  "Möchten Sie Kosten sparen, die Effizienz Ihrer Mitarbeiter steigern und gleichzeitig veraltete Prozesse eliminieren, sodass sich Ihr Ertrag in Ihrer monatlichen Auswertung sichtbar verbessert?",
  "Dann brauchen Sie ein maßgeschneidertes Tool, das Ihre Team befähigt, Salden schneller und einfacher zu bestätigen.",
  "Deshalb vereint Oscar Audit Sie als Wirtschaftsprüfer, Ihre Mandanten und deren Geschäftspartner (Kreditoren und Debitoren) auf einer Plattform.",
];

const blocks = [
  {
    text: `Beobachten Sie seit Längerem, dass das Einholen von Saldenbestätigungen mühsam und langwierig ist?`,
  },
  {
    text: `Das Problem ist, Sie wissen auch schon an welchen Stellen es liegt, denn bisher wird alles händisch und analog gemacht.`,
  },
  {
    text: `Dazu kommt der hohe Druck, weil Rückantworten oft ausbleiben.`,
  },
  {
    text: `Der Personalmangel macht Ihnen zu schaffen, da Ihr Wirtschaftsprüfungs Team bereits unterbesetzt ist? Daher muss erst Recht die Produktivität erhöht und Ineffizienz eliminiert werden!`,
  },
  {
    text: `Außerdem müssten Sie dringend Ihre Prozesse digitalisieren, weil die Kosten explodieren (ineffizienz durch Unterlagen + Anschreiben + frankiertes Rückkuvert + Umschlag) und Sie Ihre Zahlen aber profitabel halten wollen?`,
  },
  {
    text: `Sie stehen vor der Herausforderung, den gesamten Prozess der Saldenbestätigung zu digitalisieren und benötigen Unterstützung das effizient und profitabel zu machen?`,
  },
];
