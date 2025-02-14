import React from 'react'
import './homeSides.css'

const HomeRight = () => {
  return (
    <div className='homeright'>
      <a href="/">
        <button className="nameBtn">Asanda MP</button>
      </a>

      <div className="homeSection">
        <button className="logs">
          About me
        </button>
        <button className="logs">
          FAQ
        </button>
        <button className="logs">
          Contant me
        </button>
      </div>
    </div>
  )
}

export default HomeRight
