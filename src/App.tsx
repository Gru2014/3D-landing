import React from 'react';
import './App.css';
import Dashboard from './sections/Dashboard';
import Header from './components/Header';
import CurrentFeatures from './sections/CurrentFeatures';
import UpcomingFeatures from './sections/UpcomingFeatures';
import Roadmap from './sections/Roadmap';
import Tokenomics from './sections/Tokenomics';
import ReferralRewards from './sections/ReferralRewards';

function App() {
  return (
    <div className='relative'>
      <Header/>
      {/* <Dashboard /> */}
      {/* <CurrentFeatures /> */}
      {/* <UpcomingFeatures /> */}
      {/* <Roadmap /> */}
      {/* <Tokenomics /> */}
      <ReferralRewards />
    </div>
  );
}

export default App;
