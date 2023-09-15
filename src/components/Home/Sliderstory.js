import React, { useEffect,useState } from 'react'
import Story from './Story'
import "../Home/style.css"
import "../../App.css"
import Userstory from './Userstory';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Sliderstory = () => {
  // const [boxval, setBoxval] = useState(null);

  // useEffect(()=>{
  //   console.log("hjdshjsdhds")
  //   let box=document.getElementById("slider");
  //   setBoxval(box)
  //   console.log(box,"dsjkdsjkds")
  // },[])
  let box=document.getElementById("slider");
    const prevbtn=()=>{
      let width=box.clientWidth;
      box.scrollLeft=box.scrollLeft - width;
      console.log(width)
    
     }
     const nextbtn=()=>{
       let width=box.clientWidth;
       box.scrollLeft=box.scrollLeft + width
       console.log(width)
    
      }
     
    
 
  return (

 <>
 < div style={{position:'relative'}} >
  
 <button className="prev" onClick={prevbtn} type="" > <AiOutlineArrowLeft /> </button>
<button className="next" onClick={nextbtn}  type="">  <AiOutlineArrowRight /></button> 
 <div   className='d-flex gap-1 'id='slider'>

          <Story/>
         <Userstory />
        <Userstory />
        <Userstory />
        <Userstory />
        <Userstory />
       <Userstory />
       <Userstory />
       <Userstory />
        <Userstory />
        <Userstory />
 </div>
      </div>
 </>
  )
}

export default Sliderstory