// app/page.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const sections = [
  {
    title: "BECOME AN OWNER OF MINK EV COMPANY",
    text: "Mink Ev Is A Next Gen Electric Vehicle Company In UK And INDIA.",
    rightContent: (
      <div className="space-y-4">
        <Image
          src="/Frame.png"
          alt="Car Image"
          width={600}
          height={400}
          className="rounded-xl"
        />
        <div className="text-sm text-gray-400">
          <p><strong>Start Date:</strong> 01 Feb 2025</p>
          <p><strong>End Date:</strong> 30 March 2025</p>
          <p><strong>Type:</strong> Equity</p>
        </div>
        <button className="bg-gray-200 text-black px-6 py-2 rounded-md">Invest Now</button>
      </div>
    ),
  },
  {
    title: "WHY INVEST IN MINK EV?",
    text: "Mink Ev Is A Next Gen Electric Vehicle Company In UK And INDIA.",
    rightContent: (
      <div className="space-y-6">
        <h3 className="text-white text-xl font-semibold">Market Potential</h3>
        <div className="text-green-400 text-3xl font-bold">250M</div>
        <p className="text-white text-sm">Micro Mobility Is Booming, Expected To Grow To $250 Million By 2030</p>
        <div className="text-green-400 text-3xl font-bold">40%</div>
        <p className="text-white text-sm">Mink EV Is Expected To Sell 50,000 Cars Annually By 2027 Buoyed By 40% EV Penetration By 2030</p>
        <button className="bg-gray-200 text-black px-6 py-2 rounded-md">Invest Now</button>
      </div>
    ),
  },
  {
    title: "WHY INVEST IN MINK EV?",
    text: "Mink Ev Is A Next Gen Electric Vehicle Company In UK And INDIA.",
    rightContent: (
      <div className="space-y-4">
        <h3 className="text-white text-xl font-semibold">Competitive Edge</h3>
        <div className="text-white text-sm">
          <p><strong>$</strong> Affordable Pricing That Puts Electric Mobility Within Reach For More Consumers</p>
          <p><strong>#</strong> Sustainability At The Core Of Everything We Do, From Vehicle Design To Production Processes</p>
          <p><strong>@</strong> Scalable Manufacturing That Will Meet Global Demand As We Expand</p>
        </div>
        <button className="bg-gray-200 text-black px-6 py-2 rounded-md">Invest Now</button>
      </div>
    ),
  },
];

export default function InvestmentPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newIndex = Math.min(Math.floor(scrollY / 500), sections.length - 1);
      setActiveIndex(newIndex);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10 flex flex-col lg:flex-row gap-10">
      {/* Left Side Indicator */}
      <div className="sticky top-20 w-full lg:w-1/3 space-y-10">
        <h1 className="text-2xl font-semibold leading-snug">
          Join Us In Driving The <br /> Future Of Urban Mobility
        </h1>
        <div className="space-y-6 mt-10">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`border-l pl-4 ${
                index === activeIndex ? "text-green-400 border-green-400" : "text-gray-400 border-gray-700"
              }`}
            >
              <h2 className="text-sm font-medium">{section.title}</h2>
              <p className="text-xs mt-1">{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side Floating Content */}
      <div className="sticky top-20 w-full lg:w-2/3">
        <div className="transition-all duration-500 ease-in-out">
          {sections[activeIndex].rightContent}
        </div>
      </div>
    </div>
  );
}
