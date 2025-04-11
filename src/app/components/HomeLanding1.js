import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function HomeLanding1() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white relative">
      <Head>
        <title>Mink EV - Changing the future mobility</title>
        <meta name="description" content="Next generation Compact car" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="absolute top-4 left-0 w-full z-10 px-6 flex justify-between items-center">
        <div className="text-white text-3xl font-bold">
          <Image
            src="/Animal_logo.svg"
            alt="Mink EV Logo"
            width={40}
            height={40}
            className="w-10 h-10"
          />
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div className="hidden md:block">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-full bg-white p-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center min-h-screen relative">
        <div className="text-center px-4 z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Changing the future mobility
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mt-2 mb-4">
            Next generation Compact car
          </p>
        </div>

        <div className="relative w-full max-w-4xl my-8 px-4">
          <div className="relative aspect-video md:aspect-[16/9] w-full">
            <Image
              src="/HomeCar.png"
              alt="Mink EV Silhouette"
              layout="fill"
              objectFit="contain"
              className="cursor-pointer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-transparent rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden w-full max-w-4xl px-4 mt-4 flex flex-col gap-4">
          <button className="bg-white text-black py-3 px-6 rounded-full font-medium">
            Reserve now
          </button>
          <button className="bg-transparent text-white py-3 px-6 rounded-full font-medium border border-gray-800">
            Invest in Mink Ev
          </button>
        </div>

        {/* Desktop navigation and buttons */}
        <div className="hidden md:block w-full max-w-4xl px-4 mt-8">
          <div className="flex justify-center items-center">
            <div className="bg-white rounded-full flex items-center p-1 pr-0">
              <Image
                src="/Animal_logo.svg"
                alt="Mink Logo"
                width={24}
                height={24}
                className="ml-2"
              />
              <nav className="flex space-x-1 text-sm">
                <a href="#" className="py-2 px-3 text-gray-600 hover:text-blue-400 transition">Home</a>
                <a href="#" className="py-2 px-3 text-gray-600 hover:text-blue-400 transition">Product</a>
                <a href="#" className="py-2 px-3 text-gray-600 hover:text-blue-400 transition">About us</a>
                <a href="#" className="py-2 px-3 bg-black text-white rounded-full">Reserve now</a>
              </nav>
            </div>

            <div className="ml-4">
              <button className="bg-transparent text-white py-2 px-6 rounded-full font-medium border border-gray-600 hover:border-white">
                Invest in Mink Ev
              </button>
            </div>
          </div>
        </div>
      </main>

      {menuOpen && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-6 text-xl">
            <a href="#" className="hover:text-blue-400 transition">Home</a>
            <a href="#" className="hover:text-blue-400 transition">Product</a>
            <a href="#" className="hover:text-blue-400 transition">About us</a>
            <a href="#" className="hover:text-blue-400 transition">Reserve now</a>
            <a href="#" className="hover:text-blue-400 transition">Invest in Mink Ev</a>
          </nav>
        </div>
      )}
    </div>
  );
}