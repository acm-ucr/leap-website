"use client";
import ucr_leap_logo from "@/public/leapIcon.png";
import { socials } from "@/data/FooterLinks";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <div className="flex w-full items-center justify-between overflow-hidden bg-leap-light-yellow p-4">
      <motion.div className="left-0 flex flex-row" whileHover={{ scale: 1.1 }}>
        <Link href="/">
          <Image
            src={ucr_leap_logo}
            className="w-14 sm:w-16"
            alt="UCR LEAP Logo"
          />
        </Link>
      </motion.div>
      <div className="right-0 flex flex-row space-x-6 pl-3">
        {socials.map(({ link, icon }, index) => (
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link
              href={link}
              key={index}
              target="blank"
              className="hover:scale-110"
            >
              {icon}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
