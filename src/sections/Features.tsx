import React, { useState } from 'react'
import { CurrentFeatureCardList, UpcomingFeatureCardList } from '../utils/cardListData'
import Card from '../components/Card'

const Features = () => {

    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }

    return (
        <div className='w-screen flex relative flex-col h-[200vh] max-md:h-auto  max-[449px]:w-auto' id='features'>
            <div className='basis-[10%] flex justify-center items-end'>
                <div className=''>
                    <h1 className='text-[48px] focus-color text-center poppins font-medium leading-[72px]'>CURRENT FEATURES</h1>
                </div>
            </div>
            <div className=' px-24 max-[449px]:px-5'>
                <div className='flex mt-8 max-[449px]:flex-row max-[449px]:overflow-x-scroll'>
                    <div className='flex flex-row justify-evenly gap-1 min-[449px]:flex-wrap'>
                        {CurrentFeatureCardList.map((card, index) => {
                            const isActive = activatedIds.includes(card.id);
                            return <div className='w-[220px] h-[280px]  max-[449px]:h-[330px] flex justify-center items-center' onClick={() => toggleCard(card.id)}>
                                <Card card={card} key={card.id} isActive={isActive} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
            <div className='mt-14'>
                <h1 className='text-[48px] focus-color poppins text-center font-medium leading-[72px]'>UPCOMING FEATURE</h1>
            </div>
            <div className=' px-24 max-[449px]:px-5 '>
                <div className='flex mt-8 max-[449px]:flex-row max-[449px]:overflow-x-scroll'>

                    <div className='flex flex-row justify-evenly min-[449px]:flex-wrap gap-1'>
                        {UpcomingFeatureCardList.map((card, index) => {
                            const isActive = activatedIds.includes(card.id);
                            return (
                                <div className='w-[220px] h-[280px] max-[449px]:h-[330px] flex justify-center items-center' onClick={() => toggleCard(card.id)}>
                                    <Card card={card} key={index} isActive={isActive} />
                                </div>)
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features