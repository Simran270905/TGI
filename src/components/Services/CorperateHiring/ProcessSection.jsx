import React from 'react';
import { Search, ShieldCheck, UserCheck, TrendingUp } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      title: "Discovery & Talent Mapping",
      description: "Understand your needs and identify relevant talent, including passive candidates.",
      icon: <Search className="w-6 h-6 text-purple-700 -rotate-45" />,
    },
    {
      title: "Rigorous Assessment",
      description: "Multi-stage evaluation ensures technical skills, cultural fit, and leadership potential.",
      icon: <ShieldCheck className="w-6 h-6 text-purple-700 -rotate-45" />,
    },
    {
      title: "Presentation & Selection",
      description: "Present qualified candidates with detailed profiles and recommendations.",
      icon: <UserCheck className="w-6 h-6 text-purple-700 -rotate-45" />,
    },
    {
      title: "Offer Management",
      description: "Facilitate negotiations and support smooth onboarding for successful placements.",
      icon: <TrendingUp className="w-6 h-6 text-purple-700 -rotate-45" />,
    }
  ];

  return (
    <section className="bg-[#7c00be] py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-20 max-w-md leading-tight">
          Our Corporate Hiring Process
        </h2>

        {/* Process Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-white rounded-3xl p-8 pt-12 shadow-xl h-full">
              
              {/* Floating Diamond Icon Container */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 md:left-12 md:translate-x-0">
                <div className="w-16 h-16 bg-[#e9d5ff] rotate-45 flex items-center justify-center rounded-xl shadow-md">
                  {/* Icon is counter-rotated in the data array to appear upright */}
                  {step.icon}
                </div>
              </div>

              {/* Card Content */}
              <div className="mt-4 space-y-4">
                <h3 className="text-xl font-bold text-gray-900 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;