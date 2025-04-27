"use client";
import Image from "next/image";

export default function BestRangeDesign() {
  const features = [
    {
      title: "COMPACT AND AGILE",
      image: "/green car.png",
    },
    {
      title: "WEEKLY COMMUTE RANGE",
      image: "/weekly-commute.png",
    },
    {
      title: "HYPER CONNECTED",
      image: "/hyper-connected.png",
    },
    {
      title: "SAFE AND RELIABLE",
      image: "/safe-reliable.png",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-6 bg-gradient-to-br from-white via-[#ffff] to-[#fde4ea]">
      <h2 className="text-2xl md:text-4xl text-center mb-10 text-black">
        Our Best in class range design
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-60 h-40 mb-4 overflow-hidden rounded-lg bg-black shadow-lg">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover"
              />
            </div>
            <p className="text-lg font-medium text-black">{feature.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
