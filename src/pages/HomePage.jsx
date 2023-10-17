import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Explore from '../components/Explore'
import Offers from '../components/Offers'

const HomePage = () => {
  return (
    <div className='container'>
      <Hero />
      <Destination />
      <Offers />
      <Explore />
    </div>
  )
}

export default HomePage
