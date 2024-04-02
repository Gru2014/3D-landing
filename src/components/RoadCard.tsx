import React from 'react'

interface RoadCardType {
    title: string;
    questions: string[];
}

interface RoadmapProps {
    card: RoadCardType;
    direction: string
}

const RoadCard: React.FC<RoadmapProps> = ({ card, direction }) => {
    return (
        <div className={`border-gradient  p-[3px] ${direction==='right'?'w-[225px] rounded-l-[20px]':'rounded-r-[20px] mr-[225px] w-[225px]'} min-h-[450px]`}>
            <div className='bg-black rounded-[20px] w-[444px] min-h-[444px] flex items-center flex-col'>
                <div className='my-8'>
                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{card.title}</h1>
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