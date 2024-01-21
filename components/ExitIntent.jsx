import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { createPopup } from "@typeform/embed";
import { trackGoal } from "fathom-client";
import React, { Fragment, useEffect, useState } from "react";
import { openPopupWidget } from "react-calendly";

const ExitIntent = ({ page, blok }) => {
  const useBeforeLeave = (onBefore) => {
    const handle = (event) => {
      const { clientY } = event;
      if (clientY <= 0) {
        onBefore();
      }
    };

    useEffect(() => {
      document.addEventListener("mouseleave", handle);
      return () => document.removeEventListener("mouseleave", handle);
    }, []);
  };

  var openedTimes = 0;

  const begForLife = () => {
    if (openedTimes < 1) {
      setIsOpen(true);
      openedTimes++;
    }
  };
  useBeforeLeave(begForLife);

  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

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

  function yes() {
    closeModal();
    onClick();
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <div className="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button
                    type="button"
                    className="text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => closeModal()}
                  >
                    <span className="sr-only">Close</span>
                    <XIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>
                <Dialog.Title
                  as="h3"
                  className="text-xl font-medium leading-6 text-gray-900"
                >
                  {blok.title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-gray-500 text-md">{blok.subHeadline}</p>
                  <p
                    className="text-gray-500 text-md"
                    dangerouslySetInnerHTML={{ __html: blok.description }}
                  ></p>
                </div>

                <div className="mt-4 space-x-5">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-green-900 bg-green-100 border border-transparent rounded-md hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-green-500"
                    onClick={yes}
                  >
                    {blok.button}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center text-sm text-gray-400 border border-transparent rounded-md font-base hover:text-gray-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={closeModal}
                  >
                    {blok.secondButton}
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ExitIntent;
