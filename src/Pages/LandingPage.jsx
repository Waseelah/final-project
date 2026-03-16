import React from 'react'
import FirstSection from '../components/First';
import Second from '../components/Second';  
import BuiltForTrust from '../components/builtForTrust';
import Work from '../components/Work';
import Receive from '../components/receive';
import Smarter from '../components/Smarter';
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
const LandingPage = () => {
  return (
    <div>
      <Nav />

      <FirstSection />
      < Second/>
        <Work />
        <Receive/>
      <BuiltForTrust/>
      <Smarter/>
      <Transfer />
  
    </div>
  )
}

export default LandingPage
