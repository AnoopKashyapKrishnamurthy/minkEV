'use client';
import Image from 'next/image';

export default function ProductInterior() {
  return (
    <div className="bg-black min-h-screen p-4 md:p-10 text-white font-sans">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* Left Section */}
        <div className="bg-[#93A8B3] rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/car-interior-1.png"
              alt="Digital Console"
              width={800}
              height={500}
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          <div className="mt-4 space-y-2">
            <span className="text-xs bg-blue-700 px-3 py-1 rounded-full text-white font-semibold inline-block w-fit">
              Best In Class
            </span>
            <h3 className="text-lg font-bold text-white">
              Digital Console, Premium Interiors, Hyperconnected.
            </h3>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col justify-between gap-4">
          {/* Top card */}
          <div className="bg-[#93A8B3] rounded-2xl p-4 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 h-full">
            <span className="text-xs bg-purple-700 px-3 py-1 rounded-full text-white font-semibold inline-block w-fit">
              Futuristic
            </span>
            <h3 className="text-xl font-extrabold text-black mt-2">
              Cozy Duo Adjustable Seats
            </h3>
            <p className="text-sm text-white mt-2">
              Make Commute Easy And Comfortable. Enough Boot Space For Laptop Bag, Few School Bags And Weekly Grocery.
            </p>
          </div>

          {/* Bottom Cards */}
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="relative bg-[#93A8B3] rounded-2xl p-2 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <Image
                src="/car-interior-2.png"
                alt="Safety Interior"
                width={400}
                height={300}
                className="rounded-xl w-full h-auto object-cover"
              />
              <p className="text-sm font-medium text-white mt-2 px-2">Safety With Dual Airbags</p>
              
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#93A8B3] rounded-2xl p-2 shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
              <Image
                src="/car-interior-3.png"
                alt="Charging"
                width={400}
                height={300}
                className="rounded-xl w-full h-auto object-cover"
              />
              <p className="text-sm font-medium text-white mt-2 px-2">Charge Anywhere</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
