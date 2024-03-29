import React from 'react'

interface RoadCardType {
    title: string;
    questions: string[];
}

interface RoadmapProps {
    card: RoadCardType;
}

const RoadCard: React.FC<RoadmapProps> = ({ card }) => {
    return (
        <div className='border-gradient rounded-l-[20px] p-[3px] w-[450px] min-h-[450px]'>
            <div className='bg-black rounded-[20px] w-[444px] min-h-[444px] flex items-center flex-col'>
                <div className='my-8'>
                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{card.title}</h1>
                </div>
                <div className='text-white text-sm flex justify-around'>
                    <div className=''>
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