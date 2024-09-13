import React, { useState } from 'react'

import { HiChevronDoubleRight } from "react-icons/hi";

import {items} from "../../data/forMenu"
import s from "./Seidbar.module.css";
import Modal from '../../common/modal/Modal';


const Seidbar = ({isOpen}) => {
 
  const [isOpenMod, setisOpenMod] = useState(false);
  // const [descr, setDescr] = useState(null);

  const handelOpen = () => {
    setisOpenMod(true);
    // setDescr(description);
  };

  const closeForm = () => {
    setisOpenMod(prev => !prev);
  };
 

  return (
     <div className={s.seidbar}>
     
      {isOpenMod && <Modal closeForm={closeForm} /> }
    {isOpen ? <div>
<HiChevronDoubleRight />
<ul>
  {items.map(item=>(
    <li key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.icon}</p>
    </li>
  )) }
</ul>
</div> : ''}
    
  

  </div>)
  
     
  
}

export default Seidbar
