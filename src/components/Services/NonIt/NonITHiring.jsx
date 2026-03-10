
export default function NonITHiring() {
  const services = [
    {
      title: "Sales & Marketing",
      desc: "Recruit driven sales professionals and creative marketers who generate revenue, build brands, and expand your market presence.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      title: "Finance & Accounting",
      desc: "Source skilled finance professionals, accountants, and analysts who manage your numbers with accuracy and strategic insight.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Human Resources",
      desc: "Place experienced HR professionals who build strong workplace cultures, manage talent, and drive employee engagement.",
      img: "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    },
    {
      title: "Leadership & Management",
      desc: "Identify experienced leaders across functions who inspire teams, make strategic decisions, and deliver business results.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Administration & Support",
      desc: "Source reliable administrative professionals who keep your operations organized, efficient, and running smoothly.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284",
    },
    {
      title: "Operations & Supply Chain",
      desc: "Find operations managers and supply chain experts who streamline processes, reduce costs, and improve efficiency.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
  ];

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">
          Non-IT Hiring Made{" "}
          <span className="text-[#7A1CC2]">Simple</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mb-14">
          Our non-IT recruitment services span every business role and function,
          delivering the right professionals who integrate seamlessly into your
          team and drive results.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div key={index}>

              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[500px] object-cover rounded-3xl mb-5"
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

