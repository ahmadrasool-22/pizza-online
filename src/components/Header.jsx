// src/components/Header.jsx
import { useState } from "react";
import { Search, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import { products } from "../data/products"; // <- make sure your products are exported from Menu.jsx or a separate file

export default function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <header className="w-full bg-[#1E1E1E] text-white shadow-md relative">
      {/* Top Bar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
            <span className="text-[#E63946]">Pizza</span>{" "}
            <span className="text-[#FFD60A]">Online</span>
          </h1>
        </div>

        {/* Search Icon */}
        <Search
          size={24}
          onClick={() => setShowSearch(true)}
          className="cursor-pointer hover:text-[#FFD60A] transition"
        />
      </div>

      {/* Always Visible Nav */}
      <nav className="bg-gradient-to-r from-white via-[#fff7e6] to-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 px-6 py-3 text-sm font-semibold text-black">
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

      {/* Search Overlay */}
      {showSearch && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col">
          {/* Top bar of overlay */}
          <div className="flex items-center justify-between px-6 py-4 bg-[#1E1E1E]">
            <input
              type="text"
              placeholder="Search for pizzas..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full max-w-md px-4 py-2 rounded-md text-black outline-none"
              autoFocus
            />
            <X
              size={28}
              onClick={() => {
                setShowSearch(false);
                setQuery("");
              }}
              className="text-white cursor-pointer ml-4 hover:text-[#FFD60A] transition"
            />
          </div>

          {/* Search Results */}
          <div className="flex-1 overflow-y-auto px-6 py-6">
            {query.length === 0 ? (
              <p className="text-center text-gray-300">Start typing to search...</p>
            ) : filteredProducts.length === 0 ? (
              <p className="text-center text-red-400">No products found</p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md p-4 flex flex-col"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-40 w-full object-cover rounded-md mb-3"
                    />
                    <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="mt-2 font-semibold text-[#E63946]">{product.price}</p>
                    <a
                      href={`https://wa.me/923292009999?text=I want to buy ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block bg-[#FFD60A] text-black font-semibold px-4 py-2 rounded-lg text-center hover:bg-[#E63946] hover:text-white transition"
                    >
                      Buy Now
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
