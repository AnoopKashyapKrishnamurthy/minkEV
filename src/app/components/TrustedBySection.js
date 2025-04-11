// components/TrustedBy.tsx

export default function TrustedBySection() {
    return (
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-8">
            Trusted By Greatest Companies
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10">
            <img src="/google.png" alt="Google" className="h-8" />
            <img src="/airbnb.png" alt="Airbnb" className="h-8" />
            <img src="/creative.png" alt="Creative Market" className="h-8" />
            <img src="/shopify.png" alt="Shopify" className="h-8" />
            <img src="/amazon.png" alt="Amazon" className="h-8" />
          </div>
        </div>
      </section>
    );
  }
  