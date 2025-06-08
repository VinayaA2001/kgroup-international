import { MenuItems } from '@/data/header'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

const Footer = () => {
    return (
        <div className='border-t border-[#3a3a3a1c] bg-[#fafafa]'>
            <div className='lg:mx-12 md:mx-8 mx-6 py-16'>
                <div className='grid lg:grid-cols-4 md:grid-cols-2'>
                    <div className="col-span-1 flex items-center justify-center">
                        <div className='w-[200px] mb-8'>
                            <img src={'/logos/klogo.png'} className='h-[60px] mb-4' alt='logo' />
                            <p className='text-black/60 mb-4 font-light'>
                                We unite diverse companies to deliver innovative, trusted solutions that meet evolving client needs.
                            </p>
                            <div className='flex items-center'>
                                <a
                                    href="https://www.instagram.com/thek_marketindia?igsh=Z3dsdW92bHExOThj" // Replace with actual profile URL
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='mr-4 border border-[#8a221958] rounded-full p-2 text-[#8a2319] hover:bg-[#8a2319] hover:text-[#ffffff] cursor-pointer'
                                >
                                    <FaInstagram className='text-[16px]' />
                                </a>

                                <a
                                    href="https://wa.me/918714448040"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='mr-4 border border-[#8a221958] rounded-full p-2 text-[#8a2319] hover:bg-[#8a2319] hover:text-[#ffffff] cursor-pointer'
                                >
                                    <FaWhatsapp className='text-[16px]' />
                                </a>

                                <a
                                    href="tel:+918714448040"
                                    className='border border-[#8a221958] rounded-full p-2 text-[#8a2319] hover:bg-[#8a2319] hover:text-[#ffffff] cursor-pointer'
                                >
                                    <CiMobile3 className='text-[16px]' />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <div className='w-[200px] mb-8'>
                            <div className='mb-6 font-medium text-black'>QUICK LINKS</div>
                            <div className='flex flex-col h-full'>
                                {MenuItems?.map((item, index) => (
                                    <a href={item?.url} key={index} className='mb-3 text-black/60 font-light'>{item?.menu}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-center">
                        <div className='w-[200px] mb-8'>
                            <div className='mb-4 font-medium text-black'>OFFICE</div>
                            <div className='flex flex-col h-full'>
                                <a href="https://maps.app.goo.gl/6Yd3N1GUatZ1A2PD8"
                                    target="_blank"
                                    rel="noopener noreferrer" className='mb-2 hover:underline text-black/60 font-light'>Siraj Bypass Road, Koduvally Bus Stand Ln, near Thanal Dialysis Centre, Koduvally, Kerala 673585, India</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-start justify-center">
                        <div className='w-[200px] mb-8'>
                            <div className='mb-4 font-medium text-black'>CONTACT</div>
                            <div className='flex flex-col h-full'>
                                <a
                                    href="tel:+918714448040"
                                    className='mb-2 hover:underline text-black/60 font-light'
                                >
                                    +91 87144 48040
                                </a>
                                <a
                                    href="mailto:shinuirfank@gmail.com"
                                    className='mb-2 hover:underline text-black/60 font-light'
                                >
                                    shinuirfank@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='lg:mx-12 md:mx-8 mx-6'>
                <div className='flex items-center justify-center border-t border-[#3a3a3a1c] text-black/60 font-light py-6 text-[14px]'>
                    Copyright © 2025 The K Group. All Rights Reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer