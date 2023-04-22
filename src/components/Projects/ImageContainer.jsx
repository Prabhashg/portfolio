import React from "react";
import { motion } from "framer-motion";

const contentVariants = {
  rest: {
    y: 30,
    opacity: 0,
  },
  hover: {
    y: 0,
    opacity: 1,
    transistion: {
      duration: 0.4,
      type: "twin",
    },
  },
};
const bgVariants = {
  rest: {
    opacity:0.6
  },
  hover: {
    opacity: 1,
    transistion: {
      duration: 0.4,
      type: "twin",
    },
  }
}

function ImageContainer({ project, setIsModel, setModelContent }) {
  const isMobile = window.innerWidth < 768;
  return (
    <motion.button
      className="card-container relative rounded-md overflow-hidden text-white w-full"
      whileHover="hover"
      initial="rest"
      onClick={() => {
        setIsModel(true)
        setModelContent(project)
      }}
    >
      <img
        src={project.imguri}
        alt="something is wrong"
        className="card-img h-full w-full  rounded-md full object-cover"
      />
      <motion.div className="absolute top-0 left-0 h-full w-full rounded-md layer"
      variants={!isMobile &&bgVariants}
      >
        
        </motion.div>
      <motion.div
        className="absolute bottom-10 md:bottom-0 left-0 w-full flex flex-col h-1/2 px-6 py-2 justify-center items-start font-Lato"
        variants={!isMobile && contentVariants}
      >
        <p className="text-2xl font-extrabold">{project.title}</p>
        <p className="text-start leading-5 text-article">{project.overview }</p>
        <div className="flex gap-3 flex-wrap my-3">
          {project.tech.map((item) => (
            <p className="bg-bg-tags h-6 rounded-full text-xs font-extrabold flex justify-center items-center px-2 " key={item}>{item}</p>
          ))}
        </div>
      </motion.div>
    </motion.button>
  );
}

export default ImageContainer;
