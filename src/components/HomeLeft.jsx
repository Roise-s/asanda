import React from 'react'
import './homeSides.css'
import Main from './main/Main'

const HomeLeft = () => {
  return (
    <div className='homeleft'>
      <p className="mainName">
        Tech Content <span className='innerMain'>Creator</span>  
      </p>
      <p className="maintext">
        I'm a South African tech content creator with a passion for exploring the latest trends, gadgets, and innovations in the world of technology. My goal is to make tech accessible and engaging for all audiences, whether you're a seasoned expert or just starting to explore the digital world. Ciao!
      </p>
      <Main />
    </div>
  )
}

export default HomeLeft
