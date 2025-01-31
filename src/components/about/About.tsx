import React from "react";
import { faqData } from "./faqData";
import FAQCard from "./FAQCard";

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div className="items-full flex min-h-screen flex-col justify-center">
        <h1 className="ml-12 text-left text-4xl font-bold text-leap-dark-green">
          Recruitment Questions
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {faqData.map((FAQItem,index) => (
            <FAQCard key={index} text={FAQItem.text} />
          ))}
        </div>
      </div>
    </div>  
  );
};

export default About;