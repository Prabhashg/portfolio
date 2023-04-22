import React from 'react'
import {GrLinkedinOption,GrFacebookOption,GrTwitter,GrInstagram,GrGithub} from 'react-icons/gr'

function SocialIcons() {
  return (
    <div className='md:flex gap-5 hidden'>
          <GrLinkedinOption />
          <GrGithub />
          <GrFacebookOption />
          <GrTwitter />
          <GrInstagram />
          
    </div>
  )
}

export default SocialIcons