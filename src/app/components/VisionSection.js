// components/VisionSection.js
export default function VisionSection() {
  return (
    <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('/Vision.png')" }}>
      {/* Background blur effect */}
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="text-xl font-semibold mb-4 text-shadow">Vision</h2>

          {/* Large Text with Highlighted Effect */}
          <p className="text-3xl font-light leading-snug max-w-3xl mx-auto opacity-90 text-highlight">
            To Be India’s Leading Smart
            <br />
            & Green Micro-Mobility
            <br />
            Provider (2030)
          </p>
        </div>
      </div>
    </section>
  );
}
