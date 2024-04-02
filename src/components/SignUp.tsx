import React from 'react'
import Input from './authComponent/Input'
import Button from './authComponent/Button'

interface SignUpPorpsType{
  setIsShow: any
}

const SignUp: React.FC<SignUpPorpsType> = ({setIsShow}) => {
  return (
    <div className='w-[488px] h-auto border-gradient rounded-[20px] p-0.5'>
      <div className='w-full h-full flex flex-col rounded-[20px] bg-black'>
        <div className='px-6 py-7 flex flex-col gap-8'>
          <div className='flex flex-row justify-between'>
            <div className='text-2xl leading-8 font-semibold text-white'>Sign Up</div>
            <div onClick={()=>setIsShow('')} className='cursor-pointer'>
              <img src="assets/icons/exit.svg" alt="exit" />
            </div>
          </div>
          <div className='flex flex-col gap-8'>
            <Input title={'Username'} placeholder={'Username'} />
            <Input title={'Email'} placeholder={'Email'} />
            <Input title={'Password'} placeholder={'Password'} />
            <Button name={'Sign Up'} />
            <div>
              <h1 className='text-center text-white text-base leading-[10px] font-light'>Or continue with</h1>
            </div>
            <Button name={'Sign in with Google'} />
            <div>
              <h1 className='text-center text-white text-base leading-[10px] font-light'>Already have an account?<span onClick={()=>setIsShow('SignIn')} className='focus-color cursor-pointer'> Sign In</span></h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp