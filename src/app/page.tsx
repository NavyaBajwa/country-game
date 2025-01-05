import React from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className="pt-32 pl-48">
        <Header />
      </div>
      <div className='pl-48 pt-10'>
      <InputBox/>
      </div>
    </div>
  );
};

export default Home

