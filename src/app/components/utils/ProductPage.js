'use client';
import Image from 'next/image';

export default function ProductPage() {
    return (
        <div className="relative w-full h-screen bg-black">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-80"
            style={{
              backgroundImage: "url('/product.png')", // Replace with the actual path of your background image
            }}
          ></div>
    
          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-start h-full text-white text-center space-y-6 px-4 md:px-8 pt-12">
            <h1 className="text-3xl md:text-5xl font-semibold text-gray-500 tracking-wide ">
              FUTURE OF
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-wide">
              MICRO MOBILITY
            </h2>
            <h2 className="text-4xl md:text-6xl text-gray-500 tracking-wide">
              IS HERE
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-400">Next generation Compact car</p>
          </div>
        </div>
      );
}
