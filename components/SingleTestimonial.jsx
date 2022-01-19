import React from "react";

const stats = [
  { label: "Gegründet", value: "2021" },
  { label: "Eigene Erfahrung", value: "365 Tage im Jahr" },
  { label: "Zufriedene Teilnehmer", value: "über 1000" },
  { label: "Raised", value: "$25M" },
];

const logos = [
  {
    name: "Wiley-VCH",
    url: "/Wiley-VCH-Logo.svg",
  },
  {
    name: "Mirage",
    url: "https://tailwindui.com/img/logos/mirage-logo-gray-400.svg",
  },
  {
    name: "Tuple",
    url: "https://tailwindui.com/img/logos/tuple-logo-gray-400.svg",
  },
  {
    name: "Laravel",
    url: "https://tailwindui.com/img/logos/laravel-logo-gray-400.svg",
  },
  {
    name: "StaticKit",
    url: "https://tailwindui.com/img/logos/statickit-logo-gray-400.svg",
  },
  {
    name: "Workcation",
    url: "https://tailwindui.com/img/logos/workcation-logo-gray-400.svg",
  },
];

const SingleTestimonial = (props) => {
  return (
    <div>
      {/* Testimonial/stats section */}
      <div className="relative mt-20">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
          <div className="relative sm:py-16 lg:py-0">
            <div
              aria-hidden="true"
              className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen"
            >
              <div className="absolute inset-y-0 w-full bg-background-500 right-1/2 rounded-r-3xl lg:right-72" />
              <svg
                className="absolute -ml-3 top-8 left-1/2 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
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
                  width={404}
                  height={392}
                  fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
                />
              </svg>
            </div>
            <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
              {/* Testimonial card*/}
              <div className="relative pt-64 pb-10 overflow-hidden shadow-xl rounded-2xl">
                <img
                  className="absolute inset-0 object-cover w-full h-full"
                  src="/Vanessa Winde.jpg"
                  alt=""
                />
                <div className="absolute inset-0 bg-primary-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-600 via-primary-600 opacity-90" />{" "}
                <div className="relative px-8">
                  <div>
                    <img
                      className="h-12"
                      src="/Wiley-VCH-Logo.svg"
                      alt="Wiley-VCH"
                    />
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 w-8 h-8 transform -translate-x-3 -translate-y-2 text-primary-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Durch das praktische Erleben im Training „begreift“ man
                        Teamführung im wahrsten Sinne des Wortes. Eigene
                        Verhaltensweisen und Denkmuster werden einem bewusst.
                        Letztlich hilft das Training aus der Komfortzone
                        herauszukommen und das zahlt sich aus.
                      </p>
                    </div>

                    <footer className="mt-4">
                      <p className="text-base font-semibold text-primary-200">
                        Vanessa Winde, Commercial Manager bei Wiley-VCH
                      </p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          <div className="relative max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Mit dem Ziel, Teams zu stärken
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                  Der Schlüssel zu mehr Produktivität ist die Identifikation mit
                  der Aufgabe und dem Unternehmen. Zusammen mit der Motivation
                  sind sie die treibenden Kräfte, die über die Intensität des
                  freigesetzten Engagements entscheiden.
                </p>
                <p className="text-base leading-7">
                  Die Trainingsinhalte sind so praxisnah, dass es Ihnen sofort
                  gelingt, das Erlernte unmittelbar in Ihrem Führungsalltag
                  anzuwenden.
                </p>
                <p className="text-base leading-7">
                  Fördern Sie das Wachstum Ihrer Mitarbeiter und sichern Sie
                  sich somit Ihren persönlichen Erfolg
                </p>
              </div>
            </div>

            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="pt-6 border-t-2 border-gray-100"
                  >
                    <dt className="text-base font-medium text-gray-500">
                      {stat.label}
                    </dt>
                    <dd className="text-3xl font-extrabold tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a
                  href="#"
                  className="text-base font-medium text-secondary-500"
                >
                  Erfahren Sie mehr darüber, wie Sie als Führungskraft wachsen
                  können&nbsp;&rarr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logo cloud section */}
      <div className="mt-32">
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="lg:grid lg:grid-cols-2 lg:gap-24 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Das Vertrauen renommierter Erfolgsstories
              </h2>
              <p className="max-w-3xl mt-6 text-lg leading-7 text-gray-500">
                Die erfolgreichsten Führungskräfte wissen, dass man nicht
                einfach nur ein Seminar durchläuft und plötzlich keine
                Führungsfehler mehr macht.
              </p>
              <p className="max-w-3xl mt-6 text-base leading-7 text-gray-500">
                Führen ist ein Marathon und nur wer sich ständig damit
                beschäftigt motiviert seine Mitarbeiter Ihm und dem Unternehmen
                zu folgen.
              </p>
              <p className="max-w-3xl mt-6 text-base leading-7 text-gray-500">
                Dauerhaftes Training schafft die besten Bedingungen Weltmeister
                zu werden und Könige zu entwickeln, die Ihnen selbst zu
                Bestleistungen verhelfen.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="text-base font-medium text-secondary-500"
                >
                  Werden Sie zu Ihrer eigenen Erfolgsstory&nbsp;&rarr;
                </a>
              </div>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex justify-center col-span-1 px-8 py-8 text-gray-600 bg-gray-50"
                >
                  <img className="max-h-12" src={logo.url} alt={logo.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="relative mt-24 sm:mt-32 sm:py-16">
        <div aria-hidden="true" className="hidden sm:block">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50 rounded-r-3xl" />
          <svg
            className="absolute -ml-3 top-8 left-1/2"
            width={404}
            height={392}
            fill="none"
            viewBox="0 0 404 392"
          >
            <defs>
              <pattern
                id="8228f071-bcee-4ec8-905a-2a059a2cc4fb"
                x={0}
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
              width={404}
              height={392}
              fill="url(#8228f071-bcee-4ec8-905a-2a059a2cc4fb)"
            />
          </svg>
        </div>
        <div className="max-w-md px-4 mx-auto sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="relative px-6 py-10 overflow-hidden shadow-xl rounded-2xl bg-primary-500 sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0"
            >
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 1463 360"
              >
                <path
                  className="text-primary-400 text-opacity-40"
                  fill="currentColor"
                  d="M-82.673 72l1761.849 472.086-134.327 501.315-1761.85-472.086z"
                />
                <path
                  className="text-primary-600 text-opacity-40"
                  fill="currentColor"
                  d="M-217.088 544.086L1544.761 72l134.327 501.316-1761.849 472.086z"
                />
              </svg>
            </div>
            <div className="relative">
              <div className="sm:text-center">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  Vereinbare jetzt ein unverbindliches Strategiegespräch
                </h2>
                <p className="max-w-2xl mx-auto mt-6 text-lg text-primary-100">
                  Hinterlass uns deine Kontaktdaten und wir melden uns mit einem
                  Terminvorschlag so schnell wie möglich zurück.
                </p>
              </div>
              <form action="#" className="mt-12 sm:mx-auto sm:max-w-lg sm:flex">
                <div className="flex-1 min-w-0">
                  <label htmlFor="cta-email" className="sr-only">
                    Email Adresse
                  </label>
                  <input
                    id="cta-email"
                    type="email"
                    className="block w-full px-5 py-3 text-base text-gray-900 placeholder-gray-500 border border-transparent rounded-md shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500"
                    placeholder="Gebe hier deine E-Mail ein"
                  />
                </div>
                <div className="mt-4 sm:mt-0 sm:ml-3">
                  <button
                    type="submit"
                    className="block w-full px-5 py-3 text-base font-medium text-white bg-gray-900 border border-transparent rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 sm:px-10"
                  >
                    Termin anfragen
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SingleTestimonial.propTypes = {};

export default SingleTestimonial;
