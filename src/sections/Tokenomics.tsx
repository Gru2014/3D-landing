import React, { useState } from 'react'
import { TokenData } from '../utils/TokenData'
import TokenomicsCard from '../components/TokenomicsCard'

const Tokenomics: React.FC = () => {

  const [hoverIndexScale, setHoverIndexScale] = useState(2)
  const [hoverIndexColor, setHoverIndexColor] = useState(NaN)

  const handleHover = (index: number) => {
    setHoverIndexColor(index)
    setHoverIndexScale(index)
  }

  const handleOut = () => {
    setHoverIndexColor(NaN)
    setHoverIndexScale(2)
  }

  return (
    <div className=' h-screen flex flex-col w-screen max-md:h-auto relative' id='tokenomics'>
      <div className='basis-1/5 flex justify-center items-end'>
        <div>
          <h1 className='text-[48px] focus-color poppins text-center font-medium leading-[72px]'>TOKENOMICS</h1>
        </div>
      </div>
      <div className='flex flex-row basis-4/5 max-[449px]:flex-col'>
        <div className='flex w-[55%] max-[449px]:w-screen justify-center relative items-center'>
          <div className='w-[800px] h-[700px] max-[449px]:h-[500px] flex justify-center items-center relative'>
            <div className='flex absolute flex-row w-full h-full text-white'>
              <div className='flex gap-2 basis-6/12 ml-10 items-center '>
                <div className='z-20 max-[449px]:absolute max-[449px]:top-[50px]'>
                  <h1 className='text-center'>
                    Public Sale
                  </h1>
                  <h1 className='text-end font-bold'>65%</h1>
                </div>
                <div className='z-20 max-[449px]:rotate-90 max-[449px]:absolute max-[449px]:top-[150px]'>
                  <img src="assets/icons/tokenLine.svg" alt="" />
                </div>
              </div>
              <div className='flex flex-col basis-1/2'>
                <div className='flex basis-3/12   items-end '>
                  <div className='flex items-center gap-3'>
                    <div className='z-20 max-[449px]:-rotate-45 max-[449px]:scale-x-50 max-[449px]:absolute max-[449px]:top-[70px] right-[120px]'>
                      <img src="assets/icons/tokenLine-r.svg" alt="" />
                    </div>
                    <div className='z-20 max-[449px]:absolute max-[449px]:top-[20px] right-[80px]'>
                      <h1 className='text-center'>
                        Seed Sale
                      </h1>
                      <h1 className='font-bold'>5%</h1>
                    </div>
                  </div>
                </div>
                <div className='flex basis-1/12 justify-center -mt-4 -ml-3 items-center '>
                  <div className='z-20 max-[449px]:-rotate-45 max-[449px]:scale-x-50 max-[449px]:absolute max-[449px]:top-[120px]'>
                    <img src="assets/icons/tokenLine-r.svg" className='w-5/6' alt="" />
                  </div>
                  <div className='z-20 max-[449px]:absolute max-[449px]:top-[60px] right-[30px]'>
                    <h1 className='text-center'>
                      Influencers
                    </h1>
                    <h1 className='font-bold'>10%</h1>
                  </div>
                </div>
                <div className='flex basis-3/12 gap-3 justify-center ml-20 items-center '>
                  <div className='z-20 max-[449px]:rotate-90 max-[449px]:absolute max-[449px]:bottom-[220px] max-[449px]:scale-x-150'>
                    <img src="assets/icons/tokenLine-s.svg" alt="" />
                  </div>
                  <div className='z-20 max-[449px]:absolute max-[449px]:bottom-[120px] right-0'>
                    <h1 className='text-center'>
                      Marketing
                    </h1>
                    <h1 className='font-bold'>10%</h1>
                  </div>
                </div>
                <div className='flex basis-1/12 ml-10 justify-center items-center '>
                  <div className='z-20  max-[449px]:rotate-90 max-[449px]:absolute max-[449px]:bottom-[120px]'>
                    <img src="assets/icons/tokenLine-s.svg" className='w-5/6' alt="" />
                  </div>
                  <div className='z-20  max-[449px]:absolute max-[449px]:bottom-[50px]'>
                    <h1 className='text-center'>
                      Team
                    </h1>
                    <h1 className='font-bold'>10%</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='absolute z-[0] w-[448px] h-[448px] rounded-full flex items-center justify-center'>
              <div className='relative z-[12] w-full h-full rounded-full '>
              </div>
            </div>

            <div className={`absolute z-[12] w-[448px] h-[448px] max-[449px]:scale-75 rounded-full cursor-pointer ${hoverIndexColor === 2 || isNaN(hoverIndexColor) ? 'tokenomic65-high' : 'tokenomic65'}`} > </div>
            <div className={`absolute z-[13] left-[402px] top-[126px] max-[449px]:left-[208px] max-[449px]:top-[74px] w-[65px] h-[69px] max-[449px]:scale-75 cursor-pointer ${hoverIndexColor === 3 || isNaN(hoverIndexColor) ? 'tokenomic5-high' : 'tokenomic5'}`} ></div>
            <div className={`absolute z-[14] left-[451px] top-[140px] max-[449px]:left-[235px] max-[449px]:top-[79px] w-[130px] h-[115px] max-[449px]:scale-75 ${hoverIndexColor === 0 || isNaN(hoverIndexColor) ? 'tokenomic101-high' : 'tokenomic101'} cursor-pointer`} ></div>
            <div className={`absolute z-[13] left-[536px] top-[223px] max-[449px]:left-[304px] max-[449px]:top-[139px] w-[90px] h-[128px] max-[449px]:scale-75 ${hoverIndexColor === 1 || isNaN(hoverIndexColor) ? 'tokenomic102-high' : 'tokenomic102'} cursor-pointer`} ></div>
            <div className={`absolute z-[13] left-[535px] top-[353px] max-[449px]:left-[304px] max-[449px]:top-[237px] w-[90px] h-[128px] max-[449px]:scale-75 ${hoverIndexColor === 4 || isNaN(hoverIndexColor) ? 'tokenomic103-high' : 'tokenomic103'} cursor-pointer`} ></div>
            <div className='absolute z-20 rounded-full w-[333px] h-[333px]'></div>
            <div className='absolute w-[448px] h-[448px] rounded-full flex items-center justify-center bg-black'>
              <div className='text-center leading-10 text-white'>
                <h1 className='text-5xl  font-bold'>
                  100M
                </h1>
                <p className='text-[30px] font-light '>Total Supply</p>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-[45%]  max-[449px]:w-full flex-col my-6 max-[449px]:items-center max-[449px]:gap-5 items-start justify-around'>
          <div className='flex gap-2 flex-col items-center h-80'>
            {TokenData.map((card, index) => (
              <div className=' flex justify-center items-center ' onMouseOver={() => { handleHover(index) }} onMouseOut={() => { handleOut() }}>
                <TokenomicsCard card={card} index={index} hoverIndexColor={hoverIndexColor} hoverIndexScale={hoverIndexScale} />
              </div>
            ))}
          </div>
          <div className='w-[600px] h-[175px] max-[449px]:w-5/6 max-[449px]:h-auto border-gradient-right rounded-[20px] p-[3px]'>
            <div className='w-full h-full bg-black flex flex-row max-[449px]:flex-col rounded-[20px]'>
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

