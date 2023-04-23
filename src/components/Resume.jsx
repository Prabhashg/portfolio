import React,{useEffect} from "react";
import Next from "./Next";
import SocialIcons from "./SocialIcons";
function Resume() {
  const isMobile = window.innerWidth < 768;  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="md:px-10 mx-0 px-4 lg:mx-48 mt-28 lg:px-24 flex gap-6 h-full flex-col z-10 pb-14 text-article ">
        <div className="mb-3 lg:mb-6">
          <h1 className="text-4xl md:text-5xl thickk font-bold text-header">
            Resumé.
          </h1>
        </div>
        <p>
          Here is my resume, you can{" "}
          <a
            href="https://drive.google.com/file/d/19riaMFOQpYnD8tjZ2BbRZU4KDZKL0KGz/preview"
            className="uppercase font-bold text-sm hover:underline inline"
          >View</a> {" "} or{" "}
          <a
            href="https://drive.google.com/file/d/19riaMFOQpYnD8tjZ2BbRZU4KDZKL0KGz/"
            className="uppercase font-bold text-sm hover:underline inline"
          >Download</a> {" "} it.
        </p>
        
        <iframe
          src="https://drive.google.com/file/d/19riaMFOQpYnD8tjZ2BbRZU4KDZKL0KGz/preview"
          className="w-full lg:w-3/4"
        //   height="1000"
          height={isMobile?"450":"1000"}
          allow="autoplay"
        ></iframe>
        <Next text={"Contact Me Now"} path={"/contact"} />
        <SocialIcons />
      </div>
    </>
  );
}

export default Resume;
