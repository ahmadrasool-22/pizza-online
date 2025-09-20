// src/components/Hero.jsx
import pizza from "../images/Crown-crust.jpg";
import { products } from "../data/products";
import { MapPin, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";


export default function Hero() {
  return (
    <>
    <section className="bg-gradient-to-r from-white via-[#fff7e6] to-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Text */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#E63946] leading-tight">
            Fresh, Hot & Delicious <span className="text-[#FFD60A]">Pizza</span> <br />
            Delivered to Your Door 🍕
          </h1>
          <p className="text-gray-600 text-lg">
            Pizza Online Burewala brings you the cheesiest and tastiest pizzas in town. 
            Order now and enjoy free delivery!
          </p>
          <div className="flex justify-center md:justify-start">
           <a
    href={`https://api.whatsapp.com/send?phone=923292009999&text=${encodeURIComponent(
      "Hi, I want to order a pizza 🍕"
    )}`}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#E63946] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#FFD60A] hover:text-black transition"
  >
    Order Now
  </a>
            <a
  href="/menu"
  className="ml-4 border-2 border-[#E63946] text-[#E63946] px-6 py-3 rounded-full font-semibold hover:bg-[#FFD60A] hover:border-[#FFD60A] hover:text-black transition"
>
  View Menu
</a>

          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={pizza}
            alt="Pizza Hero"
            className="w-full max-w-md rounded-2xl shadow-xl transform hover:scale-105 transition"

          />
        </div>
      </div>

    </section>
     <section className="py-12 bg-[#FFF8F0]" id="deals">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#E63946]">
          Our Best Deals
        </h2>

        {/* Product Grid */}
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
{products.slice(0, 3).map((item) => {
  const phone = "923292009999";
  const message = `Hi, I want to order ${item.name}`;
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;

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
        <p className="text-sm text-gray-600 mb-3">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#E63946] font-bold">{item.price}</span>
          <a
            className="bg-[#FFD60A] text-black px-3 py-1 rounded-lg font-medium hover:bg-[#E63946] transition hover:text-white"
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
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

        <section id="contact" className="py-12 bg-[#FFF8F0]">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#E63946]">
      Contact Us
    </h2>

    {/* Grid Layout */}
    <div className="grid gap-8 md:grid-cols-2">
      {/* Contact Info Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
        <div className="flex items-center space-x-3">
          <Phone size={24} className="text-[#E63946]" />
          <div>
            <p className="text-lg font-semibold">Phone</p>
            <p className="text-gray-600">
              +92 329-2009999 <br /> +92 329-3009999
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MapPin size={24} className="text-[#E63946]" />
          <div>
            <p className="text-lg font-semibold">Address</p>
            <p className="text-gray-600">
              Canal Road, Chak No 435/EB, Mian Town, <br /> Burewala, Vehari, Punjab, Pakistan
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock size={24} className="text-[#E63946]" />
          <div>
            <p className="text-lg font-semibold">Hours</p>
            <p className="text-gray-600">11:00 AM – 2:00 AM</p>
          </div>
        </div>
      </div>

      {/* Map Card */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3449.1802547188913!2d72.69011537436938!3d30.174844474858215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393cdf8f5a4756f5%3A0xdcc3220aef220907!2sPizza%20Online%20Burewala!5e0!3m2!1sen!2sus!4v1758358281090!5m2!1sen!2sus"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
</section>


    </>
  );
}
