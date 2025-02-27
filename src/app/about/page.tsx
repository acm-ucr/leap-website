import Button from "../../components/about/Button";
import Leap from "@/components/about/Leap";
import FAQSection from "@/components/about/question";
import ValueSection from "@/components/about/ValueSection";
import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/header-background-about.webp";

const AboutUs = () => {
  return (
    <div>
      <Header
        title={"About Us"}
        subtitle={<Button text="View our constitution" link="#" />}
        background={BackgroundImage}
      />
      <FAQSection />
      <Leap />
      <ValueSection />
    </div>
  );
};

export default AboutUs;
