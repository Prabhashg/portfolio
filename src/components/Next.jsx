import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { easeIn, easeOut, motion } from "framer-motion";



function Next({ text, path }) {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(path)}
      className='flex lato text-article my-4 items-center gap-3 hover:underline cursor-pointer w-fit'>
          <p>{text}</p>
      <motion.span
        animate={{ x: 20 }}
        transition={{ delay: 1,repeatType:'reverse', repeat: Infinity,type:easeOut }}
        className='text-2xl cursor-pointer'><BsArrowRight /></motion.span>
      </motion.button>
  )
}

export default Next