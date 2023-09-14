import React from 'react'
// import profile from "../../asset/images/profile.jpg"
import "../Home/style.css"
import "../../components/Home/style.css"

const Userstory = () => {
  return (
    <>
    <div className="card" >
    <div className='bg-plus pos-profile'>
     <img className='plus'src="https://www.pexels.com/photo/woman-with-a-camera-sitting-on-the-floor-covered-with-polaroids-18173610/" width="40px" alt='loaded'/>
    </div>
  <img className="card-img-top" src='https://images.pexels.com/photos/17801570/pexels-photo-17801570/free-photo-of-dag-gezisi.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt=""/>
  <div className='text-pos'>
    <p className=''>James</p>
  </div>
</div>
</>
 
  )
}

export default Userstory