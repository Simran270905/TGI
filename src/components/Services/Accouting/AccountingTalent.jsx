
export default function AccountingTalent() {
  const services = [
    {
      title: "Accounts Payable & Receivable",
      desc: "Source detail-oriented professionals who manage payments, invoices, and cash flow with accuracy and efficiency.",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title: "Financial Reporting & Analysis",
      desc: "Recruit analysts and accountants who prepare accurate financial statements and deliver insights that support smart decisions.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Senior Finance Leadership",
      desc: "Identify CFOs, finance managers, and controllers who drive financial strategy and support long-term business growth.",
      img: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b",
    },
    {
      title: "Audit & Internal Controls",
      desc: "Place experienced auditors who identify risks, strengthen controls, and ensure financial integrity across your organization.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Tax & Compliance",
      desc: "Find tax professionals who ensure timely filings, regulatory compliance, and minimize financial risk for your business.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Payroll Accounting",
      desc: "Source payroll specialists who process salaries accurately, manage deductions, and ensure full statutory compliance.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Your Complete Accounting{" "}
          <span className="text-[#7A1CC2]">Talent Partner</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mb-14">
          Our accounting recruitment services cover every finance and accounting
          function, connecting you with skilled professionals without the cost
          and complexity of building an in-house talent team.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div key={index}>

              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[400px] object-cover rounded-2xl mb-5"
              />

              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}