import React from 'react'
import {  useNavigate } from 'react-router-dom'

function SmallButton({text,path}) {
  const navigate = useNavigate()
    return (
      <span className='code code-btn'>
            
      <button onClick={() => navigate(path)} >
          {text}
    </button>
      </span>
  )
}

export default SmallButton