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

                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[260px] object-cover rounded-[28px] mb-5"
                />

                <h3 className="text-xl font-semibold mb-2">
                  {service.title}
                </h3>

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