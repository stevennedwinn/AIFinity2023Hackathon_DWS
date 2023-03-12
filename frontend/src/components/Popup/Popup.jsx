import React from 'react'
import "./Popup.css";
import Tabs from "../Tabs/Tabs";
// import { FaWindowClose } from "react-icons/fa";
function Popup(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.setTrigger(false)}>×</button>
            <Tabs />
            {/* {props.children} */}
        </div>
    </div>
  ) : "";
}

export default Popup;