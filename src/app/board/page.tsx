import Header from "@/components/Header";
import BoardWrapper from "@/components/board/BoardWrapper";
import BackgroundImage from "@/public/assets/backgrounds/HeaderBoard.webp";
import BoardDecorationsBottom from "@/components/board/BoardDecorationsBottom";
import BoardDecorationsTop from "@/components/board/BoardDecorationsTop";
const OurBoard = () => {
  return (
    <div>
      <BoardDecorationsTop />
      <Header
        title={"Our Board"}
        subtitle={
          "Individuals dedicated to helping students overcome mental health issues."
        }
        background={BackgroundImage}
      />
      <BoardWrapper />
      <BoardDecorationsBottom />
    </div>
  );
};

export default OurBoard;
