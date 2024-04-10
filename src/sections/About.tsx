import React, { useState } from 'react'
import { AboutData } from '../utils/AboutData'
import AboutCard from '../components/AboutCard'
const About: React.FC = () => {
    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }

    return (
        <div className='min-h-screen w-screen relative flex flex-col max-[769px]:h-auto' id='about'>
            <div className='basis-1/5 flex justify-center items-end'>
                <div>
                    <h1 className='text-[48px] poppins focus-color text-center font-medium leading-[72px]'>ABOUT</h1>
                </div>
            </div>
            <div className='flex basis-2/5 justify-center flex-col items-center'>
                <div className='max-[769px]:px-6'>
                    <p className='text-2xl leading-1.2 text-center text-white rounded'>Cryptocurrency is expanding faster than it ever has before. <br></br>With Millions of transactions occurring and countless new<br></br>cryptocurrency's being deployed everyday,<br></br>it’s too easy to get lost in all the noise.</p>
                </div>
            </div>
            <div className='flex basis-2/5 flex-col items-center'>
                <div className='flex flex-row   justify-center py-2'>
                    <div className='flex flex-row basis-2/3 flex-wrap justify-center gap-14'>
                        {AboutData.map((card, index) => {
                            const isActive = activatedIds.includes(card.id);
                            return <div onClick={() => toggleCard(card.id)}>
                                <AboutCard key={card.id} isActive={isActive} card={card} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About