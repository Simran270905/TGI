
export default function ContactSection() {
  return (
    <section className="bg-[#F5F5F7] py-28 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>

          {/* Badge */}
          <span className="inline-block bg-[#F3E8FF] text-[#7A1CC2] border border-[#CFA8FF] px-4 py-1 rounded-full text-sm mb-6">
            Contact Us
          </span>

          {/* Heading */}
          <h2 className="text-[42px] font-bold leading-tight mb-6">
            <span className="text-[#7A1CC2]">Let’s</span> write your
            <br />
            success story
            <br />
            together
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-[17px] max-w-[480px] leading-relaxed">
            Thousands of businesses across India trust Talent Group Of India
            for their most critical hiring decisions. Here's what they have
            to say about working with us.
          </p>

        </div>

        {/* CONTACT FORM */}
        <div className="flex justify-end">

          <div className="bg-gradient-to-b from-[#7A1CC2] to-[#5B0FA3] p-8 rounded-[28px] w-[420px] text-white">

            <h3 className="text-2xl font-semibold mb-2 text-center">
              Contact
            </h3>

            <p className="text-sm text-center opacity-80 mb-6">
              Got Questions or ready to start ?
              <br />
              I'm here with you
            </p>

            {/* FORM */}
            <form className="space-y-4">

              <div className="grid grid-cols-2 gap-4">

                <input
                  type="text"
                  placeholder="First Name*"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
                />

                <input
                  type="text"
                  placeholder="Last Name*"
                  className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
                />

              </div>

              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
              />

              <input
                type="text"
                placeholder="Phone no."
                className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
              />

              <select className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none">
                <option>Student</option>
                <option>Employer</option>
                <option>Job Seeker</option>
              </select>

              <select className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none">
                <option>Select City</option>
                <option>Mumbai</option>
                <option>Delhi</option>
                <option>Bangalore</option>
              </select>

              <textarea
                placeholder="Write your message here"
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-white text-black outline-none"
              />

              {/* Submit Button */}
              <div className="flex justify-center pt-2">
                <button
                  type="submit"
                  className="bg-[#3C33D8] px-8 py-2 rounded-full font-medium hover:opacity-90 transition"
                >
                  Submit
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
