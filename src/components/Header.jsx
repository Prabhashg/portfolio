import React from "react";
import Next from "./Next";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import SmallButton from "./SmallButton";
const name = "I'm Supreeth Ratam";

function Header() {
  return (
    <motion.div
      
      initial={{
        opacity: 0
      }}
      animate={{
        opacity:1
      }}
      exit={{
        opacity:0
      }}
      transition={{
        duration:1
      }}
      className="mx-4 md:mx-16 lg:mx-48 mt-24 justify-center flex items-center pb-12 z-10"
    >
      <div className="pb-4 md:w-4/5 flex gap-4 flex-col font-Lato">
        <p className="glitch ">
          <span aria-hidden="true">{name}</span>
          {name}
          <span aria-hidden="true">{name}</span>
        </p>
        <p className="text-article leading-9 lato ">
        Welcome to my portfolio website, where technology and creativity converge to create impactful solutions. As a <span className="code">Full-stack web developer</span> specializing in the MERN stack, a <span className="code">Data Analyst</span> with a talent for uncovering insights, and a student at <span className="code">IIT Bombay</span> with a strong understanding of data structures and algorithms, I bring a unique set of skills to every project.
        </p>
        <p className="text-article leading-9 lato ">
          I love making dashboards and interfaces on the internet. View my
          {<SmallButton text={"skills"} path="/about"/>}, {<SmallButton text={"Projects"} path="/projects/all"/>}, {<SmallButton text={"Resumé"} path="/resume"/>}, {<SmallButton text={"Contact Me"} path="/contact"/>}, or send me an email at
          <span className="code">supreethratam@gmail.com</span>
        </p>
        <Next text={"Go To About Page"} path={"/about"} />
        <SocialIcons />
      </div>
    </motion.div>
  );
}

export default Header;
