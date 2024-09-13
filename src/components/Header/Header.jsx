import {React, useState} from 'react'
import { HiMenu, HiOutlinePhone  } from "react-icons/hi";
import Seidbar from '../Seidbar/Seidbar'
import s from './Header.module.css'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    return setIsOpen(prev => !prev);
  };
console.log(isOpen)
  return (
    <div className={s.header}>
       <button
        type="button" 
        className={s.toggle_btn}
        aria-label="Toggle sidebar"
        onClick={toggle}
      ><HiMenu />
      </button>
     <a href="/" className={s.headerLogo}><img src={require('../../images/logo.jpeg')} alt=""  /></a>
       
       <a href="tel:+491717436805" className={s.toggle_btn}><HiOutlinePhone/></a>
       
    {isOpen &&  <Seidbar isOpen={isOpen} />}
    </div>
  )
}

export default Header
