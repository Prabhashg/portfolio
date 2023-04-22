import React from "react";
import {GoGlobe,GoMarkGithub} from "react-icons/go";

function ContentModel({ modelContent }) {
  return (
    <>
      <div className="modal-content-container h-/12 px-6 pb-20 overflow-scroll flex flex-col gap-3 text-article">
        <h1 className="text-xl mt-14 font-bold text-lato">
          {modelContent && modelContent.title}
        </h1>
        <p className=" leading-7">{modelContent.overview}</p>
        <img
          src={modelContent.imguri}
          alt=""
          className="w-11/12 mx-auto rounded-md h-64 object-cover my-10"
        />
              <p className=" leading-7">{modelContent.description}</p>
              <p className="text-lg font-bold">Technologies</p>
              <div className="text-xs flex font-bold gap-4 "
              >{modelContent.tech.map((item) => <p
              className="bg-sidebar/70 py-1 rounded px-3 flex justify-center items-center"
              >{item}</p>)}</div>
              <div className="text-lg font-bold flex gap-2 mt-2 items-center">
              <GoGlobe/>    
              <p className=" ">Website</p>
              </div>
              <a href={modelContent.weburi} className="font-bold text-sidebar hover:underline">{ modelContent.weburi}</a>
              <div className="text-lg font-bold flex gap-2 mt-2 items-center">
              <GoMarkGithub/>    
              <p className=" ">Github</p>
              </div>
              <a href={modelContent.github} className="font-bold text-sidebar hover:underline">{ modelContent.github}</a>
      </div>
    </>
  );
}

export default ContentModel;
