import React from "react";

export default function Price() {
  return (
    <div className="bg-darkseagreen-100">
      <div className="pt-12 sm:pt-16 lg:pt-20">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10 lg:text-5xl lg:leading-none">
              Simple pricing
            </h2>
            <p className="mt-4 text-xl leading-7 text-gray-600">
              We know how hard it is to organize a group trip - we make it easy
              by providing premium reservation services, our web apps and
              pricing for everyone, everywhere. easy
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-darkseagreen-100" />
          <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
              <div className="bg-white px-6 py-8 lg:p-12">
                <h3 className="text-2xl leading-8 font-extrabold text-gray-900 sm:text-3xl sm:leading-9">
                  Price per night per person
                </h3>
                <p className="mt-6 text-base leading-6 text-gray-500">
                  You get a 5% discount for every 5 people, 1 free kid for every
                  couple and one free adult for every 10 persons.
                </p>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-burlywood-600">
                      What's included
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Boutique Room with two queen beds
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Assorted oils, creams and natural products
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Jungle Lounge with hammocks, bonefires, rock pools,
                        occasional live music and table games.
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Profesional Kitchen stocked with utencils & ingredients
                        - chef available upon request
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Fresh fruit juice, coffee, infusions and te station
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Roundtrip PJM airport transportation
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        La Casa del Mono T-Shirt
                      </p>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <h4 className="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-burlywood-600">
                      Included Activities &{" "}
                      <strong className="underline">Equipment</strong>
                    </h4>
                    <div className="flex-1 border-t-2 border-gray-200" />
                  </div>
                  <ul className="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                    <li className="flex items-start lg:col-span-1">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Surfing, Paddleboarding & Kayaking
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Rivermounth & Shore Fishing
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Wildlife Spotting & Photography
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Mountain Biking, Hiking & Trail Running
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Meditation Pods & Yoga Platforms
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Tide Pools & Rainforest Pools
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Wellness Library & Gaia Videos
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Biology Curses & Presentations
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Cooking Lessons Tortillas & Local Cousine
                      </p>
                    </li>
                    <li className="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-darkseagreen-400"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <p className="ml-3 text-sm leading-5 text-gray-700">
                        Tree Climbing, Swinging and Canopy Watching
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="py-8 px-6 text-center bg-darkseagreen-300 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                <p className="text-lg leading-6 font-medium text-gray-900">
                  Includes VIP Concierge Services
                </p>
                <div className="mt-4 flex items-center justify-center text-5xl leading-none font-extrabold text-gray-900">
                  <span>$69</span>
                  <span className="ml-3 text-xl leading-7 font-medium text-gray-500">
                    USD
                  </span>
                </div>
                <p className="mt-4 text-sm leading-5">
                  <a href="#" className="font-medium text-gray-500 underline">
                    50% discount with our sponsorship package
                  </a>
                </p>
                <div className="mt-6">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-burlywood-900 hover:bg-burlywood-800 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                    >
                      Check availability and Book
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
