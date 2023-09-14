import React from 'react'
import "../..//..//App.css"
import "../Nav/style.css"


const Nav = (props) => {
  return (
  <>
  <ul className='list-style'>
    <li><a  className='active' style={{color: '#0073cf'}} >{props.home}</a></li>
   
    <li><a  >{props.video}</a></li>
    <li><a  >{props.shop}</a></li>
    <li><a  >{props.contact}</a></li>
    <li><a  >{props.game}</a></li>
 
  </ul>
  </>
  )
}

export default Nav