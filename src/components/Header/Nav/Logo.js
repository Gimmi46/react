import React from 'react'
import fblogo from "../../../asset/Fblogo.svg.png"
import "../Nav/style.css"
import "../../../App.css"
import {FiSearch} from "react-icons/fi"


const Logo = () => {
  return (
    <>
    <div className='align-item  gap-1'>
      <img src={fblogo} alt="" width={"45px"} />
     <div style={{position:'relative'}}>
      <input  className='search-box' type="search" name="" value="" placeholder='Search Facebook'/>
      <span className='search-pos'> <FiSearch/> </span>
      </div>
    </div>
    </>
  )
}

export default Logo