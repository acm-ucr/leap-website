import Board from "../../components/board/Board";
import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/header-background-about.webp";

const OurBoard = () => {
  return (
    <div>
      <Board />
      <Header
        title={"Our Board"}
        subtitle={
          "Individuals dedicated to helping students overcome mental health issues."
        }
        background={BackgroundImage}
      />
    </div>
  );
};

export default OurBoard;
