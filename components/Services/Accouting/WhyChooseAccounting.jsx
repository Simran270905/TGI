
import { CheckIcon } from "@heroicons/react/24/solid";

export default function WhyChooseAccounting() {
  const points = [
    "Domain Specialists who understand accounting functions deeply",
    "Rigorous Screening for technical skills and attention to detail",
    "Quick Placements without compromising on quality",
    "Compliance Knowledge across tax, audit, and financial regulations",
    "4,000+ Companies served across industries",
    "60,000+ Candidates successfully placed",
  ];

  const images = [
    "https://images.unsplash.com/photo-1552664730-d307ca884978",
    "https://images.unsplash.com/photo-1556761175-b413da4baf72",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    "https://images.unsplash.com/photo-1556155092-490a1ba16284",
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="accounting team"
              className="w-full h-[220px] object-cover rounded-3xl"
            />
          ))}
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-4xl font-bold mb-8 leading-tight">
            Why Choose Our <br />
            <span className="text-[#7A1CC2]">Accounting Service?</span>
          </h2>

          <ul className="space-y-5">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3">

                <CheckIcon className="w-6 h-6 text-[#7A1CC2] mt-1" />

                <span className="text-gray-800 text-lg">
                  {point}
                </span>

              </li>
            ))}
          </ul>

        </div>

      </div>
    </section>
  );
}
