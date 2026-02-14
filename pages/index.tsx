import About from '@/components/About'
import Hero from '@/components/Hero'
import HowWeWork from '@/components/HowWeWork'
import Services from '@/components/Services'
import Companies from '@/components/Companies'
import React from 'react'

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <HowWeWork/>
      <Services/>
      <Companies/>
      <About/>
    </div>
  )
}

export default Home
