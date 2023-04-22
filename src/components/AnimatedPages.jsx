import React from "react";
import Projects from "./Projects";
import About from "./About";
import Header from "./Header";
import Contact from "./Contact";
import Web from "./Projects/web";
import AllProjects from "./Projects/AllProjects";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Modal from "./Modal";
import { useState,useEffect } from "react";
import SideNav from "./SideNav";

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
  useEffect(() => {
   
    if (isModel) {
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '15px';
    }
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0px';
    };
  }, [isModel,showSideBar]);

  return (
    <div>
      <AnimatePresence location={location} key={location.pathname} >
        <Navbar setShowSideBar={setShowSideBar} />
        <Modal isModal={isModel} modelContent={modelContent} setIsModel={setIsModel} />
        <SideNav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        <Routes>
          <Route path="/" element={<Header />} pageVariants={pageVariants} />
          <Route path="projects" element={<Projects />} >
          <Route path="all" element={ <AllProjects setIsModel={setIsModel} setModelContent={ setModelContent}/>} />
            <Route path="web" element={<Web setIsModel={setIsModel} setModelContent={ setModelContent} />} />
              <Route path="data" element={ <AllProjects setIsModel={setIsModel} setModelContent={ setModelContent}/>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default AnimatedPages;
