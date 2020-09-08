import React from "react";

export default function Faq(props) {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto pt-12 pb-16 sm:pt-16 sm:pb-20 px-4 sm:px-6 lg:pt-20 lg:pb-28 lg:px-8">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900">
          Frequently asked questions
        </h2>
        <div className="mt-6 border-t-2 border-gray-100 pt-10">
          <dl className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's you exact location?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    We are located beachfront 7KM from Puerto Jimenez towards
                    Mata Palo on National Road #255.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Do you rent only one room?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    No, we only rent the full property but are open to rent it
                    for small groups. Go ahead and get in touch, we are really
                    nice.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  What's your cancelation policy.
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    We use a traditional cancelation policy, 100% refund 3
                    months before and 50% 1 Month before your trip.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is there an hospital near by?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Yep, there is an emergency clinic in town 7KM away and a
                    hospital 20 minutes away by boat ambulance available 24/7.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is the internet really good?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Yep, you'll be able to watch Netflix Full HD. But please try
                    to use this time to detox from screens or watch some of our
                    collection of positive videos from Gaia.
                  </p>
                </dd>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <div>
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  How do I make a reservation?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Click on the Check Availability & Book button. We'll ask you
                    for a 10% deposit and full payment 3 months before the start
                    of your trip.
                  </p>
                </dd>
              </div>

              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Are there any dangerous animals?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    Most importantly there is no malaria - which is the most
                    dangerous animal in the jungle. For some reason we have
                    never seen a venenous snake in our property - if you keep
                    within the trails you'll be ok everywhere in The Osa
                    Peninsula. There have never been any deaths by attacks from
                    Apex predators like Puma's, Jaguar's, Sharks or Crocs.
                  </p>
                </dd>
              </div>

              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Is it safe for small children and babys?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    It definetly is, and they'll love it and we love having
                    them. Our son grew up here, and guests have camped here
                    pregnant, with 4 month old babies and had a great time. The
                    biggest problem is the sun on the beach, use plenty of
                    sunscreen and drink lot's of water.
                  </p>
                </dd>
              </div>
              <div className="mt-12">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  Can I bring my pet?
                </dt>
                <dd className="mt-2">
                  <p className="text-base leading-6 text-gray-500">
                    It's not a good idea, try not to. If you do, we won't take
                    responsability for anything the happends - it could. It's
                    not safe for pets that are not used to the jungle.
                  </p>
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
