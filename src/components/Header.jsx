// src/components/Header.jsx
import { Search } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-[#1E1E1E] text-white shadow-md">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Brand */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-[#E63946]">Pizza</span>{" "}
            <span className="text-[#FFD60A]">Online</span>
          </h1>
        </div>

        {/* Search Icon */}
        <Search
          size={24}
          className="cursor-pointer hover:text-[#FFD60A] transition"
        />
      </div>

      {/* Always Visible Nav */}
      <nav className="bg-gradient-to-r from-white via-[#fff7e6] to-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center  gap-6 px-6 py-3 text-sm font-semibold text-black ">
          <Link to="/" className="hover:text-[#E63946] transition">
            Home
          </Link>
          <a href="/menu" className="hover:text-[#E63946] transition">
            Menu
          </a>
          <HashLink smooth to="/#deals" className="hover:text-[#E63946] transition">
            Deals
          </HashLink>
          <HashLink smooth to="/#contact" className="hover:text-[#E63946] transition">
            Contact
          </HashLink>
        </div>
      </nav>
    </header>
  );
}
