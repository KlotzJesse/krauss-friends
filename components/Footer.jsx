import Image from "next/image";
import React from "react";

const Footer = (props) => {
  return (
    <div className="px-4 pt-16 mx-auto md:px-24">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <a
            href="#"
            aria-label="Zur Startseite"
            title="KRAUSS and Friends"
            className="inline-flex items-center"
          >
            <Image
              src="https://i.ibb.co/1Xn3thH/Krauss-Logo-gen-HKS-47-K-RGB-2000px-72dpi.png"
              width="128"
              alt="Logo"
              height="43"
            />
          </a>
          <div className="mt-6 lg:max-w-sm">
            <p className="text-sm text-gray-800">
              Wir sind der Trainings- und Consultingspezialist für eine bessere
              Performance in der Entwicklung von Unternehmenswachstum.
            </p>
            <p className="mt-4 text-sm text-gray-800">
              Es sind erfolgreiche Menschen, die Unternehmen verändern.
            </p>
          </div>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-base font-bold tracking-wide text-gray-900">
            Kontakt
          </p>
          <div className="flex">
            <p className="mr-1 text-gray-800">Telefon:</p>
            <a
              href="#"
              aria-label="Unser Telefon"
              title="Unser Telefon"
              className="transition-colors duration-300 text-purple-accent-400 hover:text-purple-800"
            />
            <a href="tel:+4981919375900">+49 8191 93759-00</a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">E-Mail:</p>
            <a
              href="mailto:info@krauss-friends.com"
              aria-label="Unsere Email"
              title="Unsere Email"
              className="transition-colors duration-300 text-purple-accent-400 hover:text-purple-800"
            >
              info@krauss-friends.com
            </a>
          </div>
          <div className="flex">
            <p className="mr-1 text-gray-800">Adresse:</p>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Unsere Adresse"
              title="Unsere Adresse"
              className="transition-colors duration-300 text-purple-accent-400 hover:text-purple-800"
            >
              Ohmstraße 8<br />
              86899 Landsberg am Lech
            </a>
          </div>
        </div>
        <div>
          <span className="text-base font-bold tracking-wide text-gray-900">
            Social
          </span>
          <div className="flex items-center mt-1 space-x-3">
            <a
              href="https://www.linkedin.com/company/krauss-and-friends-gmbh"
              className="text-gray-500 transition-colors duration-300 hover:text-purple-400"
            >
              <svg fill="currentColor" className="h-5" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Sie möchten zu wichtigen Themen rundum Vertrieb, Führung und Online
            Marketing mehr erfahren? Folgen Sie uns auf Social Media
          </p>
        </div>
      </div>
      <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">
          © Copyright 2011-2022 KRAUSS AND FRIENDS. All rights reserved.
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
          <li>
            <a
              href="https://www.krauss-friends.com/about"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Impressum
            </a>
          </li>
          <li>
            <a
              href="https://www.krauss-friends.com/j/privacy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Datenschutzerklärung
            </a>
          </li>
          <li>
            <a
              id="cookie-policy"
              className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
            >
              Cookie-Richtlinie
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
