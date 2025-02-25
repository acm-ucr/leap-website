import Header from "@/components/Header";
import BackgroundImage from "@/public/assets/header-background-about.webp";
import BoardMemberCards from "../../components/board/BoardMemberCards";

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
