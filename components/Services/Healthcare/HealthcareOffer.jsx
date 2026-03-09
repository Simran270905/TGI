export default function HealthcareOffer() {
  const services = [
    {
      title: "Medical Coding",
      desc: "Recruit certified medical coders proficient in ICD-10, CPT, and HCPCS codes who ensure accurate and compliant claim submissions.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Payment Posting",
      desc: "Source professionals who accurately post payments, adjustments, and reconcile accounts to maintain clean financial records.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Insurance Verification",
      desc: "Place specialists who verify patient coverage, benefits, and eligibility to reduce billing errors and claim rejections.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Accounts Receivable Collections",
      desc: "Find AR specialists who follow up on outstanding claims, resolve denials, and maximize revenue recovery efficiently.",
      img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Claims Processing & Management",
      desc: "Source detail-oriented professionals who manage end-to-end claims, minimize denials, and accelerate reimbursement timelines.",
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Billing Compliance & Auditing",
      desc: "Recruit compliance experts who ensure billing practices meet healthcare regulations, reducing risk and financial penalties.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-[42px] font-bold mb-4">
          What we <span className="text-[#7A1CC2]">Offer ?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl text-[17px] leading-relaxed mb-16">
          Our healthcare recruitment services cover every medical and clinical
          function, connecting you with skilled professionals without the cost
          and complexity of building an in-house talent team.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div key={index} className="hover:-translate-y-2 transition">

              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[300px] object-cover rounded-[26px] mb-5"
              />

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">
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
  );
}