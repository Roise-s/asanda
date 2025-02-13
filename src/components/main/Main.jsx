import React from 'react'
import './main.css'
import pic from '../../assets/asanda.png'

const Main = () => {
  return (
    <div className='main'>
      <div className="one">
        social
      </div>
      <div className="oneoand">
        <img src={pic} alt="pic" className='picone' />
      </div>
    </div>
  )
}

export default Main
