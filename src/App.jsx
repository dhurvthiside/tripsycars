import React, { useRef } from "react";
import { motion } from "framer-motion";

// TripsyHome.jsx
// Single-file React component for a sleek, mobile-first homepage built with Tailwind CSS + Framer Motion.
// How to use:
// 1. Put this file inside your React project (e.g. src/components/TripsyHome.jsx)
// 2. Install framer-motion: npm install framer-motion
// 3. Ensure Tailwind CSS is configured in your project.
// 4. Replace WHATSAPP_NUMBER and image/video paths with your real assets.

const WHATSAPP_NUMBER = "919994166895"; // Replace with your WhatsApp number (country code + number, no + or -)

const carsData = [
  {
    id: 1,
    name: "Maruti Swift",
    pricePerDay: 1800,
    fuel: "Petrol",
    seats: 5,
    transmission: "Manual",
    img: "/assets/swift.jpg",
  },
  {
    id: 2,
    name: "Hyundai Creta",
    pricePerDay: 3200,
    fuel: "Petrol",
    seats: 5,
    transmission: "Automatic",
    img: "/assets/creta.png",
  },
  {
    id: 3,
    name: "Toyota Innova Crysta",
    pricePerDay: 5000,
    fuel: "Diesel",
    seats: 7,
    transmission: "Manual",
    img: "/assets/innova.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function TripsyHome() {
  const scrollRef = useRef(null);

  const openWhatsapp = (message) => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank");
  };

  const scroll = (dir = "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: dir === "right" ? amount : -amount, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* HERO */}
      <header className="relative overflow-hidden bg-gradient-to-b from-royal-blue-600 to-royal-blue-700">
        {/* Background Image + Overlay */}

        {/* Navbar */}
        <nav className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center shadow-md">
              <img src="/logo.png" alt="Tripsy Logo" className="w-20 h-20 object-contain" />
            </div>
            <div className="text-white">
              <div className="font-bold leading-none">Tripsy</div>
              <div className="text-xs opacity-90">Self Drive Cars</div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden mt-[6px] md:flex items-center gap-4">
            <a href="#fleet" className="text-white/90 hover:text-white">Fleet</a>
            <a href="#how" className="text-white/90 hover:text-white">How it Works</a>
            <button
              onClick={() => openWhatsapp("Hi, I want to book a car from Tripsy Self Drive Cars")}
              className="bg-white text-black rounded-2xl px-4 py-2 shadow-md font-medium"
            >
              WhatsApp Us
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="max-w-6xl mx-auto px-6 py-20 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
              Drive Your Journey, Your Way
            </h1>
            <p className="mt-4 text-white/90 max-w-2xl mx-auto">
              Premium self-drive cars — transparent pricing, easy WhatsApp booking, and 24/7 support.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => openWhatsapp("Hi, I want to book a car from Tripsy Self Drive Cars")}
                className="bg- hover:bg-royal-blue-600 text-white rounded-2xl px-6 py-3 font-semibold shadow-lg"
              >
                Book Now
              </button>

              <a
                href="#fleet"
                className="bg-white/10 text-white rounded-2xl px-6 py-3 font-medium shadow-inner"
              >
                View Fleet
              </a>
            </div>
          </motion.div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 -mt-10">
        {/* FLEET SHOWCASE */}
        <section id="fleet" className="bg-white rounded-2xl mt-8 shadow-sm p-5 md:p-8 mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold">Our Fleet</h2>
              <p className="text-sm text-gray-500">Choose a car that suits your trip — short city runs to long road trips.</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                aria-label="scroll left"
                onClick={() => scroll("left")}
                className="p-2 rounded-full bg-gray-100 shadow"
              >
                ‹
              </button>
              <button
                aria-label="scroll right"
                onClick={() => scroll("right")}
                className="p-2 rounded-full bg-gray-100 shadow"
              >
                ›
              </button>
            </div>
          </div>

          <div ref={scrollRef} className="mt-6 flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4">
            {carsData.map((car, i) => (
              <motion.article
                key={car.id}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="min-w-[260px] md:min-w-[320px] bg-gray-50 rounded-2xl shadow-md p-4 snap-start"
              >
                <div className="rounded-xl overflow-hidden">
                  <img src={car.img} alt={car.name} className="w-full h-40 object-cover" />
                </div>
                <div className="mt-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{car.name}</h3>
                    <div className="text-sm text-gray-600">₹{car.pricePerDay}/day</div>
                  </div>

                  <div className="mt-2 text-sm text-gray-600 flex items-center gap-3">
                    <div className="flex items-center gap-1">⛽ {car.fuel}</div>
                    <div className="flex items-center gap-1">👥 {car.seats}</div>
                    <div className="flex items-center gap-1">⚙️ {car.transmission}</div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => openWhatsapp(`Hi, I want to book ${car.name} from Tripsy Self Drive Cars. Dates: [dd-mm-yyyy] - [dd-mm-yyyy]. Please share availability.`)}
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl px-4 py-2 font-medium shadow"
                    >
                      Book via WhatsApp
                    </button>

                    <button
                      onClick={() => alert('Open quick details modal or navigate to details page (implement as needed)')}
                      className="bg-white border border-gray-200 text-gray-800 rounded-2xl px-4 py-2 font-medium shadow-inner"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <p className="text-xs text-gray-500 mt-4">Tip: Use the arrows to scroll the fleet, or swipe on mobile.</p>
        </section>

        {/* WHY CHOOSE US */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <motion.div initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold">Why Choose Tripsy</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm text-gray-700">
              <FeatureCard title="Affordable Prices" desc="Transparent pricing with no hidden fees." />
              <FeatureCard title="Easy Booking" desc="WhatsApp booking in seconds — zero paperwork." />
              <FeatureCard title="Well-Maintained Cars" desc="Regularly serviced & cleaned vehicles." />
              <FeatureCard title="24/7 Support" desc="We're here to help anytime, anywhere." />
            </div>
          </motion.div>

          {/* HOW IT WORKS */}
          <motion.div initial={{ opacity: 0, x: 12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold">How it Works</h3>
            <div className="mt-6 space-y-4">
              <StepCard step={1} title="Choose Car" desc="Browse our fleet and pick the car you love." />
              <StepCard step={2} title="WhatsApp Booking" desc="Send us a quick message to confirm availability." />
              <StepCard step={3} title="Drive" desc="Pickup the car and enjoy your trip." />
              <StepCard step={4} title="Return" desc="Drop back at our location — simple and fast." />
            </div>
          </motion.div>
        </section>

        {/* Testimonials */}
        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-4">What our customers say</h3>
          <div className="flex gap-4 overflow-x-auto pb-4">
            <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="min-w-[260px] bg-white rounded-2xl shadow p-4">
              <p className="text-sm text-gray-700">"Great service, very smooth booking via WhatsApp and the car was spotless."</p>
              <footer className="mt-3 text-xs text-gray-500">— Priya, Chennai</footer>
            </motion.blockquote>

            <motion.blockquote initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="min-w-[260px] bg-white rounded-2xl shadow p-4">
              <p className="text-sm text-gray-700">"Competitive prices and helpful support. Will rent again."</p>
              <footer className="mt-3 text-xs text-gray-500">— Ravi, Bangalore</footer>
            </motion.blockquote>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="mb-10">
          <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} className="bg-royal-blue-600 text-white rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold">Book Your Self Drive Car Today!</h4>
              <p className="text-sm opacity-90">Quick WhatsApp booking — instant confirmations and simple pickup.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => openWhatsapp("Hi, I want to book a car from Tripsy Self Drive Cars")} className="bg-emerald-600 text-white rounded-2xl px-4 py-2 font-semibold">WhatsApp</button>
              <a href="tel:+919994166895" className="bg-white/10 text-white rounded-2xl px-4 py-2 font-medium">Call</a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t mt-10">
        <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h5 className="font-semibold">Tripsy Self Drive Cars</h5>
            <p className="text-sm text-gray-600 mt-2">Address line 1<br />Chennai, India</p>
          </div>

          <div>
            <h6 className="font-medium">Contact</h6>
            <p className="text-sm text-gray-600 mt-2">Phone: +91 99941 66895<br />Email: hello@tripsy.com</p>
          </div>

          <div>
            <h6 className="font-medium">Links</h6>
            <ul className="text-sm text-gray-600 mt-2 space-y-2">
              <li><a href="/terms" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li className="flex items-center gap-2 mt-2">
                {/* social icons simple */}
                <a href="#" aria-label="instagram" className="text-gray-600">IG</a>
                <a href="#" aria-label="facebook" className="text-gray-600">FB</a>
                <a href="#" aria-label="twitter" className="text-gray-600">TW</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} Tripsy Self Drive Cars. All rights reserved.</div>
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc }) {
  return (
    <div className="bg-white/80 rounded-lg p-3 shadow-sm flex items-start gap-3">
      <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 font-semibold">✓</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-xs text-gray-600">{desc}</div>
      </div>
    </div>
  );
}

function StepCard({ step, title, desc }) {
  return (
    <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-semibold">{step}</div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-600">{desc}</div>
      </div>
    </motion.div>
  );
}
