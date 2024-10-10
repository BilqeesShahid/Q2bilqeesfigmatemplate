"use client"

import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    
    <section className='text-black p-3 bg-slate-300'>
    <div className='grid gap-4 items-center py-8 px-4 md:grid-cols-2 xl:gap-8 sm:py-16 xl:px-16'>
      <Image 
        className="w-full max-w-xs mx-auto rounded-full" 
        src="/dining.jpeg" 
        alt="About Me" 
        width={500} 
        height={500} 
      />
      <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
        <h1 className='text-3xl sm:text-4xl font-bold text-myblue mb-4 hover:text-myorange'>About Us</h1>
        <p className='text-base sm:text-xl lg:text-2xl font-serif'>
          Welcome to WoodCrafts, where we believe that furniture is more than just a necessity. It’s a reflection of your style and a key part of creating a comfortable and beautiful home. Since our founding, we’ve been committed to designing and crafting furniture that combines quality, comfort, and timeless elegance.
        </p>
        <p className='mt-4 text-lg sm:text-xl font-serif text-myblue lg:text-3xl font-bold hover:text-myorange'>
          We Believe in following facts:
        </p>
        <ul className='text-base sm:text-xl font-serif mt-2'>
          <li>Quality & Craftsmanship</li>
          <li>Sustainability</li>
          <li>Satisfaction</li>
          <li>Creativity</li>
          <li>Best Shopping Experience</li>
        </ul>
      </div>
    </div>
  </section>
  
  )
}

export default About