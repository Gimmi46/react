import React from 'react'
import "./style.css"
import profile from "../../asset/images/profile.jpg"
import "../Home/style.css"
import "../../components/Header/Nav/style.css"
import { FaEarthAmericas } from "react-icons/fa6";


const Feed = () => {
    return (
        <>
            <div className='feed-card'>
                <div className='row p-2'>
                    <div>
                        <div className='d-flex gap-1 align-item'>
                            <div className='circle-profile'>
                                <img src={profile} alt="" width={'40px'} />
                            </div>
                            <div className="flex-col">
                                <h3>voice of</h3>
                                <h4 className='align-item gap-1'>sucees of life  <span> 2 hrs  <i><FaEarthAmericas /></i> </span> </h4>
                            </div>
                        </div>
                    </div>
                    <div>
                        hgsh
                    </div>
                </div>
                <h2>hcghss jvhfgj</h2>
                <div className="my-1">
                    
              
                <img className="card-img-top " height='450px' src='https://images.pexels.com/photos/18254681/pexels-photo-18254681.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" />
                </div>
            </div>
            


        </>

    )
}

export default Feed