import React from 'react'
import { CurrentFeatureCardList, UpcomingFeatureCardList } from '../utils/cardListData'
import Card from '../components/Card'

const Features = () => {

    return (
        <div className='w-screen flex relative flex-col h-[200vh]'>
            <div className=' px-24'>
                <div className='flex flex-col justify-center mt-36 '>
                    <div className='my-14'>
                        <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Current Features</h1>
                    </div>
                    <div className='flex flex-row justify-around flex-wrap gap-8'>
                        {CurrentFeatureCardList.map((card, index) => (
                            <div>
                                <Card card={card} key={index} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='my-14'>
                        <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Upcoming Features</h1>
                    </div>
                    <div className='flex flex-row justify-evenly flex-wrap gap-8'>
                        {UpcomingFeatureCardList.map((card, index) => (
                            <div>
                                <Card card={card} key={index} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features