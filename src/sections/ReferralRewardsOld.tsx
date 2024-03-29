import React from 'react'
import TierCard from '../components/TierCard'

interface tierCardType {
  title: string,
  percent: number,
  users: number
}

const ReferralRewardsOld = () => {
  const tierCardList: tierCardType[] = [
    {
      title: 'Tier 1',
      percent: 10,
      users: 1
    },
    {
      title: 'Tier 2',
      percent: 25,
      users: 10
    },
    {
      title: 'Tier 3',
      percent: 50,
      users: 50
    },
  ]
  return (
    <div className='w-screen h-screen flex flex-col background' id='referrals'>
      <div className='basis-1/2 flex justify-center items-end'>
        <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Referral Rewards</h1>
      </div>
      <div className='basis-1/2 flex justify-around mt-10'>
        {tierCardList.map((card, i) => (
          <div>
            <TierCard key={i} card={card} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReferralRewardsOld