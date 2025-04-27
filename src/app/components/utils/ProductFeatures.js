// pages/index.js
import Image from 'next/image';

export default function ProductFeatures() {
  const features = [
    {
      src: "/prodimage1.png",
      alt: "Stylish",
      title: "STYLISH",
      description: "Designed with sleek lines and modern aesthetics, Mini E.V redefines urban elegance in the U.K. and India.",
    },
    {
      src: "/prodimage2.png",
      alt: "Affordable",
      title: "AFFORDABLE",
      description: "Offering premium electric mobility at a price within reach, Mini E.V makes sustainability accessible to everyone.",
    },
    {
      src: "/prodimage3.png",
      alt: "Reliable",
      title: "RELIABLE",
      description: "Built with robust engineering and cutting-edge technology, Mini E.V ensures a dependable ride every time.",
    },
    {
      src: "/prodimage4.png",
      alt: "Manoeuvrable",
      title: "MANOEUVRABLE",
      description: "Compact and agile, Mini E.V is perfectly crafted for smooth navigation through crowded city streets.",
    },
  ];


  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-700">Our Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-56">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
