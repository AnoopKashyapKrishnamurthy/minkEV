'use client';
import Image from 'next/image';
import HomeButtonGroup from './HomeButtonGroup';
import { useRouter } from 'next/navigation';

export default function HomeLanding() {
  const router = useRouter();
  return (
    <div className="relative min-h-screen bg-black text-white flex items-center justify-center px-4">
      {/* Main Content */}
      <div className="text-center pt-24 w-full max-w-5xl">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Changing the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500">
            future
          </span>{" "}
          of mobility
        </h1>
        <p className="text-gray-400 mt-3 text-lg">Next generation compact car</p>

        {/* Car Image with Play Button */}
        <div className="relative mt-10">
          <Image
            src="/HomeCar.png"
            alt="Covered Car Teaser"
            width={900}
            height={500}
            className="w-full h-auto rounded-xl brightness-75"
          />
          <button
            aria-label="Play Teaser"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl">
              ▶
            </div>
          </button>
        </div>

        {/* Bottom Navigation Buttons */}
        <div className="absolute bottom-16 left-0 right-0 flex justify-center px-4">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            {/* Desktop Button Group */}
            <div className="hidden sm:flex items-center bg-white px-4 py-2 rounded-full shadow-lg space-x-3">
              <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center invert hover:invert-0">
                <Image
                  src="/Animal_logo.svg"
                  alt="Mink EV Logo"
                  width={30}
                  height={30}
                  className="w-8 h-8"
                />
              </div>
              <HomeButtonGroup />
            </div>

            {/* Mobile: Reserve Now */}
            <button onClick={() => router.push('/reserve')} className="block sm:hidden px-5 py-2 text-black bg-white border rounded-full transition hover:bg-red-500 hover:text-white">
              Reserve now
            </button>

            {/* Invest Button */}
            <button onClick={() => router.push('/about-us#contact')} className="px-5 py-2 text-white bg-white/5 border border-red-500 rounded-full transition hover:bg-red-500 hover:text-white">
              Invest in Mink EV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
