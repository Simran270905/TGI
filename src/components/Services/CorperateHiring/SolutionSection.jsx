import React from 'react';

const SolutionsSection = () => {
  const solutions = [
    {
      title: "Executive Research",
      description: "Identify and attract senior leaders who drive your vision forward through deep industry networks and rigorous assessment methodologies.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Management Hiring",
      description: "Build strong management teams across all functions with experienced managers who lead teams, drive results, and contribute to strategic growth.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Professional Staffing",
      description: "Find specialized professionals across marketing, HR, finance, legal, IT, and operations through our extensive talent network and industry expertise.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Niche & Specialized Roles",
      description: "Fill hard-to-fill positions requiring rare skill sets through targeted search capabilities and industry connections that deliver where traditional recruitment falls short.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Confidential Searches",
      description: "Conduct sensitive hiring with complete discretion for replacements, new initiatives, and strategic hires with utmost professionalism and privacy.",
      image: "https://images.unsplash.com/photo-1436450412740-6b988f486c6b?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Corporate Hiring Solutions
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl leading-relaxed">
            Corporate hiring requires a nuanced approach that considers not just skills and experience, 
            but leadership potential, cultural alignment, and long-term fit.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {solutions.map((item, index) => (
            <div key={index} className="group flex flex-col">
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-[2.5rem] shadow-sm">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-[320px] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              
              {/* Text Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;