"use client";
import Image from "next/image";
import redFlower from "@/public/assets/redFlower.svg";
import { motion } from "motion/react";

const BoardDecorationsTop = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute right-[3vh] top-48 w-[15vw]">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            <Image src={redFlower} alt="red flower" className="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BoardDecorationsTop;
