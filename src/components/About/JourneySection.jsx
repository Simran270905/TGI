export default function JourneySection() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center">

        {/* LEFT IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            alt="team"
            className="w-full max-w-[440px] h-[560px] object-cover rounded-[28px]"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>

          {/* Heading */}
          <h2 className="text-[44px] font-bold leading-tight mb-6">
            Our journey started <br />
            with a{" "}
            <span className="text-[#7A1CC2]">
              Vision for India
            </span>
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-700 text-[17px] leading-relaxed mb-6">
            Founded in 2012 in Bangalore, Talent Group of India set out to
            bridge the gap between India's vast talent pool and the needs of
            growing businesses. What began as a small team has since grown
            into a national leader in recruitment and HR consulting, backed
            by over a decade of expertise and deep industry relationships.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-700 text-[17px] leading-relaxed mb-10">
            Today, TG INDIA stands as a trusted bridge for thousands of
            professionals and hundreds of enterprises across the country.
            We go beyond titles and job descriptions — we listen to the
            stories behind every resume and every role, driven by the belief
            that when the right person finds the right opportunity, the
            potential for impact is truly limitless.
          </p>

          {/* Stats */}
          <div className="flex gap-20">

            <div>
              <h3 className="text-[#7A1CC2] text-2xl font-bold">10+</h3>
              <p className="text-gray-700 text-sm font-medium">
                Years of Excellence
              </p>
            </div>

            <div>
              <h3 className="text-[#7A1CC2] text-2xl font-bold">500+</h3>
              <p className="text-gray-700 text-sm font-medium">
                Partnerships Built
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}