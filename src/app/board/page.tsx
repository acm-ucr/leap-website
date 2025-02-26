import Board from "../../components/board/Board";
import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/header-background-about.webp";
import BoardMemberCards from "../../components/board/BoardMemberCards";
import { boardmembers } from "@/data/boardmembers";

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

      <div className="sm:mt-30 mx-auto grid w-5/6 place-content-center justify-center sm:grid-cols-2 lg:mt-60 lg:grid-cols-3">
        {boardmembers.map((boardmembers) => (
          <BoardMemberCards
            key={boardmembers.name}
            name={boardmembers.name}
            role={boardmembers.role}
            img={boardmembers.img}
          />
        ))}
      </div>
    </div>
  );
};

export default OurBoard;
