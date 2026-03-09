export default function TrustedClients() {
  return (
    <section className="bg-[#F5F5F7] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-4 py-1 rounded-full text-sm mb-6">
            Our Clients
          </span>

          {/* Heading */}
          <h2 className="text-[42px] font-bold leading-tight mb-6">
            <span className="text-[#7A1CC2]">Trusted</span> by India's
            <br />
            Leading Organizations
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[17px] max-w-[480px] leading-relaxed mb-8">
            Over 4,000 companies across industries trust Talent Group
            Of India to find the right talent, build stronger teams,
            and drive business growth.
          </p>

          {/* Button */}
          <button className="bg-[#3C33D8] text-white px-7 py-3 rounded-full font-medium hover:opacity-90 transition">
            View Our Clients
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-end">
          <img
            src="https://images.unsplash.com/photo-1556741533-f6acd647d2fb?q=80&w=1200&auto=format&fit=crop"
            alt="Business partnership"
            className="w-[440px] h-[520px] object-cover rounded-[28px]"
          />
        </div>

      </div>
    </section>
  );
}