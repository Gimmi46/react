import React from 'react'

import Post from './Post'
import Feed from './Feed'
// import { AiOutlineArrowLeft } from "react-icons/ai";
// import { AiOutlineArrowRight } from "react-icons/ai";
import Sliderstory from './Sliderstory';
import "../../components/Home/style.css"
import "../../App.css"


const Home = () => {

  return (
    <>
    
      <div className='over-hidden' >
         <Sliderstory/>
      </div>
      <div>
        < div className='  my-1'>
          <Post />
        </div>
        <div className=' my-1'>
          <Feed />
        </div>

        
      </div>

    </>
  )
}

export default Home