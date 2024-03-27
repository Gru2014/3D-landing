import React from 'react'

interface FeatureCardType {
    icon: string;
    title1: string;
    title2: string;
    description1: string;
    description2: string;
}

interface CurrentFeaturesProps {
    card: FeatureCardType;
}

const Card: React.FC<CurrentFeaturesProps> = ({ card }) => {
    return (
        <div className='rounded-[20px] p-[3px] border-gradient min-h-[259px] max-w-[179px]'>
            <div className='rounded-[20px] bg-black flex flex-col items-center  max-w-44 min-h-64 py-5'>
                <div className='rounded-full border-gradient p-0.5'>
                    <div className='bg-black p-2 rounded-full'>
                        <img src={card.icon}></img>
                    </div>
                </div>
                <div className='py-3'>
                    <h1 className='text-center font-light text-base focus-color'>{card.title1}</h1>
                    <h1 className='text-center font-light text-base focus-color'>{card.title2}</h1>
                </div>
                <div>
                    <p className='text-white text-xs text-center px-4 font-light leading-[14.52px]'>{card.description1}</p>
                    <p className='text-white text-[8px] text-center px-4 font-light leading-[14.52px]'>{card.description2}</p>
                </div>
            </div>
        </div>
    )
}

export default Card