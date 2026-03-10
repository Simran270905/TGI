import { ShieldCheck, Zap, Heart, Target } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      icon: <ShieldCheck size={26} />,
      title: "Integrity First",
      text: "Transparency is the foundation of every relationship we build with clients and candidates",
    },
    {
      icon: <Zap size={26} />,
      title: "Innovative Match",
      text: "We leverage AI and human insight to find the perfect cultural and technical fit.",
    },
    {
      icon: <Heart size={26} />,
      title: "Empathy Driven",
      text: "We understand that behind every job is a person, and behind every hire is a business goal.",
    },
    {
      icon: <Target size={26} />,
      title: "Results Focused",
      text: "We measure our success by the long-term impact and retention of the talent we place.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] py-28 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-[44px] font-bold mb-4">
          The values that Guide Us
        </h2>

        <p className="text-white/90 mb-16 text-lg">
          Our culture is defined by a commitment to excellence and a passion for people.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-8">

          {values.map((value, index) => (
            <div key={index} className="relative bg-white text-gray-800 rounded-2xl p-8 shadow-lg">

              {/* Diamond Icon */}
              <div className="absolute -top-6 left-8 bg-[#E9D5FF] p-4 rotate-45 rounded-lg">
                <div className="-rotate-45 text-[#7A1CC2]">
                  {value.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mt-6 mb-3">
                {value.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-[15px] leading-relaxed">
                {value.text}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}