import React, { useState } from 'react'
import { TierTitleData } from '../utils/TierData'
import TierTitle from '../components/TierTitle'

const ReferralRewards = () => {

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className='h-screen w-screen flex flex-col relative max-[769px]:h-auto' id='referrals'>
      <div className='basis-1/5 flex justify-center items-end'>
        <div>
          <h1 className='text-[48px] focus-color text-center poppins font-medium leading-[72px]'>REFERRAL REWARDS</h1>
        </div>
      </div>
      <div className='basis-4/5 flex flex-row justify-center items-center'>
        <div className='basis-2/3 h-2/3 flex flex-row max-[769px]:flex-col max-[769px]:gap-5  justify-between'>
          <div className='basis-1/3 max-[769px]:w-full max-[769px]:gap-4 flex flex-col justify-between items-end max-[769px]:items-center'>
            {TierTitleData.map((card, index) => (
              <div onClick={() => setActiveIndex(index)}>
                <TierTitle card={card} index={index} activeIndex={activeIndex} />
              </div>
            ))}
          </div>
          <div className='basis-2/3 flex max-[769px]:w-full justify-end max-[769px]:justify-center max-[769px]:my-6'>
            <div className='h-full w-11/12 border-gradient rounded-[20px] p-[3px] '>
              <div className='bg-black h-full w-full rounded-[20px] text-center flex flex-col justify-center'>
                <div>
                  <h1 className='focus-color text-[84px] leading-[101.66px] font-bold'>{activeIndex === 0 ? '10' : activeIndex === 1 ? '30' : activeIndex === 2 ? '50' : ''}% OFF</h1>
                </div>
                <div className='text-white font-light'>
                  <h2 className=' text-5xl leading-[58.09px]'>Subscription Fees</h2>
                  <p className='text-[22px] leading-[26.63px] p-2'>When you refer {activeIndex === 0 ? '1 user' : activeIndex === 1 ? '5 users' : activeIndex === 2 ? '10 users' : ''} who signs<br /> up to a monthly or yearly subscription</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralRewards