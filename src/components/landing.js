import React from 'react'
import Hero from './hero'
import Navigation from './navbar'
import NearList from './nearList'
import RestoList from './restoList'


const Landing = () => {
  return (
    <div>
      <Hero />
      <RestoList/>
      <NearList />
    </div>
  )
}

export default Landing