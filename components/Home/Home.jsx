import React from "react";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6 py-16">

      {/* Left Content */}
      <div>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Building <span className="text-purple-600">Careers</span>
          <br />
          Powering <span className="text-purple-600">Businesses</span>
          <br />
          Shaping <span className="text-purple-600">India’s Workforce</span>
        </h1>

        <p className="mt-6 text-gray-600 text-lg max-w-lg">
          Finding the right talent shouldn’t feel like a gamble. At Talent
          Group Of India, we connect ambition with opportunity—helping
          companies hire with confidence and professionals grow with purpose.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-full hover:bg-indigo-700">
            Find Talent
          </button>

          <button className="border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-50">
            Explore Opportunities
          </button>
        </div>

        {/* Reviews */}
        <div className="flex items-center gap-4 mt-8">
          <div className="flex -space-x-3">
            <img src="https://randomuser.me/api/portraits/women/1.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://randomuser.me/api/portraits/women/3.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
            <img src="https://randomuser.me/api/portraits/men/4.jpg" className="w-8 h-8 rounded-full border-2 border-white"/>
          </div>

          <p className="text-gray-700 text-sm">
            ⭐ <span className="font-semibold">4.5</span> (review rating)
          </p>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
          alt="Recruitment team"
          className="rounded-3xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

    </section>
  );
}