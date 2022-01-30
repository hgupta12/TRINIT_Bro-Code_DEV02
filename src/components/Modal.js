import React from 'react';
import './Modal.scss';
const Modal = (props) => {
  return (
        <>
        <div className='overlay' onClick={props.closeModal}></div>
        <div className="modal">
            <i className="fas fa-times" onClick={props.closeModal}></i>
            <h1 id="modal-heading">{props.heading}</h1>
            {props.children}
        </div>
      </>
  );
};

export default Modal;
