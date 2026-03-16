import React from 'react'
import FirstSection from '../components/First';
import Nav from '../components/Nav'
import Transfer from '../components/Transfer';
import Howitworks from '../components/Howitworks';
import BuiltForTrust from '../components/BuiltForTrust';
import Sendacross from '../components/Sendacross';
import Voices from '../components/voices';
import Footer from '../components/footer';
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
      <Footer />
      

    </div>
  )
}

export default LandingPage
