import React from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {AiOutlineClose} from 'react-icons/ai'

const navVariant = {
  hidden: {
    "&::after": {
      scale: 0,
    },
  },
  visible: {
    "&::after": {
      scale: 1,
    },
  },
};
const fadeInVariant = {
  hidden: {
    opacity: 0,
    y:-100
  },
  visible: {
    opacity: 1,
    y:0,
    transistion: {
      duration: 1,
    },
  },
};
function SideNav({ showSideBar, setShowSideBar }) {
  const navigate = useNavigate();
  const handleNavigation = (route) => {
    navigate(route);
    setShowSideBar(false);
  };
  const nav_items = [
    {
      name: "Home",
      link: "/",
    },
    
    {
      name: "About Me",
      link: "/about",
    },
    {
      name: "Resume",
      link:"/resume"
    },
    {
      name: "Projects",
      link: "/projects/all",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];
  return (
    showSideBar && (
      <AnimatePresence>
        <motion.div
          variants={fadeInVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="h-fit w-full bg-bg-black font-bold text-lg uppercase pb-4  absolute pt-20 top-0 left-0 z-50 overflow-hidden"
        >
          <button onClick={() => setShowSideBar(false)} className="text-4xl opacity-50 fixed right-10 top-10"><AiOutlineClose /></button>
          <div className="flex justify-around items-start">
            <div className="flex-col flex gap-6  lato ">
              {nav_items.map((item, key) => (
                <motion.button
                  key={key}
                  onClick={() => handleNavigation(item.link)}
                  whileHover={navVariant}
                  initial="hidden"
                  animate="visible"
                  className="navlink lato text-article uppercase relative py-2"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
           
          </div>
        </motion.div>
      </AnimatePresence>
    )
  );
}

export default SideNav;
