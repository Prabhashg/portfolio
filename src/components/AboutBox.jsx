import React from 'react'
function AboutBox({item}) {
  return (
      <div className='aboutBox pl-4 md:px-6 pb-12 w-full '>
          <div className='flex w-full mb-3 text-header font-Lato md:justify-between md:flex-row flex-col'>
              
              <h1 className=' font-bold  flex gap-2 items-center text-base '>{item.title}
              {item.icon && <span><item.icon/></span>}
              </h1>
              <p className='font-semibold font-Lato italic '>{item.place}</p>
          </div>
          <p className=''>
            {item.description}
          </p>
    </div>
  )
}

export default AboutBox