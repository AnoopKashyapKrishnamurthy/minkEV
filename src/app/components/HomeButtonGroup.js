'use client';

import { useRouter } from 'next/navigation';
import React from "react";

export default function HomeButtonGroup() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center space-x-4">
      {/* Main Button Group with Logo */}
      <button className="px-4 py-1 px-4 py-1 text-gray-500 hover:text-black hover:bg-black hover:text-white rounded-full hover:border-black">
        Home
      </button>
      <button className="px-4 py-1 px-4 py-1 text-gray-500 hover:text-black hover:bg-black hover:text-white rounded-full hover:border-black">
        Product
      </button>
      <button onClick={() => router.push('/about-us')} className="px-4 py-1 px-4 py-1 text-gray-500 hover:text-black hover:bg-black hover:text-white rounded-full hover:border-black">
        About us
      </button>

      {/* Reserve Now Button */}
      <button onClick={() => router.push('/reserve')} className="px-4 py-1 px-4 py-1 text-gray-500 hover:text-black hover:bg-black hover:text-white rounded-full hover:border-black">
        Reserve now
      </button>
    </div>
  );
}