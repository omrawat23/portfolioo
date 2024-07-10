import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Assuming you are using React Router

export const SlideTabsExample = () => {
  return (
    <div className="">
      <SlideTabs />
    </div>
  );
};

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="w-full flex justify-between items-center max-w-6xl mx-auto">
      {/* <div className="hidden md:flex flex-row items-center gap-2">
       
             <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-black text-[18px] font-bold cursor-pointer flex">
            Om &nbsp;
            <span className="sm:block hidden"> | Full-stack Developer</span>
          </p>
        </Link>
      </div> */}

      <ul
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-gray-200 p-1 "
      >
        <a href="#about">
          <Tab setPosition={setPosition}>About</Tab>
        </a>
        <a href="#work">
          <Tab setPosition={setPosition}>Work</Tab>
        </a>
        <a href="#project">
          <Tab setPosition={setPosition}>Projects</Tab>
        </a>
        <a href="#contact">
          <Tab setPosition={setPosition}>Contact</Tab>
        </a>
        {/* <Tab setPosition={setPosition}>Blog</Tab> */}

        <Cursor position={position} />
      </ul>
{/* 
         <Link to="https://www.linkedin.com/in/om-rawat-1b173127b/" target="_blank">
          <img src="https://i.postimg.cc/xTTRqW8v/icons8-linkedin-48.png" alt="LinkedIn logo" className="w-9 h-9 object-contain" />
        </Link>
        <Link to="https://github.com/omrawat23" target="_blank">
          <img src="https://img.icons8.com/stickers/100/github.png" alt="GitHub logo" className="w-9 h-9 object-contain" />
        </Link>
        <a href="./desktop_pc/omrawat.xyz.pdf" target="_blank">
          <img src="https://img.icons8.com/matisse/100/pdf.png" alt="PDF logo" className="w-9 h-9 object-contain" />
        </a> */}
    </div>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
