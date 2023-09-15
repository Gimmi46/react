import React from 'react'
import Leftmenu from './Leftmenu'
import { RiMemoriesFill} from "react-icons/ri";
import {TiHome} from "react-icons/ti";
import {CiShop} from "react-icons/ci";
import {PiVideoThin} from "react-icons/pi";
import {HiUserGroup} from "react-icons/hi";
import {RiGamepadLine} from "react-icons/ri";

import "../../App.css"
import Profile from './Profile';

const Leftbar = () => {
  return (
 
  <>
  <div className='my-1 gap-2 flex-col'>
 <Profile/>
 <div>
  <Leftmenu icon={<RiMemoriesFill/>} name={'Friends'}/>
  <Leftmenu icon={<RiMemoriesFill/>} name={'Friends'}/>
  <Leftmenu icon={<RiMemoriesFill/>} name={'Friends'}/>
  <Leftmenu icon={<RiMemoriesFill/>} name={'Friends'}/>
  <Leftmenu icon={<RiMemoriesFill/>} name={'Friends'}/>
  </div>
  </div>
  </>
  )
}

export default Leftbar