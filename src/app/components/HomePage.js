'use client';
import BestRangeDesign from './BestRangeDesign';
import CustomerInsights from './CustomerInsights';
import FeatureGrid from './FeatureGrid';
import Footer from './Footer';
import HomeLanding from './HomeLanding';
import Navbar from './Navbar';
import TrafficCarousel from './TrafficCarousel';
import TrustedBySection from './TrustedBySection';
import { LampDemo } from './utils/LampDemo';
import VisionSection from './VisionSection';

export default function HomePage() {
  return (
    <div>
      <div><Navbar></Navbar></div>
      <div><HomeLanding /></div>
      <div><TrafficCarousel></TrafficCarousel></div>
      <div><CustomerInsights></CustomerInsights></div>
      <div><BestRangeDesign></BestRangeDesign></div>
      {/* <div><FeatureGrid></FeatureGrid></div> */}
      <div><VisionSection></VisionSection></div>
      {/* <div><LampDemo></LampDemo></div> */}
      {/* <div><TrustedBySection></TrustedBySection></div> */}
      <div><Footer></Footer></div>
    </div>
  );
}
