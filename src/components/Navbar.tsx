"use client";
import ucr_leap_logo from "@/public/leapIcon.webp";
import { navigations } from "@/data/NavbarLinks";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathName = usePathname();

  const handleClick = () => {
    setIsOpen(!isOpen);
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
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 z-10 flex w-full flex-row items-center justify-between bg-leap-light-yellow p-4 lg:p-2">
      <motion.div
        className="abolute z-30 pl-0 duration-100 md:p-2"
        whileHover={{ scale: 1.1 }}
      >
        <Link href="/">
          <Image
            src={ucr_leap_logo}
            alt="leap navbar logo"
            className="w-14 sm:w-16"
          />
        </Link>
      </motion.div>

      <div className="hidden flex-row gap-20 pr-12 md:flex">
        {navigations.map(({ link, name }, index) => (
          <motion.div key={index} whileHover={{ scale: 1.1 }}>
            <Link
              href={link}
              className={`duration-1 rounded-lg border-4 border-l-transparent border-r-transparent border-t-transparent font-leap text-lg hover:scale-110 ${
                pathName === link
                  ? "border-b-leap-mid-green font-bold text-leap-dark-green"
                  : "border-b-transparent"
              }`}
            >
              {name}
            </Link>
          </motion.div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="duration-1 pointer-events-auto relative z-20 flex flex-col items-center justify-center hover:scale-110 md:hidden"
      >
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "translate-y-2.5 rotate-45 bg-black"
              : "-translate-y-0.5 bg-black"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen ? "opacity-0" : "bg-black opacity-100"
          }`}
        />
        <span
          className={`my-1 block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out ${
            isOpen
              ? "-translate-y-2.5 -rotate-45 bg-black"
              : "translate-y-0.5 bg-black"
          }`}
        />
      </button>

      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        exit="closed"
        ref={containerRef}
        className="absolute left-0 top-0 flex h-[40vh] w-full flex-col items-center justify-center bg-leap-light-yellow text-leap-dark-green shadow-lg md:hidden"
        variants={sidebarVariants}
      >
        <motion.ul className="list-none space-y-6 pt-4 text-2xl text-white sm:pt-0">
          {navigations.map(({ link, name }, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              initial="closed"
              animate="open"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={link}
                className={`flex justify-center rounded-lg border-4 border-l-transparent border-r-transparent border-t-transparent font-leap ${
                  pathName === link
                    ? "border-b-leap-mid-green font-bold text-leap-dark-green"
                    : "border-b-transparent text-leap-dark-green"
                }`}
                onClick={closeMenu}
              >
                {name}
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

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

export default Navbar;
