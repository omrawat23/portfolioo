import React from "react";
import { motion } from "framer-motion";

export const RevealLinks = () => {
  return (
    <div className="flex flex-row gap-0 xl:gap-28 mt-[-150px] justify-center items-center ">
    <section className="grid gap-4 bg-white-300 px-8 py-24 text-black ">
      <FlipLink>Hi,</FlipLink>
      <FlipLink>My name is Om</FlipLink>
      <FlipLink>I'm a Fullstack</FlipLink>
      <FlipLink>Developer</FlipLink>
    </section>
    <div className="mt-[-30px]">
    <img src='./desktop_pc/ee.gif' alt='logo' width={400} height={300}/>
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
      className="relative block overflow-hidden whitespace-pre text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
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