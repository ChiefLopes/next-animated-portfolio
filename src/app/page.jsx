"use client"

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div  className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row px-4 sm:px-8 md:px-14 lg:px-20 xl:px-28 text-lg overflow-hidden">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative ">
          <Image src="/hero.png" alt="hero" fill className="object-contain " />
        </div>

        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col md:gap-8 my-14 lg:my-16">
          {/* TITLE */}
          <h1 className="font-bold text-3xl md:text-5xl">
            Crafting Digital Experiences, Designing Tommorrow
          </h1>

          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital, canvas where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code. My
            portfolio showcases a diverse collection of projects that relfect my
            commitmeent to excellence.
          </p>
          <div className="flex gap-4 p-4 w-full">
            {/* BUTTONS */}
            <button className="bg-black text-white p-1 rounded ring-1 ring-black">
              View My Work
            </button>
            <button className=" text-white p-1 rounded ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
