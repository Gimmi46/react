import React from 'react'
import "./style.css"

const Leftmenu = (props) => {
  return (
 <>
 <div className='l-menu'>
    <i> { props.icon}</i>
    <h3>{props.name}</h3>
 </div>
 </>
  )
}

export default Leftmenu