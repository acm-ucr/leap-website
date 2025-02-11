import React from "react";
import FAQSection from "./question";
import ValueCard from "./ValueCard";

const About = () => {
  return (
    <div>
      <FAQSection />
      <ValueCard
        title="Awareness"
        text="Awareness not only brings out the negatives that one might feel, but also shows the strengths, values, and goals of everyone. Being aware encourages a proactive approach to mental health that we hope to share with everyone."
      />
    </div>
  );
};

export default About;
