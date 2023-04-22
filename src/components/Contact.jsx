import React,{useEffect} from "react";
import { motion } from "framer-motion";
import Next from "./Next";
import SocialIcons from "./SocialIcons";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qvlxctg",
        "template_z8t0enc",
        form.current,
        "h6YpxhjWb8fNwy1rZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        diration: 1,
      }}
      className="mx-4 md:mx-48 mt-28 md:px-24 flex gap-6 h-full flex-col z-10 pb-10 text-article"
    >
      <div className="mb-8 md:w-1/2 w-full">
        <h1 className="text-5xl thickk font-bold text-header">Contact</h1>
        <p className="my-6">
          Fill this form or mail any time to <b>supreethratam@gmail.com</b>
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Name"
            name="from_name"
            className="bg-transparent px-3 rounded focus:bg-transparent py-1 h-14 focus:outline-none input"
          />
          <input
            type="email"
            name="from_email"
            id="email"
            placeholder="email"
            className="bg-transparent px-3 rounded focus:bg-transparent py-1 h-14 focus:outline-none  input"
          />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            className="bg-transparent px-3 rounded focus:bg-transparent py-1 h-44 focus:outline-none  input resize-none"
          />
          <input
            type="submit"
            value="Send Message"
            className="w-fit bg-white text-bg-black rounded px-8 py-3 cursor-pointer"
          />
        </form>
      </div>

      <Next text={"Go back to Home"} path={"/"} />
      <SocialIcons />
    </motion.div>
  );
}

export default Contact;
