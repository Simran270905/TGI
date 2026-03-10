export default function ITServicesHero() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-5 py-1.5 rounded-full text-sm mb-8">
            IT Services
          </span>

          {/* Heading */}
          <h1 className="leading-tight mb-6">

            <span className="block text-[48px] font-bold text-black">
              Technology Talent
            </span>

            <span className="block text-[48px] font-bold text-black">
              That <span className="text-[#7A1CC2]">Powers</span>
            </span>

            <span className="block text-[48px] font-bold text-[#7A1CC2]">
              Innovation
            </span>

          </h1>

          {/* Description */}
          <p className="text-gray-600 text-[18px] max-w-[470px] leading-relaxed mb-10">
            Build exceptional technology teams with skilled professionals who
            drive technological excellence and business growth.
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
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
            alt="IT team working"
            className="w-[460px] h-[560px] object-cover rounded-[28px]"
          />
        </div>

      </div>
    </section>
  );
}