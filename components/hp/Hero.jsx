/* This example requires Tailwind CSS v2.0+ */
import { Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BookmarkAltIcon,
  CurrencyEuroIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  MenuIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";

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
    description: "Create your own targeted content",
    href: "/verkaufstraining",
    icon: CurrencyEuroIcon,
  },
  {
    name: "Online-Marketing-Training",
    description: "Websiten vermarkten die auch wirklich Verkaufen",
    href: "/online-marketing-training",
    icon: DesktopComputerIcon,
  },
];

const benefits = [
  {
    name: "Coach Ausbildung",
    description: "Die Weiterentwicklung der Führungskraft zum Coach",
    href: "/coach-ausbildung",
    icon: AcademicCapIcon,
  },
  {
    name: "Verkaufstraining",
    description: "Create your own targeted content",
    href: "/verkaufstraining",
    icon: CurrencyEuroIcon,
  },
  {
    name: "Online-Marketing-Training",
    description: "Websiten vermarkten die auch wirklich Verkaufen",
    href: "/online-marketing-training",
    icon: DesktopComputerIcon,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Hero() {
  return (
    <Popover className="z-50 fixed w-full">
      {({ open }) => (
        <>
          <div className="relative z-50 bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                  <a href="#">
                    <span className="sr-only">KRAUSS Training</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="/markup-cropped (1).svg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
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
                          <span>Über uns</span>
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
                          <Popover.Panel className="absolute left-1/2 z-50 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                {resources.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <item.icon
                                      className="flex-shrink-0 h-6 w-6 text-secondary-500"
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
                                  <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
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
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  {/*<a
                    href="#"
                    className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                  >
                    Sign in
                  </a>*/}
                  <a
                    href="#"
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-secondary-500 hover:bg-secondary-600"
                  >
                    Kostenlose Potenzialanalyse
                  </a>
                </div>
              </div>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute z-50 inset-x-0 transform shadow-lg">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="bg-white w-1/2" />
                <div className="bg-gray-50 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav
                  className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12"
                  aria-labelledby="topics-heading"
                >
                  <h2 id="topics-heading" className="sr-only">
                    Training menu
                  </h2>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Trainings
                    </h3>
                    <ul role="list" className="mt-5 space-y-6">
                      {solutions.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
                        >
                          <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12 bg-primary-100 rounded-lg">
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
                          className="flex items-center p-2 -m-3 pt-5 pl-0 transition duration-150 ease-in-out rounded-lg  focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-opacity-50"
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
                <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Aus unserem Blog
                    </h3>
                    <ul role="list" className="mt-6 space-y-6">
                      {blogPosts.map((post) => (
                        <li key={post.id} className="flow-root">
                          <a
                            href={post.href}
                            className="-m-3 p-3 flex rounded-lg hover:bg-gray-100 transition ease-in-out duration-150"
                          >
                            <div className="hidden sm:block flex-shrink-0">
                              <img
                                className="w-32 h-20 object-cover rounded-md"
                                src={post.imageUrl}
                                alt=""
                              />
                            </div>
                            <div className="min-w-0 flex-1 sm:ml-8">
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
                      className="text-secondary-500 hover:text-secondary-400 transition ease-in-out duration-150"
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
  );
}
