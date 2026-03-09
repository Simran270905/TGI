export default function HealthcareHero() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-5 py-1.5 rounded-full text-sm mb-8">
            Healthcare : Billing Process
          </span>

          {/* Heading */}
          <h1 className="leading-tight mb-6">

            <span className="block text-[46px] font-bold text-[#7A1CC2]">
              Accurate
            </span>

            <span className="block text-[46px] font-bold">
              Healthcare Billing,
            </span>

            <span className="block text-[46px] font-bold">
              <span className="text-[#7A1CC2]">Seamless</span> Revenue Cycle
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-600 text-[18px] max-w-[480px] leading-relaxed mb-10">
            Whether you need medical coders, claims processors, or billing
            compliance experts, we connect you with the right healthcare
            billing talent to streamline your revenue cycle, reduce denials,
            and maximize collections efficiently.
          </p>

          {/* Buttons */}
          <div className="flex gap-6">

            <button className="bg-[#3C33D8] text-white px-8 py-3 rounded-full font-medium hover:opacity-90 transition">
              Get Started
            </button>

            <button className="border border-[#3C33D8] text-[#3C33D8] px-8 py-3 rounded-full font-medium hover:bg-[#F3F0FF] transition">
              Learn How We Work
            </button>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=1200&auto=format&fit=crop"
            alt="Healthcare billing professionals"
            className="w-[460px] h-[560px] object-cover rounded-[28px]"
          />
        </div>

      </div>
    </section>
  );
}