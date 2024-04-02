import React, { useState } from 'react'
import { RoadCardList } from '../utils/roadCardListData'
import RoadCard from '../components/RoadCard'

const Roadmap: React.FC = () => {
    const direction = ['left', 'right', 'left', 'right']
    const [activatedIds, setActivatedIds] = useState<Array<number>>([])

    const toggleCard = (id: number) => {
        if (activatedIds.includes(id)) { setActivatedIds(activatedIds.filter(d => d !== id)) } else { setActivatedIds([...activatedIds, id]) }
    }
    return (
        <div className="flex justify-center flex-col relative w-full max-md:h-auto  h-[200vh]" id='roadmap'>
            <div className='mt-6'>
                <div className='my-14'>
                    <h1 className='text-5xl focus-color text-center font-light leading-[58.09px]'>Roadmap</h1>
                </div>
            </div>
            <div className="relative wrap flex overflow-hidden p-10">
                <div className='basis-5/12 flex items-end flex-col gap-32'>
                    <div onClick={()=>toggleCard(1)}>
                        {/* <RoadCard card={RoadCardList[0]} isActive = {activatedIds.includes(1)} direction={direction[0]} /> */}

                    </div>
                    <div onClick={()=>toggleCard(2)}>
                        {/* <RoadCard card={RoadCardList[2]} isActive = {activatedIds.includes(2)} direction={direction[2]} /> */}
                    </div>
                </div>
                <div className='flex basis-2/12'>
                    <div className='basis-1/2 border-r-emerald-300 border-r-2'></div>
                    <div className='basis-1/2'></div>
                </div>
                <div className='basis-5/12 mt-[225px] flex flex-col gap-28'>
                    <div onClick={()=>toggleCard(3)}>
                        {/* <RoadCard card={RoadCardList[1]} isActive = {activatedIds.includes(3)} direction={direction[1]} /> */}
                    </div>
                    <div onClick={()=>toggleCard(4)}>
                        {/* <RoadCard card={RoadCardList[3]} isActive = {activatedIds.includes(4)} direction={direction[3]} /> */}
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