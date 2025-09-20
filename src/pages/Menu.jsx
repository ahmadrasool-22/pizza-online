// src/components/Products.jsx
import { products } from "../data/products";

export default function Products() {
 // Pizza Online WhatsApp number (no +, spaces, or -)

  return (
    <section className="py-12 bg-[#FFF8F0]" id="menu">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#E63946]">
          Menu
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {products.map((item) => {
            // build WhatsApp link for this product
          const phone = "923292009999";
const message = `Hi, I want to order ${item.name}`;


const whatsappLink =`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`
  


            return (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#E63946] font-bold">
                      {item.price}
                    </span>
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#E63946] text-white px-4 py-2 rounded-lg hover:bg-[#FFD60A] hover:text-black transition"
                    >
                      Order Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
