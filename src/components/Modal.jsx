import React from 'react'
import './modal.css'

function Modal({ movie , toggleModal, status }) {
    return (
        <div className= {`movieModal ${status ? 'active' : undefined}`}>
            <a href="#" className='ModalClose' onClick={toggleModal}>
            <ion-icon name="close-outline"></ion-icon>
            </a>
            <iframe
                width="100%"
                height="100%"
                src="{movie.vidoe}"
                title="{`${movie.title} | Offical Trailer`}"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Modal;