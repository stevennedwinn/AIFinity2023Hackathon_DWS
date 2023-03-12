import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'

var w = window.innerWidth;
var h = window.innerHeight;

export const Nav = styled.nav`
    background: rgb(14, 14, 77);
    height:50px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw-1000px)/2);
    z-index: 10;
    // flexDirection: row
    // justifyContent: flex-end
    // max-width: 120vw;
    // width: ${w-100}px;

`;

export const NavLink = styled(Link)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
  color: #15cdfc;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #fff;
@media screen and (max-width: 768px) {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
//  width: calc(0vw + 80vw);
white-space: nowrap; */
@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;
margin-right: 0.5rem;
/* Third Nav */
justify-content: flex-end;
// width: inherit;
// alignItems: 'flex-end'
// right: 0;
@media screen and (max-width: 768px) {
  display: none;
}
`;

export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: #256ce1;
padding: 10px 22px;
color: #fff;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
/* Second Nav */
// margin-left: 24px;
// margin-right: 0; 
alignItems: 'flex-end'
&:hover {
  transition: all 0.2s ease-in-out;
  background: #fff;
  color: #010606;
}
`;