'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function CareersSection() {
  const router = useRouter();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 bg-white text-black">
      {/* Heading */}
      <div className="max-w-3xl text-center">
        <h1 className="text-[2rem] md:text-[3rem] font-bold leading-tight mb-6">
          Join The Product-Led Revolution
        </h1>
        <p className="text-[0.9rem] md:text-[1rem] text-gray-700 leading-relaxed">
          At MINK EV, People Are At The Core Of Everything We Do. We Believe in Your Ability To Help Shape The Future Of Urban Mobility. If You’re Passionate About Innovation And Committed To Making Transportation Smarter, Safer, And More Sustainable, You’re One Of Us. Let’s Work Together To Build A More Connected And Accessible Future For Everyone.
        </p>
      </div>

      {/* Image with Responsive Overlay */}
      <div className="relative mt-10 w-full max-w-5xl rounded-2xl overflow-hidden shadow-none sm:shadow-xl">
        <Image
          src="/careers_image.png"
          alt="Join Our Team"
          width={1200}
          height={600}
          className="w-full h-auto object-cover"
        />

        {/* Overlay for desktop, below image on mobile */}
        <div className="sm:absolute sm:top-1/2 sm:left-6 sm:transform sm:-translate-y-1/2 mt-6 sm:mt-0 flex justify-center">
          <div className="backdrop-blur-md bg-black/40 rounded-xl p-6 w-[12.5rem] text-center transition-transform duration-300 hover:scale-105 hover:bg-black/50">
            <p className="text-[0.65rem] tracking-wider text-gray-300 mb-2 uppercase">
              Careers
            </p>
            <h2 className="text-[1.25rem] font-semibold text-white mb-4 leading-tight">
              Join Our<br />Team
            </h2>
            <button onClick={() => router.push('/about-us#contact')} className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition duration-300">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
