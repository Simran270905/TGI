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
    <section className="bg-gray-100 w-full py-24">

      <div className="grid lg:grid-cols-2 items-center">

        {/* LEFT IMAGE GRID */}
        <div className="grid grid-cols-2 gap-4 p-6">

          <img
            src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0"
            className="rounded-[24px] h-[260px] w-full object-cover"
            alt="team meeting"
          />

          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="rounded-[24px] h-[260px] w-full object-cover mt-10"
            alt="office discussion"
          />

          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            className="rounded-[24px] h-[260px] w-full object-cover"
            alt="business teamwork"
          />

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-[24px] h-[260px] w-full object-cover mt-10"
            alt="corporate meeting"
          />

        </div>

        {/* RIGHT TEXT */}
        <div className="px-16">

          <h2 className="text-[48px] leading-[56px] font-bold mb-10">
            Why organizations trust{" "}
            <span className="text-purple-600">
              Talent Group Of India?
            </span>
          </h2>

          <ul className="space-y-5">

            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-[18px] font-semibold"
              >

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
