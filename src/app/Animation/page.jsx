"use client";

import { motion } from "framer-motion";

const Animation = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition:{
          duration: 4,
          delay: 2
      },
    },
    variant2: {
      x: 100,
      y: 100,
      rotation: 90,
    },
  };

  return (
    <div className="flex items-center justify-center h-full overflow-hidden">
      <motion.div
        className="w-96 h-96 bg-red-500 rounded"
        variants={variants}
        animate="variant1"
      ></motion.div>
    </div>
  );
};

export default Animation;
