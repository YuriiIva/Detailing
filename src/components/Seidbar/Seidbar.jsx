import React from 'react'

import { HiChevronDoubleRight } from "react-icons/hi";

import {items} from "../../data/forMenu"


const Seidbar = () => {
 

  return (
    <div>
      <HiChevronDoubleRight />
    
<div>
  <ul>
    {items.map(item=>(
      <li>
        <h2>{item.name}</h2>
        <p>{item.icon}</p>
      </li>
    ))

    }
  </ul>
</div>
    </div>
  )
}

export default Seidbar
