import React, { useState } from 'react'
import { TokenData } from '../utils/TokenData'
import TokenomicsCard from '../components/TokenomicsCard'
import Chart from '../components/Chart'

const Tokenomics: React.FC = () => {

  const [isActive, setIsActive] = useState(2)
  const [isHover, setIsHover] = useState(NaN)

  return (
    <div className='h-screen flex flex-col w-screen relative' id='tokenomics'>
      <div className='basis-1/5 flex justify-center items-end'>
        <div>
          <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Tokenomics</h1>
        </div>
      </div>
      <div className='flex flex-row basis-4/5'>
        <div className='flex w-[55%] justify-center items-center'>
          {/* <Chart /> */}
          <div className="w-[450px] h-[450px] flex justify-center items-center bg-cover" style={{ backgroundImage: "url('assets/images/progress.png')" }}>
            <div className='text-center text-white'>
              <h1 className='text-5xl leading-10 font-bold'>100M</h1>
              <p className='text-3xl leading-10 font-light'>Total Supply</p>
            </div>
          </div>
        </div>
        <div className='flex w-[45%] flex-col my-6 items-start justify-around'>
            <div className='flex gap-2 flex-col items-center'>
              {TokenData.map((card, index) => (
                <div onClick={() => setIsActive(index)} onMouseOver={() => setIsHover(index)} onMouseOut={() => setIsHover(NaN)}>
                  <TokenomicsCard card={card} index={index} isActive={isActive} isHover={isHover} />
                </div>
              ))}
            </div>
            <div className='w-[600px] h-[175px] border-gradient-right rounded-[20px] p-[3px]'>
              <div className='w-full h-full bg-black flex flex-row rounded-[20px]'>
                <div className='basis-1/2 font-light text-lg flex flex-row leading-[21.78px] justify-between text-white'>
                  <div className='flex justify-start flex-col p-4 gap-4'>
                    <p>Token Supply</p>
                    <p>Seed Sale</p>
                    <p>Public Sale</p>
                  </div>
                  <div className='flex items-end flex-col p-4 gap-4'>
                    <p>100M</p>
                    <p>$0.15M</p>
                    <p>$6.5M</p>
                  </div>
                </div>
                <div className='basis-1/2 font-light text-lg flex flex-row leading-[21.78px] justify-between text-white'>
                  <div className='flex flex-col p-4 gap-4'>
                    <p>Tokens For Sale</p>
                    <p>Seed Sale Price</p>
                    <p>Public Sale Price</p>
                    <p>Initial Market Cap</p>
                  </div>
                  <div className='flex flex-col justify-end items-end p-4 gap-4'>
                    <p>70M</p>
                    <p>$0.03</p>
                    <p>$0.1</p>
                    <p>$10M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Tokenomics

