import React from 'react'
import Leftmenu from './Leftmenu'
import { RiMemoriesFill} from "react-icons/ri";
import { FaUserGroup } from 'react-icons/fa6';
import { CiShop } from 'react-icons/ci';
import {PiVideoThin} from "react-icons/pi";
import {HiUserGroup} from "react-icons/hi";


import "../../App.css"
import Profile from './Profile';

const Leftbar = () => {
  return (
		<>
		
			<div className='my-1 gap-2 flex-col'>
				<Profile />
				<div>
					<Leftmenu icon={<FaUserGroup />} name={'Friends'} />
					<Leftmenu icon={<HiUserGroup />} name={'Group'} />
					<Leftmenu icon={<CiShop />} name={'Marketplace'} />
					<Leftmenu icon={<PiVideoThin />} name={'Watch'} />
					<Leftmenu icon={<RiMemoriesFill />} name={'Memories'} />
				</div>
			</div>
		</>
	);
}

export default Leftbar