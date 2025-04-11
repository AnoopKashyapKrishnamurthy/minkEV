'use client';
import Image from 'next/image';

export default function FeatureCard({ imageSrc, title, subtitle, tall = false }) {
  return (
    <div className="flex flex-col items-center justify-start text-center bg-white rounded-2xl p-6 shadow-md transition-transform duration-200 ease-out hover:scale-[1.02] will-change-transform h-full">
      <div className={`relative w-full ${tall ? 'h-72 md:h-80' : 'h-40 md:h-48'} flex items-center justify-center`}>
        <Image
          src={imageSrc}
          alt={title}
          width={tall ? 200 : 160}
          height={tall ? 200 : 160}
          className="object-contain"
          priority
        />
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{subtitle}</p>
      </div>
    </div>
  );
}
