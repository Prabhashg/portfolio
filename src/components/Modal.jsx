import React from "react";
import "./Modal.css";
import { motion, AnimatePresence } from "framer-motion";
import { BiArrowBack } from "react-icons/bi";
import ContentModel from "./ContentModel";
import { useEffect } from "react";

const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
};
const containerVariant = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
    },
    finish: {
      x: "100%",
      transition: {
        duration: 0.4,
      },
    },
  },
};
function Modal({ isModal, modelContent, setIsModel }) {
    useEffect(() => {
        window.onpopstate = e => {
            console.log(e)
            setIsModel(false)
        }
    },[])
  return (
    isModal && (
      <AnimatePresence mode="wait">
        <motion.div
          className="modal font-Lato text-article "
          initial="hidden"
          animate="visible"
          exit="finish">
          <motion.div className="modal-container w-full lg:w-4/12" variants={containerVariant}>
            <div className=" modal-nav mx-6 pt-6  flex justify-between items-center font-bold text-lg text-sidebar">
              <button onClick={() => setIsModel(false)}>
                <BiArrowBack />
              </button>
              <button onClick={() => setIsModel(false)}>
                <span className="text-sm">Back to Projects</span>
              </button>
            </div>
            <ContentModel modelContent={modelContent} />
            <button className="w-full h-16 sticky font-bold flex justify-center items-center hover:underline bottom-0 left-0 bg-sidebar">
              Open Project
            </button>
          </motion.div>
        </motion.div>
        ;
      </AnimatePresence>
    )
  );
}

export default Modal;
