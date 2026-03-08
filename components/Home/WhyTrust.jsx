import { Check } from "lucide-react";

export default function WhyTrust() {

  const points = [
    "Industry-focused recruitment expertise",
    "Personalized hiring solutions",
    "Transparent and ethical practices",
    "Faster turnaround without compromising",
    "People-first mindset",
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-6 max-w-md">

          <img
            src="/images/1.jpg"
            className="rounded-[24px] h-[210px] w-full object-cover"
          />

          <img
            src="/images/2.jpg"
            className="rounded-[24px] h-[210px] w-full object-cover mt-10"
          />

          <img
            src="/images/3.jpg"
            className="rounded-[24px] h-[210px] w-full object-cover"
          />

          <img
            src="/images/4.jpg"
            className="rounded-[24px] h-[210px] w-full object-cover mt-10"
          />

        </div>

        {/* RIGHT TEXT */}
        <div className="max-w-lg">

          <h2 className="text-[48px] leading-[56px] font-bold mb-10">
            Why organizations trust{" "}
            <span className="text-purple-600">
              Talent Group Of India?
            </span>
          </h2>

          <ul className="space-y-5">

            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-[18px] font-semibold ">

                <Check
                  className="text-purple-600 mt-[3px]"
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