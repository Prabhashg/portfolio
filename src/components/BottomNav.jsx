import React from 'react'
import { GrLinkedinOption, GrFacebookOption, GrTwitter, GrInstagram, GrGithub } from 'react-icons/gr'

function BottomNav({showBottomBar}) {
    return (
      showBottomBar &&
      <div className='flex fixed bottom-0 left-0 w-full text-lg justify-around items-center h-14  bottom-nav md:hidden z-50'>
        <a href="https://www.linkedin.com/in/supreeth-ratam-127117221/"><GrLinkedinOption /></a>
          <a href="https://github.com/supreeth-ratam"> <GrGithub /></a>
          <a href="https://www.facebook.com/supreeth.ratam"> <GrFacebookOption /></a>
          <a href="https://twitter.com/Supreet34364725"> <GrTwitter /></a>
          <a href="https://www.instagram.com/supreeth_ratam/"> <GrInstagram /></a>
    </div>
  )
}

export default BottomNav