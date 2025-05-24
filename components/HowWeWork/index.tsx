import React, { useRef } from 'react';
import TitleSection from '../TitleSection';
import Slider from "react-slick";
import { WorkProcessList } from '@/data/workprocess';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const HowWeWork = () => {

    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        // beforeChange: (_: number, next: number) => setActiveIndex(next),
    };

    const colors = [
        "rgba(39, 71, 201, 0.1)",
        "rgba(0, 184, 148, 0.1)",
        "rgba(214, 48, 49, 0.1)",
        "rgba(253, 203, 110, 0.1)"
    ];

    return (
        <div className='bg-white'>
            <div className="container mx-auto py-12">
                <div className='flex justify-between items-center'>
                    <TitleSection title="How We Work" subTitle="WORKING PROCESS" description="Our working process at our design agency is carefully 
                crafted to ensure efficient collaboration, clear communication, and successful project outcomes" />
                    <div className='flex'>
                        <div className='mr-2 cursor-pointer border bg-[#ffffff] rounded-full 
                        h-[50px] w-[50px] flex items-center justify-center'
                            onClick={() => { sliderRef.current?.slickPrev() }}><MdOutlineArrowBackIosNew className='text-8a2319'/></div>
                        <div className='cursor-pointer border bg-[#fffff] rounded-full 
                        h-[50px] w-[50px] flex items-center justify-center'
                            onClick={() => { sliderRef.current?.slickNext() }}><MdOutlineArrowForwardIos className='text-[#8a2319]'/></div>
                    </div>
                </div>

                <Slider {...settings} ref={sliderRef}>
                    {WorkProcessList?.map((item, index) => (
                        <div key={index} className=''>
                            <div className='mr-2 py-8 flex items-center justify-center border border-[#8a22192b] rounded-md'>
                                <div className='w-[250px] h-[200px] overflow-hidden'>
                                    <div className='text-[#8a2319] bg-[#8a22190e] inline-block px-3 py-2 rounded-[12px]' style={{ backgroundColor: `${colors[index % colors?.length]}` }}>
                                        {'0' + String(index + 1)}
                                    </div>
                                    <div className='text-2xl my-2 font-semibold'>{item?.title}</div>
                                    <p className='text-black/60'>{item?.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default HowWeWork