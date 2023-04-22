import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
function Background() {
  const { pathname } = useLocation();
  const label = {
    '/':'Hello there',
    '/projects': 'Projects',
    '/skills': 'Skills',
    '/about': 'About',
    '/contact':'Contact'
  }
  return (
      <motion.div
          animate={{
              opacity: 0.03
      }}
      initial={{
        opacity:1
      }}
      transition={
        {
          duration: 1,
         
        }
      }
          className="lobster greet fixed bottom-0 -z-1 pointer-events-none ">
      {label[pathname ]}
    </motion.div>
  );
}

export default Background;
