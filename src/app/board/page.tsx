import Header from "@/components/Header";
import BoardWrapper from "@/components/board/BoardWrapper";
import BackgroundImage from "@/public/assets/backgrounds/HeaderBoard.webp";

const OurBoard = () => {
  return (
    <div>
      <Header
        title={"Our Board"}
        subtitle={
          "Individuals dedicated to helping students overcome mental health issues."
        }
        background={BackgroundImage}
      />

      <BoardWrapper />
    </div>
  );
};

export default OurBoard;
