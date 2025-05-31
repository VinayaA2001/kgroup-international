import About from '@/components/About'
import Hero from '@/components/Hero'
import HowWeWork from '@/components/HowWeWork'
import Products from '@/components/Products'
import Services from '@/components/Services'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <About/>
      <HowWeWork/>
      <Services/>
      <div className='bg-[#3a3a3a1c] h-[1px] w-full'/>
      <Products/>
    </div>
  )
}

export default Home