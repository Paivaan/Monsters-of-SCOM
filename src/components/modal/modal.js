import React from "react";
import { BiX } from "react-icons/bi";
import './modal.css'

function Modal(props) {

   return (props.trigger) ? (
      <div className="modal">
         <div className="modal-content">
            <button className="close-modal" onClick={() => props.setTrigger(false)}><BiX size={20} /></button>
            {props.children}
         </div>
      </div>
   ) : ""
} export default Modal