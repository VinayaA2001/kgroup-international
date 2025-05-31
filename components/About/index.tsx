import { AboutData } from '@/data/about'
import React from 'react'
import MotionTextL2R from '../MotionText/MotionTextL2R'
import MotionTextR2L from '../MotionText/MotionTextR2L'
import { MdShield } from "react-icons/md";
import { motion } from "framer-motion";
import { BsPersonHeart } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";

const About = () => {
    return (
        <div className='bg-[#ffffff]' id='about'>
            <div className="container mx-auto py-12">

                <div className='flex items-center justify-center flex-col mb-16'>
                    <div className='flex items-center mb-1'>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                        <span className='text-[14px] font-semibold text-black/60 mr-2'>ABOUT US</span>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                    </div>
                    <h2 className='text-[44px] font-semibold mb-3 text-black/90 leading-[60px]'>
                        <MotionTextL2R text='Unveiling Our Identity, Vision and Values' />
                    </h2>
                    <div className='text-center text-black/60 text-[16px]'>
                        <MotionTextR2L text={AboutData?.about} />
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="grid grid-cols-2 gap-16">
                        <div className="col-span-1">
                            <div className="border border-[#8a221931] rounded-[12px] relative">
                                <img
                                    src="/images/vision.jpg"
                                    className="h-[200px] w-full object-cover object-center rounded-t-[12px]"
                                    alt="Vision"
                                />
                                <div className='absolute -top-6 w-full flex items-center justify-center'>
                                    <div className='bg-white px-8 py-1 rounded-[24px] text-[#8a2319] text-[24px] font-medium'>Vision</div>
                                </div>
                                <div className='px-4 py-8 min-h-[180px]'>
                                    <p className="text-black/60 text-base">{AboutData?.vision}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className="border border-[#8a221931] rounded-[12px] relative">
                                <img
                                    src="/images/mission.jpg"
                                    className="h-[200px] w-full object-cover object-center rounded-t-[12px]"
                                    alt="Vision"
                                />
                                <div className='absolute -top-6 w-full flex items-center justify-center'>
                                    <div className='bg-white px-8 py-1 rounded-[24px] text-[#8a2319] text-[24px] font-medium'>Mission</div>
                                </div>
                                <div className='px-4 py-8 min-h-[180px]'>
                                    <p className="text-black/60 text-base">{AboutData?.mission}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        duration: 1.2,
                        ease: "easeInOut",
                    }}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className='bg-[#ffffff] border border-[#8a221931] py-12 rounded-lg flex flex-col items-center justify-center mt-[64px] relative'>
                        {/* <div className='flex items-center mb-1'>
                            <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                            <span className='text-[14px] font-semibold text-black/60 mr-2'>VALUES</span>
                            <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                        </div> */}
                        <div className='absolute -top-6 w-full flex items-center justify-center'>
                            <div className='bg-white px-8 py-1 rounded-[24px] text-[#8a2319] text-[24px] font-medium'>Values</div>
                        </div>
                        <p className='text-black/70 text-[16px] text-center mb-8 max-w-[700px]'>{AboutData?.values?.desc}</p>
                        <div className='grid grid-cols-3'>
                            {AboutData?.values?.sections?.map((item, index) => (
                                <div className='mr-3 bg-[#ffffff] px-8 py-8 rounded-[12px] col-span-1 flex flex-col items-center justify-center' key={index}>
                                    <div className='flex items-center justify-center bg-[#89413a0f] w-full py-2 rounded-[12px] mb-4 border border-[#89413a16] relative'>
                                        <div className='bg-white h-[50px] flex items-center justify-center mr-3 rounded-full absolute  -left-3 w-[50px]'>
                                            {index === 0 ? <MdShield className='text-[20px] text-[#8a2319]' /> :
                                                index === 1 ? <BsPersonHeart className='text-[20px] text-[#8a2319]' /> :
                                                    <FaHandHoldingHeart className='text-[20px] text-[#8a2319]' />}
                                        </div>
                                        <div className='text-black/80 text-[18px] font-medium text-center'>
                                            {item?.title}
                                        </div>
                                    </div>

                                    <p className='text-black/60 text-justify text-[16px]'>{item?.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* <div className='border-[#8a221992] border h-[300px] w-[300px] rounded-full absolute -top-10 -left-[150px]'></div>
                            <div className='border-[#8a221992] border h-[300px] w-[300px] rounded-full absolute -top-10 -left-[100px]'></div>

                            <div className='border-[#8a221992] border h-[300px] w-[300px] rounded-full absolute -bottom-10 -right-[150px]'></div>
                            <div className='border-[#8a221992] border h-[250px] w-[300px] rounded-full absolute -bottom-10 -right-[180px]'></div> */}
                    </div>
                </motion.div>

            </div>


        </div>
    )
}

export default About