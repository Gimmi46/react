import React from 'react'
import profile from "../../asset/images/profile.jpg"
import "../Home/style.css"
import { HiPlusCircle } from "react-icons/hi";
const Story = () => {

  return (
    <>
   <div className="card" >
          <img className="card-img-top" src={profile} height='140px' alt="" />
          <div className="card-body">
            <p>Create Story</p>
            d
            <div className='bg-plus'>
              <span className='plus'><HiPlusCircle /></span>
            </div>
          </div>
          
        </div>
       
    </>
  )
}

export default Story