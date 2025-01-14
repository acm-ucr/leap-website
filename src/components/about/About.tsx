import React from "react";
import FAQCard from "./FAQCard";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div className="flex min-h-screen flex-wrap items-center justify-center bg-yellow-100">
        <FAQCard text="How do I become an active member of LEAP!?" />
      </div>
    </div>
  );
};

export default About;
