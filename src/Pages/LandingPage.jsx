import React from "react";
import FirstSection from "../components/First";
import Second from "../components/Second";
import BuiltForTrust from "../components/builtForTrust";
import Work from "../components/Work";
import Receive from "../components/receive";
import Smarter from "../components/Smarter";
import Nav from "../components/Nav";
import SendAcross from "../components/Send";
import Voices from "../components/voices"
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div>
<Nav/>
      <FirstSection />
      <Second />
      <Work />
      <Receive />
      <BuiltForTrust />
      < SendAcross/>
      <Voices/>
      <Smarter />

      <Footer />
    </div>
  );
};

export default LandingPage;
 