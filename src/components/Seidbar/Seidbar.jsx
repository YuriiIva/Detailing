import React, { useState } from 'react'
// #import { useState } from 'react';
import { HiChevronDoubleRight } from "react-icons/hi";
import Modal from '../../common/modal/Modal';


const Seidbar = () => {
  const [isOpenMod, setisOpenMod] = useState(false);
  const [descr, setDescr] = useState(null);

  const handelOpen = description => {
    setisOpenMod(true);
    setDescr(description);
  };
  const closeForm = () => {
    setisOpenMod(prev => !prev);
  };

  return (
    <div>
      <HiChevronDoubleRight />
<Modal closeForm={closeForm} description={descr}/>
    </div>
  )
}

export default Seidbar
