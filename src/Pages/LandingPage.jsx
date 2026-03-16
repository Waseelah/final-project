import React from 'react'
import FirstSection from '../components/First';
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
import Howitworks from '../components/Howitworks';
const LandingPage = () => {
  return (
    <div>
      <Nav />

      <FirstSection />
      <Transfer />
      <Howitworks />
    </div>
  )
}

export default LandingPage
