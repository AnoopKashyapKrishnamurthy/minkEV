import CustomerInsightBlock from "./utils/CustomerInsightBlock";

export default function CustomerInsights() {
  const insights = [
    {
      title: 'Indian B2C Customer',
      quote:
        '‘I want a small, convenient electric car that’s easy on my pockets. The SUVs and Sedans are just too tough to handle on congested roads during office hours’',
      borderColor: 'border-blue-500',
    },
    {
      title: 'UK B2B Customer',
      quote:
        '‘I have to make calls during peak office hours; the two–wheelers are not convenient during peak winter and rainy months’',
      borderColor: 'border-purple-500',
    },
    {
      title: 'UK B2C Customer',
      quote:
        '“I want to drive a small green vehicle for my daily chores. I want a car that’s easy to charge and maintain; the London roads are choked with traffic“',
      borderColor: 'border-yellow-500',
    },
    {
      title: 'Indian B2B2E Customer',
      quote:
        '“I drive long distances within the city for making calls to my customers. Since the roads are crowded, I want easy drive & handling “',
      borderColor: 'border-green-500',
    },
  ];

  return (
    <div
      className="
    flex items-center justify-center relative w-screen min-h-screen bg-black text-white overflow-hidden
    bg-[url('/CustomerInsight.png')] bg-no-repeat
    bg-[length:100%_auto] sm:bg-cover
    bg-top sm:bg-center
  "
    >
      {/* ✅ LIGHTER overlay to show image better */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm pointer-events-none z-0" />

      {/* ✅ Optional bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent z-10 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-20 flex flex-col md:flex-row gap-[2.5rem] px-[1.5rem] py-[4rem] w-full h-full">
        {/* Left Section */}
        <div className="md:w-1/3 flex items-center justify-center">
          <div className="max-w-[28rem] text-center md:text-left">
            <h2 className="text-[0.875rem] text-gray-400 mb-[0.5rem]">• LIVE DATA</h2>
            <h1 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] font-semibold leading-snug">
              Customers in India & UK across personal & business segments have an unmet need for an affordable green smart urban mobility carrier
            </h1>
          </div>
        </div>

        {/* Right Grid */}
        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-[1.5rem]">
          {insights.map((item, index) => (
            <CustomerInsightBlock
              key={index}
              title={item.title}
              quote={item.quote}
              borderColor={item.borderColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
