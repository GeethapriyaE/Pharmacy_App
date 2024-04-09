import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { IoSearch } from "react-icons/io5";
import MainCarousel from './MainCarousel';
import HomeSectionCarousel from './HomeSectionCarousel';
import { general_medicine } from './general_medicine';

const Home = () => {
  return (
    <div>
      <div className='h-auto min-w-[680px] bg-primary flex justify-center items-center '>
        <Header />
      </div>
      <div className="border-b border-gray-200 w-full"></div>

      <div className="w-full my-2 md:my-4 h-16 bg-card flex items-center justify-center">
        <div className="w-full gap-4 p-2 md:p-4 md:w-2/3 bg-primary shadow-xl rounded-full flex items-center">
          <IoSearch className="text-lg md:text-2xl text-textColor" />
          <input
            type="text"
            className="w-full h-full bg-transparent text-lg text-textColor border-none outline-none"
            placeholder="Search here ...."
          />
        </div>
      </div>

      <div className="mt-4">
        <MainCarousel />
      </div>

      <div className='mt-6 px-2 space-y-6 py-6 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={general_medicine} sectionName={"General Medicine"} />
        <HomeSectionCarousel data={general_medicine} sectionName={"Baby Care"}/>
        <HomeSectionCarousel data={general_medicine} sectionName={"Women's Hygine"}/>
        <HomeSectionCarousel data={general_medicine} sectionName={"Veterinary Medicine"}/>
      </div>
      
    </div>
  )
}

export default Home;
