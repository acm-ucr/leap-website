import React from "react";
import FAQCard from "./FAQCard";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div className="items-full flex min-h-screen flex-col justify-center">
        <h1 className="mb-12 text-left text-4xl font-bold text-leap-dark-green">
          Recruitment Questions
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          <FAQCard text="How do I become an active member of LEAP!?" />
          <FAQCard text="What are some of the things/activities that LEAP! has done in the past?" />
          <FAQCard text="Do any of the meetings require RSVP or payment to attend?" />
        </div>
      </div>
    </div>
  );
};

export default About;
