export default function WhoWeAre() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-start">

        {/* LEFT TEXT */}
        <div>

          <h2 className="text-[44px] font-bold mb-6 leading-tight">
            <span className="text-[#7A1CC2]">Who</span> We Are ?
          </h2>

          <p className=" text-[17px] leading-relaxed font-medium mb-6 max-w-[520px]">
            Talent Group Of India is a leading HR and recruitment firm dedicated
            to building careers, powering businesses, and shaping India's
            workforce. We go beyond matching resumes — we align people with
            purpose, understanding business needs, individual aspirations, and
            cultural fit to create employment relationships that truly last.
          </p>

          <p className="font-medium text-[17px] leading-relaxed max-w-[520px]">
            Founded with a vision to transform recruitment in India, TGI has
            grown into a trusted partner for thousands of organizations and job
            seekers across the country. We are recognized for our integrity,
            expertise, and commitment to excellence — making us not just a
            recruitment firm, but a long-term partner in growth.
          </p>

        </div>

        {/* RIGHT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">

          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
            className="rounded-[26px] h-[220px] w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-[26px] h-[220px] w-full object-cover mt-12"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-[26px] h-[220px] w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            className="rounded-[26px] h-[220px] w-full object-cover mt-12"
            alt=""
          />

        </div>

      </div>
    </section>
  );
}