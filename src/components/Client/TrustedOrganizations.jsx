
export default function TrustedOrganizations() {
  const logos = [
    "https://logo.clearbit.com/monday.com",
    "https://logo.clearbit.com/gong.io",
    "https://logo.clearbit.com/customer.io",
    "https://logo.clearbit.com/himalayas.app",
    "https://logo.clearbit.com/trustpilot.com",
    "https://logo.clearbit.com/tinder.com",
    "https://logo.clearbit.com/booking.com",
    "https://logo.clearbit.com/dropbox.com",
    "https://logo.clearbit.com/segment.com",
    "https://logo.clearbit.com/clearbit.com",
    "https://logo.clearbit.com/amplitude.com",
    "https://logo.clearbit.com/plaid.com",
    "https://logo.clearbit.com/intercom.com",
    "https://logo.clearbit.com/evernote.com",
    "https://logo.clearbit.com/airtasker.com",
  ];

  return (
    <section className="bg-[#F1E9F7] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT TEXT */}
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Trusted by <br />
            <span className="text-[#7A1CC2]">
              great Organizations
            </span>
          </h2>

          <p className="text-gray-700 max-w-md text-lg">
            Over 4,000 companies across industries trust Talent
            Group Of India to find the right talent, build stronger
            teams, and drive business growth.
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="grid grid-cols-3 gap-x-12 gap-y-10 items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="company logo"
              className="h-8 object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
