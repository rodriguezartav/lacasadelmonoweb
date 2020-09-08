import React from "react";

export default function Features(props) {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h3 className="mt-20 text-3xl leading-8 font-extrabold tracking-tight text-darkseagreen-700 sm:text-4xl sm:leading-10">
            The Osa Peninsula of Costa Rica
          </h3>

          <p className="mt-4 mb-20 max-w-3xl text-xl leading-8 text-gray-500 lg:mx-auto">
            Home of Corcovado National Park and Golfo Dulce. Nowhere on earth
            can you experience such density of wildlife any time of the year.
            The pristine ocean, the jungle, the sound it's simply stunning - and
            yet it's so accesible.
          </p>
        </div>
        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
            <li>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burlywood-500 text-white">
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
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-darkseagreen-900">
                    All activities and equipment are included
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Do what you want, when you want free of charge. Choose from
                    surfing, fishing, paddleboarding, kayaking, tree climbing,
                    swinging, hiking, wildlife spotting, mountain bikining and
                    more.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burlywood-500 text-white">
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
                        d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-darkseagreen-900">
                    Eco Boutique Accomodations
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    It's the natural feeling of glamping with the comfort of a
                    master bedroom. Profesionally designed spaces, great
                    matrices, pillows and bedsheets, smart temperature controls
                    on the rooms, natural soaps and oils in amazing bathrooms.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burlywood-500 text-white">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-darkseagreen-900">
                    Profesional Kitchen & Lounge
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Fully equipped kitchen, with ingredients for local &
                    international cousine. Next to a large comfy lounge with
                    hammocks. Bonefires, saltwater pools.
                  </p>
                </div>
              </div>
            </li>
            <li className="mt-10 md:mt-0">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-burlywood-500 text-white">
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
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg leading-6 font-medium text-darkseagreen-900">
                    Work from paradise
                  </h4>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Use our lounge to catch up on work, homescholing or full on
                    remote work. Our internet connection is stable and super
                    fast. We've been working remotly for more than decade.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className=" italic border-8 text-center border-darkseagreen-400 my-12 mt-20 py-8 bg-burlywood-300">
          <p className=" max-w-5xl text-xl leading-8 text-gray-700 lg:mx-auto">
            Visiting the most biodiverse place on earth is so much more than
            vacation. It's a once in a lifetime experience. Our goal is to make
            it one of the best trips of your life.
          </p>

          <p className="mt-4 max-w-5xl text-xl leading-7 text-gray-600 lg:mx-auto">
            Mono - Founder & Manager
          </p>
        </div>
      </div>
    </div>
  );
}
