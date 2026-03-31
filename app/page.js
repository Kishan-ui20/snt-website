import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#fffaf0] text-gray-800">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-4 shadow bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold">SNT</h1>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Order Now
        </button>
      </nav>

      {/* HERO */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Pure Nattu Sakkarai <br /> Direct from Farmers
        </h1>
        <p className="mt-4 text-lg">
          No Chemicals • No Preservatives • 100% Natural
        </p>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl text-lg">
          Shop Now
        </button>
      </section>

      {/* PRODUCTS */}
      <section className="px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-10">
          Our Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
            <img src="/powder.png" className="rounded-xl"/>
            <h3 className="text-xl mt-3 font-semibold">
              Nattu Sakkarai Powder
            </h3>
            <p className="text-green-700 font-bold">₹120/kg</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
            <img src="/achu.png" className="rounded-xl"/>
            <h3 className="text-xl mt-3 font-semibold">
              Achu Vellam
            </h3>
            <p className="text-green-700 font-bold">₹140/kg</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow hover:scale-105 transition">
            <img src="/cubes.png" className="rounded-xl"/>
            <h3 className="text-xl mt-3 font-semibold">
              Jaggery Cubes
            </h3>
            <p className="text-green-700 font-bold">₹130/kg</p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl text-center font-semibold mb-8">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div>
            <h3 className="text-xl font-bold">100% Natural</h3>
            <p>No chemicals or artificial processing</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Traditional Method</h3>
            <p>Made using age-old techniques</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Healthy Choice</h3>
            <p>Better alternative to white sugar</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p>📞 +91 XXXXX XXXXX</p>
        <p>📍 Madurai, Tamil Nadu</p>

        <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl">
          WhatsApp Us
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-4">
        © 2026 SNT Nattu Sakkarai. All rights reserved.
      </footer>

    </main>
  );
}