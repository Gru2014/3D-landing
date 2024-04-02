import React from 'react'

interface ButtonPropsType {
  name: string
}

const Button: React.FC<ButtonPropsType> = ({ name }) => {
  return (
    <div className='border-gradient-right rounded-[20px] p-[3px] w-full cursor-pointer'>
      <div className='rounded-[20px] w-full bg-black hover:bg-transparent py-2.5'>
        <h1 className='text-center text-base leading-6 text-white'>{name}</h1>
      </div>
    </div>

  )
}

export default Button