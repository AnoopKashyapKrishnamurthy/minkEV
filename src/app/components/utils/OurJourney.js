"use client";

export default function OurJourney() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex items-center justify-start px-6 md:px-24"
      style={{ backgroundImage: "url('/Ourjourney-bg-image.png')" }}
    >
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Content */}
      <div className="relative max-w-3xl text-black py-12">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Our Journey
        </h1>

        <p className="text-lg md:text-xl leading-relaxed">
          The team behind <span className="font-bold">MINK EV</span>, inspired by the{' '}
          <strong>everyday struggles of urban mobility</strong>, set out to create something better.
          They realized traditional cars were <strong>over-engineered</strong>, too big, and inefficient
          for the real needs of urban life. Driven by a desire to make a real difference, they embarked on
          a mission to <strong>build a compact, practical, and sustainable solution</strong> for the future.
        </p>

        {/* Optional read more link */}
        {/* <p className="mt-6 text-sm underline cursor-pointer">Read full story &gt;&gt;</p> */}
      </div>
    </div>
  );
}