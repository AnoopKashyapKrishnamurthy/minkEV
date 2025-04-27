'use client';

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TrustedBySection from "../components/TrustedBySection";
import CareersSection from "../components/utils/CareerSection";
import ContactPage from "../components/utils/ContactPage";
import MissionSection from "../components/utils/MissionSection";
import OurJourney from "../components/utils/OurJourney";
import TeamGrid from "../components/utils/TeamGrid";
import UrbanMobility from "../components/utils/UrbanMobility";
import VisionSection from "../components/VisionSection";

export default function AboutUsPage() {
    return (
      <div>
        <div><Navbar></Navbar></div>
        <div id="vision"><VisionSection /></div>
        <div><UrbanMobility></UrbanMobility></div>
        <div><OurJourney></OurJourney></div>
        <div id='team'><TeamGrid></TeamGrid></div>
        <div id='mission'><MissionSection></MissionSection></div>
        <div id='careers'><CareersSection></CareersSection></div>
        {/* <div><TrustedBySection></TrustedBySection></div> */}
        <div id='contact'><ContactPage></ContactPage></div>
        <div><Footer></Footer></div>
      </div>
    );
  }