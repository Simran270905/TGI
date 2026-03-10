import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TestimonialsJob() {
  return (
    <section className="bg-[#EDE4F6] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-4 py-1 rounded-full text-sm mb-6">
            Testimonials
          </span>

          {/* Heading */}
          <h2 className="text-[42px] font-bold leading-tight mb-6">
            <span className="text-[#7A1CC2]">What</span> our Job Seekers
            <br />
            are saying ?
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-[17px] max-w-[480px] leading-relaxed">
            We've helped 60,000+ professionals find roles that match their
            skills, aspirations, and career goals. Here's what they have to
            say about their journey with us.
          </p>

        </div>

        {/* TESTIMONIAL CARD */}
        <div className="flex flex-col items-end">

          <div className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] text-white p-10 rounded-[26px] w-[420px]">

            {/* Quote Icon */}
            <Quote size={40} className="mb-6 opacity-80" />

            {/* Quote Text */}
            <p className="text-[17px] leading-relaxed mb-8">
              "TG INDIA placed me in my dream job within two weeks. Their
              team was supportive, professional, and genuinely cared about
              my career growth."
            </p>

            {/* Profile */}
            <div className="flex items-center gap-4">

              <img
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&auto=format&fit=crop"
                alt="profile"
                className="w-12 h-12 rounded-full object-cover"
              />

              <div>
                <h4 className="font-semibold text-lg">
                  Vikram Nair
                </h4>

                <p className="text-sm opacity-80">
                  Software Engineer, Bangalore
                </p>
              </div>

            </div>

          </div>

          {/* NAV BUTTONS */}
          <div className="flex gap-4 mt-6">

            <button className="w-10 h-10 rounded-full border border-gray-400 flex items-center justify-center text-gray-700 hover:bg-gray-200 transition">
              <ChevronLeft size={18} />
            </button>

            <button className="w-10 h-10 rounded-full bg-[#3C33D8] text-white flex items-center justify-center hover:opacity-90 transition">
              <ChevronRight size={18} />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}