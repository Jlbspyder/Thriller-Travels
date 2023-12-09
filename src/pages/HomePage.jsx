import React from 'react'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import Explore from '../components/Explore'
import Offers from '../components/Offers'

const HomePage = ({open, close, openMenu}) => {
  return (
    <div className='container'>
      <Hero open={open} close={close} openMenu={openMenu} />
      <Destinations />
      <Offers />
      <Explore />
    </div>
  )
}

export default HomePage
