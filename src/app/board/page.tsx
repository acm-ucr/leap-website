import Board from "../../components/board/Board";
import Header from "../../components/board/header";
import BoardMemberCards from "../../components/board/BoardMemberCards";

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
      <BoardMemberCards
        name1={"Cathy Nguyen"}
        role1={"President"}
        name2={"Ethan Ly"}
        role2={"Vice President"}
        name3={"Abby Hinojales"}
        role3={"Secretary"}
        name4={"Debdeep Bandyopadhyay"}
        role4={"Treasurer"}
        name5={"Denise Hicks"}
        role5={"Publicist"}
        name6={"Sneha Panda"}
        role6={"Events Coordinator"}
      />
    </div>
  );
};

export default OurBoard;
