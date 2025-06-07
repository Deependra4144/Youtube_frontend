import React from 'react'
import { ImCancelCircle } from 'react-icons/im'
function Modal({ children, modalIsOpen, setModalIsOpen }) {
    return (
        <>
            {modalIsOpen && (<div className='bg-gray-300 opacity-85 min-w-full min-h-screen max-h-screen absolute top-0 z-50'>
                <button className='absolute top-4 right-4'><ImCancelCircle onClick={() => { setModalIsOpen(prev => !prev) }} fontSize={26} /></button>
                {children}
            </div>)}
        </>
    )
}

export default Modal
