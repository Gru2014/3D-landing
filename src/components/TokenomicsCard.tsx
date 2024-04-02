import React from 'react'

interface TokenType {
  title: string,
  number: number
}

interface TokenomicsCardPropsType {
  card: TokenType,
  index: number,
  isActive: number,
  isHover: number
}

const TokenomicsCard: React.FC<TokenomicsCardPropsType> = ({ card, index, isActive, isHover }) => {
  return (
    <div>
      <div className={`transition-all cursor-pointer ${isActive === index || isHover === index ? 'w-[600px] h-[70px]' : isActive === index + 1 || isActive === index - 1 || isHover === index - 1 || isHover === index + 1 ? 'w-[550px] h-[60px]' : 'w-[500px] h-[50px]'}  rounded-[20px] border-gradient-right p-[3px]`}>
        <div className={`transition-all ${isActive === index || isHover === index ? 'bg-opacity-25' :''} h-full w-full  rounded-[20px] bg-black flex`} >
          <div className='text-white text-xl basis-1/2 leading-[24.2px] font-light flex items-center pl-6'>
            <div>{card.title}</div>
          </div>
          <div className='text-white leading-5 flex flex-col basis-1/2  items-end pr-6 justify-center font-light text-sm '>
            <div>Tokens</div>
            <div>{card.number}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TokenomicsCard