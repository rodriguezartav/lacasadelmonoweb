import React from "react";

export default function Blog() {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Our Story our Gallery
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4">
            There is not way way to share how it feels to spend an afternoon
            under 100 year old trees while listening to the songs of life and
            the breaking of waves. But we try to share how it looks.
          </p>
        </div>
        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80"
                alt
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Rooms and Lounges
                  </a>
                </p>
                <a href="#" className="block">
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    Aerial
                  </a>
                </p>
                <a href="#" className="block">
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Velit facilis asperiores porro quaerat doloribus, eveniet
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                alt
              />
            </div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <p className="text-sm leading-5 font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    {" "}
                    Wildlife, Vegetation & Gardens
                  </a>
                </p>
                <a href="#" className="block">
                  <p className="mt-3 text-base leading-6 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
