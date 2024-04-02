import React from 'react'

interface tierCardType {
    title: string,
    percent: number,
    users: number
}

interface TierCardProps {
    card: tierCardType
}

const TierCard: React.FC<TierCardProps> = ({card}) => {
  return (
    <div className='border-gradient rounded-[20px] p-[3px] max-w-[284px] min-h-[294px]'>
            <div className='bg-black rounded-[20px] w-[278px] min-h-72 flex items-center flex-col'>
                <div className='my-8'>
                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{card.title}</h1>
                </div>
                <div className='text-white text-center'>
                    <h1 className='text-4xl leading-[43.57px] font-light'>{card.percent}% OFF</h1>
                    <p className='text-base font-light leading=[17.26px]'>Subscription Fees</p>
                </div>
                <div className='text-white text-center px-5 my-8'>
                    <p className='text-sm leading-[16.94px]'>When you refer {card.users} {card.users===1 ? 'user' : 'users'} who signs up to a monthly or yearly subscription</p>
                </div>
            </div>
        </div>
  )
}

export default TierCard