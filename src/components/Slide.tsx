import Image from 'next/image';
import React from 'react';

interface PropsType {
  img: string;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<PropsType> = ({ img, title, mainTitle, price }) => {
  return (

    <div className="outline-none border-none relative">
      <Image
        className="h-[300px] md:h-[400px] rounded-xl object-cover"
        src={img}
        alt="slider image"
        width={400}
        height={300}
      />
      <div className="absolute bottom-0 left-0 w-full bg-transparent bg-opacity-80 p-4 sm:p-6 lg:p-8">
        <h3 className="text-myorange font-bold text-[18px] md:text-[22px]">{title}</h3>
        <h2 className="text-black text-[22px] md:text-[26px] lg:text-[32px] font-bold leading-[1.2]">{mainTitle}</h2>
        <h3 className="text-[16px] md:text-[18px] lg:text-[20px] text-black">
          Starting at{" "}
          <b className="text-[18px] md:text-[22px] lg:text-[24px]">{price}</b>
        </h3>
        <div className="bg-myblue text-white text-[14px] md:text-[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-myorange mt-2">
          Shop Now
        </div>
      </div>
    </div>
  );
};

export default Slide;
