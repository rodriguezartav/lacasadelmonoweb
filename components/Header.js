import React from "react";

export default function Header(props) {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#" aria-label="Home">
                    <img
                      className="h-28 w-auto sm:h-28 pt-5"
                      src="/logo.png"
                      alt="Logo"
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={() => {
                        debugger;
                        props.onOpen();
                      }}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      id="main-menu"
                      aria-label="Main menu"
                      aria-haspopup="true"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4"></div>
            </nav>
          </div>
          {/*
  Mobile menu, show/hide based on menu open state.

  Entering: "duration-150 ease-out"
    From: "opacity-0 scale-95"
    To: "opacity-100 scale-100"
  Leaving: "duration-100 ease-in"
    From: "opacity-100 scale-100"
    To: "opacity-0 scale-95"
*/}
          <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right hidden">
            <div className="rounded-lg shadow-md">
              <div
                className="rounded-lg bg-white shadow-xs overflow-hidden"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="main-menu"
              >
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-24 w-auto" src="/logo.png" alt />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={props.onOpen}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      aria-label="Close menu"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
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
                <div className="px-2 pt-2 pb-3">
                  <a
                    href="#"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Company
                  </a>
                </div>
                <div>
                  <a
                    href="#"
                    className="block w-full px-5 py-3 text-center font-medium text-burlywood-600 bg-gray-50 hover:bg-gray-100 hover:text-burlywood-700 focus:outline-none focus:bg-gray-100 focus:text-burlywood-700 transition duration-150 ease-in-out"
                    role="menuitem"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
          <main className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h2 className="text-3xl tracking-tight leading-10 font-bold text-darkseagreen-700 sm:text-4xl sm:leading-none md:text-5xl">
                Nature's retreat
                <br className=":hidden" />
                <span className="text-burlywood-700">
                  {" "}
                  for family & friends
                </span>
              </h2>
              <p className="mt-3 text-lg text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-2xl lg:mx-0">
                Feel like you're renting part of a national park all for
                yourself.
                <ul className="my-4 text-darkseagreen-600 text-sm uppercase">
                  <li className="my-2 ml-2">
                    Private beachfront lined with palmt rees and tide pools
                  </li>
                  <li className="my-2 ml-2">
                    Jungle with huge trees filled with wildlife
                  </li>
                  <li className="my-2 ml-2">
                    Boutique Accomodations for up to 25 guests
                  </li>
                  <li className="my-2 ml-2">
                    20+ onsite free natural and adventure activities
                  </li>
                </ul>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    onClick={() => {
                      props.onOpen();
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-burlywood-600 hover:bg-burlywood-500 focus:outline-none focus:border-burlywood-700 focus:shadow-outline-burlywood transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Click to call for free
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    onClick={() => {
                      props.onOpen();
                    }}
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-burlywood-700 bg-burlywood-100 hover:text-burlywood-600 hover:bg-burlywood-50 focus:outline-none focus:shadow-outline-burlywood focus:border-burlywood-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Whatsapp Chat
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://fundacionsaimiri.org/wp-content/uploads/2020/06/FundacionSaimiri-9-683x1024-1.jpg"
          alt
        />
      </div>
    </div>
  );
}
