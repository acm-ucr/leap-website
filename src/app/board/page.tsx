import Board from "../../components/board/Board";
import Header from "../../components/board/header";

const OurBoard = () => {
  return (
    <div>
      <Board />
      <Header
        title={"Our Board"}
        subtitle={
          "Individuals dedicated to helping students overcome mental health issues."
        }
      />
    </div>
  );
};

export default OurBoard;
