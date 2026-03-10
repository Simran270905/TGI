import React from 'react';

const CorperateHero = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content Side */}
        <div className="flex-1 space-y-6">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200">
            <span className="text-purple-600 text-sm font-semibold tracking-wide">
              Corporate Hiring
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Executive Search & <br />
            Corporate Recruitment Excellence
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-2xl">
            From C-suite executives to mid-level managers and specialized professionals, 
            Talent Group Of India delivers corporate hiring solutions that bring 
            exceptional talent to your organization. We understand the strategic 
            importance of every hire and the impact it has on your business success.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="px-8 py-3.5 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-blue-200">
              Get Started
            </button>
            <button className="px-8 py-3.5 border-2 border-blue-700 text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-300">
              Learn How We Work
            </button>
          </div>
        </div>

        {/* Right Image Side */}
        <div className="flex-1 relative">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
              alt="Executive Handshake" 
              className="w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          {/* Decorative element for depth */}
          <div className="absolute -bottom-6 -left-6 -z-10 w-full h-full bg-blue-50 rounded-[3rem]"></div>
        </div>

      </div>
    </section>
  );
};

export default CorperateHero;