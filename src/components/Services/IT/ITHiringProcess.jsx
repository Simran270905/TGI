import { Ear, CheckCircle, Target, TrendingUp } from "lucide-react";

export default function ITHiringProcess() {
  const steps = [
    {
      icon: <Ear size={26} />,
      title: "Requirements Analysis",
      text: "Understand your needs and identify relevant talent, including passive candidates.",
    },
    {
      icon: <CheckCircle size={26} />,
      title: "Sourcing & Screening",
      text: "Multi-stage evaluation ensures technical skills, cultural fit, and leadership potential.",
    },
    {
      icon: <Target size={26} />,
      title: "Technical Assessment",
      text: "Evaluate coding skills and technical knowledge through practical tests and reviews.",
    },
    {
      icon: <TrendingUp size={26} />,
      title: "Offer & Onboarding",
      text: "Facilitate negotiations and support smooth onboarding for successful placements.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-white text-[42px] font-bold mb-16">
          Our IT Hiring Process
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-8 shadow-lg"
            >

              {/* Diamond Icon */}
              <div className="absolute -top-6 left-8 bg-[#E9D5FF] p-4 rotate-45 rounded-lg">
                <div className="-rotate-45 text-[#7A1CC2]">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {step.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}