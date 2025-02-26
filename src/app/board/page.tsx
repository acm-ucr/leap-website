import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/header-background-about.webp";
import { boardmembers } from "@/data/BoardMembers";
import BoardMemberCards from "@/components/board/BoardMemberCards";

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

      <div className="mx-auto grid w-5/6 place-content-center justify-center sm:mt-20 sm:grid-cols-2 lg:mt-60 lg:grid-cols-3">
        {boardmembers.map(({ name, role, img }) => (
          <BoardMemberCards name={name} role={role} img={img} />
        ))}
      </div>
    </div>
  );
};

export default OurBoard;
