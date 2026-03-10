export default function ContactSection() {
  return (
    <section className="bg-gradient-to-b from-[#6F0DA5] via-[#64089A] to-[#570086] py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <h2 className="text-[44px] leading-[52px] font-bold mb-4">
          Let’s write your
          <br />
          success story together
        </h2>

        {/* Subheading */}
        <p className="text-white/90 text-[16px] mb-12 max-w-md">
          Got something on your mind? Fill out the form and we will get
          back to you.
        </p>

        {/* Form */}
        <form className="grid md:grid-cols-2 gap-6">

          {/* First Name */}
          <div>
            <label className="block text-sm mb-2">First Name*</label>
            <input
              type="text"
              placeholder="John"
              className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Last Name */}
          <div>
            <label className="block text-sm mb-2">Last Name*</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">E-mail*</label>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone*</label>
            <input
              type="text"
              placeholder="+91 | 9876543210"
              className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm mb-2">Select Category</label>
            <select className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none">
              <option>Employee</option>
              <option>Employer</option>
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block text-sm mb-2">Select City</label>
            <select className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none">
              <option>Mumbai</option>
              <option>Pune</option>
              <option>Delhi</option>
            </select>
          </div>

          {/* Comment */}
          <div className="md:col-span-2">
            <label className="block text-sm mb-2">Write your Comment</label>
            <textarea
              rows="5"
              placeholder="Type"
              className="w-full bg-white text-gray-700 rounded-lg px-4 py-3 outline-none"
            ></textarea>
          </div>

        </form>

        {/* Submit Button */}
        <div className="flex justify-center mt-10">
          <button className="px-14 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium">
            Submit
          </button>
        </div>

      </div>
    </section>
  );
}