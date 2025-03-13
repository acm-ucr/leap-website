"use client";
import Image from "next/image";
import pinkFlower from "@/public/assets/pinkFlower.svg";
import { motion } from "motion/react";

const BoardDecorationsBottom = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute bottom-3 left-[3vh] w-[15vw]">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 10,
              repeat: Infinity,
            }}
          >
            <Image src={pinkFlower} alt="pink flower" className="" />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default BoardDecorationsBottom;
