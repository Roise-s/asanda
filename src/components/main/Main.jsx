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
          <a href="https://t.me/asandatechcommunity" target='_blank'>
            <button className="linkBtns">
              <BiLogoTelegram className='Bilogo' /> Telegram
            </button>
          </a>
          
          <a href="https://www.tiktok.com/@asandatech?_t=8ngtgzqvpcd&_r=1" target='_blank'>
            <button className="linkBtns">
              <FaTiktok className='Bilogo' /> TikTok
            </button>  
          </a>
        
          <a href="https://www.youtube.com/@asanda_tech" target='_blank'>
            <button className="linkBtns">
              <IoLogoYoutube className='Bilogo' /> YouTube
            </button>
          </a>
          
          <a href="https://www.instagram.com/asanda.tech/?next=%2Fthehighwithroise%2F" target='_blank'>
            <button className="linkBtns">
            <FaInstagram className='Bilogo' /> Instagram
            </button>
          </a>
          
        </div>
      </div>
      <div className="oneoand">
        <img src={pic} alt="pic" className='picone' />
      </div>
    </div>
  )
}

export default Main
