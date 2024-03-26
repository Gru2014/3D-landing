import React, { useState } from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className=''>
        <h1 className='text-[68px] focus-color text-center font-light leading-[82.3px]'>The Ultimate On-Chain <br></br>Dashboard is Here</h1>
        <p className='text-white text-center text-[25px] font-light leading-[24.2px] py-8'>Discover, track and copy the best on-chain crypto traders <br></br> using the most efficient and effective features</p>
        <div className='flex justify-center'>
          <div className='border-gradient p-0.5 rounded-[50px] mx-8'>

            <button className=' py-3 px-8 rounded-[50px] text-lg text-white bg-black'>
              Launch Dashboard
            </button>
          </div>
          <div className='border-gradient p-0.5 rounded-[50px] mx-8'>
            <button className='py-3 px-16 rounded-[50px] text-lg bg-black text-white'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard