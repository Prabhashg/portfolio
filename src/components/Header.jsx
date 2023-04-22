import React from "react";
import Next from "./Next";
import SocialIcons from "./SocialIcons";
import { motion } from "framer-motion";
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
      <div className="pb-4 md:w-4/5 flex gap-4 flex-col">
        <p className="glitch ">
          <span aria-hidden="true">{name}</span>
          {name}
          <span aria-hidden="true">{name}</span>
        </p>
        <p className="text-article leading-9 lato ">
          Frontend developer, UX architect and Javascript engineer,{" "}
          <span className="code">Photochromic</span> Lens enthusiast, practicing
          minimalist, and Pop Music & Jazz lover in search of flow.
        </p>
        <p className="text-article leading-9 lato ">
          Working with my hands to make magic happen on the internet. View my
          Projects, Articles, Resumé, Contact Me, or send me an email at
          hellocodewonders@gmail.com.
        </p>
        <Next text={"Go To About Page"} path={"/about"} />
        <SocialIcons />
      </div>
    </motion.div>
  );
}

export default Header;
