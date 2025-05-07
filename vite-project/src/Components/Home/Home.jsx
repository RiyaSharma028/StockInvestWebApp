import React from 'react'
import Navbar from '../../Navbar'
import Hero from './Hero'
import OpenAccount from '../../OpenAccount'
import Footer from '../../Footer'
import Trust from './trust'
import Pricing from './pricing'
import Education from './education'

function Home() {
  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <Trust></Trust>
     <Pricing></Pricing>
     <Education></Education>
     <OpenAccount></OpenAccount>
     <Footer></Footer>
    </>
  )
}

export default Home