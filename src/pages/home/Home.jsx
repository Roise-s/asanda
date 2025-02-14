import React from 'react'
import './home.css'
import HomeRight from '../../components/HomeRight.jsx'
import HomeLeft from '../../components/HomeLeft.jsx'

const Home = () => {
  return (
    <div className='home'>
      <HomeRight />
      <HomeLeft />
    </div>
  )
}

export default Home
