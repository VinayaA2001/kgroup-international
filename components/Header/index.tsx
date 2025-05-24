import { MenuItems } from '@/data/header'
import React from 'react'

const Header = () => {
    return (
        <div className='bg-white'>
            <div className='container mx-auto py-3'>
                <div className='grid grid-cols-3'>
                    <div className="col-span-1">
                        <div>
                            <img src={'/logos/klogo.png'} className='h-[70px]' alt='logo' />
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='flex items-center justify-center h-full'>
                            {MenuItems?.map((item, index) => (
                                <a href={item?.url} key={index} className='mx-2'>{item?.menu}</a>
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1">
                        <div className='flex items-center justify-center h-full'>
                            Contact
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header