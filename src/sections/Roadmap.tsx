import React from 'react'
import { RoadCardList } from '../utils/roadCardListData'
import RoadCard from '../components/RoadCard'

const Roadmap: React.FC = () => {
    return (
        <div className="flex justify-center flex-col w-full  h-[200vh]">
            <div className='mt-36'>
                <div className='my-14'>
                    <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>Roadmap</h1>
                </div>
            </div>

            <div className="relative wrap overflow-hidden p-10 ">
                <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                    </div>
                    <div className="order-1 w-5/12 flex justify-end">
                        <RoadCard card={RoadCardList[0]} />
                    </div>
                </div>

                <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">

                    </div>
                    <div className="order-1 w-5/12 ">
                        <RoadCard card={RoadCardList[1]} />
                    </div>
                </div>

                <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto font-semibold text-lg text-white"></h1>
                    </div>
                    <div className="order-1 w-5/12">
                        <RoadCard card={RoadCardList[2]} />
                    </div>
                </div>

                <div className="mb-8 flex justify-between  items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                        <h1 className="mx-auto text-white font-semibold text-lg"></h1>
                    </div>
                    <div className="order-1 w-5/12 ">
                        <RoadCard card={RoadCardList[3]} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap