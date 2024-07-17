import React from 'react';


function Modal({open,onClose,children}) {
  return (
    <div onClick={onClose} className={`fixed flex justify-center items-center top-0 right-0 ${open ? 'visible' : 'invisible'}`}>
      {children}
    </div>
  )
}

export default Modal
