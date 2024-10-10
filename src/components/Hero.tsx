import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    
    <div className='bg-slate-300 container relative pt-16'>
<Image className="w-[100%] h-auto"
 src="/banner.jpg"
  alt="hero pic"
width={1500}
height={900}/>

<div className='hidden sm:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
bg-transparent w-[350px] h-[300px] space-y-3 lg:w-[w-400px] lg:h-[300px] lg:space-y-6 xl:w-[400px]
xl:h-[300px] p-6 xl:space-y-8'>
<p className='lg:text-[30px] text-[22px] xl:text-[40px] leading-tight text-myblue'>New Arrival</p>
<h1 className='text-6xl font-bold'>Discover Our New Collection</h1>
  <p className='text-6xl text-myblue font-extrabold'>20% oFF</p>
<button className='text-white bg-myblue uppercase text-[12px] 
lg:text-[16px] py-2 xl:py-4 px-8 rounded-md  hover:bg-myorange'>Shop Now</button>
      
      </div>
      
      </div>
  )
}

export default Hero