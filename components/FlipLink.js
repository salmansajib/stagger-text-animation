"use client";

import { motion } from "motion/react";

function FlipLink({ children, href }) {
  return (
    <motion.a
      initial={{ y: 0 }}
      whileHover={{ y: 20 }}
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase"
    >
      {children}
    </motion.a>
  );
}

export default FlipLink;
