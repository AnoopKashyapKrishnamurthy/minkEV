'use client'; // only if you're using app router

export default function OurJourney() {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-start px-6 md:px-24"
      style={{ backgroundImage: "url('/Ourjourney-bg-image.png')" }}
    >
      <div className="max-w-2xl text-black">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6">Our journey</h1>

        <p className="text-lg leading-relaxed">
          The Team Behind MINK EV, Inspired By The{' '}
          <strong>Everyday Struggles Of Urban Mobility</strong>, Wanted To Create Something Better.
          They Saw How Traditional Cars Were Over-Engineered, Too Big, And Inefficient For The Way
          People Really Use Them. Driven By The Desire To Make A Real Difference, They Set Out To{' '}
          <strong>Build A Solution That Was Compact, Practical, And Sustainable.</strong>
        </p>

        <p className="mt-6 text-sm underline cursor-pointer">Read full story &gt;&gt;</p>
      </div>
    </div>
  );
}
