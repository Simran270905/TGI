export default function StatsSection() {
  const stats = [
    { number: "950+", label: "Clients" },
    { number: "200+", label: "Specialists" },
    { number: "10+", label: "Years of Recruitment Expertise" },
    { number: "60,000+", label: "Candidates Placed" },
  ];

  return (
    <section className="bg-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-[44px] leading-[54px] font-bold max-w-3xl mb-14">
          Every <span className="text-purple-600">great organization</span>
          <br />
          starts with the <span className="text-purple-600">right people.</span>
        </h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">

          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#6A00A8] to-[#5A0090] text-white rounded-2xl p-8 text-center shadow-md"
            >
              <h3 className="text-3xl font-bold mb-1">{item.number}</h3>
              <p className="text-sm opacity-90">{item.label}</p>
            </div>
          ))}

        </div>

        {/* Bottom Text */}
        <div className="max-w-3xl">
          <p className="text-gray-700 mb-6">
            That’s where Talent Group Of India began—with a simple belief:
          </p>

          <div className="border-l-4 border-purple-600 pl-6 text-gray-900 font-semibold ">
            When the right talent meets the right opportunity, everyone wins.
          </div>
        </div>

      </div>
    </section>
  );
}