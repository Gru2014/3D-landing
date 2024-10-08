import React from 'react'

interface RoadCardType {
    title: string;
    questions: string[];
}

interface RoadmapProps {
    card: RoadCardType;
    direction: string,
    isActive: boolean
}

const RoadCard: React.FC<RoadmapProps> = ({ card, direction, isActive }) => {
    return (
        <div className={` border-gradient hover:w-[450px] p-[3px]  cursor-pointer hover:mr-0 hover:rounded-[20px] ${direction === 'right' ? isActive ? 'w-[450px] mr-0 rounded-[20px]' : 'w-[225px] rounded-l-[20px]' : 'rounded-r-[20px] mr-[225px] w-[225px]'} min-h-[450px]`}>
            <div className={`bg-black rounded-[20px] hover:bg-opacity-25 ${isActive ? 'bg-opacity-25' : ''}  w-[444px] h-[450px] flex items-center flex-col`}>
                <div className='my-8'>
                    <h1 className='focus-color text-[32px] leading-[38.73px] font-medium'>{card.title}</h1>
                </div>
                <div className='text-white text-sm flex '>
                    <div className='px-3'>
                        {card.questions.map((question, index) => (
                            <p key={index} className=' pb-5 px-3'>{question}</p>
                        ))}
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoadCard