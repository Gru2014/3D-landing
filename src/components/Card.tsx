import React from 'react'

interface FeatureCardType {
    icon: string;
    title1: string;
    title2: string;
    description1: string;
    description2: string;
    percent: number
}

interface CurrentFeaturesProps {
    card: FeatureCardType;
    isActive: boolean,

}


const Card: React.FC<CurrentFeaturesProps> = ({ card, isActive }) => {
    return (
        <div className={`transition-all rounded-[20px] p-[3px] border-gradient cursor-pointer ${isActive ? 'max-w-[220px] h-[280px] -mt-6' : 'max-w-[170px] h-[230px]'} relative`}>
            <div className={`rounded-[20px] flex flex-col items-center hover:bg-opacity-25  py-5 ${isActive ? 'max-w-[214px] h-[274px] bg-opacity-25 bg-black' : 'bg-black max-w-[164px] h-[224px]'}`}>
                <div className='flex flex-col  items-center h-24 '>
                    <div className='rounded-full border-gradient p-0.5 w-[50px] h-[50px]'>
                        <div className='bg-black p-2 rounded-full'>
                            <img src={card.icon}></img>
                        </div>
                    </div>
                    <div className='flex justify-center h-[46px]  items-center'>
                        <div>
                            <h1 className='text-center font-light text-base leading-[19.36px] focus-color'>{card.title1}</h1>
                            <h1 className='text-center font-light text-base leading-[19.36px] focus-color'>{card.title2}</h1>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden'>
                    <p className='text-white text-xs text-center px-4 font-light leading-[14.52px]'>{card.description1}</p>
                    <p className='text-white text-[8px] text-center px-4 font-light leading-[14.52px]'>{card.description2}</p>
                </div>
                <div className={`absolute bottom-2 w-[150px] border-gradient p-0.5 rounded-full  ${isActive?'my-4':'my-1'}`}>
                    <div className='bg-black h-5 rounded-full p-0.5 relative flex justify-center'>
                        {card.percent === 100 ? '' : <p className='text-xs leading-[14.52px] z-20 relative text-center text-white'>{card.percent}%</p>}
                        <div className={`m-0.5 progress-gradient text-center h-4 absolute top-0 left-0 z-10 ${card.percent === 0 ? 'w-0' : card.percent > 97 ? 'w-[98%]' : card.percent === 25 ? 'w-[25%]' : 'w-[' + card.percent + '%]'} rounded-full`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card