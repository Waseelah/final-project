import React from 'react'
import FirstSection from '../components/First';
import Second from '../components/Second';  
import BuiltForTrust from '../components/builtForTrust';
import Work from '../components/Work';


import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
const LandingPage = () => {
  return (
    <div>
      <Nav />

      <FirstSection />
      < Second/>
        <Work />
      <BuiltForTrust/>
      <Transfer />
  
    </div>
  )
}

export default LandingPage
