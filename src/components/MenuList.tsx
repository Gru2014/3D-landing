import React from 'react'
import { buttonList } from '../utils/MenuList'


const MenuList: React.FC = () => {
  return (
    <div className='flex flex-col w-screen fixed z-50 background-gradient backdrop-blur '>
      <div className=' text-2xl flex flex-col gap-5 py-5'>
        {buttonList.map((button, index) => (
          <div className='text-white text-center hover:text-orange-400 hover:focus-color' key={index} ><a href={button.url} className=''>{button.title}</a></div>

        ))}
      </div>
    </div>
  )
}

export default MenuList