import { Check } from "lucide-react";

export default function WhyChooseHR() {
  const points = [
    "Volume hiring capability (50–500+ positions)",
    "Industry-specific skill assessments",
    "Multi-location hiring across India",
    "Average time-to-hire: 15-20 days",
    "Flexible engagement models",
    "Language and communication testing",
  ];

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt=""
            className="w-full h-[220px] object-cover rounded-[26px]"
          />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt=""
            className="w-full h-[220px] object-cover rounded-[26px] mt-12"
          />

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt=""
            className="w-full h-[220px] object-cover rounded-[26px]"
          />

          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt=""
            className="w-full h-[220px] object-cover rounded-[26px] mt-12"
          />

        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-[42px] font-bold mb-8 leading-tight">
            Why Choose Our{" "}
            <span className="text-[#7A1CC2]">HR Service?</span>
          </h2>

          {/* Checklist */}
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