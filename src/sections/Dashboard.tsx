import React, { useState } from 'react'
import Header from '../components/Header'

const Dashboard = () => {
  const [isActive, setIsActive] = useState()

  return (
    <div className='w-screen h-screen flex  justify-center items-center  background relative' id='home'>
      <div>
        <h1 className='text-[68px] focus-color max-[449px]:text-5xl text-center font-bold leading-[82.3px]'>THE ULTIMATE ONCHAIN</h1>
        <h1 className='text-[68px] focus-color max-[449px]:text-5xl text-center font-bold leading-[82.3px]'>DASHBOARD IS HERE</h1>
        <p className='text-white text-center text-[25px] font-light leading-[34.2px] py-8'>Discover, Track and Copy the best OnChain crypto traders <br></br> using the most efficient and effective features in the space</p>
        <div className='flex justify-center max-[449px]:flex-col max-[449px]:items-center max-[449px]:w-screen gap-5 max-[449px]:gap-5'>
          <div className='border-gradient p-0.5 rounded-[50px] max-[449px]:w-11/12'>
            <button className=' py-5 px-8 rounded-[50px] text-lg font-semibold leading-[21.78px] text-white hover:bg-opacity-25 bg-black max-[449px]:w-full'>
              <div className='focus-color'>
                Launch Dashboard
              </div>
            </button>
          </div>
          <div className='border-gradient p-0.5 rounded-[50px] max-[449px]:w-11/12'>
            <a href="/#about">
              <button className='py-5 px-16 rounded-[50px] text-lg font-semibold leading-[21.78px] hover:bg-opacity-25 bg-black text-white max-[449px]:w-full'>
                <div>
                  Learn More
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard