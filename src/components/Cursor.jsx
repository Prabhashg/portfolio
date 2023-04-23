import { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = ({scaling}) => {
  const [largecircle, setlargecircle] = useState({ x: 0, y: 0 });
  const [smallcircle, setsmallcircle] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mousemove = (e) => {
      setlargecircle({ x: e.clientX, y: e.clientY });
      setsmallcircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mousemove);

    return () => {
      window.removeEventListener("mousemove", mousemove);
    };
  }, []);

  return (
    <div className="hidden md:flex">
      <motion.div
        animate={{
          x: largecircle.x -30,
          y: largecircle.y -30,
          transition: { duration:0.4,type: "twig"},
        }}
        className="large_circle"
        style={{scale:scaling?1.5:1}}
       ></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x-4,
          y: smallcircle.y-4,
          
        }}
        className="small_circle"></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x+4,
          y: smallcircle.y-8,
          opacity:scaling?0.9:0
        }}
        className="bg-white rounded-full text-sm border-0 font-bold text-black px-2 flex justify-center items-center z-10 font-Lato uppercase">open</motion.
        div>
    </div>
  );
};

export default Cursor;