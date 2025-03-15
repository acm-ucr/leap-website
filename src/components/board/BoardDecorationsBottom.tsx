"use client";
import Image from "next/image";
import pinkFlower from "@/public/assets/pinkFlower.svg";
import { motion } from "motion/react";

const BoardDecorationsBottom = () => {
  return (
    <>
      <div className="relative w-full">
        <motion.div
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="absolute bottom-3 left-[3vh] h-[100px] w-[100px] md:h-[120px] md:w-[120px] lg:h-[150px] lg:w-[150px]">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <Image src={pinkFlower} alt="pink flower" className="" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BoardDecorationsBottom;
