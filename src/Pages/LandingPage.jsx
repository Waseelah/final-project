import React from 'react'
import FirstSection from '../components/First';
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
import Howitworks from '../components/Howitworks';
import BuiltForTrust from '../components/BuiltForTrust';
import Sendacross from '../components/Sendacross';
import Voices from '../components/voices';
const LandingPage = () => {
  return (
    <div>
      <Nav />

      <FirstSection />
      <Transfer />
      <Howitworks />
      <BuiltForTrust />
      <Sendacross />
      <Voices />
      

    </div>
  )
}

export default LandingPage
