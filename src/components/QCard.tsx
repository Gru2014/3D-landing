import React from 'react'

interface QCardType {
    title: string;
    questions: string[];
}

interface RoadmapProps {
    card: QCardType;
}

const QCard: React.FC<RoadmapProps> = ({ card }) => {
    return (
        <div className='border-gradient rounded-[20px] p-[3px] max-w-[291px] min-h-[387px]'>
            <div className='bg-black rounded-[20px] w-[278px] min-h-96 flex items-center flex-col'>
                <div className='my-8'>
                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{card.title}</h1>
                </div>
                <div className='text-white text-sm'>
                    {card.questions.map((question, index)=>(
                        <p key={index} className='text-center pb-5 px-3'>{question}</p>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default QCard