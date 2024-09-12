import {React, useState} from 'react'
import { HiMenu, HiOutlinePhone  } from "react-icons/hi";
import Seidbar from '../Seidbar/Seidbar'
import s from './Header.module.css'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    return setIsOpen(prev => !prev);
  };

  return (
    <div className={s.header}>
       <button
        type="button"
        className={s.toggle_btn}
        aria-label="Toggle sidebar"
        onClick={toggle}
      ><HiMenu /></button>
     
       <img src={require('../../images/logo.jpeg')}alt=""  className={s.headerLogo}/>
       <a href="tel:+491717436805"><HiOutlinePhone/></a>
       
       <Seidbar isOpen={isOpen} />
    </div>
  )
}

export default Header
