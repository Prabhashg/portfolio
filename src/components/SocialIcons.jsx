import React from 'react'
import {GrLinkedinOption,GrFacebookOption,GrTwitter,GrInstagram,GrGithub} from 'react-icons/gr'

function SocialIcons() {
  return (
    <div className='md:flex gap-5 hidden'>
          <a href="https://www.linkedin.com/in/supreeth-ratam-127117221/"><GrLinkedinOption /></a>
          <a href="https://github.com/supreeth-ratam"> <GrGithub /></a>
          <a href="https://www.facebook.com/supreeth.ratam"> <GrFacebookOption /></a>
          <a href="https://twitter.com/Supreet34364725"> <GrTwitter /></a>
          <a href="https://www.instagram.com/supreeth_ratam/"> <GrInstagram /></a>
 
    </div>
  )
}

export default SocialIcons