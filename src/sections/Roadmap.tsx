import React, { useState } from 'react'
import { RoadCardList } from '../utils/roadCardListData'
import RoadCard from '../components/RoadCard'

const Roadmap: React.FC = () => {
    const direction = ['left', 'right', 'left', 'right']
    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }
    console.log(activatedIds.includes(1));
    return (
        <div className=" flex justify-center flex-col relative w-full max-md:h-auto  h-[200vh]" id='roadmap'>
            <div className='mt-6'>
                <div className='my-14'>
                    <h1 className='text-5xl focus-color text-center font-light leading-[58.09px]'>Roadmap</h1>
                </div>
            </div>
            <div className="relative wrap flex overflow-hidden p-10">
                <div className='basis-5/12 relative flex items-end flex-col gap-32'>
                    <div className='relative w-[450px] h-[450px] cursor-pointer' onClick={() => toggleCard(1)}>
                        <div className={`border-gradient absolute h-full rounded-r-[20px]  p-[3px] hover:w-full hover:left-0 hover:rounded-l-[20px] ${activatedIds.includes(1) ? 'w-full left-0 rounded-l-[20px]' : 'h-full left-[222px] w-1/2 rounded-r-[20px]'}`}>
                            <div className={`hover:bg-opacity-25 hover:left-0  bg-black h-[444px] w-[444px]  absolute rounded-[20px] ${activatedIds.includes(1) ? 'bg-opacity-25 left-0' : '-left-[222px] bg-black'} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[43.57px] text-center font-light'>{RoadCardList[0].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 w-full'>
                                        {RoadCardList[0].questions.map((question, index) => (
                                            <div className='flex justify-between ' >
                                                <p key={index} className='pb-5 px-3'>{question} </p>
                                                <p><img src='assets/icons/check.svg' /></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='relative w-[450px] h-[450px] cursor-pointer' onClick={() => toggleCard(3)}>
                        <div className={`border-gradient absolute h-full rounded-r-[20px]  p-[3px] hover:w-full hover:left-0 hover:rounded-l-[20px] ${activatedIds.includes(3) ? 'w-full left-0 rounded-l-[20px]' : 'h-full left-[222px] w-1/2 rounded-r-[20px]'}`}>
                            <div className={`hover:bg-opacity-25 hover:left-0  bg-black h-[444px] w-[444px]  absolute rounded-[20px] ${activatedIds.includes(3) ? 'bg-opacity-25 left-0' : '-left-[222px] bg-black'} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[43.57px] text-center font-light'>{RoadCardList[2].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 w-full'>
                                        {RoadCardList[2].questions.map((question, index) => (
                                            <p key={index} className='pb-3 px-3'>{question}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex basis-2/12'>
                    <div className='flex relative justify-end basis-1/2'>
                        <div className='h-full border-gradient w-[1px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute bg-cyan-300 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute bg-cyan-400 top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute bg-cyan-300 top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute bg-cyan-300 top-[986px]'></div>
                        <div className='border-dashed border-b absolute w-[120px] h-[238px] border-cyan-300'></div>
                        <div className='border-dashed border-b absolute w-[120px] h-[813px] border-cyan-300'></div>
                    </div>
                    <div className='flex relative basis-1/2'>
                        <div className='h-full border-gradient w-[1px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute bg-cyan-300 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute bg-cyan-400 top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute bg-cyan-300 top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute bg-cyan-300 top-[986px]'></div>
                        <div className='border-dashed border-b absolute w-[120px] h-[463px] border-cyan-300'></div>
                        <div className='border-dashed border-b absolute w-[120px] h-[1000px] border-cyan-300'></div>
                    </div>
                </div>
                <div className='basis-5/12 mt-[225px] flex flex-col gap-28'>
                    <div onClick={() => toggleCard(2)}>
                        <div className={`border-gradient hover:w-[450px] p-[3px] w-[225px] rounded-l-[20px] cursor-pointer hover:rounded-r-[20px] ${activatedIds.includes(2) ? 'rounded-r-[20px] w-[450px]' : ''}`}>
                            <div className={`bg-black rounded-[20px] hover:bg-opacity-25  bg- w-[444px] min-h-[444px] flex items-center flex-col ${activatedIds.includes(2) ? 'bg-opacity-25' : ''}`}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{RoadCardList[1].title}</h1>
                                </div>
                                <div className='text-white text-sm flex '>
                                    <div className='px-3'>
                                        {RoadCardList[1].questions.map((question, index) => (
                                            <p key={index} className=' pb-5 px-3'>{question}</p>
                                        ))}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div onClick={() => toggleCard(4)}>
                        <div className={`border-gradient hover:w-[450px] p-[3px] w-[225px] rounded-l-[20px] cursor-pointer hover:rounded-r-[20px] ${activatedIds.includes(4) ? 'rounded-r-[20px] w-[450px]' : ''}`}>
                            <div className={`bg-black rounded-[20px] hover:bg-opacity-25 w-[444px] min-h-[444px] flex items-center flex-col ${activatedIds.includes(4) ? 'bg-opacity-25' : ''}`}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[43.57px] font-light'>{RoadCardList[3].title}</h1>
                                </div>
                                <div className='text-white text-sm flex '>
                                    <div className='px-3'>
                                        {RoadCardList[3].questions.map((question, index) => (
                                            <p key={index} className=' pb-5 px-3'>{question}</p>
                                        ))}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className=" absolute line-gradient  h-full border left-1/2"></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    </div>
                    <div className="order-1 w-5/12 flex justify-end">
                        <RoadCard card={RoadCardList[0]} direction={direction[0]} />
                    </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">

                    </div>
                    <div className="order-1 w-5/12 ">
                        <RoadCard card={RoadCardList[1]} direction={direction[1]} />
                    </div>
                </div>

                <div className="mb-7 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                    </div>
                    <div className="order-1 w-5/12">
                        <RoadCard card={RoadCardList[2]} direction={direction[2]} />
                    </div>
                </div>

                <div className="mb-8 flex justify-between  items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                    </div>
                    <div className="order-1 w-5/12 ">
                        <RoadCard card={RoadCardList[3]} direction={direction[3]}/>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Roadmap