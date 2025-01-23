import React from "react";

const Home = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-leap-mid-green">
      <div className="py-20 text-center">
        <h1 className="font-leap text-6xl font-bold text-leap-dark-green">
          UCR LEAP
        </h1>
        <p className="mx-auto max-w-xl font-leap text-lg text-leap-dark-green">
          LEAP!'s mission is to promote and encourage the acknowledgment and
          health of mental health in the Asian & Pacific Islander community of
          UCR.
        </p>
      </div>
      <div className="py-10">
        <h2 className="mb-6 ml-6 font-leap text-3xl font-bold text-leap-dark-green underline">
          Our Core Values
        </h2>
        <p className="mx-auto mb-10 ml-6 max-w-3xl font-leap text-leap-dark-green">
          Loving our Emotions as Asian & Pacific Islanders, otherwise known as
          LEAP!, is a community of friends who advocate for safe spaces and
          mental health. We strive to make a safe space for everyone of every
          background to chat, destress, make friends, and learn about mental
          health in the AAPI community. Come join us to hang out!
        </p>
      </div>
      <div className="flex w-1/5 flex-row space-x-10 p-2">
        <button className="rounded bg-leap-light-green px-4 py-2 font-leap font-bold text-white hover:bg-green-600">
          Awareness
        </button>
        <button className="rounded bg-leap-light-green px-4 py-2 font-leap font-bold text-white hover:bg-green-600">
          Community
        </button>
        <button className="rounded bg-leap-light-green px-4 py-2 font-leap font-bold text-white hover:bg-green-600">
          Safety
        </button>
        <button className="rounded bg-leap-light-green px-4 py-2 font-leap font-bold text-white hover:bg-green-600">
          Mental Health
        </button>
      </div>
    </div>
  );
};

export default Home;
