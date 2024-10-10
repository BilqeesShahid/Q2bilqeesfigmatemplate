"use client"
import  React,{useState } from 'react';
import Link from 'next/link'
import NavLink from "./NavLinks";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import MenuOverlay from "./MenuOverlay";

const navLink=[
  {

    title:"Home",
    path:"/"
  },
  {
  title:"About",
path:"/about",
},
{
  title:"Product Details", 
path:"/productDetails",
},
{
  title:"Contact",
path:"/contact",
},
]

const Navbar = () => {
  const [navbarOpen ,setNavbarOpen]= useState(false)
  return (
    <nav>

      <div className='flex items-center justify-between font-bold text-black px-4 py-2 mr-3'>
      <Link href={"/"} className='text-2xl md:text-5xl text-myblue font-semibold hover:text-myorange'>
      &#64;WoodCrafts&#9750;</Link>
      <div className='mobile-menu block md:hidden'>
        {
          !navbarOpen ? (
            <button onClick={()=> setNavbarOpen(true)} className='flex items-center px-3 py-2 border rounded 
             border-slate-500 text-black hover:text-myorange hover:border-gray-800'>
              <FaBars   className='h-5 w-5'/></button>
          ):(
            <button onClick={()=> setNavbarOpen(false)} className='flex items-center px-3 py-2 border rounded 
            border-slate-500 text-black hover:text-myorange hover:border-gray-800'><FaXmark className='h-5 w-5'/></button>
          )
        }
      </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
             {
             navLink.map((link,index)=>(
              <li key={index}>
                <NavLink href={link.path} title={link.title}/>
              </li>
             ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLink}/> : null}
      </nav>
  
            )
          };
export default Navbar;
