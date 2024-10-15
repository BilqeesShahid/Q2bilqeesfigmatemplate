import React from 'react'
import NavLink from './NavLinks'



interface PropsType{
  links:string;
}

const MenuOverlay : React.FC<PropsType> = ({links}) => {
  return (
    <ul className='flex flex-col py-4 items-center'>{links.map((link: { path: string; title: string; },index: string) => 
      (
        <li key={index}>
 <NavLink href={link.path} title={link.title}/>
 </li>
))}
  </ul>
  )
}

export default MenuOverlay
