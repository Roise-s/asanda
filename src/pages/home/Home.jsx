import React from 'react'
import './home.css'
import HomeRight from '../../components/Homeright'
import HomeLeft from '../../components/HomeLeft'

const Home = () => {
  return (
    <div className='home'>
      <HomeRight />
      <HomeLeft />
    </div>
  )
}

export default Home
