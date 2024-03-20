import React from 'react'
import Logo from '../assets/img/Logo.png'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className='text-white h-screen flex flex-col items-center justify-between' style={{background: `url(https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png) center/cover`}}>
      <div className="bg-black p-4">
        <Link to='/home'><img src={Logo} alt="Logo" className='w-[9%]' /></Link>
      </div>
      <div className='text-center'>
          <h1 className='text-3xl font-medium md:text-6xl'>Lost your way?</h1>
          <p className='text-2xl py-4'>Sorry, we can't find that page. You'll find lots to explore<br/> on the home page. </p>
          <button className='bg-white py-3 px-8 text-black font-bold rounded-[10px] mb-3'><Link to="/home">Netflix Home</Link></button>
          <p>
            <span className='border-l-[4px] border-[#e50914] text-3xl pl-6'>Error Code <strong>NSES-404</strong></span>
          </p>
      </div>
      <div className='self-end p-5'>
        <p className='text-[#e6e6e6c4] text-sm'>FROM <strong>LOST IN SPACE</strong></p>
      </div>
    </div>
  )
}

export default Error