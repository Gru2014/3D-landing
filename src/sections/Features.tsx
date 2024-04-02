import React, { useState } from 'react'
import { CurrentFeatureCardList, UpcomingFeatureCardList } from '../utils/cardListData'
import Card from '../components/Card'

const Features = () => {

    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }

    return (
        <div className='w-screen flex relative flex-col h-[200vh] max-md:h-auto' id='features'>
            <div className=' px-24'>
                <div className='flex flex-col justify-center mt-6 '>
                    <div className='my-14'>
                        <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Current Features</h1>
                    </div>
                    <div className='flex flex-row justify-around flex-wrap gap-8'>
                        {CurrentFeatureCardList.map((card, index) => {
                            const isActive = activatedIds.includes(card.id);
                            return <div onClick={() => toggleCard(card.id)}>
                                <Card card={card} key={card.id} isActive={isActive} />
                            </div>
                        })}
                    </div>
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='my-14'>
                        <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Upcoming Features</h1>
                    </div>
                    <div className='flex flex-row justify-evenly flex-wrap gap-8'>
                        {UpcomingFeatureCardList.map((card, index) => {
                            const isActive = activatedIds.includes(card.id);
                            return <div onClick={() => toggleCard(card.id)}>
                                <Card card={card} key={index} isActive={isActive} />
                            </div>
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features