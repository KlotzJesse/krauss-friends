/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  CurrencyEuroIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useRef } from "react";

const resources = [
  { name: "Über uns", href: "/about-us", icon: UserGroupIcon },
  { name: "Jobs & Karriere", href: "#", icon: GlobeAltIcon },
  { name: "Ressourcen", href: "#", icon: BookmarkAltIcon },
  { name: "Webinars", href: "#", icon: DesktopComputerIcon },
];
const blogPosts = [
  {
    id: 1,
    name: "Boost your conversion rate",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80",
  },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
    preview:
      "Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.",
    imageUrl:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80",
  },
];

const solutions = [
  {
    name: "Coach Ausbildung",
    description: "Die Weiterentwicklung der Führungskraft zum Coach",
    href: "/coach-ausbildung",
    icon: AcademicCapIcon,
  },
  {
    name: "Verkaufstraining",
    description: "Für mehr Abschlüsse und Erfolg im (Neukunden) Verkauf",
    href: "/verkaufstraining",
    icon: CurrencyEuroIcon,
  },
  {
    name: "Online-Marketing-Training",
    description: "Websites vermarkten die auch wirklich Verkaufen",
    href: "/online-marketing-training",
    icon: DesktopComputerIcon,
  },
];

const benefits = [
  {
    name: "Tiefes Wissen aus 20 Jahren Erfahrung",
    href: "/coach-ausbildung",
  },
  {
    name: "Erkenntnisprozesse und Erlebnisübungen",
    href: "/verkaufstraining",
  },
  {
    name: "Arbeitssequenzen mit Praxisbezug",
    href: "/online-marketing-training",
  },
];

const madeFor = [
  {
    name: "Geschäftsführer",
    href: "/coach-ausbildung",
  },
  {
    name: "Verkaufsleiter",
    href: "/verkaufstraining",
  },
  {
    name: "Teamleiter",
    href: "/online-marketing-training",
  },
];

const industries = [
  {
    name: "Hersteller",
    href: "/coach-ausbildung",
  },
  {
    name: "Großhandel",
    href: "/verkaufstraining",
  },
  {
    name: "Verlag",
    href: "/online-marketing-training",
  },
  {
    name: "Pharma",
    href: "/online-marketing-training",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  const roo = useRef();
  return (
    <div className="fixed z-50 w-full">
      <>
        <div className="relative z-50 bg-white shadow">
          <div className="px-4 mx-auto max-w-7xl sm:px-6">
            <div className="flex items-center justify-between py-4 md:justify-start md:space-x-10">
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
                {/*<Popover.Button className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
  </Popover.Button>*/}
              </div>
              <Popover.Group as="nav" className="hidden space-x-10 md:flex">
                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                        )}
                      >
                        <span>Trainings</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 z-50 transform shadow-lg top-full">
                          <div
                            className="absolute inset-0 flex"
                            aria-hidden="true"
                          >
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-gray-50" />
                          </div>
                          <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                            <nav
                              className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                              aria-labelledby="topics-heading"
                            >
                              <h2 id="topics-heading" className="sr-only">
                                Training menu
                              </h2>
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Trainings
                                </h3>
                                <ul role="list" className="mt-5">
                                  {solutions.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center p-2 mt-5 -m-3 transition duration-150 ease-in-out rounded-lg first:mt-0 hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-lg sm:h-12 sm:w-12 bg-primary-100">
                                        <item.icon
                                          className="w-1/2 text-primary-300"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900">
                                          {item.name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                          {item.description}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Warum KRAUSS Training?
                                </h3>
                                <ul role="list" className="mt-5">
                                  {benefits.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center p-2 pt-5 pl-0 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 hover:text-gray-400">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                            <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Aus unserem Blog
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {blogPosts.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <a
                                        href={post.href}
                                        className="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                                      >
                                        <div className="flex-shrink-0 hidden sm:block">
                                          <img
                                            className="object-cover w-32 h-20 rounded-md"
                                            src={post.imageUrl}
                                            alt=""
                                          />
                                        </div>
                                        <div className="flex-1 min-w-0 sm:ml-8">
                                          <h4 className="text-base font-medium text-gray-900 truncate">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <a
                                  href="#"
                                  className="transition duration-150 ease-in-out text-secondary-500 hover:text-secondary-400"
                                >
                                  Alle Artikel ansehen{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <Popover>
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                        )}
                      >
                        <span>Branchen</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 -translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 -translate-y-1"
                      >
                        <Popover.Panel className="absolute inset-x-0 z-50 transform shadow-lg top-full">
                          <div
                            className="absolute inset-0 flex"
                            aria-hidden="true"
                          >
                            <div className="w-1/2 bg-white" />
                            <div className="w-1/2 bg-gray-50" />
                          </div>
                          <div className="relative grid grid-cols-1 mx-auto max-w-7xl lg:grid-cols-2">
                            <nav
                              className="grid px-4 py-8 bg-white gap-y-10 sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                              aria-labelledby="topics-heading"
                            >
                              <h2 id="topics-heading" className="sr-only">
                                Branchen menu
                              </h2>
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Gemacht für
                                </h3>
                                <ul role="list" className="mt-5">
                                  {madeFor.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center p-2 pt-5 pl-0 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 hover:text-gray-400">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Branchen
                                </h3>
                                <ul role="list" className="mt-5">
                                  {industries.map((item) => (
                                    <a
                                      key={item.name}
                                      href={item.href}
                                      className="flex items-center p-2 pt-5 pl-0 -m-3 transition duration-150 ease-in-out rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                                    >
                                      <div className="ml-4">
                                        <p className="text-sm font-medium text-gray-900 hover:text-gray-400">
                                          {item.name}
                                        </p>
                                      </div>
                                    </a>
                                  ))}
                                </ul>
                              </div>
                            </nav>
                            <div className="px-4 py-8 bg-gray-50 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Aus unserem Blog
                                </h3>
                                <ul role="list" className="mt-6 space-y-6">
                                  {blogPosts.map((post) => (
                                    <li key={post.id} className="flow-root">
                                      <a
                                        href={post.href}
                                        className="flex p-3 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-100"
                                      >
                                        <div className="flex-shrink-0 hidden sm:block">
                                          <img
                                            className="object-cover w-32 h-20 rounded-md"
                                            src={post.imageUrl}
                                            alt=""
                                          />
                                        </div>
                                        <div className="flex-1 min-w-0 sm:ml-8">
                                          <h4 className="text-base font-medium text-gray-900 truncate">
                                            {post.name}
                                          </h4>
                                          <p className="mt-1 text-sm text-gray-500">
                                            {post.preview}
                                          </p>
                                        </div>
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-6 text-sm font-medium">
                                <a
                                  href="#"
                                  className="transition duration-150 ease-in-out text-secondary-500 hover:text-secondary-400"
                                >
                                  Alle Artikel ansehen{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>

                <a
                  href="#"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Blog
                </a>

                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? "text-gray-900" : "text-gray-500",
                          "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-500"
                        )}
                      >
                        <span>Unternehmen</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "text-gray-600" : "text-gray-400",
                            "ml-2 h-5 w-5 group-hover:text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel className="absolute z-50 w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
                          <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                              {resources.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 w-6 h-6 text-secondary-500"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-secondary">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              ))}
                            </div>
                            <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                              <div>
                                <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                  Neuste Artikel
                                </h3>
                                <ul role="list" className="mt-4 space-y-4">
                                  {blogPosts.slice(0, 3).map((item) => (
                                    <li
                                      key={item.id}
                                      className="text-base truncate"
                                    >
                                      <a
                                        href={item.href}
                                        className="font-medium text-gray-900 hover:text-gray-700"
                                      >
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-5 text-sm">
                                <a
                                  href="#"
                                  className="font-medium text-secondary-500 hover:text-secondary-400"
                                >
                                  {" "}
                                  Alle Artikel ansehen{" "}
                                  <span aria-hidden="true">&rarr;</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <div className="items-center justify-end hidden md:flex md:flex-1 lg:w-0">
                {/*<a
                    href="#"
                    className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
                  >
                    Sign in
                  </a>*/}
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-4 py-2 ml-8 text-base font-medium text-white border border-transparent rounded-md shadow-sm whitespace-nowrap bg-secondary-500 hover:bg-secondary-600"
                >
                  Kostenlose Potenzialanalyse
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* MOBILE DROPDOWN */}
      </>
    </div>
  );
}
