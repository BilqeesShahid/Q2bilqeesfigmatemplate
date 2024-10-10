"use client";
import { useState } from 'react';

import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Contact = () => {
  const [emailSubmitted,setEmailSubmitted]= useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";
  
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
  
    try {
      const response = await fetch(endpoint, options);
      if (!response.ok) {
        const errorText = await response.text(); // Get the actual error response text
        console.error('Error response:', errorText);
        throw new Error('Failed to send message');
      }
  
      const resData = await response.json();
      console.log('Message Sent.');
      setEmailSubmitted(true);
    } catch (error) {
      console.error('An error occurred while sending the message:', error);
    }
  };
  

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
        <img src="/image1.png" alt="contactpic" className="w-24 h-24 md:w-36 md:h-36 object-cover" />
        <img src="/image2.png" alt="contactpic" className="w-24 h-24 md:w-36 md:h-36 object-cover" />
        <img src="/image3.png" alt="contactpic" className="w-24 h-24 md:w-36 md:h-36 object-cover" />
        <img src="/image5.png" alt="contactpic" className="w-24 h-24 md:w-36 md:h-36 object-cover" />
        <img src="/image.png" alt="contactpic" className="w-24 h-24 md:w-36 md:h-36 object-cover" />
      </div>
  
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        {/* Email Input */}
        <div>
          <label htmlFor="email" className='text-black block mb-2 text-sm font-medium'>
            Your email
          </label>
          <input
            name="email"
            type="email"
            id="email"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2'
            placeholder='email us'
          />
        </div>
        
        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className='text-black block mb-2 text-sm font-medium'>
            Subject
          </label>
          <input
            name="subject"
            type="text"
            id="subject"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2'
            placeholder='welcome for your inquiry'
          />
        </div>
        
        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className='text-black block mb-2 text-sm font-medium'>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            className='bg-white border border-gray-300 placeholder-slate-400 text-black rounded-lg block w-full p-2'
            placeholder="Let's talk about your requirements..."
          />
        </div>
        
        {/* Submit Button */}
        <button 
          type="submit"
          className='bg-myblue hover:bg-myorange text-white font-medium py-2 px-4 rounded-lg w-full'
        >
          Send Message
        </button>
        
        {/* Success Message */}
        {emailSubmitted && (
          <p className='text-green-500 text-sm mt-2'>Email Sent Successfully</p>
        )}
      </form>
    </div>
  </section>
  
  );
}

export default Contact;
