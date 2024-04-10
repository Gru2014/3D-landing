import React, { useState } from 'react'
import { RoadCardList } from '../utils/roadCardListData'

const Roadmap: React.FC = () => {
    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }
    console.log(activatedIds.includes(1));
    return (
        <div className=" flex  flex-col relative w-full max-[769px]:h-auto  min-h-[200vh]" id='roadmap'>
            <div className='basis-[10%] flex justify-center items-end'>
                <div className=''>
                    <h1 className='text-[48px] focus-color poppins text-center font-medium leading-[72px]'>ROADMAP</h1>
                </div>
            </div>
            <div className="relative wrap flex overflow-hidden max-[769px]:justify-end p-10">
                <div className='basis-5/12 max-[769px]:w-10/12 flex items-end flex-col gap-32'>
                    <div className=' w-[450px] h-[450px] max-[769px]:w-full cursor-pointer' onClick={() => toggleCard(1)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] `}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(1) ? 'bg-opacity-25' : ' bg-black'} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] text-center font-medium'>{RoadCardList[0].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 max-[769px]:px-2 w-full'>
                                        {RoadCardList[0].questions.map((question, index) => (
                                            <div className='flex justify-between ' >
                                                <p key={index} className='pb-5 px-3'>{question} </p>
                                                <p><img src='assets/icons/road-check.svg' /></p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[450px] h-[450px] min-[769px]:hidden max-[769px]:w-full cursor-pointer' onClick={() => toggleCard(2)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] `}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(2) ? 'bg-opacity-25 ' : 'bg-black '} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] text-center font-medium'>{RoadCardList[1].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 max-[769px]:px-2 w-full '>
                                        {RoadCardList[1].questions.map((question, index) => (
                                            <p key={index} className='pb-3 px-3'>{question}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='overflow-hidden w-[450px] h-[450px] max-[769px]:w-full cursor-pointer' onClick={() => toggleCard(3)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] `}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(3) ? 'bg-opacity-25 ' : 'bg-black '} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] text-center font-medium'>{RoadCardList[2].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 w-full max-[769px]:px-2 '>
                                        {RoadCardList[2].questions.map((question, index) => (
                                            <p key={index} className='pb-3 px-3'>{question}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=' w-[450px] h-[450px] min-[769px]:hidden max-[769px]:w-full cursor-pointer' onClick={() => toggleCard(4)}>
                        <div className={`border-gradient flex justify-center h-full px-[3px] `}>
                            <div className={`hover:bg-opacity-25 bg-black h-full w-[444px]   ${activatedIds.includes(4) ? 'bg-opacity-25 ' : 'bg-black '} `}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] text-center font-medium'>{RoadCardList[3].title}</h1>
                                </div>
                                <div className='text-white text-sm flex w-full '>
                                    <div className='px-8 max-[769px]:px-2 w-full'>
                                        {RoadCardList[3].questions.map((question, index) => (
                                            <p key={index} className='pb-3 px-3'>{question}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex basis-2/12 '>
                    <div className='flex relative justify-end basis-1/2 max-[769px]:w-full '>
                        <div className='h-full border-gradient w-[1px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-1 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-2 max-[769px]:top-[800px] top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-3 max-[769px]:top-[1350px] top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-l-full absolute z-10 timeline-4 max-[769px]:top-[1950px] top-[986px]'></div>
                        <div className=' absolute w-full h-0.5 top-[238px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                        <div className=' absolute w-full h-0.5  top-[813px] bg-cover' style={{ backgroundImage: "url('assets/icons/timeline-right.svg')" }}></div>
                        <div className=' absolute w-full h-0.5  top-[813px] bg-cover min-[769px]:hidden max-[769px]:top-[1362px]' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                        <div className=' absolute w-full h-0.5  top-[813px] bg-cover min-[769px]:hidden max-[769px]:top-[1962px]' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                    </div>
                    <div className='flex relative basis-1/2 '>
                        <div className='h-full border-gradient w-[1px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-1 top-[225px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-2 max-[769px]:top-[800px]  top-[450px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-3 max-[769px]:top-[1350px] top-[800px]'></div>
                        <div className='w-[12px] h-[25px] rounded-r-full absolute z-10 timeline-4 max-[769px]:top-[1950px] top-[986px]'></div>
                        <div className=' absolute w-full h-0.5 top-[463px] bg-cover max-[769px]:hidden' style={{ backgroundImage: "url('assets/icons/timeline-right.svg')" }}></div>
                        <div className=' absolute w-full h-0.5  top-[1000px] bg-cover max-[769px]:hidden' style={{ backgroundImage: "url('assets/icons/timeline-left.svg')" }}></div>
                    </div>
                </div>
                <div className='basis-5/12 mt-[225px] flex flex-col gap-28 max-[769px]:hidden'>
                    <div onClick={() => toggleCard(2)}>
                        <div className={`border-gradient w-[450px] max-[769px]:w-full px-[3px] flex justify-center  cursor-pointer `}>
                            <div className={`bg-black hover:bg-opacity-25  w-[444px] max-[769px]:w-[194px] h-[444px] flex items-center flex-col ${activatedIds.includes(2) ? 'bg-opacity-25' : ''}`}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] font-medium'>{RoadCardList[1].title}</h1>
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
                        <div className={`border-gradient w-[450px]  max-[769px]:w-full px-[3px] flex justify-center  cursor-pointer`}>
                            <div className={`bg-black hover:bg-opacity-25 w-[444px] h-[444px] flex items-center flex-col ${activatedIds.includes(4) ? 'bg-opacity-25' : ''}`}>
                                <div className='my-8'>
                                    <h1 className='focus-color text-4xl leading-[38.73px] font-medium'>{RoadCardList[3].title}</h1>
                                </div>
                                <div className='text-white text-sm flex '>
                                    <div className='px-3'>
                                        {RoadCardList[3].questions.map((question, index) => (
                                            <p key={index} className=' pb-5 '>{question}</p>
                                        ))}
                                    </div>
                                    <div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap