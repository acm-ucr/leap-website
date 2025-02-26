import React from "react";
import Image from "next/image";

interface MemberProps {
  name: string;
  role: string;
  img: string;
}

const BoardMemberCards: React.FC<MemberProps> = ({ name, role, img }) => {
  return (
    //for 2 boxes next to eachother with outside border, a inside border.
    <div className="flex flex-col items-center justify-center">
      <div className="mb-20 flex flex-row gap-10">
        <div className="flex h-80 w-64 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-10 flex h-40 w-40 justify-center rounded-3xl border-8 border-leap-light-green">
              <Image
                src={img}
                alt={name}
                width={160}
                height={160}
                className="rounded-2xl"
              />
            </div>
            <p className="mt-5 flex justify-center font-leap text-lg font-bold text-white">
              {name}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-lg font-bold text-white">
              {role}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCards;
