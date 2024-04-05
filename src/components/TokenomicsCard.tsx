import React from 'react'

interface TokenType {
  title: string,
  number: string
}

interface TokenomicsCardPropsType {
  card: TokenType,
  index: number,
  hoverIndexScale: number,
  hoverIndexColor: number
}

const TokenomicsCard: React.FC<TokenomicsCardPropsType> = ({ card, index, hoverIndexScale, hoverIndexColor }) => {
  return (
    <div>
      <div className={`transition-all cursor-pointer ${hoverIndexScale === index ? 'w-[600px] h-[70px]' : hoverIndexScale === index + 1 || hoverIndexScale === index - 1 ? 'w-[550px] h-[60px]' : 'w-[500px] h-[50px]'}  rounded-[20px] border-gradient-right p-[3px]`}>
        <div className={`transition-all ${hoverIndexColor === index ? 'bg-opacity-25' : ''} h-full w-full  rounded-[20px] bg-black flex`} >
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