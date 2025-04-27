export default function CustomerInsights() {
  const insights = [
    {
      title: 'Indian B2C Customer',
      quote: 'I want a small, convenient electric car that’s easy on my pockets. The SUVs and Sedans are just too tough to handle on congested roads during office hours',
      borderColor: 'bg-blue-500',
      glowColor: 'shadow-blue-500/60',
    },
    {
      title: 'UK B2B Customer',
      quote: 'I have to make calls during peak office hours; the two–wheelers are not convenient during peak winter and rainy months',
      borderColor: 'bg-purple-500',
      glowColor: 'shadow-purple-500/60',
    },
    {
      title: 'UK B2C Customer',
      quote: 'I want to drive a small green vehicle for my daily chores. I want a car that’s easy to charge and maintain; the London roads are choked with traffic',
      borderColor: 'bg-yellow-500',
      glowColor: 'shadow-yellow-500/60',
    },
    {
      title: 'Indian B2B2E Customer',
      quote: 'I drive long distances within the city for making calls to my customers. Since the roads are crowded, I want easy drive & handling',
      borderColor: 'bg-green-500',
      glowColor: 'shadow-green-500/60',
    },
  ];

  return (
    <div className="relative w-full min-h-screen bg-black text-white overflow-hidden flex items-center justify-center px-6 py-16">
      
      {/* Background Image - Rotated only on mobile */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[url('/CustomerInsight.svg')] bg-no-repeat bg-[length:100%_100%] bg-top
         rotate-90 sm:rotate-0 bg-center sm:bg-cover" />
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center gap-10">
        
        {/* Heading */}
        <div className="w-full flex justify-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-tight max-w-3xl text-center">
            Customers in India & UK across personal & business segments have an unmet need for an affordable green smart urban mobility carrier
          </h2>
        </div>

        {/* Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, index) => (
            <div
              key={index}
              className={`
                relative bg-black/30 backdrop-blur-md rounded-2xl p-6 flex flex-col min-h-[220px] justify-start items-start
                transition-all duration-500 ease-in-out
                hover:${item.glowColor} hover:scale-[1.03] hover:-translate-y-2
              `}
            >
              {/* Small color line next to heading */}
              <div className="flex items-center gap-2 mb-4">
                <div className={`h-6 w-[2px] ${item.borderColor}`} />
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>

              {/* Quote */}
              <p className="text-sm italic leading-relaxed">
                ‘{item.quote}’
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
