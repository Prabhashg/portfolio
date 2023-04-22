import React from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {AiOutlineMenu} from "react-icons/ai"

const nav_items = [
  {
    name: "Projects",
    link:"/projects/all"
  },
  {
    name: "Skills",
    link:"/skills"
  },
  {
    name: "About Me",
    link:"/about"
  },
  {
    name: "Contact",
    link:"/contact"
  },
]

const navVariant = {
  hidden: {
    "&::after": {
     scale:0
    }
  },
  visible: {
    "&::after": {
      scale:1
    }
  }
}

function Navbar({setShowSideBar}) {
  const navigate = useNavigate()

  const handleNavigation = (route) => {
    navigate(route)
    setShowSideBar(false)
  }

  return (
    <div className='flex justify-between px-4 md:px-16 lg:px-52 pt-6 md:pt-16 items-center '>
      <button className='logo'
      onClick={() =>{navigate('/')}}>
      <img src="/logo/logo-white-nobg.png" alt="SR" className='w-12 translate-y-2'/>
      </button>
      <div className='md:hidden text-3xl translate-y-2 opacity-50'>
        <button onClick={() => setShowSideBar((prev) => !prev)}><AiOutlineMenu /></button>
      </div>
      <div className='md:flex gap-6  lato hidden '>
        {nav_items.map((item, key) => <motion.button
          key={key}
          onClick={() => handleNavigation(item.link)}
          whileHover={navVariant}
          initial="hidden"
          animate="visible"
          className="navlink lato text-article relative"
        >{item.name}</motion.button>)}
      </div>
    </div>
  )
}

export default Navbar