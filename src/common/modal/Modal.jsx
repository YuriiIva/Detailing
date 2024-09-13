import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useLockBodyScroll } from 'react-use';
// import { useToggle } from '@reactuses/core'

import styles from './Modal.module.css';

const modalRootRef = document.querySelector('#modal-root');

const Modal = () => {
  

    const [isOpenMod, setisOpenMod] = useState(false);
    
  console.log("Modal", isOpenMod)
 
    
    const closeForm = () => {
      setisOpenMod(prev => !prev);
    };
  
  useLockBodyScroll(true);

  useEffect(() => {
    const onEscPress = e => {
      if (e.code === 'Escape') {
        closeForm();
      }
    };

    window.addEventListener('keydown', onEscPress);

    return () => {
      window.removeEventListener('keydown', onEscPress);
    };
  }, [closeForm]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) return closeForm();
  };

  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <header className={styles.header}>
          <button
            className={styles.closeBtn}
            onClick={closeForm}
            aria-label="Close"
          >
            &times;
          </button>
        </header>
        <div className={styles.content}>
          <div className={styles.lead}></div>
{/* 
          {description} */}
        </div>
      </div>
    </div>,
    modalRootRef,
  );
};

export default Modal;