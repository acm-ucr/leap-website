import React from "react";
import Image from "next/image";

interface MemberProps {
  name: string;
  role: string;
  img: string;
}

const BoardMemberCards: React.FC<MemberProps> = ({ name, role, img }) => {
  return (
    <div className="mb-20 mt-10 flex flex-col items-center justify-center">
      <div className="mb-20 flex flex-row gap-20">
        <div className="flex h-96 w-80 justify-center rounded-3xl border-8 border-black bg-leap-dark-green">
          <div className="flex flex-col items-center">
            <div className="mt-5 flex h-60 w-60 justify-center rounded-3xl border-8 border-leap-light-green">
              <Image
                src={img}
                alt={name}
                width={230}
                height={220}
                className="rounded-2xl"
              />
            </div>
            <p className="mt-5 flex justify-center font-leap text-2xl font-bold text-white">
              {name}{" "}
            </p>
            <p className="mt-1 flex justify-center font-leap text-2xl font-bold text-white">
              {role}{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardMemberCards;
