import React from 'react'
import QCard from '../components/QCard';
interface QCardType {
  title: string;
  questions: string[];

}
const Roadmap: React.FC = () => {
  const QCardList: QCardType[] = [
    {
      title: 'Q1',
      questions: [
        'Design & Develop Spectre Dashboard',
        'Design & Develop Spectre Website',
        'Back-test and Bug-Test Spectre Dashboard Data',
        'Implement Referral Rewards Program',
        'Launch Telegram, Twitter & Website'
      ]
    },
    {
      title: 'Q2',
      questions: ['Apply for IEO on Binance',
        'Begin Phone App Development',
        'Implement New Feature: Wallet Profit/Loss Graph',
        'Implement New Feature: Linked Wallets Map',
        'Implement New Feature: Wallet Presale Indicator']
    },
    {
      title: 'Q3',
      questions: [
        'Implement New Feature:Mystery Feature 1',
        'Implement New Feature:Mystery Feature 2',
        'Implement New Feature:Mystery Feature 3',
        'Implement New Feature:AI Trading Bot (Will require X amount of Tokens for access)',
      ]
    },
    {
      title: 'Q4',
      questions: [
        'Stay turned!'
      ]
    }
  ]
  return (
    <div className='flex w-screen h-screen'>
      <div className='flex basis-1/4 justify-center mt-52'>
        <div>
          <QCard card={QCardList[0]} />
        </div>
      </div>
      <div className='flex basis-1/2 flex-col'>
        <div className='flex basis-1/2 justify-center items-end' >
          <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Roadmap</h1>
        </div>
        <div className='flex basis-1/2 justify-around mt-5'>
          <div>
            <QCard card={QCardList[2]} />
          </div>
          <div>
            <QCard card={QCardList[3]} />
          </div>
        </div>
      </div>
      <div className='flex basis-1/4 justify-center mt-52'>
        <div>
          <QCard card={QCardList[1]} />
        </div>
      </div>
    </div>
  )
}

export default Roadmap