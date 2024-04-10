import React, { useState } from 'react';
import Dashboard from '../sections/Dashboard';
import Header from '../components/Header';
import Features from '../sections/Features';
import Roadmap from '../sections/Roadmap';
import About from '../sections/About';
import Tokenomics from '../sections/Tokenomics';
import ReferralRewards from '../sections/ReferralRewards';
import BackgroundPartical from '../utils/BackgroundParctical'
import SignUp from '../components/SignUp';
import SingIn from '../components/SignIn';
import { BtnContextProvider } from '../context/ButtonContext';

const LandingPage = () => {
  const [isShow, setIsShow] = useState<string>('')

  const [btnActive, setBtnActive] = useState(0)

  return (
    <BtnContextProvider>
      <BackgroundPartical />
      <div className={`flex flex-col gap-9 relative   ${isShow === 'SignUp' || isShow === 'SignIn' ? 'justify-center items-center overflow-hidden' : 'overflow-x-hidden scroll-smooth'} `}>
        {isShow === 'SignUp' ?
          <div className='z-50 relative justify-center overflow-hidden items-center my-7'>
            <SignUp setIsShow={setIsShow} />
          </div> : isShow === 'SignIn' ?
            <div className='z-50 relative justify-center items-center my-20 '>
              <SingIn setIsShow={setIsShow} />
            </div>
            :
            <>
              <Header setIsShow={setIsShow} />
              <Dashboard />
              <About />
              <Features />
              <Tokenomics />
              <Roadmap />
              <ReferralRewards />
            </>
        }

      </div>
    </BtnContextProvider>
  );
}

export default LandingPage;
