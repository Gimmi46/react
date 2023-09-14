import React from 'react'
import profile from "../../asset/images/profile.jpg"
import "../Home/style.css"
import "../../components/Header/Nav/style.css"
import { BiSolidVideoPlus } from "react-icons/bi";
import { IoMdPhotos } from "react-icons/io";
import { LiaLaugh } from "react-icons/lia";
const Post = () => {
  return (
    <>

      <div className='post-card'>
        <div className='d-flex gap-1'>
          <div className='circle-profile'>
            <img src={profile} alt="" width={'40px'} />
          </div>
          <input className='search-box' type="" name="" value="" placeholder="What's on your mind , James ?" />
        </div>

        <div className='space-arround'>
          <div className='d-flex gap-1 align-item'>
            < i className="align-item" style={{ color: 'rgb(240, 6, 6)'}}><BiSolidVideoPlus /></i>
            <h1>Live Video</h1>
          </div>
          <div className='d-flex gap-1 align-item'>
            <i className="align-item" style={{ color: '#79bb14'}}><IoMdPhotos/></i>
            <h1>Photos/Video</h1>
          </div>
          <div className='d-flex gap-1 align-item'>
            <i className="align-item" style={{ color: '#ffff00'}}><LiaLaugh/></i>
            <h1>Feeling/Activity</h1>
          </div>
        </div>
        </div>



      </>
      )
}

      export default Post