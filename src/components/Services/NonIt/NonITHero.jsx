export default function NonITHero() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-5 py-1.5 rounded-full text-sm mb-8">
            Non-IT Services
          </span>

          {/* Heading */}
          <h1 className="leading-tight mb-6">

            <span className="block text-[46px] font-bold text-[#7A1CC2]">
              The Right Talent for
            </span>

            <span className="block text-[46px] font-bold text-black">
              Every Role Beyond
            </span>

            <span className="block text-[46px] font-bold text-black">
              Technology
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-600 text-[18px] max-w-[480px] leading-relaxed mb-10">
            We connect you with the right non-IT talent to build strong teams,
            boost performance, and accelerate business growth across every
            function.
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
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop"
            alt="Business professionals meeting"
            className="w-[460px] h-[560px] object-cover rounded-[28px]"
          />
        </div>

      </div>
    </section>
  );
}