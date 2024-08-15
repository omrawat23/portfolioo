import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 lg:p-12">
      <section className="grid gap-2 md:gap-4 text-black mb-8 md:mb-0">
        <FlipLink>Hi,</FlipLink>
        <FlipLink>My name is Om</FlipLink>
        <FlipLink>I'm a Fullstack</FlipLink>
        <FlipLink>Developer</FlipLink>
      </section>
      <div className="w-full md:w-auto flex justify-center md:justify-end">
        <img 
          src='./desktop_pc/ee.gif' 
          alt='logo' 
          className="w-[200px] sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="relative block overflow-hidden whitespace-pre text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-7xl"
      style={{
        lineHeight: 1.25,
      }}
    >
      <div>
        {children.split("").map((l, i) => (
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
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
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
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};