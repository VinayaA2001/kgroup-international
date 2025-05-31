import React from 'react'
import { ProductList } from '@/data/products'
import MotionTextL2R from '../MotionText/MotionTextL2R'
import MotionTextR2L from '../MotionText/MotionTextR2L'

const Products = () => {
    return (
        <div className='bg-white' id='products'>
            <div className="container mx-auto py-12">
                {/* <TitleSection title="Our Best Products For Our Customer" subTitle="Products" description="Our working process at our design agency is carefully 
                crafted to ensure efficient collaboration, clear communication, and successful project outcomes" /> */}
                <div className='flex items-center justify-center flex-col mb-16'>
                    <div className='flex items-center mb-1'>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                        <span className='text-[14px] font-semibold text-black/60 mr-2'>PRODUCTS</span>
                        <div className='mr-2 bg-[#8a2319] h-[2px] w-[30px]' />
                    </div>
                    <h2 className='text-[44px] font-semibold mb-3 text-black/90 leading-[60px]'>
                        <MotionTextL2R text='Our Best Products For Our Customer' />
                    </h2>
                    <div className='text-center text-black/60 text-[16px]'>
                        <MotionTextR2L text='Our working process at our design agency is carefully 
                crafted to ensure efficient collaboration, clear communication, and successful project outcomes' />
                    </div>
                </div>
                <div className='grid grid-cols-5 gap-6'>
                    {ProductList?.map((item, index) => (
                        <div className='col-span-1' key={index}>
                            <div className='flex flex-col items-center justify-center'>
                                <div className='relative flex items-center justify-center mb-2 px-3 h-[210px] w-full'>
                                    <img src={item?.image} className='h-[150px] object-contain relative z-10' alt='product'/>
                                    <div style={{ backgroundColor: `${item?.color}`, opacity: 0.7 }} className='rounded-md absolute z-0 inset-0' />
                                </div>

                                <div className='text-[18px] font-medium text-center'>
                                    {item?.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products