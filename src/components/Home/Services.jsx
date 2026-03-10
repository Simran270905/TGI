import React from "react";

export default function Services() {
  const services = [
    {
      title: "For Employers",
      description:
        "We learn your business first, then hire talent that truly fits—ready to deliver from day one.",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
    },
    {
      title: "For Job Seekers",
      description:
        "Your career is more than a resume. We match you with roles that support real growth.",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    },
    {
      title: "For Growing Teams",
      description:
        "From startups to enterprises, we support your hiring as an extended HR partner.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          We don’t just recruit,
          <br />
          <span className="text-purple-600">We align</span>
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10">

          {services.map((service, index) => (
            <div key={index} className="group">

              {/* Image */}
              <div className="overflow-hidden rounded-3xl mb-6">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-100 object-cover group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>

              {/* Link */}
              <button className="text-indigo-600 font-medium hover:underline">
                Search more →
              </button>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}