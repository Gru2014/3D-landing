import React from 'react'
import Input from './authComponent/Input'
import Button from './authComponent/Button'

interface SignInPorpsType{
  setIsShow: any
}

const SingIn: React.FC<SignInPorpsType> = ({setIsShow}) => {
  return (
    <div className='w-[488px] h-auto border-gradient rounded-[20px] p-0.5'>
      <div className='w-full h-full flex flex-col rounded-[20px] bg-black'>
        <div className='px-6 py-7 flex flex-col gap-8'>
          <div className='flex flex-row justify-between'>
            <div className='text-2xl leading-8 font-semibold text-white'>Sign In</div>
            <div onClick={()=>setIsShow('')} className='cursor-pointer'>
              <img src="assets/icons/exit.svg" alt="exit" />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <Input title={'Email'} placeholder={'Enter your email'} />
            <Input title={'Password'} placeholder={'Enter your password'} />
            <Button name={'Sign In'} />
            <div>
              <h1 className='text-center text-white text-base leading-[10px] font-light'>Or continue with</h1>
            </div>
            <Button name={'Sign in with Google'} />
            <div>
              <h1 className='text-center text-white text-base leading-[10px] font-light'>Don't have an account yet?<span onClick={()=>setIsShow('SignUp')} className='focus-color cursor-pointer'> Sign Up</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingIn