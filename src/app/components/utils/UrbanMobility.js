'use client';
import Image from 'next/image';

const content = [
  {
    heading: 'Why?',
    subheading: 'Reimagining Urban Mobility for the New Age',
    image: '/why.png',
    text: 'What drives us? It’s simple— The power of mobility to elevate, not complicate, how we move and live.',
  },
  {
    heading: 'What?',
    subheading: 'Redefining what’s possible in Urban Mobility',
    image: '/what.png',
    text: 'Say goodbye to the limitations of traditional vehicles. Mink EV is here to fulfill your problems through our reimagined approach.',
  },
  {
    heading: 'How?',
    subheading: 'The Urban Mobility Revolution',
    image: '/how.png',
    text: 'For those who believe in compact design and interaction, Mink EV is redefining the way we move through smart systems.',
  },
];

export default function UrbanMobility() {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center px-4 py-16 overflow-hidden">
      {/* Background Circle */}
      <Image
        src="/bg-circle-design.png"
        alt="Background Circle"
        width={600}
        height={600}
        className="absolute left-[-150px] top-1/2 -translate-y-1/2 opacity-30 pointer-events-none select-none"
      />

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto z-10 items-stretch w-full">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center max-w-sm mx-auto"
          >
            <h2 className="text-5xl font-bold text-white/10">{item.heading}</h2>
            <h3 className="mt-2 text-lime-400 font-semibold text-lg">
              {item.subheading}
            </h3>

            <div className="mt-4 w-full bg-[#1f1f1f] rounded-xl overflow-hidden shadow-lg flex flex-col h-full">
              <div className="w-full">
                <Image
                  src={item.image}
                  alt={item.subheading}
                  width={400}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
              </div>
              <div className="flex-grow flex items-center p-4">
                <p className="text-sm text-white">{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
