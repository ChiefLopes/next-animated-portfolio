"use client";

import Link from "next/link";
import { useState } from "react";
import { NavLinks } from "../../utils/constants";
import Image from "next/image";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: 45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },

    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },

    opened: {
      rotate: -45,
      backgroundColor: "rgb(255, 255, 255)",
    },
  }; 

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      // backgroundColor: "rgb(203, 225, 33)",
      // color: "rgb(123, 44, 44)",
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariant = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 text-lg">
      {/* LINKS */}
      <div className="hidden md:flex gap-6 w-1/3">
        {NavLinks.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black font-semibold rounded-md p-1 flex items-center justify-center"
        >
          <span className="text-white mr-1">Lopes</span>
          <span className="w-10 h-8 rounded bg-white text-black flex items-center justify-center">
            .dev
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-5 pl-20 w-1/3">
        <Link href="https://github.com/ChiefLopes" target="_blank">
          <Image src="/github.png" alt="github" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/dribble.png" alt="dribble" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/linkedin.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/facebook.png" alt="linkedin" width={24} height={24} />
        </Link>
        <Link href="/https://github.com/ChiefLopes" target="_blank">
          <Image src="/pinterest.png" alt="linkedin" width={24} height={24} />
        </Link>
      </div>
      {/* RESPONSIVE MENU */}
      <div className="md:hidden">
        {/* MENU BUTTON */}
        <button
          className="w-10 h-7 flex flex-col justify-between cursor-pointer z-50 relative "
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <motion.div
            variants={topVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={toggleMenu ? "opened" : "closed"}
            className="w-10 h-1 rounded bg-black origin-left"
          ></motion.div>
        </button>

        {/* MENU LIST */}
        {toggleMenu && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0  left-0 w-screen h-screen text-white bg-black flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {NavLinks.map((link) => (
              <motion.div variants={listItemVariant} key={link.title}>
                <Link
                  href={link.url}
                  className="hover:text-blue-400 transition-all ease-in-out duration-300 "
                >
                  {link.title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
