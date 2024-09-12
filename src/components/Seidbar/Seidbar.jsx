import React from 'react'

import { HiChevronDoubleRight } from "react-icons/hi";

import {items} from "../../data/forMenu"
import s from "./Seidbar.module.css";


const Seidbar = ({isOpen}) => {
 

  return (
   ( <div className={s.seidbar}>
    <HiChevronDoubleRight />
  
<div>
<ul>
  {items.map(item=>(
    <li key={item.id}>
      <h2>{item.name}</h2>
      <p>{item.icon}</p>
    </li>
  ))

  }
</ul>
</div>
  </div>) && isOpen
  )
}

export default Seidbar
