import { useEffect, useState } from "react";
import "./Cursor.css";
import { motion } from "framer-motion";

const Cursor = () => {
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
       ></motion.div>
      <motion.div
        animate={{
          x: smallcircle.x-4,
          y: smallcircle.y-4,
          
        }}
        className="small_circle"></motion.div>
    </div>
  );
};

export default Cursor;