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

const UpcomingFeatures: React.FC = () => {
  const FeatureCardList: FeatureCardType[] = [
    {
      icon: 'assets/icons/linked.svg',
      title1: 'Linked Wallets',
      title2: '',
      description1: 'Map that will show all wallets that are linked with the selected wallet',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/finder.svg',
      title1: 'Wallet Finder',
      title2: 'Level 2',
      description1: 'Update Search Feature to find wallets based off PnL/ROI',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/graph.svg',
      title1: 'Profit/',
      title2: 'Loss Graph',
      description1: 'Feature that will allow you to see Realized, Unrealized Gains & ROI that a wallet has made',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/black.png',
      title1: 'Copy Trade Bot',
      title2: '',
      description1: 'An autonomous bot that will copy trade selected wallet/s',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/finder.svg',
      title1: 'Wallet Finder',
      title2: 'Level 3',
      description1: 'This feature will be revealed when feature is completed',
      description2: 'ONLY AVAILABLE TO PREMIUM SUBSCRIPTIONS & X TOKEN SUPPLY HOLDERS',
      percent: 100
    },
    {
      icon: 'assets/icons/Mystery.svg',
      title1: 'Mystery Feature',
      title2: '3',
      description1: 'This feature will be revealed when feature is completed',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/black.png',
      title1: 'AI Trading Bot',
      title2: 'Indicator',
      description1: 'An Autonomous Bot that will identify the best trades and trade for you(Will require X amount of Tokens for access)',
      description2: '',
      percent: 100
    },
    {
      icon: 'assets/icons/phone.svg',
      title1: 'Phone App',
      title2: '',
      description1: 'Phone App for seamless use of Spectre on the go',
      description2: '',
      percent: 100
    },
  ]
  return (
    <div className='w-screen h-screen flex background'>
      <div className='basis-1/6 justify-end flex mb-16 items-center'>
        <div>
          <Card card={FeatureCardList[0]} />
        </div>
      </div>
      <div className='basis-4/6 flex flex-col'>
        <div className='basis-1/2 flex justify-around items-end'>
          <div>
            <Card card={FeatureCardList[1]} />
          </div>
          <div>
            <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Upcoming Features</h1>
          </div>
          <div>
            <Card card={FeatureCardList[2]} />
          </div>
        </div>
        <div className='basis-1/2 flex justify-between flex-row items-center mt-8'>
          <div>
            <Card card={FeatureCardList[3]} />
          </div>
          <div>
            <Card card={FeatureCardList[4]} />
          </div>
          <div>
            <Card card={FeatureCardList[5]} />
          </div>
          <div>
            <Card card={FeatureCardList[6]} />
          </div>
        </div>
      </div>
      <div className='basis-1/6 flex mb-16 items-center'>
        <Card card={FeatureCardList[7]} />
      </div>
    </div>
  )
}

export default UpcomingFeatures
