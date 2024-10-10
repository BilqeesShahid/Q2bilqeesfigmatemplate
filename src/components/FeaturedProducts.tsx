import React from 'react'
import Image from 'next/image'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const FeaturedProducts = () => {
  return (
    
       <div className='mb-[100px] mt-[100px] bg-slate-300'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myblue scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Featured Products
        </h1>
</div>
{/*category starts from here*/}
{/*Dining*/}
<div className='flex flex-wrap justify-between items-center gap-4 group'>
  <div className="block relative h-[23rem] shadow-xl overflow-hidden">
    <Image src="/bed1.jpg" alt="bedroom" width={300} height={400} className="object-cover h-64" />
    <div className="card-body">
      <h2 className="card-title text-lg lg:text-xl text-myblue font-serif font-bold text-center mt-1">BedRoom</h2>
      <p className='text-lg lg:text-xl font-bold text-black '>Luxurious and Comfy Bed Set</p>
      <div>
      <Button className='bg-myblue  hover:bg-transparent text-white
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl 
        absolute bottom-2 right-2 font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myorange' />Add to Cart
        </Button>
        <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl
         absolute bottom-2 left-2 font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myorange' />Buy Now!
        </Button>
        </div>
      </div>
    </div>
  
  <div className="block relative h-[23rem] shadow-xl overflow-hidden">
    <Image src="/dining11.jpg" alt="dining" width={300} height={400} className="object-cover h-64" />
    <div className="card-body">
      <h2 className="card-title text-lg lg:text-xl text-myblue font-serif font-bold text-center mt-1">Dining Table</h2>
      <p className='text-lg lg:text-xl font-bold text-black '>Grooms your life style!</p>
      <div>
      <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl 
        absolute bottom-2 right-2 font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myorange' />Add to Cart
        </Button>
        <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl
         absolute bottom-2 left-2 font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myorange' />Buy Now!
        </Button>
        
      </div>
    </div>
  </div>
  <div className="block relative h-[23rem] shadow-xl overflow-hidden">
    <Image src="/living.jpg" alt="living" width={300} height={400} className="object-cover h-64" />
    <div className="card-body">
      <h2 className="card-title text-lg lg:text-xl text-myblue font-serif font-bold text-center mt-1">Living Room</h2>
      <p className='text-lg lg:text-xl font-bold text-black line-clamp-1'>Elegant and Modern Living Room Set</p>
      <div> 
      <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl 
        absolute bottom-2 right-2 font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myorange' />Add to Cart
        </Button>
        <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl
         absolute bottom-2 left-2 font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myorange' />Buy Now!
        </Button>
        
      </div>
    </div>
  </div>
  <div className="block relative h-[23rem] shadow-xl overflow-hidden">
    <Image src="/draw1.jpg" alt="drawing room" width={300} height={400} className="object-cover h-64" />
    <div className="card-body">
      <h2 className="card-title text-lg lg:text-xl text-myblue font-serif font-bold text-center mt-1">Drawing Room</h2>
      <p className='text-lg lg:text-xl font-bold text-black '>Classic and Comfortable Drawing Room Set</p>
      <div>
      <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl 
        absolute bottom-2 right-2 font-semibold tracking-tight'>
          <FaShoppingCart className='mr-2 h-4 w-4 group-hover:text-myorange' />Add to Cart
        </Button>
        <Button className='bg-myblue hover:bg-transparent text-white 
        hover:text-black scroll-m-20 border-b pb-2 text-xs rounded-xl
         absolute bottom-2 left-2 font-semibold tracking-tight'>
          <FaHeart className='mr-2 h-4 w-4 group-hover:text-myorange' />Buy Now!
        </Button>
        </div>
      </div>
    </div>
  </div>
</div>


 
  )
}

export default FeaturedProducts