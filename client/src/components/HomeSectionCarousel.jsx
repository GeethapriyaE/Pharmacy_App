import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import HomeSectionCard from './HomeSectionCard';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { general_medicine } from './general_medicine';

const HomeSectionCarousel = ({ data ,sectionName}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [carouselInstance, setCarouselInstance] = useState(null);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5 },
    };

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
        carouselInstance.slidePrev();
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
        carouselInstance.slideNext();
    };

    const handleSlideChanged = (e) => {
        setActiveIndex(e.item);
    };

    const items = data.slice(0, 10).map((item, index) => (
        <HomeSectionCard key={index} product={item} />
    ));

    return (
        <div className='border'>
            <h2 className='text-2xl font-extrabold text-gray-800 px-3 py-2'>{sectionName}</h2>
            <div className='relative p-1'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    activeIndex={activeIndex}
                    onSlideChanged={handleSlideChanged}
                    ref={(el) => setCarouselInstance(el)}
                />

                {activeIndex !== 0 &&
                    <div className='absolute top-0 left-0 z-15'>
                        <Button onClick={slidePrev} variant="contained" className='z-50 bg-white' sx={{ postion: 'absolute', top: "8rem", right: "0rem", transform: "translateX(-50%) rotate(90deg)", bgcolor: "white" }} aria-label="prev">
                            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                        </Button>
                    </div>
                }

                {activeIndex !== items.length - 5 &&
                    <div className='absolute top-0 right-0 z-10'>
                        <Button variant="contained" className='z-50 bg-white' onClick={slideNext} sx={{ postion: 'absolute', top: "8rem", left: "0rem", transform: "translateX(50%) rotate(-90deg)", bgcolor: "white" }} aria-label="next">
                            <KeyboardArrowLeftIcon sx={{ transform: "rotate(-90deg)", color: "black" }} />
                        </Button>
                    </div>
                }

            </div>
        </div>
    );
};

export default HomeSectionCarousel;
