import React from "react";
import { Ear, CheckCircle, Target, TrendingUp } from "lucide-react";

export default function Approach() {
  const items = [
    {
      icon: <Ear size={28} />,
      title: "We Listen",
      description:
        "We take time to understand your needs—business goals, team culture, and future plans.",
    },
    {
      icon: <CheckCircle size={28} />,
      title: "We Match",
      description:
        "Using industry insight and a strong talent network, we connect the right people to the right roles.",
    },
    {
      icon: <Target size={28} />,
      title: "We Support",
      description:
        "From screening to onboarding, we stay involved—because long-term success matters more than short-term placements.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "We Grow",
      description:
        "Strong hires build strong companies. Strong careers build strong lives.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-700 to-purple-900">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-bold mb-16 max-w-2xl">
          Our approach is simple,
          <br />
          human, and effective.
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl p-8 shadow-lg"
            >

              {/* Icon */}
              <div className="absolute -top-6 left-8 bg-purple-200 p-4 rotate-45 rounded-lg">
                <div className="-rotate-45 text-purple-700">
                  {item.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}