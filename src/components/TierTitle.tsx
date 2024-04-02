import React from 'react'

interface TierTitleType {
  title: string,
  icon: string,
}

interface TierTitlePropsType {
  card: TierTitleType,
  index: number
  activeIndex: number

}

const TierTitle: React.FC<TierTitlePropsType> = ({ card, index, activeIndex }) => {
  return (
    <div className={`w-[350px] h-[60px] rounded-[20px] border-gradient-right p-[3px] cursor-pointer`}>
      <div className={`w-full h-full rounded-[20px] hover:bg-opacity-25 ${activeIndex===index ? 'bg-opacity-25':''} bg-black flex justify-between items-center px-6`}>

        <div className='flex flex-row'>
          <div className='flex justify-center items-center'>
            <img src={`assets/icons/${card.icon}`}></img>
          </div>
          <div className='text-2xl text-white font-light mx-2'>
            <h1>{card.title}</h1>
          </div>
        </div>
        <div>
          <img src="assets/icons/arrow.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TierTitle