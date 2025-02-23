//import { use } from "react";
import About from "../../components/about/About";
import Button from "../../components/about/Button";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/question";
import ValueSection from "@/components/about/ValueSection";

const AboutUs = () => {
  return (
    <div>
      <About />
      <Button text="View our constitution" link="#" />
      <FAQSection />
      <Leap />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
