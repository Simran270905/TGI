import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#17021d] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="TG India" className="w-10 h-10" />
            <div>
              <h3 className="text-lg font-bold">TG INDIA</h3>
              <p className="text-sm text-gray-300">Talent Group Of India</p>
            </div>
          </div>

          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Scroll down the page for more recommendations. Below you will find a
            variety of products from all categories on Steam that may be of
            interest to you.
          </p>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>About</li>
            <li>Services</li>
            <li>Our Clients</li>
            <li>Testimonials</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold mb-4">Contact Us</h4>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Help</li>
            <li>Sales</li>
            <li>Advertise</li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold mb-4">Address</h4>

          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            Xilliam's Corner Wine © <br />
            2017, 1112 A Market St # Ste <br />
            B22, Charlottesville, CA <br />
            45565
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="border border-purple-500 p-2 rounded-full">
              <Facebook size={18} />
            </div>
            <div className="border border-purple-500 p-2 rounded-full">
              <Twitter size={18} />
            </div>
            <div className="border border-purple-500 p-2 rounded-full">
              <Instagram size={18} />
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}