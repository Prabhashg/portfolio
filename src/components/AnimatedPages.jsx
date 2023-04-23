import React from "react";
import Projects from "./Projects";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Web from "./Projects/Web";
import Data from "./Projects/Data";
import AllProjects from "./Projects/AllProjects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useState,useEffect } from "react";
import SideNav from "./SideNav";
import BottomNav from "./BottomNav";
import Resume from "./Resume";
import Cursor from "./Cursor";
const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

function AnimatedPages() {
  const location = useLocation();
  const [isModel, setIsModel] = useState(false);
  const [modelContent, setModelContent] = useState();
  const [showSideBar, setShowSideBar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(true);
  const [scaling, setScaling] = useState(false);
  useEffect(() => {
    
    if (isModel) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isModel]);

  return (
    <div>
      <AnimatePresence location={location} key={location.pathname} >
        <Cursor scaling={scaling} />
        <Navbar setShowSideBar={setShowSideBar} setScaling={setScaling} />
        <Modal isModal={isModel} modelContent={modelContent} setIsModel={setIsModel} />
        <SideNav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <BottomNav showBottomBar={showBottomBar} />
        <Routes>
          <Route path="/" element={<Header />} pageVariants={pageVariants} />
          <Route path="projects" element={<Projects />} >
          <Route path="all" element={ <AllProjects setIsModel={setIsModel} setModelContent={ setModelContent}/>} />
            <Route path="web" element={<Web setIsModel={setIsModel} setModelContent={ setModelContent} />} />
              <Route path="data" element={ <Data setIsModel={setIsModel} setModelContent={ setModelContent}/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedPages;
