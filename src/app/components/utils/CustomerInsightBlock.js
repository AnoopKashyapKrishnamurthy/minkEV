export default function CustomerInsightBlock({ title, quote, borderColor }) {
    return (
      <div
        className={`p-[1.5rem] rounded-2xl border-l-4 ${borderColor} shadow-xl 
        bg-white/5 backdrop-blur-md min-h-[13rem] flex flex-col justify-start 
        transition-transform duration-300 hover:-translate-y-1`}
      >
        <h3 className="font-semibold mb-[0.5rem] text-[1rem]">{title}</h3>
        <p className="text-gray-300 text-[0.875rem] leading-relaxed">{quote}</p>
      </div>
    );
  }
  