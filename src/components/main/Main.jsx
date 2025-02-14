import React from 'react'
import './main.css'
import pic from '../../assets/asanda.png'
import { BiLogoTelegram } from "react-icons/bi";
import { FaTiktok } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Main = () => {
  return (
    <div className='main'>
      <div className="one">
        <p className="join">
          Join the community
        </p>

        <div className="btnsdiv">
          <button className="linkBtns">
            <BiLogoTelegram className='Bilogo' /> Telegram
          </button>
          <button className="linkBtns">
            <FaTiktok className='Bilogo' /> TikTok
          </button>
          <button className="linkBtns">
            <IoLogoYoutube className='Bilogo' /> YouTube
          </button>
          <button className="linkBtns">
          <FaInstagram className='Bilogo' /> Instagram
          </button>
        </div>
      </div>
      <div className="oneoand">
        <img src={pic} alt="pic" className='picone' />
      </div>
    </div>
  )
}

export default Main
