import React from 'react'

const Hero = () => {
    return (
        <div className='bg-[#fbf9f9] h-[80vh]'>
            <div className='container mx-auto'>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex items-center">
                        <div className='py-16 relative'>
                            <div className='text-[68px] font-semibold tracking-wide'>We Are</div>
                            <div className='text-[68px] font-semibold leading-[0.8] bg-[#ffd876bf] inline-block tracking-wide'>Creative</div>
                            <div className='text-[68px] font-semibold tracking-wide'>& <span className='bg-[#92e7ffc3] inline-block leading-[0.8]'>Unique</span></div>

                            <div className='text-black/70'>
                                Our team of talented designers, developers and strategists collaborate to bring your vision to life and exceed your expectations
                            </div>
                            <button className='bg-[#8a2319] hover:bg-[#db4639] text-white px-6 py-3 mt-4 rounded-md font-medium'>Get Started</button>
                            <div className="w-4 h-2 bg-[#fec3be] rounded-t-full bottom-[100px] absolute -left-10 rotate-[70deg]"></div>
                            <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[10px] border-l-transparent border-r-transparent
                             border-[#e0f58b] absolute top-[40px] right-80 rotate-[70deg]"></div>
                        </div>
                    </div>
                    <div className="col-span-1 flex items-center justify-center">
                        <div className='flex items-center justify-start h-full py-16 relative max-w-[400px]'>
                            <img src='/images/hero-image.jpg' className='h-[500px] object-cover 
                          rounded-t-[100px] rounded-bl-[100px] rounded-br-[36px] relative'/>
                            {/* <img src={'/images/hero-doodle.png'} className='h-[200px] rotate-[100deg] top-0 absolute right-0'/> */}
                            <div className="w-3 h-3 bg-[#ffd876bf] rotate-45 top-10 absolute right-0"></div>
                            <div className="w-4 h-4 bg-[#92e7ffc3] rounded-tl-full overflow-hidden top-14 absolute left-0"></div>
                            <div className="w-4 h-4 bg-[#d192fb] rounded-full bottom-10 absolute right-0"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero