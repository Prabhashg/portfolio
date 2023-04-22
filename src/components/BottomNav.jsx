import React from 'react'
import { GrLinkedinOption, GrFacebookOption, GrTwitter, GrInstagram, GrGithub } from 'react-icons/gr'

function BottomNav({showBottomBar}) {
    return (
      showBottomBar &&
      <div className='flex fixed bottom-0 left-0 w-full text-lg justify-around items-center h-14  bottom-nav md:hidden'>
          <GrLinkedinOption />
          <GrGithub />
          <GrFacebookOption />
          <GrTwitter />
          <GrInstagram />
    </div>
  )
}

export default BottomNav