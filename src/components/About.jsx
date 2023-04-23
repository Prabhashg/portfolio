import React, { useEffect } from "react";
import AboutBox from "./AboutBox";
import Next from "./Next";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
import "./AboutBox.css";
import { aboutStats, experience,skills } from "../data/about";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        diration: 1,
      }}
      className="md:px-10 mx-0 px-4 lg:mx-48 mt-28 lg:px-24 flex gap-6 h-full flex-col z-10 pb-14 text-article"
    >
      <div className="mb-6 lg:mb-6">
        <h1 className="text-4xl md:text-5xl thickk font-bold text-header">
          About Me.
        </h1>
      </div>
      <div className="mb-6 lg:mb-3">
        <h1 className="text-xl md:text-3xl thickk font-bold text-header">
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap gap-3">
        {skills.map((item) => (
          <span className="code">{item}</span>
        ))}
      </div>
      <div className="mb-6 lg:mb-6">
        <h1 className="text-xl md:text-3xl thickk font-bold text-header">
          Experience
        </h1>
      </div>
      <div>
        {experience.map((item) => (
          <AboutBox item={item} key={item.title} />
        ))}
      </div>
      {/* <div className="mb-6 lg:mb-6">
        <h1 className="text-xl md:text-3xl thickk font-bold text-header">
          Education
        </h1>
      </div>
      <div>
        {aboutStats.map((item) => (
          <AboutBox item={item} key={item.title} />
        ))}
      </div> */}
      <Next text={"See My Projects"} path={"/projects/all"} />
      <SocialIcons />
    </motion.div>
  );
}

export default About;
