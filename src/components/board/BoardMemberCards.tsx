"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface MemberProps {
  name: string;
  role: string;
  img: string;
  majorInfo: string;
  careerGoal: string;
  whyLeap: string;
}

const BoardMemberCards: React.FC<MemberProps> = ({
  name,
  role,
  img,
  majorInfo,
  careerGoal,
  whyLeap,
}) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="mb-20 mt-10 flex flex-col items-center justify-center">
      <div className="mb-20 flex flex-row gap-20">
        <motion.div
          style={{ transformStyle: "preserve-3d" }}
          transition={{ duration: 0.7 }}
          className="relative flex cursor-pointer flex-col items-center"
          animate={{ rotateY: flipped ? 180 : 0 }}
          onClick={() => setFlipped((prevState) => !prevState)}
        >
          <div className="flex h-96 w-80 justify-center rounded-3xl border-8 border-white bg-leap-dark-green">
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
                {name}
              </p>
              <p className="mt-1 flex justify-center font-leap text-2xl font-bold text-white">
                {role}
              </p>
            </div>
          </div>
          <div
            className="absolute flex h-full w-full flex-col items-center rounded-3xl border-8 border-white bg-leap-dark-green"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-md p-6 text-left">
              <p className="text-leap-text">{majorInfo}</p>
              <p className="pb-4 text-leap-text">{careerGoal}</p>
              <p className="text-lg font-bold text-leap-text">Why leap?</p>
              <p className="pt-4 text-leap-text">{whyLeap}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BoardMemberCards;
