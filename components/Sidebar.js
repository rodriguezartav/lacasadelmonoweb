import React from "react";
import { Transition } from "@tailwindui/react";
import { useMutation } from "../data/Api";

export default function Sidebar(props) {
  const [email, setEmail] = React.useState("");
  const [mutate, state] = useMutation("leads");

  const onSend = () => {
    mutate({ email: email });
  };

  const renderForm = () => {
    return (
      <div className="flex-1 flex flex-col justify-between">
        <div className="px-4 divide-y divide-gray-200 sm:px-6">
          <div className="space-y-6 pt-6 pb-5">
            <p className="text-sm leading-5 text-burlywood-900">
              Join the mailing list and we'll let you know when we'll open.
            </p>
            <div className="space-y-1">
              <label
                htmlFor="project_name"
                className="block text-sm font-medium leading-5 text-gray-900"
              >
                Email
              </label>
              <div className="relative rounded-md shadow-sm">
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.currentTarget.value);
                  }}
                  id="project_name"
                  className="form-input block w-full sm:text-sm sm:leading-5 transition ease-in-out duration-150"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSuccess = () => {
    return (
      <div className="my-8 mx-8">
        <p className="text-lg leading-8 text-burlywood-800">
          Thank you! <br />
          We'll be in touch as soon as we have an opening date.
        </p>
      </div>
    );
  };

  return (
    <div
      className={`fixed z-50 inset-0 overflow-hidden ${
        props.open ? "" : "hidden"
      }`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <section className="absolute inset-y-0 pl-16 max-w-full right-0 flex">
          {/*
  Slide-over panel, show/hide based on slide-over state.

  Entering: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-full"
    To: "translate-x-0"
  Leaving: "transform transition ease-in-out duration-500 sm:duration-700"
    From: "translate-x-0"
    To: "translate-x-full"
*/}

          <Transition
            show={props.open}
            enter="transform transition ease-in-out duration-500 sm:duration-700"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500 sm:duration-700"
            leaveFrom="translate-x-0"
            leaveTo="ranslate-x-full"
          >
            {(ref) => (
              <div ref={ref} className="w-screen max-w-md">
                <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl">
                  <div className="flex-1 h-0 overflow-y-auto">
                    <header className="space-y-1 py-6 px-4 bg-burlywood-700 sm:px-6">
                      <div className="flex items-center justify-between space-x-3">
                        <h2 className="text-lg leading-7 font-medium text-white">
                          Project in Maintenance
                        </h2>
                        <div className="h-7 flex items-center">
                          <button
                            onClick={props.onOpen}
                            aria-label="Close panel"
                            className="text-burlywood-200 hover:text-white transition ease-in-out duration-150"
                          >
                            <svg
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm leading-5 text-burlywood-300">
                          Hi, thanks for your interest. Our project is
                          undergoing maintenance and will open 2021.
                        </p>
                      </div>
                    </header>
                    {state.loaded && renderSuccess()}
                    {!state.loaded && renderForm()}
                  </div>
                  {!state.loaded && (
                    <div className="flex-shrink-0 px-4 py-4 space-x-4 flex justify-end">
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          onClick={props.onOpen}
                          type="button"
                          className="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        >
                          Cancel
                        </button>
                      </span>
                      <span className="inline-flex rounded-md shadow-sm">
                        <button
                          onClick={onSend}
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-burlywood-600 hover:bg-burlywood-500 focus:outline-none focus:border-burlywood-700 focus:shadow-outline-burlywood active:bg-burlywood-700 transition duration-150 ease-in-out"
                        >
                          Send Email
                        </button>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </Transition>
        </section>
      </div>
    </div>
  );
}
