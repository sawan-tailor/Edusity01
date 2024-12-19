 import React from 'react'
 import './Program.css'
 import photo04 from '../../assets/photo04.png'
 import photo05 from '../../assets/photo05.png'
 import photo06 from '../../assets/photo06.png'
 import photo07 from '../../assets/photo07.png'
 import photo08 from '../../assets/photo08.png'
 import photo09 from '../../assets/photo09.png'
 const Programs = () => {
   return (
     <div className='programs'>
        <div className="program">
            <img src={photo04} alt="" />
            <div className="caption">
                <img src={photo07} alt="" />
                <p>Graduation Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={photo05} alt="" />
            <div className="caption">
                <img src={photo08} alt="" />
                <p>Masters Degree</p>
            </div>
        </div>
        <div className="program">
            <img src={photo06} alt="" />
            <div className="caption">
                <img src={photo09} alt="" />
                <p>Post Graduation</p>
            </div>
        </div>
       
     </div>
   )
 }
 
 export default Programs
 