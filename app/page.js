"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  return (
    <main className="bg-[var(--brandCream)] text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 shadow bg-[var(--brandWhite)]  sticky top-0 z-50">
        <h1 className="text-xl font-bold text-[var(--brandGreen)]">SNT</h1>
        <button className="bg-[var(--brandGreen)]  text-brandWhite px-4 py-2 rounded-lg hover:opacity-90 transition">
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold leading-tight text-[var(--brandGreen)]">
          Pure Nattu Sakkarai <br /> Direct from Farmers
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          No Chemicals • No Preservatives • 100% Natural
        </p>

        <button className="mt-6 bg-[var(--brandGreen)] text-[var(--brandwhite)] px-6 py-3 rounded-xl text-lg hover:opacity-90 transition">
          Shop Now
        </button>
      </section>

      {/* PRODUCTS SLIDER */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10 text-[var(--brandGreen)]">
          Our Products
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          className="max-w-4xl mx-auto"
        >
          <SwiperSlide>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <img src="/powder.png" className="rounded-xl mx-auto"/>
              <h3 className="text-xl mt-3 font-semibold">Nattu Sakkarai Powder</h3>
              <p className="text-[var(--brandGreen)] font-bold">₹120/kg</p>
              <p className="mt-2 text-gray-600">
                Natural, unrefined sweetener rich in iron, calcium, and potassium. Perfect for tea, coffee, sweets, and baking.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <img src="/achu.png" className="rounded-xl mx-auto"/>
              <h3 className="text-xl mt-3 font-semibold">Achu Vellam</h3>
              <p className="text-[var(--brandGreen)] font-bold">₹140/kg</p>
              <p className="mt-2 text-gray-600">
                Traditional moulded jaggery with authentic taste. Perfect for festive sweets and offerings.
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="bg-white p-6 rounded-2xl shadow text-center">
              <img src="/cubes.png" className="rounded-xl mx-auto"/>
              <h3 className="text-xl mt-3 font-semibold">Jaggery Cubes</h3>
              <p className="text-[var(--brandGreen)] font-bold">₹130/kg</p>
              <p className="mt-2 text-gray-600">
                Solid, rich, and aromatic jaggery cubes. Long shelf life, ideal for cooking and sweets.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/* ABOUT PRODUCTS */}
      <section className="px-6 py-12 max-w-4xl mx-auto text-gray-800 leading-relaxed">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--brandGreen)]">🌿 About Jaggery Powder</h2>
        <p>
          Jaggery powder is a natural, unrefined sweetener made from sugarcane juice, known for its rich taste and health benefits...
        </p>

        <h3 className="text-2xl font-bold mt-8 text-[var(--brandGreen)]">🌾 SNT Nimmy’s Jaggery Powder</h3>
        <ul className="list-disc list-inside mt-2">
          <li>100% natural and chemical-free</li>
          <li>Hygienically processed and packed</li>
          <li>Rich in nutrients and minerals</li>
          <li>Fine texture for easy mixing</li>
          <li>Farm-fresh quality with authentic flavor</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 text-[var(--brandGreen)]">🍯 Cane Jaggery Balls</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Solid, rich, and aromatic</li>
          <li>Long shelf life</li>
          <li>Ideal for direct consumption or cooking</li>
          <li>Great for making sweets and traditional recipes</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 text-[var(--brandGreen)]">🪔 Achu Vellam (Moulded Jaggery)</h3>
        <ul className="list-disc list-inside mt-2">
          <li>Made using age-old techniques</li>
          <li>Rich, authentic taste</li>
          <li>Perfect for festive sweets and offerings</li>
          <li>No additives or preservatives</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 text-[var(--brandGreen)]">💛 Our Promise</h3>
        <p>
          At SNT Nimmy’s, we are committed to delivering pure and natural products, traditional processing methods, and premium quality at every step.
        </p>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-6 text-center bg-[var(--brandWhite)]">
        <h2 className="text-3xl font-semibold mb-4 text-[var(--brandGreen)]">Contact Us</h2>
        <p>📞 +91 90804 65096</p>
        <p>📍 Madurai, Tamil Nadu</p>

        <button className="mt-6 bg-[var(--brandGreen)] text-[var(--brandWhite)] px-6 py-3 rounded-xl hover:opacity-90 transition">
          WhatsApp Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[var(--brandGreen)] text-white text-center p-4">
        © 2026 SNT Nattu Sakkarai. All rights reserved.
      </footer>

    </main>
  );
}
