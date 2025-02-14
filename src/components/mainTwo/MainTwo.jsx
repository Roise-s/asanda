import React from 'react'
import './two.css'
import video from '../../assets/blue.mp4'
import { GiBuyCard } from "react-icons/gi";

const MainTwo = () => {
  return (
    <div className='mainTwo'>
        <div className="buyVideo">
            <video className='videosss' autoPlay loop muted src={video}></video>
        </div>

      <div className="buyBook">
        <p className="titlebuy">
          The 2025 Budget-Friendly Content Creator's Gear Guide
        </p>
        <p className="mainSet">
          A comprehensive resource designed to help creators of all levels build a professional setup without overspending. Packed with expert recommendations for affordable cameras, microphones, lighting, and essential accessories, this guide ensures you get high-quality results on a budget. Whether you’re starting out or upgrading your gear, it also includes tips on maximizing the potential of every tool and links to cost-saving resources. Perfect for YouTubers, podcasters, or influencers looking to create standout content without breaking the bank.
        </p>

        <a href="https://asandatech.gumroad.com/l/simjgf?_gl=1%2A5f4c0d%2A_ga%2AODI5NTkwNzQ4LjE3MzU4OTQ4NTg.%2A_ga_6LJN6D94N6%2AMTczNjU3OTU2OS45LjEuMTczNjU3OTU4My4wLjAuMA..&fbclid=PAZXh0bgNhZW0CMTEAAaa0uXlSWtfcGRpsMeXuJBa58gEafEhKyuKd2-z_vk3vUgOrN-isaJJECic_aem_onMllrepyEs8Ck7VTQtajg">
          <button className='getYours'>
            <GiBuyCard className='giBuy' /> Get yours
          </button>
        </a>
      </div>
    </div>
  )
}

export default MainTwo
