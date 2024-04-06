import React, { useEffect, useRef, useState } from 'react'
import { buttonList } from '../utils/MenuList'
import MenuList from './MenuList'
import { useBtnContext } from '../context/ButtonContext'

interface HeaderPropsType {
  setIsShow: any
}

const Header: React.FC<HeaderPropsType> = ({ setIsShow }) => {


  const [isShowMenu, setIsShowMenu] = useState(true)

  const [btnHover, setBtnHover] = useState(NaN)

  const { activeBtn } = useBtnContext()

  return (
    <>
      {/* <MenuList /> */}
      <div className=' fixed flex py-4 px-12 w-screen z-30 backdrop-blur'>
        <div className='hidden max-md:flex basis-1/12'>
          <button className='text-white' onClick={() => setIsShowMenu(true)}>
            list
          </button>
        </div>
        <div className='basis-1/5 max-md:basis-1/2 max-md:flex flex-row max-[449px]:basis-11/12 max-[449px]:justify-center'>
          <div className=''>
            <a href='/'>
              <img src='assets/images/logo.svg'></img>
            </a>
          </div>
        </div>
        <div className='flex basis-3/5 flex-row max-md:hidden items-center justify-around'>
          {buttonList.map((button, index) => (
            <div onMouseOver={() => setBtnHover(index)} onMouseOut={() => setBtnHover(NaN)}>
              <div className={`${activeBtn === index ? 'focus-color' : btnHover === index ? 'focus-color' : 'text-white '} font-medium leading-[24.2px] text-xl`}>
                <a key={index} href={button.url} >{button.title}</a>
              </div>
            </div>
          ))}
        </div>
        <div className='basis-1/5 flex flex-row items-center justify-end gap-5  text-white max-md:basis-1/2 max-[449px]:hidden'>
          <div className='p-0.5 border-gradient cursor-pointer rounded-[20px]' onClick={() => setIsShow('SignUp')}>
            <div className='py-3 px-8 rounded-[20px] text-xs font-semibold leading-[14.52px] hover:bg-opacity-25 bg-black'>
              <div className='focus-color'>
                Sign Up
              </div>
            </div>
          </div>
          <div className='p-0.5 border-gradient cursor-pointer rounded-[20px]' onClick={() => setIsShow('SignIn')}>
            <div className='py-3 px-8 rounded-[20px] text-xs font-semibold leading-[14.52px] hover:bg-opacity-25 bg-black'>
              Sign In
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header