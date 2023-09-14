import React from 'react'
import Nav from './Nav/Nav'
import Rightnav from './Nav/Rightnav'
import "../../App.css"
import Logo from './Nav/Logo'
import '../Header/style.css'
import {TiHome} from "react-icons/ti";
import {CiShop} from "react-icons/ci";
import {PiVideoThin} from "react-icons/pi";
import {HiUserGroup} from "react-icons/hi";
import {RiGamepadLine} from "react-icons/ri";





const Header = () => {
    return (
        <>
       
            <div className='container box-shadow'>
                <div className='row px-1  align-item '>
                    <div className='col-3 '>
                        <Logo />
                    </div>

                    <div className='col-6 '>
                    <Nav  home={<TiHome/>} shop={<CiShop/>} video={<PiVideoThin/>}  contact={<HiUserGroup/>} game={<RiGamepadLine/>}/>
                    </div>
                
                <div className='col-3 '>
                    <Rightnav />
                </div>
                </div>
                </div>
           


        </>
    )
}

export default Header