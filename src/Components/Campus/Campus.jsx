import React from 'react'
import './Campus.css'
import photo12 from '../../assets/photo12.png'
import photo13 from '../../assets/photo13.png'
import photo14 from '../../assets/photo14.png'
import photo15 from '../../assets/photo15.png'
import photo03 from '../../assets/photo03.png'
import { Link } from 'react-scroll';

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={photo12} alt="" />
        <img src={photo13} alt="" />
        <img src={photo14} alt="" />
        <img src={photo15} alt="" />
      </div>
      <button className='btn dark-btn'>See more here <img src={photo03} alt="" /></button>
    </div>
  )
}

export default Campus
