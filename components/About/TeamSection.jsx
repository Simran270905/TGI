import { Linkedin, Twitter } from "lucide-react";

export default function TeamSection() {
  const team = [
    {
      name: "Arjun Sharma",
      role: "CEO & Founder",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      name: "Vikram Mehta",
      role: "Chief People Officer",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      name: "Priya Iyer",
      role: "Head of Operations",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      name: "Ananya Reddy",
      role: "Director of Partnerships",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    },
  ];

  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-[44px] font-bold mb-4">
          Meet the <span className="text-[#7A1CC2]">Visionaries</span>
        </h2>

        <p className="text-gray-600 text-lg mb-14 max-w-xl">
          Our leadership team brings decades of combined experience in the Indian workforce landscape.
        </p>

        {/* Team Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {team.map((member, index) => (
            <div key={index}>

              {/* Image */}
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-[320px] object-cover rounded-[26px] mb-4"
              />

              {/* Name */}
              <h3 className="text-xl font-semibold">{member.name}</h3>

              {/* Role */}
              <p className="text-gray-600 text-sm mb-4">{member.role}</p>

              {/* Social Icons */}
              <div className="flex gap-3">

                <div className="border border-[#3C33D8] text-[#3C33D8] p-2 rounded-full">
                  <Linkedin size={16} />
                </div>

                <div className="border border-[#3C33D8] text-[#3C33D8] p-2 rounded-full">
                  <Twitter size={16} />
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}