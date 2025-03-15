"use client";
import Image from "next/image";
import { motion } from "motion/react";
import ButterflyImg from "@/public/assets/about/bird.webp";

const Leap = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat">
      <div className="flex flex-col items-center p-8 text-center text-leap-dark-green sm:hidden">
        <motion.div
          className="text-3xl font-bold"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          LEAP!
        </motion.div>
        <div className="my-4 flex w-full justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src={ButterflyImg}
              alt="Bird"
              className="h-[450px] w-[250px] md:h-[550px] md:w-[300px] lg:h-[700px] lg:w-[450px]"
            />
          </motion.div>
        </div>
        <motion.p
          className="text-xl font-semibold"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <br /> We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
          Islanders. We are a club committed to mental health wellness &
          awareness within API communities, especially here at UCR. We feel it
          is important we break cultural stigmas of mental health to allow us to
          achieve a strong & healthy well-being, both in mind & body. With this,
          we hope to create a safe & welcoming space to talk about our emotions
          and experiences to grow ourselves in every way.
        </motion.p>
      </div>

      <div className="hidden flex-col justify-between gap-x-40 p-6 text-center text-leap-dark-green sm:flex md:flex-row">
        <div className="w-1/2 p-4 text-center font-leap">
          <motion.div
            className="mt-9 text-3xl font-bold md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            LEAP!
          </motion.div>
          <motion.p
            className="md:text-1.5xl w-[450px] text-xl font-semibold lg:text-3xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <br /> We are LEAP!, a.k.a. Loving our Emotions as Asians & Pacific
            Islanders. We are a club committed to mental health wellness &
            awareness within API communities, especially here at UCR. We feel it
            is important we break cultural stigmas of mental health to allow us
            to achieve a strong & healthy well-being, both in mind & body. With
            this, we hope to create a safe & welcoming space to talk about our
            emotions and experiences to grow ourselves in every way.
          </motion.p>
        </div>

        <motion.div
          className="flex w-1/2 justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Image
            src={ButterflyImg}
            alt="Bird"
            className="h-[450px] w-[250px] md:h-[550px] md:w-[300px] lg:h-[700px] lg:w-[450px]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Leap;
