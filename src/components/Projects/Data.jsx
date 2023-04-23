import React from 'react'
import { projects } from '../../data/projects'
import ImageContainer from './ImageContainer'


function Data({setIsModel,setModelContent}) {
  return (
   

    <div className='flex w-full flex-row flex-wrap gap-8 md:px-5 card-wrapper '>
          {projects.map((item) => {
            return (item.tag === 'data') && <ImageContainer project={item} setIsModel={setIsModel} setModelContent={ setModelContent} />
          })}
    </div>
  )
}

export default Data