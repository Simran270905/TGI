import { Check } from "lucide-react";

export default function WhyChooseIT() {
  const points = [
    "Technical Recruiters who understand technology, not just keywords",
    "Fast Turnaround with average time-to-hire of 15–20 days",
    "Skills-Based Assessment with real coding evaluations",
    "90-Day Replacement Guarantee for every placement",
    "4,000+ Companies served across industries",
    "60,000+ Candidates successfully placed",
  ];

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-[26px] h-[220px] w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-[26px] h-[220px] w-full object-cover mt-12"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            className="rounded-[26px] h-[220px] w-full object-cover"
            alt=""
          />

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            className="rounded-[26px] h-[220px] w-full object-cover mt-12"
            alt=""
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-[42px] font-bold mb-8 leading-tight">
            Why Choose Our{" "}
            <span className="text-[#7A1CC2]">
              IT Service?
            </span>
          </h2>

          {/* Points */}
          <ul className="space-y-5">

            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-lg">

                <Check
                  className="text-[#7A1CC2] mt-1"
                  size={22}
                  strokeWidth={3}
                />

                {point}

              </li>
            ))}

          </ul>

        </div>

      </div>
    </section>
  );
}