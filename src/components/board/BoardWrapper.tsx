"use client";
import Image from "next/image";
import BackgroundImage from "@/public/assets/backgrounds/BackgroundBoard.webp";
import { boardmembers } from "@/data/BoardData";
import BoardMemberCards from "@/components/board/BoardMemberCards";
import { motion } from "motion/react";

const BoardWrapper = () => {
  return (
    <div className="relative">
      <Image
        src={BackgroundImage}
        alt="Board Background"
        objectFit="cover"
        className="absolute -z-10 h-full w-full"
      />

      <div className="mx-auto grid w-5/6 place-content-center justify-center gap-x-32 sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
        {boardmembers.map(
          ({ name, role, img, whyLeap, majorInfo, careerGoal }, index) => (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 2, delay: index * 0.2 }}
              whileHover={{ scale: 1.1 }}
            >
              <BoardMemberCards
                name={name}
                role={role}
                img={img}
                whyLeap={whyLeap}
                majorInfo={majorInfo}
                careerGoal={careerGoal}
                key={index}
              />
            </motion.div>
          ),
        )}
      </div>
    </div>
  );
};

export default BoardWrapper;
