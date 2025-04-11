export default function TrafficImageFade({ imageSrc, heading, description, largeNumber }) {
    return (
      <div className="relative h-screen bg-white overflow-hidden flex items-center justify-center">
        {/* Image */}
        <img
          src={imageSrc}
          alt="Traffic Scene"
          className="h-full w-full object-cover"
          style={{ objectPosition: 'top' }}
        />
  
        {/* Top white gradient fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white to-white pointer-events-none" />
  
        {/* Overlay Content */}
        <div className="absolute inset-0 flex items-center px-16">
          <div className="text-black max-w-xl z-10">
            <h1 className="text-4xl font-bold mb-4">{heading}</h1>
            <p className="text-lg leading-relaxed text-gray-800">{description}</p>
          </div>
  
          {/* Faded Number */}
          <div className="absolute right-16 top-10 text-[25rem] font-extrabold text-slate-200 z-0 leading-none opacity-70 select-none">
            {largeNumber}
          </div>
        </div>
      </div>
    );
  }
  