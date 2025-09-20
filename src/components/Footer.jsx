// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
export default function Footer() {
  return (
    <footer className="bg-[#1E1E1E] text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Logo + Brand */}
        <div className="flex flex-col items-center md:items-start space-y-3">
          
          <h2 className="text-xl font-bold text-[#FFD60A]">Pizza Online</h2>
          <p className="text-sm text-gray-400">
            Hot & fresh pizza delivered to your door in Burewala 🍕
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-[#FFD60A]">Quick Links</h3>
          <Link to="/" className="hover:text-[#FFD60A] transition">Home</Link>
          <Link to="/menu" className="hover:text-[#FFD60A] transition">Menu</Link>
          <HashLink smooth to="/#deals" className="hover:text-[#FFD60A] transition">Deals</HashLink>
          <HashLink smooth to="/#contact" className="hover:text-[#FFD60A] transition">Contact</HashLink>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-[#FFD60A]">Contact</h3>
          <p>📍 Burewala, Punjab</p>
          <p>📞 0303-4222405</p>
          <p>✉️ pizzaonline@gmail.com</p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-black py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Pizza Online Burewala. All rights reserved.
      </div>
    </footer>
  );
}
