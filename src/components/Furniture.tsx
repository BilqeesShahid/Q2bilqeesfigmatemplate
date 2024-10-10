import Image from 'next/image'
import React from 'react'

const Furniture = () => {
  return (
    <div>

      <div className='flex items-start justify-between gap-1'>
        <div>
          <Image src="/sofa12.jpg" alt="sofa" width={350} height={500}/>
          <Image src="/table4.jpg" alt="table" width={300} height={350}/>
          </div>
          <div>
            <Image src="/sofa4.jpg" alt="sofa1" width={350} height={500}/>
            <Image src="/sofa1.png" alt="sofa2" width={350} height={500}/>
            </div>
            <div>
            <Image src="/draw.webp" alt="sofa3" width={350} height={500}/>
            <Image src="/brown.webp" alt="chair" width={350} height={500}/>
            </div>
            <div>
            <Image src="/study.jpg" alt="study" width={350} height={500}/>
            </div>
            <div>
            <Image src="/divider.webp" alt="living" width={350} height={500}/>
            </div>
        <div></div>
      </div>
    </div>
  )
}

export default Furniture