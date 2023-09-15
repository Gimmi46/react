import React from 'react'
import "./style.css"
import profile from "../../asset/images/profile.jpg"
import "../../components/Header/Nav/style.css"

const Profile = () => {
  return (
   <>
    <div className='l-menu'>
          <div className='circle-profile'>
            <img src={profile} alt="" width={'40px'} />
          </div>
              <h3>Walker</h3>
        </div>
   </>
  )
}

export default Profile