import React, { useState } from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  const [isActive, setIsActive] = useState()

  return (
    <div className='w-screen h-screen flex justify-center items-center background relative' id='home'>
      <div className=''>
        <h1 className='text-[68px] focus-color text-center font-light leading-[82.3px]'>The Ultimate On-Chain</h1>
        <h1 className='text-[68px] focus-color text-center font-light leading-[82.3px]'>Dashboard is Here</h1>
        <p className='text-white text-center text-[25px] font-light leading-[34.2px] py-8'>Discover, track and copy the best on-chain crypto traders <br></br> using the most efficient and effective features</p>
        <div className='flex justify-center max-[449px]:flex-col max-[449px]:w-screen max-[449px]:gap-5'>
          <div className='border-gradient p-0.5 rounded-[50px] mx-8 '>
            <button className=' py-3 px-8 rounded-[50px] text-lg text-white hover:bg-transparent bg-black max-[449px]:w-full'>
              Launch Dashboard
            </button>
          </div>
          <div className='border-gradient p-0.5 rounded-[50px] mx-8'>
            <button className='py-3 px-16 rounded-[50px] text-lg hover:bg-transparent bg-black text-white max-[449px]:w-full'>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard