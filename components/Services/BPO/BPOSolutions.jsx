export default function BPOPage() {
  const services = [
    {
      title: "Customer Service Representatives",
      desc: "Find empathetic, articulate professionals who create positive customer experiences and strengthen brand loyalty.",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title: "Technical Support Specialists",
      desc: "Build teams of technically proficient professionals who troubleshoot issues and ensure seamless technical support.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
    {
      title: "Back-Office Operations Staff",
      desc: "Source detail-oriented professionals for data entry, documentation, and operational support functions.",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    },
    {
      title: "Sales & Telemarketing Teams",
      desc: "Recruit persuasive communicators assessed for sales aptitude, resilience, and results orientation to drive revenue growth.",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title: "Voice & Non-Voice Process Experts",
      desc: "Source specialists with the right skills and language proficiency for your phone-based or digital communication processes.",
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },

  ];

  return (
    <div className="bg-[#F5F5F7]">

      {/* HERO SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-24">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-5 py-1.5 rounded-full text-sm mb-8">
              BPO Hiring
            </span>

            {/* Heading */}
            <h1 className="leading-tight mb-6">

              <span className="block text-[46px] font-bold">
                <span className="text-[#7A1CC2]">Build</span> Your BPO Team
              </span>

              <span className="block text-[46px] font-bold">
                with India's Top Talent
              </span>

            </h1>

            {/* Description */}
            <p className="text-gray-600 text-[18px] max-w-[480px] leading-relaxed mb-10">
              Scale your BPO operations quickly and efficiently with Talent
              Group Of India. We specialize in sourcing, screening, and
              onboarding large volumes of skilled professionals who deliver
              exceptional service and drive operational excellence.
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
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
              alt="BPO team"
              className="w-[460px] h-[560px] object-cover rounded-[28px]"
            />
          </div>

        </div>
      </section>

      {/* SOLUTIONS SECTION */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <h2 className="text-[44px] font-bold mb-4 leading-tight">
            <span className="text-[#7A1CC2]">Specialized</span>{" "}
            BPO Recruitment Solutions
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[17px] max-w-3xl mb-16 leading-relaxed">
            The BPO industry demands speed, quality, and scale. Our specialized
            recruitment process is designed to meet these unique challenges
            while maintaining the high standards your operations require.
          </p>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-10">

            {services.map((service, index) => (
              <div key={index} className="hover:-translate-y-2 transition">

                {/* Image */}
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[260px] object-cover rounded-[28px] mb-5"
                />

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

                {/* Text */}
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {service.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}