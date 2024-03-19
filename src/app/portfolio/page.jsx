"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { items } from "../../../utils/constants";
import Image from "next/image";
import Link from "next/link";

console.log(items);

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center ">
          <motion.div style={{x}} className="flex">
            <div className=""/>
            {items.map((item) => (
              <div
                key={item.id}
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
              >
                <div className="flex flex-col gap-8 text-white ">
                  <h1>{item.title}</h1>
                  <div className="relative">
                    <Image src={item.img} alt="image" fill/>
                  </div>
                  <p>{item.desc}</p>
                  <Link href={item.link}>
                    <button>See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
