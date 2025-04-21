import Image from "next/image";

export default function ProductBattery() {
  return (
    <div className="relative w-full h-screen bg-[#E7E6E5] overflow-hidden">
      {/* Desktop BG image */}
      <div className="absolute inset-0 z-0 hidden sm:block">
        <Image
          src="/productCharge.png"
          alt="Electric car charging"
          layout="fill"
          priority
          className="object-cover pointer-events-none select-none"
        />
      </div>

      {/* Mobile transparent image */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[26rem] h-[17rem] block sm:hidden z-0">
        <Image
          src="/productCharge-sm.png"
          alt="Electric car charging"
          layout="fill"
          priority
          className="object-contain pointer-events-none select-none"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-20 flex flex-col justify-start items-start max-w-screen-xl mx-auto h-full px-6 pt-16 text-black">
        <h1 className="text-5xl font-bold leading-[3.25rem] sm:text-5xl sm:leading-tight mb-4">
          Weekly<br />Commute<br />Battery
        </h1>
        <p className="text-base sm:text-lg text-gray-500">
          Charge Once And Use All Weekdays
        </p>
      </div>
    </div>
  );
}
