'use client';
import FeatureCard from './utils/FeatureCard';

export default function FeatureGrid() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 max-w-6xl w-full">
        
        {/* Left tall card */}
        <div className="md:row-span-2">
          <FeatureCard
            imageSrc="/Bento_1.svg"
            title="Status Exhibiting EXT"
            subtitle="Our Best in class range design"
            tall
          />
        </div>

        {/* Top center */}
        <FeatureCard
          imageSrc="/Bento_4.svg"
          title="Easy Road-handling"
          subtitle="Our Best in class range design"
        />

        {/* Right tall card */}
        <div className="md:row-span-2">
          <FeatureCard
            imageSrc="/Bento_2.svg"
            title="Hi-tech Features"
            subtitle="Our Best in class range design"
            tall
          />
        </div>

        {/* Bottom center */}
        <FeatureCard
          imageSrc="/Bento_3.svg"
          title="Best in class range"
          subtitle="Our Best in class range design"
        />
      </div>
    </section>
  );
}
