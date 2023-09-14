import React from 'react'
import "../..//..//App.css"
import "../Nav/style.css"
import {TbGridDots} from "react-icons/tb";
import {FaFacebookMessenger} from "react-icons/fa";
import {IoIosNotifications} from "react-icons/io";
import {MdOutlineArrowDropDown} from "react-icons/md";
import profile from "../..//..//asset/images/profile.jpg"
 

const Rightnav = () => {
  return (
  <>
  <ul className='list-style-2'>
   <li className='circle-profile'><a><img src={profile} width={'40px'} alt="" /></a></li>
    <li><a><TbGridDots/></a></li>
    <li><a> <FaFacebookMessenger/> </a></li>
    <li><a><IoIosNotifications/></a></li>
    <li><a><MdOutlineArrowDropDown/></a></li>
    

   </ul>
  </>
  )
}

export default Rightnav