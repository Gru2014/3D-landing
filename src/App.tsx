import React from 'react';
import './App.css';
import Dashboard from './sections/Dashboard';
import Header from './components/Header';
import CurrentFeatures from './sections/CurrentFeatures';

function App() {
  return (
    <div className='relative'>
      <Header/>
      <Dashboard />
      {/* <CurrentFeatures /> */}
    </div>
  );
}

export default App;
