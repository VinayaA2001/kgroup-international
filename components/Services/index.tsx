import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { ServicesList } from '@/data/services'
import MotionTextL2R from '../MotionText/MotionTextL2R'
import MotionTextR2L from '../MotionText/MotionTextR2L'

const Services = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        rows: 2,
        slidesPerRow: 2,
        fade: true,
        cssEase: "linear",
        beforeChange: (_: number, next: number) => setActiveIndex(next),
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024, // Adjust as needed for "lg"
                settings: {
                    slidesPerRow: 2,
                    rows: 2,
                }
            },
            {
                breakpoint: 1023, // Below "lg"
                settings: {
                    slidesPerRow: 1,
                    rows: 1, 
                }
            }
        ]
    };


    return (
        <div className='bg-white' id='services'>
            <div className="lg:mx-12 md:mx-8 mx-6 py-12">
                <div className='flex items-center justify-center flex-col mb-8'>
                    <div className='flex items-center mb-1'>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                        <span className='text-[14px] font-semibold text-black/60 mr-2'>SERVICES</span>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                    </div>
                    <h2 className='lg:text-[44px] md:text-[36px] text-[24px] font-semibold mb-3 text-black/90 lg:leading-[60px] text-center'>
                        <MotionTextL2R text='Exceptional Services, Tailored for You' />
                    </h2>
                    <div className='text-center text-black/60 text-[16px]'>
                        <MotionTextR2L text='Delivering impactful solutions with a focus on quality and client satisfaction' />
                    </div>
                </div>
                <div className='flex items-center justify-center mb-8'>
                    {[1, 2, 3]?.map((_, index) => (
                        activeIndex === index ? (
                            <div
                                key={index}
                                className="bg-[#8a2319] w-[16px] h-[4px] rounded-full mr-2"
                            />
                        ) : (
                            <div
                                key={index}
                                className="bg-[#e4e4e4] w-[8px] h-[4px] rounded-[2px] mr-2"
                            />
                        )
                    ))}
                </div>

                <Slider {...settings} ref={sliderRef}>
                    {ServicesList?.map((item, index) => (
                        <div key={index} className=''>
                            <div className={`grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 col-span-1 w-full bg-[#fafafa] mb-4 ${(index + 1) % 2 === 1 ? 'mr-8' : ''}`}>
                                <div className='h-[230px] col-span-1 '>
                                    <img className='object-cover w-full h-full ' src={item?.image} alt='service' />
                                </div>
                                <div className='col-span-1 flex items-center justify-center'>
                                    <div className='p-8'>
                                        <div className='font-medium mb-2 text-black/80 text-[18px]'>
                                            {item?.title}
                                        </div>
                                        <div className='mb-2 text-black/60'>
                                            {item?.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </div>
    )
}

export default Services