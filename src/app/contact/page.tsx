import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image'

const Contact = () => {
   
   return (
    <section className='bg-slate-300 grid gap-8 py-12 px-4 md:grid-cols-2 md:py-24 md:px-12 lg:px-24 relative'>
    {/* First Column (Text & Social Links) */}
    <div className='z-10'>
      <h5 className='text-2xl font-bold text-myblue hover:text-myorange mb-4'>Let's Connect!</h5>
      <p className='text-gray-900 font-serif mb-4 max-w-md text-base sm:text-lg lg:text-2xl'>
        At &#64;WoodCrafts&#9750;, we are here to help you create the perfect space with our beautiful,
        high-quality furniture. Whether you have a question about a product, need assistance with your order, 
        or just want to share feedback, we’d love to hear from you!
      </p>
      <div className='socials flex gap-4'>
        <Link href="https://github.com" target="_blank">
          <FaGithub className='text-2xl text-myblue hover:text-myorange' />
        </Link>
        <Link href="https://linkedin.com" target="_blank">
          <FaLinkedin className='text-2xl text-myblue hover:text-myorange' />
        </Link>
      </div>
    </div>
  
    {/* Second Column (Images & Email Form) */}
    <div>
      <div className='flex flex-wrap justify-center gap-3 mb-6'>
        <Image src="/study.jpg" alt="contactpic" className="w-25 h-25 md:w-60 md:h-70  object-cover"/>
      </div>
  
       
    </div>
  </section>
  
  );
}

export default Contact;
