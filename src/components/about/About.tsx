import React from "react";
import FAQCard from "./FAQCard";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div className="#D5E2C9 flex min-h-screen flex-wrap items-center justify-center">
        <FAQCard text="How do I become an active member of LEAP!?" />
      </div>
    </div>
  );
};

export default About;
