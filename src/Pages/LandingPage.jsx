import React from 'react'
import FirstSection from '../components/First';
<<<<<<< HEAD
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
import Howitworks from '../components/Howitworks';
import BuiltForTrust from '../components/BuiltForTrust';
import Sendacross from '../components/Sendacross';
import Voices from '../components/voices';
=======
import Second from '../components/Second';  
import BuiltForTrust from '../components/builtForTrust';
import Work from '../components/Work';
import Receive from '../components/receive';
import Smarter from '../components/Smarter';
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
>>>>>>> 597d829f30f24600e6df62cb5e632d5eba7be2d1
const LandingPage = () => {
  return (
    <div>
      <Nav />

      <FirstSection />
<<<<<<< HEAD
      <Transfer />
      <Howitworks />
      <BuiltForTrust />
      <Sendacross />
      <Voices />
      

=======
      < Second/>
        <Work />
        <Receive/>
      <BuiltForTrust/>
      <Smarter/>
      <Transfer />
  
>>>>>>> 597d829f30f24600e6df62cb5e632d5eba7be2d1
    </div>
  )
}

export default LandingPage
