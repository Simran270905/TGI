
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "As a startup, we needed fast and reliable hiring support. TGI built our entire founding team in under 30 days. Absolutely incredible.",
      name: "Arjun Mehta",
      role: "Co-Founder, TechStart India",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      text: "Talent Group Of India helped us scale quickly by delivering exceptional candidates aligned with our company culture.",
      name: "Priya Sharma",
      role: "HR Director, GrowthLabs",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      text: "Their hiring expertise helped us build strong teams in record time. Truly a reliable recruitment partner.",
      name: "Rahul Verma",
      role: "Founder, ScaleEdge",
      image: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  const [current, setCurrent] = useState(0);
  const t = testimonials[current];

  const prev = () =>
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);

  const next = () =>
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);

  return (
    <section className="bg-[#F3F3F5] py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <span className="inline-block px-4 py-1 border border-purple-400 text-purple-600 rounded-full text-sm mb-6">
            Testimonials
          </span>

          <h2 className="text-5xl font-bold leading-tight mb-6">
            <span className="text-purple-600">What</span> our Growing
            <br />
            Teams are saying ?
          </h2>

          <p className="text-gray-600 max-w-md text-lg">
            From early-stage startups to rapidly scaling businesses,
            we've helped hundreds of growing teams build the right
            foundation. Here's what they have to say about partnering
            with us.
          </p>

        </div>

        {/* TESTIMONIAL CARD */}
        <div className="relative">

          <div className="bg-gradient-to-b from-purple-800 to-purple-600 text-white p-10 rounded-3xl max-w-md ml-auto">

            <div className="text-6xl mb-6">“</div>

            <p className="text-lg leading-relaxed mb-10">
              {t.text}
            </p>

            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <p className="font-semibold text-lg">{t.name}</p>
                <p className="text-sm opacity-80">{t.role}</p>
              </div>
            </div>

          </div>

          {/* ARROW BUTTONS */}
          <div className="flex gap-4 mt-6 justify-end">

            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-200 transition"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center hover:bg-indigo-700 transition"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
