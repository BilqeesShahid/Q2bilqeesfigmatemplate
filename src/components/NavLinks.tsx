import React from 'react'
import Link from 'next/link'

interface PropsType{
  href:string,
  title:string,

}
const NavLink : React.FC<PropsType> = ({href, title }) => {
  return (
    <div>
      <Link href={href} className='block py-2 pl-3 pr-4
             text-black sm:text-xl rounded md:p-0 hover:text-myorange text-center'>{title}</Link>
    </div>
  )
}

export default NavLink