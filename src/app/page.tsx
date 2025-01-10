"use client";

import React, { useState } from 'react';
import Header from './components/Header';
import InputBox from './components/InputBox'
import FlagsBox from './components/FlagsBox';

const Home = () => {
  const [countries, setCountries] = useState<{ name: string; flag: string }[]>([]);

  const addCountry = (country: { name: string; flag: string}) => {
    if (!countries.some((c) => c.name.toLowerCase() === country.name.toLowerCase())) {
      setCountries((prev) => [...prev, country]);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className="pt-32 pl-48">
        <Header />
      </div>
      <div className='pl-48 pt-10'>
      <InputBox addCountry={addCountry}
      existingCountries={countries.map((country) => country.name.toLowerCase())}/>
      </div>
      <div className='pl-48 pt-12'>
        <FlagsBox countries={ countries }/>
      </div>
    </div>
  );
};

export default Home

