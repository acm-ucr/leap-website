"use client";
import ucr_leap_logo from "../public/ucr_leap_logo.svg";
import { navigations } from "@/data/navbar";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dimensions = useDimensions(containerRef);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

    console.log(dimensions);
  }, [isOpen]);

  return (
    <div className="absolute z-10 flex w-full flex-row items-center justify-between bg-transparent p-8">
      {/* Logo */}
      <div className="pl-8">
        <Link href="/">
          <Image src={ucr_leap_logo} alt="leap navbar logo" className="w-16" />
        </Link>
      </div>

      {/* Desktop Nav */}
      <div className="hidden flex-row gap-20 pr-12 lg:flex">
        {navigations.map((navigation, index) => (
          <Link href={navigation.link} key={index} className="font-leap">
            {navigation.name}
          </Link>
        ))}
      </div>

      {/* Hamburger -> X animation */}
      <button
        onClick={handleClick}
        className="pointer-events-auto relative z-20 flex flex-col items-center justify-center lg:hidden"
      >
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-2.5 rotate-45 bg-white"
              : "-translate-y-0.5 bg-black"
          }`}
        ></span>
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "bg-black opacity-100"
          }`}
        ></span>
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "-translate-y-2.5 -rotate-45 bg-white"
              : "translate-y-0.5 bg-black"
          }`}
        ></span>
      </button>

      {/* Mobile Nav */}
      <motion.div
        initial="false"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        ref={containerRef}
        className="absolute left-0 top-0 flex h-[40vh] w-full flex-col items-center justify-center bg-leap-dark-green shadow-lg lg:hidden"
        variants={sidebarVariants}
      >
        <motion.ul className="list-none space-y-6 text-2xl text-white">
          {navigations.map((navigation, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="closed"
              animate="open"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={navigation.link} onClick={closeMenu}>
                {navigation.name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

// Sidebar Animation
const sidebarVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
  closed: {
    y: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

// Menu Item Animation
const itemVariants = {
  open: (index: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: index * 1,
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  }),
  closed: {
    y: -50,
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const useDimensions = (ref: React.RefObject<HTMLDivElement | null>) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      if (ref.current) {
        setDimensions({
          width: ref.current.offsetWidth,
          height: ref.current.offsetHeight,
        });
      }
    };

    updateDimensions(); // Set initial dimensions when component mounts

    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [ref]);

  return dimensions;
};

export default Navbar;
