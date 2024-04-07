
import React from 'react';
import Header from './Header';
import MainCarousel from './MainCarousel';

const Home = () => {
  return (
    <div>
      <div className='h-auto min-w-[680px] bg-primary flex justify-center items-center '>
        <Header />
      </div>
      <div className="border-b border-gray-200 w-full"></div>
      <MainCarousel />
    </div>
  )
}

export default Home
