import React from 'react'

const SingUp: React.FC = () => {
  return (
    <div className='w-[488px] h-[721px] border-gradient rounded-[20px] p-0.5'>
      <div className='w-full h-full flex flex-col rounded-[20px] bg-black'>
        <div className='px-6 py-7'>
          <div className='flex flex-row justify-between'>
            <div className='text-2xl leading-8 font-semibold text-white'>Sign Up</div>
            <div>
              <img src="assets/icons/exit.svg" alt="exit" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default SingUp