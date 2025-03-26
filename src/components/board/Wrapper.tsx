"use client";
import { boardMembers } from "@/data/Board";
import BoardMemberCards from "@/components/board/Cards";
import { motion } from "motion/react";

const BoardWrapper = () => {
  return (
    <div className="relative">
      <div className="mx-auto grid w-5/6 place-content-center justify-center gap-x-32 sm:grid-cols-2 sm:gap-x-28 lg:grid-cols-3">
        {boardMembers.map(
          ({ name, role, img, whyLeap, majorInfo, careerGoal }, index) => (
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
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
