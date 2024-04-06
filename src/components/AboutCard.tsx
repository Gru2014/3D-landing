import React from 'react'

interface AboutCardType {
  content: string,
  class: string
}

interface AboutCardPropsType {
  card: AboutCardType,
  isActive: boolean,
}

const AboutCard: React.FC<AboutCardPropsType> = ({ card, isActive }) => {
  return (
    <div className={`w-[300px] ${card.class} min-h-[100px] flex justify-center items-center cursor-pointer `} >
      <div className={`flex justify-around bg-black items-center hover:bg-opacity-25 ${isActive ? 'bg-opacity-25' : 'bg-black'} w-[296px] min-h-[100px]`}>
        <div className='px-16'>
          <p className='text-white text-center'>{card.content}</p>
        </div>
      </div>
    </div>
  )
}

export default AboutCard