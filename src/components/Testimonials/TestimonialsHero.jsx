import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TestimonialsHero() {
  const testimonials = [
    {
      text: `"Talent Group Of India transformed our hiring process completely. They understood our culture and delivered candidates who were the perfect fit from day one."`,
      name: "Asmit Mirkar",
      role: "Operations Manager, GONG",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: `"Their recruitment team helped us scale quickly. The quality of candidates and speed of delivery exceeded our expectations."`,
      name: "Priya Sharma",
      role: "HR Director, Dropbox",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: `"We needed specialized finance talent and they delivered outstanding professionals who integrated perfectly with our team."`,
      name: "Rahul Mehta",
      role: "Finance Head, Amplitude",
      image: "https://randomuser.me/api/portraits/men/46.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);

  const next = () =>
    setIndex(index === testimonials.length - 1 ? 0 : index + 1);

  const t = testimonials[index];

  return (
    <section className="bg-[#EDEDF0] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>
          <span className="px-4 py-1 border border-purple-500 text-purple-600 rounded-full text-sm font-medium">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold leading-tight mt-6 mb-6">
            <span className="text-purple-600">What</span> our Employers
            <br />
            and Hiring Managers
            <br />
            are saying ?
          </h2>

          <p className="text-gray-600 max-w-md text-lg">
            Thousands of businesses across India trust Talent Group Of India
            for their most critical hiring decisions. Here's what they have
            to say about working with us.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col items-center">

          {/* CARD */}
          <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white p-12 rounded-[32px] max-w-md w-full shadow-xl">

            {/* QUOTE */}
            <div className="text-7xl font-bold opacity-90 mb-6">
              ”
            </div>

            {/* TEXT */}
            <p className="text-lg leading-relaxed mb-12 opacity-95">
              {t.text}
            </p>

            {/* USER */}
            <div className="flex items-center gap-4">

              <img
                src={t.image}
                alt={t.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
              />

              <div>
                <p className="font-semibold text-xl">{t.name}</p>
                <p className="text-sm opacity-80">{t.role}</p>
              </div>

            </div>

          </div>

          {/* ARROWS */}
          <div className="flex gap-6 mt-8">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <ChevronLeftIcon className="w-5" />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
            >
              <ChevronRightIcon className="w-5" />
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}