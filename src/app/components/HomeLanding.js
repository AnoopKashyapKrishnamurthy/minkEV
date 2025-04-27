'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function HomeLanding() {
  const router = useRouter();

  // List of images for the slideshow
  const images = [
    '/car1.png',
    '/car2.png',
    '/car3.png',
    '/car4.png',
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length); // Cycle through images
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  // Handle navigation for the buttons
  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center pt-10 w-full max-w-5xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-blue-400 text-center">
          <span className="text-blue-400">Changing The</span>{" "}
          <span className="relative text-blue-500">
            <span className="absolute inset-0 blur-md opacity-30 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg"></span>
            <span className="relative">Future Mobility</span>
          </span>
        </h1>

        <p className="text-gray-400 mt-3 text-lg">Next generation compact car</p>

        {/* Car Image (Slideshow) */}
        <div className="relative mt-10">
          <Image
            src={images[current]}
            alt="Covered Car Teaser"
            width={900}
            height={500}
            className="w-full h-auto rounded-xl brightness-75 transition-opacity duration-1000 ease-in-out transform scale-x-[-1]"
          />
        </div>


      </div>
    </div>
  );
}
