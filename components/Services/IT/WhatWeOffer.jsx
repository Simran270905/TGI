export default function WhatWeOffer() {
  const services = [
    {
      title: "Software Development",
      desc: "Source skilled developers across full-stack, front-end, back-end, and mobile who build robust, scalable applications.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Cloud & Infrastructure",
      desc: "Find cloud architects, DevOps engineers, and infrastructure specialists who design and maintain modern cloud-based systems.",
      img: "https://images.unsplash.com/photo-1667372335939-6f6f0b5e4c7c",
    },
    {
      title: "IT Support & Operations",
      desc: "Staff help desk technicians and system administrators who keep your technology running smoothly and efficiently.",
      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
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
          Our IT recruitment services cover every aspect of technology hiring,
          connecting you with expert professionals without the cost and
          complexity of building an in-house talent team.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div key={index}>

              {/* Image */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-[260px] object-cover rounded-[26px] mb-5"
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
  );
}