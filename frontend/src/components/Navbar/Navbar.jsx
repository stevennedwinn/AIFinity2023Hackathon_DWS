import React from 'react'
import { useState } from 'react';
import Popup from '../Popup/Popup';
import { FaWrench } from 'react-icons/fa';
import {
    Nav,
    // NavLink,
    // Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
const Navbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
    <>
    <Nav>
      {/* <Bars/> */}
      {/* <NavMenu>
        <NavLink to='/about' activeStyle>
          About   
        </NavLink>
        <NavLink to='/services' activeStyle>
          Services
        </NavLink>
        <NavLink to='/contact-us' activeStyle>
          Contact Us
        </NavLink>
        <NavLink to='/sign-up' activeStyle>
          Sign Up
        </NavLink>
        Second Nav
        <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
      </NavMenu> */}
      <NavMenu/>
      <NavBtn>
        <NavBtnLink to='#' onClick={() => setButtonPopup(true)}><FaWrench/></NavBtnLink>
      </NavBtn>
    </Nav>
    <Popup trigger={buttonPopup} setTrigger={setButtonPopup} />
  </>
  )
}

export default Navbar;