export default function AboutSection() {
  return (
    <section className="bg-[#F5F5F7] py-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-5 py-1.5 rounded-full text-sm mb-8">
            About Us
          </span>

          {/* Heading */}
          <h2 className="leading-tight mb-6">
            <span className="block text-[48px] font-bold text-[#7A1CC2]">
              Your Success
            </span>

            <span className="block text-[44px] font-bold text-black">
              Is Our Success
            </span>
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 text-[18px] max-w-[460px] leading-relaxed mb-10">
            Whether you're hiring top talent or seeking your next opportunity,
            Talent Group Of India makes it simple, effective, and rewarding.
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-6">

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
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            alt="team"
            className="w-[440px] h-[540px] object-cover rounded-[28px]"
          />
        </div>

      </div>
    </section>
  );
}