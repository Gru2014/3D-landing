import React from 'react'

interface ButtonType {
  title: string;
  url: string;
}


const Header: React.FC = () => {
  const buttonList: ButtonType[] = [
    {
      title: 'Home',
      url: '/#home'
    },
    {
      title: 'Features',
      url: '/#features'
    },
    {
      title: 'Tokenomics',
      url: '/#tokenomics'
    },
    {
      title: 'Roadmap',
      url: '/#roadmap'
    },
    {
      title: 'Referrals',
      url: '/#referrals'
    }
  ]
  return (
    <div className=' absolute flex py-8 px-12 w-screen'>
      <div className='basis-1/5'>
        <img src='assets/images/logo.svg'></img>
      </div>
      <div className='flex basis-3/5 flex-row items-center justify-around'>
        {buttonList.map((button, index) => (
          <div className='text-xl text-white'>
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
    </div>
  )
}

export default Header