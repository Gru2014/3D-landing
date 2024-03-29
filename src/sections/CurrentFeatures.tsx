import React from 'react'
import Card from '../components/Card'

interface FeatureCardType {
  icon: string;
  title1: string;
  title2: string;
  description1: string;
  description2: string;
  percent: number
}

const CurrentFeatures: React.FC = () => {
  const FeatureCardList: FeatureCardType[] = [
    {
      icon: 'assets/icons/watchlists.svg',
      title1: 'Wallet Watchlists',
      title2: '',
      description1: 'Add wallets to a watchlist for continual monitoring and research',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/completed.svg',
      title1: 'Completed Trades',
      title2: '',
      description1: 'Indicator that will show a wallet’s completed trade history',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/finder.svg',
      title1: 'Wallet Finder',
      title2: 'Level 1',
      description1: 'Search Feature that will find wallets based off Balance Change',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/history.svg',
      title1: 'Transaction History',
      title2: '',
      description1: 'Feature that will show all wallet transaction history',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/notifications.svg',
      title1: 'Enhanced',
      title2: 'Notifications',
      description1: 'Feature that will allow very specific notification alerts to be set',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/new.svg',
      title1: 'New Coin',
      title2: 'Indicator',
      description1: 'Indicator that will show if a wallet has bought a coin that is newly released',
      description2: '',
      percent: 100
    },
  ]
  return (
    <div className='w-screen h-screen flex-col flex background' id='features'>
      <div className='basis-1/2 flex items-end '>
        <div className='basis-1/4 flex justify-end'>
          <Card card={FeatureCardList[0]} />
        </div>
        <div className='basis-1/2 flex justify-center'>
          <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Current Features</h1>
        </div>
        <div className='basis-1/4 flex justify-start'>
          <Card card={FeatureCardList[1]} />
        </div>
      </div>
      <div className='basis-1/2 flex flex-row justify-around px-10'>
        <div className='mt-16'>
          <Card card={FeatureCardList[2]} />
        </div>
        <div className='flex items-center'>
          <Card card={FeatureCardList[3]} />
        </div>
        <div className='flex items-center'>
          <Card card={FeatureCardList[4]} />
        </div>
        <div className='mt-16'>
          <Card card={FeatureCardList[5]} />
        </div>
      </div>
    </div>
  )
}

export default CurrentFeatures