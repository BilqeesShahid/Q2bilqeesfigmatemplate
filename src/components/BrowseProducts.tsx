import Image from 'next/image'
import React from 'react'

const BrowseProducts = () => {
  return (

     <div className='mb-[100px] mt-[100px] bg-slate-300'>
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-myblue scroll-m-20 text-2xl font-bold tracking-tight lg:text-3xl">
        Browse The Range
        </h1>
        <p className='text-lg lg:text-xl'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center items-center">
  <div className="max-w-[350px] h-[25rem] p-2 shadow-md rounded-xl relative group">
    <div>
      <Image src="/sofa2.jpg" alt="sofa" width={400} height={400} className="w-full h-full object-cover" />
    </div>
    <h2 className="card-title text-2xl font-bold text-myblue text-center mt-2">Smart Sofa</h2>
  </div> 
  <div className="max-w-[350px] h-[25rem] p-2 shadow-md rounded-xl relative group">
    <div>
      <Image src="/divider.webp" alt="table" width={400} height={400} className="w-full h-full object-cover" />
    </div>
    <h2 className="card-title text-2xl font-bold text-myblue text-center mt-2">Smart Table</h2>
  </div> 
  <div className="max-w-[350px] h-[25rem] p-2 shadow-md rounded-xl relative group">
    <div>
      <Image src="/sofa12.jpg" alt="chair" width={400} height={400} className="w-full h-full object-cover" />
    </div>
    <h2 className="card-title text-2xl font-bold text-myblue text-center mt-2">Smart Chair</h2>
  </div> 
</div>
</div>
    )
}

export default BrowseProducts

 
