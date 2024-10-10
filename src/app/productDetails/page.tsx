import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import TipsTricks from '@/components/TipsTricks'
import Furniture from '@/components/Furniture'

const ProductDetails = () => {
  return (
    <section>
       
      <div className="bg-slate-300 grid grid-cols-1 md:grid-cols-3 gap-2 justify-items-center items-stretch">
  <div className="flex flex-col justify-center items-center min-h-full">
    <h1 className='text-3xl lg:text-5xl text-myblue font-sans font-bold p-5 ml-6'>50+ Beautiful rooms inspiration</h1>
    <p className='text-black text-xl lg:text-2xl font-sans font-medium p-4 ml-6'>
      Our designer already made a lot of beautiful<br/>
      prototype of rooms that inspire you
    </p>
    <Button className='bg-myblue text-white hover:bg-myorange mt-3 ml-8 mb-2'>Explore more</Button>
  </div>
  <div className="self-start">
    <Image src="/bed8.webp" alt="bedset" width={600} height={900} />
  </div>
  <div className="self-start">
    <Image src="/mybed11.jpg" alt="bedset1" width={500} height={600} />
  </div>
  </div>
  <div className="text-center mb-10 mt-10">
        <h1 className="text-myblue scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
        Tips & Tricks
        </h1>
</div>
  <TipsTricks/>
  <div className="text-center mb-10 mt-12">
        <h1 className="text-myblue scroll-m-20 text-2xl font-bold tracking-tight lg:text-4xl">
        &#64;WoodCrafts&#9750; Furniture
        </h1>
        </div>
        <Furniture/>
</section>

  
  
  )
}

export default ProductDetails