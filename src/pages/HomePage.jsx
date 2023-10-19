import React from 'react'
import Hero from '../components/Hero'
import Destination from '../components/Destination'
import Explore from '../components/Explore'
import Offers from '../components/Offers'

const HomePage = ({open, close, openMenu}) => {
  return (
    <div className='container'>
      <Hero open={open} close={close} openMenu={openMenu} />
      <Destination />
      <Offers />
      <Explore />
    </div>
  )
}

export default HomePage
