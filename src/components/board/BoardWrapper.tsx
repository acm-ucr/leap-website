import Image from "next/image";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundBoard.webp";
import { boardmembers } from "@/data/BoardData";
import BoardMemberCards from "@/components/board/BoardMemberCards";

const BoardWrapper = () => {
  return (
    <div className="relative">
      <Image
        src={BackgroundImage}
        alt="Board Background"
        objectFit="cover"
        className="absolute -z-10 h-full w-full"
      />

      <div className="justify-centersm:mt-20 mx-auto grid w-5/6 place-content-center sm:grid-cols-2 lg:grid-cols-3">
        {boardmembers.map(({ name, role, img }) => (
          <BoardMemberCards name={name} role={role} img={img} />
        ))}
      </div>
    </div>
  );
};

export default BoardWrapper;
