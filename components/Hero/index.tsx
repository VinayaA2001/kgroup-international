import { IoMdArrowDropleft } from "react-icons/io";
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { LuMouse } from "react-icons/lu";
import { IoMdArrowDropright } from "react-icons/io";

import dynamic from 'next/dynamic';

const MotionTextB2T = dynamic(() => import('../MotionText/MotionTextB2T'), { ssr: false });

const HeroItems = [
    {
        image: '/images/slide1.jpg',
        mainText: "Empowering industries with innovative, purpose-led solutions.",
        subText: "A dynamic group of companies delivering integrated services with integrity, creativity, and lasting impact."
    },
    {
        image: '/images/slide2.jpg',
        mainText: "Shaping tomorrow through collaboration, creativity, and purpose.",
        subText: "Empowering people and businesses with integrated, forward-thinking solutions that make a difference."
    },
    {
        image: '/images/slide3.jpg',
        mainText: "Driving progress through unity, innovation, and smart solutions.",
        subText: "A future-focused business group delivering trusted services across industries with heart and vision."
    }
];



const Hero: React.FC = () => {

    const sliderRef = useRef<Slider>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const duration = 3000;
    useEffect(() => {
        setProgress(0);
        const start = Date.now();

        const interval = setInterval(() => {
            const elapsed = Date.now() - start;
            const percent = Math.min((elapsed / duration) * 100, 100);
            setProgress(percent);

            if (percent >= 100) {
                sliderRef.current?.slickNext();
            }
        }, 50);

        return () => clearInterval(interval);
    }, [activeIndex]);

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: "linear",
        beforeChange: (_: number, next: number) => setActiveIndex(next),
    };

    return (
        <section className="w-full h-screen overflow-hidden relative">
            <Slider {...settings} ref={sliderRef}>
                {HeroItems.map((hero, index) => (
                    <div key={index} className="relative w-full h-screen">
                        <img
                            src={hero?.image}
                            alt={`Family Slide ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                        <div className="absolute h-screen bg-[#313232b2] z-[100] inset-0"></div>
                        <div className="absolute bottom-32 z-[1500] lg:px-24 md:px-12 px-6">
                            <h1 className='text-white lg:text-[48px] md:text-[36px] text-[22px] font-thin text-left'>
                                <MotionTextB2T text={hero?.mainText} />
                            </h1>
                            <h6 className="text-white lg:text-[24px] md:text-[16px] text-[16px] font-thin">
                                <MotionTextB2T text={hero?.subText} />
                            </h6>
                        </div>

                    </div>
                ))}
            </Slider>
            <div className='flex items-center justify-center bg-black'>
                <div className='hidden absolute right-0 bottom-[50%] z-[1000] mr-[100px] border-solid border-[2px] border-[#ffffff] 
                           rounded-full lg:flex items-center justify-center h-[50px] w-[50px] cursor-pointer'
                    onClick={() => { sliderRef.current?.slickNext(); }}
                >
                    <IoMdArrowDropright className="text-white" />
                </div>
                <div className='hidden absolute left-0 bottom-[50%] z-[1000] ml-[100px] border-solid border-[2px] border-[#ffffff] 
                           rounded-full lg:flex items-center justify-center h-[50px] w-[50px] cursor-pointer'
                    onClick={() => { sliderRef.current?.slickPrev(); }}
                >
                    <IoMdArrowDropleft className="text-white" />
                </div>
                <div className='flex bottom-16 left-[100px] absolute z-[1500]'>
                    {HeroItems?.map((_, index) => (
                        activeIndex === index ? (
                            <div
                                key={index}
                                className="bg-[#ffffff] w-[80px] h-[4px] rounded-[2px] mr-2 overflow-hidden"
                            >
                                <div
                                    className="bg-[#8a2319] h-full"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        ) : (
                            <div
                                key={index}
                                className="bg-[#ffffff] w-[25px] h-[4px] rounded-[2px] mr-2"
                            />
                        )
                    ))}
                </div>

                <LuMouse className='text-white text-[24px] absolute bottom-8 text-center animate-bounce z-[1500]' />
            </div>

        </section >
    );
};

export default Hero;
