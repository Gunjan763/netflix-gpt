import React from 'react'
import netflixlogo from "../assets/netflixlogo.png" 
const Header = () => {
  return (
    <div className='absolute px-12 py-3 bg-gradient-to-b from-black z-10'>
      <img className="w-44 "src={netflixlogo} alt="logo"/>
    </div>
  )
}

export default Header
