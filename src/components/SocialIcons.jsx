import React from 'react'
import {GrLinkedinOption,GrFacebookOption,GrTwitter,GrInstagram,GrGithub} from 'react-icons/gr'

function SocialIcons() {
  return (
    <div className='flex gap-5'>
          <GrLinkedinOption />
          <GrGithub />
          <GrFacebookOption />
          <GrTwitter />
          <GrInstagram />
          
    </div>
  )
}

export default SocialIcons