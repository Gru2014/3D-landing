import React from 'react'

interface InputPropsType {
  title: string,
  placeholder: string
}

const Input: React.FC<InputPropsType> = ({title, placeholder}) => {
  return (
    <div >
      <div>
        <h2 className='text-base  leading-6 text-white font-normal'>{title}</h2>
      </div>
      <div className='border-gradient rounded-[20px] p-0.5 w-full mt-2'>
        <div>
          <input className='bg-black rounded-[20px] py-3 px-4 w-full text-white' placeholder={placeholder} />
        </div>
      </div>
    </div>
  )
}

export default Input