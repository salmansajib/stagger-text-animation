"use client";

import { motion } from "motion/react";

const DURATION = 0.25;
const STAGGER = 0.025;

function FlipLink({ children, href }) {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-nowrap text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase max-w-max"
      style={{
        lineHeight: 0.78,
      }}
    >
      <div>
        {/* split the text to animate it individuali */}
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-100%",
                },
              }}
              transition={{
                duration: DURATION,
                delay: index * STAGGER,
                ease: "easeInOut",
              }}
              key={index}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((letter, index) => {
          return (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                delay: index * STAGGER,
                ease: "easeInOut",
              }}
              key={index}
              className="inline-block"
            >
              {letter}
            </motion.span>
          );
        })}
      </div>
    </motion.a>
  );
}

export default FlipLink;
