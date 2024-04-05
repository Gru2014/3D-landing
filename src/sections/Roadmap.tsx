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
        <div className=" flex  flex-col relative w-full max-md:h-auto  h-[200vh]" id='roadmap'>
            <div className='basis-[10%] flex justify-center items-end'>
                <div className=''>
                    <h1 className='text-[48px] focus-color poppins text-center font-medium leading-[72px]'>Roadmap</h1>
                </div>
            </div>
            <div className="relative wrap flex overflow-hidden p-10">
                <div className='basis-5/12 flex items-end flex-col gap-32'>
                    <div className=' w-[450px] h-[450px] cursor-pointer' onClick={() => toggleCard(1)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] hover:rounded-[20px] ${activatedIds.includes(1) ? 'rounded-[20px]' : ''}`}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(1) ? 'bg-opacity-25 rounded-[20px]' : ' bg-black'} `}>
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
                    <div className=' w-[450px] h-[450px] cursor-pointer' onClick={() => toggleCard(3)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] hover:rounded-[20px] ${activatedIds.includes(3) ? 'rounded-[20px]' : ''}`}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(3) ? 'bg-opacity-25 rounded-[20px]' : 'bg-black '} `}>
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
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-1 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-2 top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-3 top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-4 top-[986px]'></div>
                        <div className=' absolute w-full h-0.5 top-[238px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                        <div className=' absolute w-full h-0.5 top-[813px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-right.svg')" }}></div>
                    </div>
                    <div className='flex relative basis-1/2'>
                        <div className='h-full border-gradient w-[1px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-1 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-2 top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-3 top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-4 top-[986px]'></div>
                        <div className=' absolute w-full h-0.5  top-[463px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-right.svg')" }}></div>
                        <div className=' absolute w-full h-0.5  top-[1000px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                    </div>
                </div>
                <div className='basis-5/12 mt-[225px] flex flex-col gap-28'>
                    <div onClick={() => toggleCard(2)}>
                        <div className={`border-gradient w-[450px] px-[3px] flex justify-center  cursor-pointer hover:rounded-[20px] ${activatedIds.includes(2) ? 'rounded-[20px]' : ''}`}>
                            <div className={`bg-black hover:bg-opacity-25  w-[444px] h-[444px] flex items-center flex-col ${activatedIds.includes(2) ? 'bg-opacity-25' : ''}`}>
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
                        <div className={`border-gradient w-[450px] px-[3px] flex justify-center  cursor-pointer hover:rounded-[20px] ${activatedIds.includes(4) ? 'rounded-[20px]' : ''}`}>
                            <div className={`bg-black hover:bg-opacity-25  w-[444px] h-[444px] flex items-center flex-col ${activatedIds.includes(4) ? 'bg-opacity-25' : ''}`}>
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