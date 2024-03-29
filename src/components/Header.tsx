import React, { useRef, useState } from 'react'
import { scroller } from 'react-scroll';
import { HashLink } from 'react-router-hash-link'

interface ButtonType {
  title: string;
  url: string;
}

interface ScrollStateType {
  start: number;
  end: number;
  children: { start: number; active: boolean }[];
  position: number;
  positionRatio: number;
  scrollToPosition: number
  onStart: boolean;
  onEnd: boolean;
};


const Header: React.FC = () => {

  const [isActive, setIsActive] = useState(false)

  const [btnActive, setBtnActive] = useState(0)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  const buttonList: ButtonType[] = [
    {
      title: 'Home',
      url: '/#home'
    },
    {
      title: 'About',
      url: '/#about'
    },
    {
      title: 'Features',
      url: '/#features'
    },
    {
      title: 'Roadmap',
      url: '/#roadmap'
    },
    {
      title: 'Tokenomics',
      url: '/#tokenomics'
    },

    {
      title: 'Referrals',
      url: '/#referrals'
    }
  ]
  return (
    <div className=' fixed flex py-4 px-12 w-screen z-30 backdrop-blur'>
      <div className='basis-1/5'>
        <a href='/'>
          <img src='assets/images/logo.svg'></img>
        </a>
      </div>
      <div className='flex basis-3/5 flex-row items-center justify-around'>
        {buttonList.map((button, index) => (
          <div className={btnActive === index ? 'text-xl focus-color' : 'text-xl text-white'}>
            <a key={index} href={button.url}>{button.title}</a>
          </div>
        ))}
      </div>
      <div className='basis-1/5 flex flex-row items-center justify-end gap-5  text-white'>
        <div className='p-0.5 border-gradient rounded-[20px]'>
          <div className='py-3 px-8 rounded-[20px] text-xs  bg-black'>
            Sign Up
          </div>
        </div>
        <div className='p-0.5 border-gradient rounded-[20px]'>
          <div className='py-3 px-8 rounded-[20px] text-xs  bg-black'>
            Sign In
          </div>
        </div>
      </div>
    </div >
  )
}

export default Header