import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SocialIcons from "./SocialIcons";
import Next from "./Next";
import React from "react";
import { motion } from "framer-motion";
import { Outlet, NavLink } from "react-router-dom";

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        duration: 1,
      }}
      className="lg:mx-48 mx-4 mt-28 lg:px-24 flex gap-6 h-full flex-col z-10 pb-10 text-article"
    >
      <div className="mb-12 w-full">
        <h1 className="text-5xl thickk font-bold text-header">Projects</h1>
        <div className="flex justify-center w-full mt-10 font-Lato ">
          <div className="flex text-sm lg:text-base gap-4 font-bold lg:gap-6 mb-4 " id="btn-container">
            <NavLink className="btn" to={"/projects/all"}>All</NavLink>
            <NavLink className="btn" to={"/projects/web"}>Web Development</NavLink>
            <NavLink className="btn" to={"/projects/data"}>Data Analysis</NavLink>
          </div>
        </div>
        <div className="card-holder w-full mt-6">
          <Outlet />
        </div>
        <div>
        </div>
      </div>

      <Next text={"Contact Me"} path={"/contact"} />
      <SocialIcons />
    </motion.div>
  );
}

export default Projects;
