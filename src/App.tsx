import React from 'react';
import './App.css';
import Dashboard from './sections/Dashboard';
import Header from './components/Header';
import Features from './sections/Features';
import Roadmap from './sections/Roadmap';
import About from './sections/About';
import Tokenomics from './sections/Tokenomics';
import ReferralRewards from './sections/ReferralRewards';
import BackgroundPartical from './utils/BackgroundParctical'
import SingUp from './components/SingUp';

function App() {
  return (
    <div className='relative overflow-x-hidden scroll-smooth'>
      {/* <SingUp /> */}
      <BackgroundPartical />
      <Header />
      <Dashboard />
      <About />
      <Features /> 
      <Tokenomics />
      <Roadmap />
      <ReferralRewards />
    </div>
  );
}

export default App;
