"use client";
import Image from "next/image";
import redFlower from "@/public/assets/redFlower.svg";
import { motion } from "motion/react";

const BoardDecorationsTop = () => {
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
          <div className="absolute right-[3vh] top-48 h-[100px] w-[100px] md:top-64 md:h-[120px] md:w-[120px] lg:top-64 lg:h-[150px] lg:w-[150px]">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <Image src={redFlower} alt="red flower" className="" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default BoardDecorationsTop;
