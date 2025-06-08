import { MenuItems } from '@/data/header'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

const Header = () => {
    return (
        <header className='h-[100px] absolute top-0 w-full z-[1000]'>
            <div className='bg-white/90 shadow-md backdrop-blur-md'>
                <div className='lg:mx-12 md:mx-8 mx-6 py-3'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2'>
                        <div className="col-span-1">
                            <div>
                                <img src={'/logos/klogo-trans.png'} className='max-h-[60px]' alt='logo' />
                            </div>
                        </div>
                        <div className="lg:col-span-1 lg:flex hidden">
                            <div className='flex items-center justify-center h-full w-full'>
                                {MenuItems?.map((item, index) => (
                                    <a href={item?.url} key={index} className='mx-2 hover:bg-[#ffffff3c] px-2 py-1 rounded-[6px]'>{item?.menu}</a>
                                ))}
                            </div>
                        </div>
                        <div className="col-span-1">
                            <div className='flex items-center justify-end h-full'>
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
                </div>
            </div>
        </header>
    )
}

export default Header