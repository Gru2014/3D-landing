import React, { useRef, useState } from 'react'
import { buttonList } from '../utils/MenuList'
import MenuList from './MenuList'

const Header: React.FC = () => {

  const [btnActive, setBtnActive] = useState(0)

  const [isShowMenu, setIsShowMenu] = useState(true)

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
            <div onClick={() => setBtnActive(index)} className={btnActive === index ? 'text-xl focus-color' : 'text-xl text-white'}>
              <a key={index} href={button.url}>{button.title}</a>
            </div>
          ))}
        </div>
        <div className='basis-1/5 flex flex-row items-center justify-end gap-5  text-white max-md:basis-1/2 max-[449px]:hidden'>
          <div className='p-0.5 border-gradient cursor-pointer rounded-[20px]'>
            <div className='py-3 px-8 rounded-[20px] text-xs hover:bg-transparent bg-black'>
              Sign Up
            </div>
          </div>
          <div className='p-0.5 border-gradient cursor-pointer rounded-[20px]'>
            <div className='py-3 px-8 rounded-[20px] text-xs hover:bg-transparent bg-black'>
              Sign In
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Header