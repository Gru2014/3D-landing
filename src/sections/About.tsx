import React, { useState } from 'react'
import { AboutData } from '../utils/AboutData'
import AboutCard from '../components/AboutCard'
const About: React.FC = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <div className='h-screen w-screen relative flex flex-col'>
            <div className='flex basis-1/2 justify-end flex-col items-center'>
                <div className='my-9'>
                    <h1 className='text-[48px] focus-color text-center font-light leading-[58.09px]'>About</h1>
                </div>
                <div className='mb-6'>
                    <p className='text-2xl leading-1.2 text-center text-white rounded'>Cryptocurrency is expanding faster than it ever has before. <br></br>With Millions of transactions occurring and countless new<br></br>cryptocurrency's being deployed everyday,<br></br>it’s too easy to get lost in all the noise.</p>
                </div>
            </div>
            <div className='flex basis-1/2 flex-col items-center'>
                <div className=''>
                    <img src="assets/images/logo-lg.svg" alt="" />
                </div>
                <div className='flex flex-row flex-wrap gap-14 justify-center px-28 py-2'>

                    {AboutData.map((card, index) => (
                        <div onClick={() => setIsActive(!isActive)}>
                            <AboutCard key={index} isActive={isActive} card={card} />
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default About