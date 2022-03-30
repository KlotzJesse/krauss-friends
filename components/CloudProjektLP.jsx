/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  CheckIcon,
  CursorClickIcon,
  GlobeIcon,
  LockOpenIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  RefreshIcon,
  ShieldCheckIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import { Fragment, useRef } from "react";
import { openPopupWidget } from "react-calendly";

const features = [
  {
    name: "Analytics",
    href: "#",
    description:
      "Get a better understanding of where your traffic is coming from.",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    href: "#",
    description: "Speak directly to your customers in a more meaningful way.",
    icon: CursorClickIcon,
  },
  {
    name: "Security",
    href: "#",
    description: "Your customers' data will be safe and secure.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    href: "#",
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: "Automations",
    href: "#",
    description:
      "Build strategic funnels that will drive your customers to convert",
    icon: RefreshIcon,
  },
];
const resources = [
  {
    name: "Unsere Methode",
    anchor: "method",
  },
  {
    name: "Vorteile",
    anchor: "vorteile",
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

  const header = useRef();

  return (
    <div className="relative bg-gray-50 scroll-smooth">
      <div className="relative overflow-hidden">
        <Popover className="fixed top-0 left-0 w-full z-20 bg-white shadow">
          <div ref={header} className="px-4 mx-auto max-w-5xl sm:px-6 ">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a href="#">
                  <span className="sr-only">KRAUSS Training</span>
                  <img
                    className="w-auto h-8 sm:h-10"
                    src="/KRAUSS Logo Blau.svg"
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
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white bg-secondary-500 border border-transparent whitespace-nowrap hover:bg-secondary-600"
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
              <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
                <div className="px-5 pt-5 pb-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="w-auto h-8"
                        src="/KRAUSS Blau Logo.svg"
                        alt="KRAUSS Training"
                      />
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
                      {features.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-3 -m-3 rounded-md hover:bg-gray-50"
                        >
                          <item.icon
                            className="flex-shrink-0 w-6 h-6 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>
                <div className="px-5 py-6 space-y-6">
                  <div>
                    <a
                      href="#"
                      className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-base font-medium text-center text-gray-500">
                      Existing customer?{" "}
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main className="lg:relative h-full">
          <img
            className="absolute top-0 left-0 object-cover w-full h-full"
            src="https://i.postimg.cc/PxRFMZgn/Design-ohne-Titel-13.png"
            alt=""
          />
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>
          <div className="relative z-10 w-full pt-16 pb-20 mx-auto text-center max-w-5xl lg:pt-36 lg:text-left sm:px-6 px-4">
            <h1 className="text-2xl font-medium tracking-tight  text-secondary-500">
              Für Vertriebs- und Verkaufsleiter:
            </h1>
            <p className="text-[2.6em] font-bold tracking-tight pt-5">
              Mehr Abschlüsse und Neukunden durch ein hochmotiviertes
              Vertriebsteam.
            </p>
            <div className="flex space-x-10 pt-5 w-full">
              <div className="w-[60%]">
                <img
                  src="https://a.storyblok.com/f/141545/1920x1080/eb6dacdfff/krauss-interview.jpg"
                  className="shadow-xl"
                />
              </div>
              <div className="w-[40%]">
                <ul className="list-reset text-black mb-8 text-grey-darker rounded">
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                    <p>
                      <b className="underline">Höhere Abschlussquoten</b>, weil
                      wir Ihre Mitarbeiter zu professionellen
                      &quot;Verkaufstalenten&quot; machen
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />

                    <p>
                      <b className="underline">
                        Steigerung der Gesamtperformance
                      </b>
                      , da Sie nicht mehr abhängig von einzelnen Superstars im
                      Team sind.
                    </p>
                  </li>
                  <li className="flex items-center mb-3">
                    <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                    <p>
                      <b className="underline">Mehr Neukunden</b>, da Wachstum
                      bedeutet, mehr Kunden zu gewinnen als zu verlieren
                    </p>
                  </li>
                </ul>
                <button
                  onClick={onClick}
                  className="bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full"
                >
                  <span className="text-[1.375em] font-bold">
                    Jetzt Erstgespräch sichern!
                  </span>
                  <span className="block text-gray-200 font-medium">
                    kostenfrei & unverbindlich
                  </span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className=" bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto text-center pb-20 pt-20">
          <h2 className="text-[1.75em] font-semibold">
            Haben auch Sie das Gefühl, in Ihrem Betrieb müsste eine Veränderung
            geschehen, allerdings wissen Sie nicht genau, wie Sie vorgehen
            sollen?
          </h2>
          <div className="py-7">
            <hr className="mx-auto border-t border-secondary-500 border-[5px] w-[125px]" />
          </div>
          <p className="text-[1.375em] max-w-3xl mx-auto">
            Als Geschäftsführer, Verkaufsleiter und Vertriebsleiter kommen Ihnen
            die folgenden Punkte sicherlich bekannt vor:
          </p>
          <div className="pt-10 grid grid-cols-3 gap-10">
            {blocks.map(function (block, index) {
              return (
                <div
                  key={index}
                  className="bg-white text-black text-center align-middle py-10 px-5 relative"
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
              className="bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
              </span>
              <span className="block text-gray-200 font-medium">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <img
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="https://i.postimg.cc/SKtwgw9P/Design-ohne-Titel-14.png"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white"></div>
        <div className="relative max-w-5xl mx-auto">
          <div className="max-w-3xl py-20">
            <h2 id="vorteile" className="text-[2.1875em] font-semibold">
              Der Vertrieb ist der elementare Motor Ihres Unternehmens
            </h2>
            <p className="text-[1.375em] pt-3">
              Aus diesem Grund ist die Verantwortung, die Sie haben, sehr groß.
            </p>
            <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-3"></hr>
            <ul className="list-reset text-black mb-8 text-grey-darker rounded text-[1.0625em] pt-10">
              {wollen.map((will) => {
                return (
                  <li key={will} className="flex items-center mb-3">
                    <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
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
        <div className="max-w-5xl mx-auto py-20">
          <h2 id="method" className="text-[2.1875em] font-semibold">
            So läuft Ihr Vertrieb wie ein Uhrwerk, in dem jeder Prozess
            reibungslos aufeinander abgestimmt ist
          </h2>
          <hr className="border-t border-secondary-500 border-[4px] w-[125px] mx-auto mt-7"></hr>
          <p className="text-[1.25em] pt-7">
            Eine Zusammenarbeit mit uns setzt sich aus einem erfolgserprobten
            3-Stufen-Prozess zusammen:
          </p>
          <div className="grid grid-cols-3 gap-10 text-left pt-20">
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
                          <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
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
        <div className="relative h-[350px] -mt-48 bg-[url('https://i.postimg.cc/fyWmkg2w/Design-ohne-Titel-15.png')]">
          <div className="absolute top-0 left-0 w-full h-full bg-slate-900 opacity-80"></div>
          <button
            onClick={onClick}
            className="relative top-1/2 bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full max-w-3xl mx-auto mt-10"
          >
            <span className="text-[1.5625em] font-medium">
              Fragen Sie jetzt ein unverbindliches Erstgespräch an!
            </span>
          </button>
        </div>
      </div>
      <div className="text-center">
        <div className="max-w-5xl mx-auto py-20">
          <h2 id="customers" className="text-[2.1875em] font-semibold">
            3 Erfolgsgeschichten von Verkaufsteams, die in einer ähnlichen Lage
            waren, wie Sie es gerade sind
          </h2>
          <hr className="border-t border-secondary-500 border-[4px] w-[125px] mx-auto mt-7"></hr>
          {casestudies.map((study, index) => {
            return (
              <div key={study.company} className=" relative text-left pt-20">
                <div className=" absolute top-0 -left-36 text-[12.5em] italic font-semibold text-gray-200">
                  {index + 1}
                </div>
                <div className="flex items-center">
                  <div>
                    <h3 className="text-[1.25em] font-semibold text-secondary-500">
                      {study.company}
                    </h3>
                    <p className="text-[1.5625em] font-semibold pt-2">
                      {study.title}
                    </p>
                    <ul className="list-reset text-black mb-8 text-grey-darker rounded text-[1.0625em] pt-10">
                      <li className="flex items-center mb-3">
                        <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                        <p>
                          <strong>Branche:</strong> {study.group}
                        </p>
                      </li>
                      <li className="flex items-center mb-3">
                        <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                        <p>
                          <strong>Mitarbeiterzahl:</strong> {study.workers}
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <img src={study.img} className="h-[300px]" />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-10">
                  <div className="bg-white">
                    <span className="bg-gray-500 block pl-3 py-2 text-white font-semibold">
                      Ausgangssituation:
                    </span>
                    <p className="px-3 py-3">{study.start}</p>
                  </div>
                  <div className="bg-white">
                    <span className="bg-gray-700 block pl-3 py-2 text-white font-semibold">
                      Lösung:
                    </span>
                    <p className="px-3 py-3">{study.solution}</p>
                  </div>
                  <div className="bg-white">
                    <span className="bg-secondary-500 block pl-3 py-2 text-white font-semibold">
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
              className="bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
              </span>
              <span className="block text-gray-200 font-medium">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-5xl mx-auto py-20 ">
          <h2 id="about-us" className="text-[2.1875em] font-semibold">
            KRAUSS Training
          </h2>
          <p className="text-[1.5625em]">
            Umsetzungsstarke Beratung für Produktions- und Logistikunternehmen
          </p>
          <hr className="border-t border-secondary-500 border-[3px] w-[125px] mt-10"></hr>
          <div className="flex space-x-10 pt-10">
            <div className="text-[1.0625em] w-1/2">
              <p>
                In einer Zusammenarbeit mit uns bekommen Sie genau die
                Erfahrungen, die Sie benötigen: Für namhafte Marken betreiben
                wir seit vielen Jahren in unserem Vertriebsteam die tägliche
                Terminvereinbarung in der Neukundenakquise. Und deshalb glauben
                wir zu wissen was die Herausforderungen jetzt und zukünftig sein
                werden - Wir leben Vertrieb.
              </p>
              <p className="pt-5">
                <span className="underline">Unser Erfolgsgarantie:</span> Wir
                motivieren & trainieren Ihr Team in echten Praxis Situationen
                auch außerhalb des Seminarraums und machen Erfolg erlebbar. Die
                gewonnen Erkenntnisse aus der Übung machen Lust auf
                Verhaltensänderungen.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="https://www.krauss-gmbh.com/app/download/14507845733/IMG_2386+%281%29.jpg?t=1636713958"
                className="aspect-video object-cover"
              />
            </div>
          </div>
          <div className="flex space-x-10 pt-10">
            <div className="w-2/4">
              <img
                src="https://www.krauss-gmbh.com/app/download/14507852333/_DSC4442.JPG?t=1636714258"
                className="aspect-square object-cover"
              />
            </div>
            <div>
              <h2 className="text-[1.5625em] font-semibold">
                Unsere Kunden schätzen an uns besonders:
              </h2>
              <ul className="list-reset text-black mb-8 text-grey-darker rounded pt-5">
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                  <p>
                    Unsere Trainingsmethoden gewährleisten Wissensaufbau durch
                    systemische Arbeitssequenzen.
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />

                  <p>
                    Der Wissenstransfer reduziert sich auf das Wesentliche und
                    ist sofort für die Praxis nutzbar.
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                  <p>
                    die Art & Weise, wie wir Dinge angehen: Wir erzielen
                    messbare Ergebnisse, weil wir praxis- & erfolgsorientiert
                    arbeiten.
                  </p>
                </li>
                <li className="flex items-center mb-3">
                  <CheckIcon className="flex-none w-7 mr-2 text-secondary-500 " />
                  <p>
                    Ihr Vertrieb hat die Möglichkeit sofort seine Leistung zu
                    verdoppeln.
                  </p>
                </li>
              </ul>

              <button
                onClick={onClick}
                className="bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full"
              >
                <span className="text-[1.125em] font-medium">
                  Hier klicken, um uns persönlich kennenzulernen!
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:relative h-full">
        <img
          className="absolute top-0 left-0 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-white opacity-90"></div>
        <div className="relative z-10 w-full pt-16 pb-20 mx-auto text-center max-w-5xl lg:py-48 sm:px-6 px-4">
          <h1 className="text-[2.1875em] font-semibold tracking-tight">
            Für Vertriebs- und Verkaufsleiter:
          </h1>
          <div className="grid grid-cols-3 gap-10 pt-10">
            {steps.map((step, index) => {
              return (
                <div key={index} className="bg-white shadow-xl py-5 pb-10 px-5">
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
              className="bg-secondary-500 px-10 py-3 text-white transform hover:scale-110 transition-all ease-in-out duration-300 w-full"
            >
              <span className="text-[1.375em] font-bold">
                Jetzt Erstgespräch sichern!
              </span>
              <span className="block text-gray-200 font-medium">
                kostenfrei & unverbindlich
              </span>
            </button>
          </div>
        </div>
      </div>
      <footer className="bg-slate-900 text-white">
        <div className="grid grid-cols-3 max-w-5xl mx-auto py-14">
          <div>
            <img src="/KRAUSS Logo Blau - Hell Negativ.svg" className="w-3/4" />
          </div>
          <div className="flex flex-col">
            <p className="text-[1.25em] font-semibold pb-2">Informationen</p>
            <a
              href="https://www.krauss-friends.com/about"
              className="text-[1.0625em] w-fit"
            >
              <GlobeIcon className="h-5 inline-block mr-2 text-secondary-500" />
              Impressum
            </a>
            <a
              href="https://www.krauss-friends.com/j/privacy"
              className="text-[1.0625em] w-fit"
            >
              <LockOpenIcon className="h-5 inline-block mr-2 text-secondary-500" />
              Datenschutz
            </a>
          </div>
          <div className="flex flex-col">
            <p className="text-[1.25em] font-semibold pb-2">Kontakt</p>
            <a href="tel:+49 8191 93759-23" className="text-[1.0625em] w-fit">
              <PhoneIcon className="h-5 inline-block mr-2 text-secondary-500" />
              +49 8191 93759-23
            </a>
            <a
              href="mail:info@krauss-friends.com"
              className="text-[1.0625em] w-fit"
            >
              <MailIcon className="h-5 inline-block mr-2 text-secondary-500" />
              info@krauss-friends.com
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
    title: "Beratung",
    description:
      "Sie bekommen eine auf Ihre Situation angepasste Lösung, um Ihr Unternehmen optimal für die Zukunft aufzustellen.",
  },
];

const casestudies = [
  {
    company: "FVZ Convenience GmbH",
    title: `Steigerung des Umsatzes um 23 % durch Optimierung der
  Produktivität und der Flächenressourcen`,
    group: "HOGA Convenience Produkte",
    workers: "400",
    start: `Die Kapazitäten der apra-norm GmbH waren in den Produktions- und Logistikflächen maximal ausgelastet. Dadurch waren weitere Kundenaufträge sowie internes Wachstum nicht möglich.`,
    solution: `Durch eine optimale Prozess- und Layoutgestaltung und die Optimierung der bestehenden Flächenressourcen konnten wir die Unternehmensentwicklung nachhaltig verbessern.`,
    end: `Dadurch hat sich nicht nur die wirtschaftliche Situation der Firma verbessert, sondern auch die vertrauensvolle Kooperation mit den Mitarbeitern nachhaltig weiterentwickelt.`,
    img: "/fvz-convenience-gmbh-logo-vector.svg",
  },
  {
    company: "HOLMER Maschinenbau GmbH",
    title: `Umsetzung einer hocheffizienten Werksstrukturplanung`,
    group: "Maschinenbau",
    workers: "400",
    start: `Die HOLMER Maschinenbau GmbH hat 2017 ein neues Grundstück erworben. Die Herausforderung war vor allem die fehlende innerbetriebliche Erfahrung bei der Umsetzung einer Werksstrukturplanung.`,
    solution: `Nach intensiver Gegenüberstellung unterschiedlicher Strukturkonzepte konnte die Entscheidung für den ersten Bauabschnitt in Form des HOLMER Logistikzentrums getroffen werden.`,
    end: `Durch eine kooperative Zusammenarbeit in den letzten 5 Jahren konnten wir insbesondere Wachstums- und Optimierungspotenziale durch kompakte Produktions- und Logistiksysteme realisieren.`,
    img: "https://beratung.bowa-consulting.de/wp-content/uploads/2022/03/3.png",
  },
];

const process = [
  {
    title: "Analyse",
    points: [
      "Jedes Unternehmen ist individuell. Wir prüfen Ihre Situation und finden die versteckten Ursachen, die Ihre Effizienz gerade drosseln.",
      "Als erfahrene Trainer blicken wir mit einer Vogelperspektive auf Ihre komplexe Situation und sehen deshalb nachweislich und schnell, an welchen Stellen Sie den größten Effekt in kurzer Zeit erzielen können.",
    ],
  },
  {
    title: "Konzeption",
    points: [
      "Auf Grundlage der Potenzialanalyse erstellen wir einen klar strukturierten Handlungsplan mit dem Ziel, Ihre Wettbewerbsfähigkeit als Unternehmen zu erhöhen.",
      "Bei der Erstellung unserer Strategie lassen wir unsere geballte Erfahrung mit einfließen, die wir in über 980 Kundenprojekten gesammelt haben.",
    ],
  },
  {
    title: "Umsetzung",
    points: [
      "Im Anschluss setzen wir die Strategie gemeinsam mit Ihnen um.",
      "Während des kompletten Prozesses können Sie sich sicher fühlen, weil wir diesen Weg bereits unzählige Male gegangen sind.",
      "Außerdem arbeiten wir maximal transparent und sprechen jeden Schritt mit Ihnen ab. So behalten Sie stets die volle Kontrolle.",
    ],
  },
];

const wollen = [
  "Wollen auch Sie ein gutes Gefühl haben, wenn Sie an Ihre Kennzahlen denken, weil Sie wissen, dass in Ihrem Vertrieb alles reibungslos läuft?",
  "Möchten Sie das maximale Potenzial Ihres Vertriebs entfalten, die Effizienz Ihrer Mitarbeiter steigern und gleichzeitig unnötig verlorene Geschäfte eliminieren, sodass sich Ihr Ertrag in Ihrer monatlichen Auswertung sichtbar verbessert?",
  "Dann brauchen Sie ein maßgeschneidertes Training, das Ihrem Team die Tools zur Verfügung stellt, die auch wirklich zu mehr Abschlüssen führen.",
  "Zudem benötigen Sie einen glasklaren Schritt-für-Schritt-Plan, den Sie im Anschluss 1:1 umsetzen können.",
];

const blocks = [
  {
    text: `Beobachten Sie seit Längerem, dass in Ihrem Unternehmen und in
    Ihren Vertrieb eigentlich viel mehr Potenzial steckt?`,
  },
  {
    text: `Das Problem ist, Sie wissen auch schon, an welchen Stellen es liegt, aber Ihnen fehlt ein glasklarer Fahrplan, der Ihnen zeigt, wie Sie Ihr Vorhaben am besten umsetzen.`,
  },
  {
    text: `Dazu kommt der hohe Druck, weil Sie weniger Neukunden gewinnen als sie Bestandskunden verlieren. Es wird Zeit, dass Sie die Effizienz Ihres Vertriebs erhöhen.`,
  },
  {
    text: `Der Fachkräftemangel macht Ihnen zu schaffen, da Ihre Abteilungen bereits unterbesetzt sind? Daher muss erst Recht die Produktivität erhöht und Ineffizienz eliminiert werden!`,
  },
  {
    text: `Außerdem müssten Sie dringend Ihr Neukundengeschäft vergrößern, weil durch die Krise die Kundenzahl seit einiger Zeit zurückgeht und Sie Ihre Zahlen aber profitabel halten wollen?`,
  },
  {
    text: `Sie stehen vor der Herausforderung, Preisanpassungen erfolgreich durchzusetzen oder mehr Neukunden zu gewinnen und benötigen Unterstützung im Verkauf?`,
  },
];
