"use client";;
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({
  word,
  className,
  variant,
  duration = 1
}) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    (<motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        className,
        "yfont-display ytext-center ytext-4xl yfont-bold ytracking-[-0.02em] ydrop-shadow-sm md:ytext-7xl md:yleading-[5rem]"
      )}>
      {word}
    </motion.h1>)
  );
};

export default BlurIn;
