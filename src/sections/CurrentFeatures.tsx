import React from 'react'
import Card from '../components/Card'

const CurrentFeatures = () => {
  const FeatureCardList = [
    {
      icon: 'assets/icons/watchlists.svg',
      title: 'Wallet Watchlists',
      description: 'Add wallets to a watchlist for continual monitoring and research'
    },
    {
      icon: 'assets/icons/completed.svg',
      title: 'Completed Trades',
      description: 'Indicator that will show a wallet’s completed trade history'
    },
    {
      icon: 'assets/icons/finder.svg',
      title: 'Wallet Finder Level 1',
      description: 'Search Feature that will find wallets based off Balance Change'
    },
    {
      icon: 'assets/icons/history.svg',
      title: 'Transaction History',
      description: 'Feature that will show all wallet transaction history'
    },
    {
      icon: 'assets/icons/notifications.svg',
      title: 'Enhanced Notifications',
      description: 'Feature that will allow very specific notification alerts to be set'
    },
    {
      icon: 'assets/icons/new.svg',
      title: 'New Coin Indicator',
      description: 'Indicator that will show if a wallet has bought a coin that is newly released'
    },
  ]
  return (
    <div className='w-screen h-screen flex'>
      <div>
        <Card />
        <div></div>
        <div></div>
      </div>
      <div></div>
      <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Current Features</h1>
    </div>
  )
}

export default CurrentFeatures