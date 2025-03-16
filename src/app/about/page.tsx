import Button from "../../components/Button";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/FAQSection";
import ValueSection from "@/components/about/ValueSection";
import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/backgrounds/HeaderAbout.webp";

const AboutUs = () => {
  return (
    <div>
      <Header
        title={"About Us"}
        subtitle={
          <Button
            text="View our constitution"
            link="https://docs.google.com/document/d/1quEtJKF8hjcZ77S2JVNCk2Ctr3K6JmeBMNkSkquYBsI/edit?usp=sharing"
            newTab
          />
        }
        background={BackgroundImage}
      />
      <FAQSection />
      <Leap />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
