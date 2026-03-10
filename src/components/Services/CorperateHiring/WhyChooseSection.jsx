import React from 'react';
import { Check } from 'lucide-react';

const WhyChooseSection = () => {
  const benefits = [
    "Average placement rate: 95%+",
    "Industry-specialized recruiters",
    "Executive assessment expertise",
    "Confidential and discreet process",
    "Replacement guarantee included",
    "Long-term partnership approach"
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left Side: Image Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600" 
              alt="Team Meeting" 
              className="w-full h-64 object-cover rounded-[2rem]"
            />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600" 
              alt="Outdoor Professional" 
              className="w-full h-48 object-cover rounded-[2rem]"
            />
          </div>
          <div className="space-y-4 pt-12">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=600" 
              alt="Presentation" 
              className="w-full h-48 object-cover rounded-[2rem]"
            />
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=600" 
              alt="Collaboration" 
              className="w-full h-64 object-cover rounded-[2rem]"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Why Choose For <br />
            <span className="text-[#7c00be]">Corporate Hiring?</span>
          </h2>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0">
                  <Check className="w-6 h-6 text-[#7c00be] stroke-[3px]" />
                </div>
                <span className="text-gray-800 text-lg font-medium">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseSection;