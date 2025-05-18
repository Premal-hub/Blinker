import React, { useState } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Menu, X } from "lucide-react";

// Import pages
import About from "./About";
import ServicesPage from "./ServicesPage";
import DoctorPage from "./DoctorPage";
import FAQPage from "./FAQPage";
import ContactPage from "./ContactPage";

import Comprehensive from "./IMG_4979.webp";
import Pediatric from "./PediatricEyecare_20221213_4322.webp";
import Cataract from "./cataract-senior.webp";
import Logo from "./Screenshot 2025-02-04 at 7.44.56 PM.png"; 

//im;port scroll up

import ScrollToTop from "./ScrollToTop";

// ----------------------
// Navbar Component
// ----------------------
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const linkClass = (path: string) =>
    `hover:text-[#7a9f90] ${currentPath === path ? 'text-[#7a9f90] font-semibold underline' : 'text-[#3c544b]'}`;

  return (
    <nav className="bg-white border-b border-[#7a9f90] py-4 px-8 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-extrabold text-2xl md:text-3xl text-[#3c544b]"
     style={{ letterSpacing: '.03em', fontFamily: 'Trebuchet MS, Inter, Segoe UI, Arial, sans-serif' }}>
  <img src={Logo} alt="Blinkers Logo" className="w-10 h-10 mr-3 rounded-full" />
  <span className="font-black">Blinkers</span>
</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#3c544b] focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/" className={linkClass('/')}>Home</Link></li>
          <li><Link to="/about" className={linkClass('/about')}>About</Link></li>
          <li><Link to="/services" className={linkClass('/services')}>Services</Link></li>
          <li><Link to="/doctor" className={linkClass('/doctor')}>Doctors</Link></li>
          <li><Link to="/faq" className={linkClass('/faq')}>Faq</Link></li>
          <li><Link to="/contact" className={linkClass('/contact')}>Contact</Link></li>
        </ul>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col gap-4 font-medium">
            <li><Link to="/" className={linkClass('/')} onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link to="/about" className={linkClass('/about')} onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link to="/services" className={linkClass('/services')} onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link to="/doctor" className={linkClass('/doctor')} onClick={() => setIsOpen(false)}>Doctors</Link></li>
            <li><Link to="/faq" className={linkClass('/faq')} onClick={() => setIsOpen(false)}>Faq</Link></li>
            <li><Link to="/contact" className={linkClass('/contact')} onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

//scrollup page


const App = () => (
  <Router>
    <Navbar />
    <ScrollToTop />
    <main>
      <Routes>
        {/* your routes */}
      </Routes>
    </main>
    <Footer />
  </Router>
);

// ----------------------
// Footer Component
// ----------------------
const Footer = () => (
  <footer className="bg-[#3c544b] text-white py-10 px-4 md:px-16 mt-10">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
      <div className="font-bold text-lg md:text-xl tracking-tight" style={{ fontFamily: 'Trebuchet MS, Inter, Segoe UI, Arial, sans-serif' }}>
        <span className="font-black">blinkers</span> Eye Care Clinic
      </div>
      <div>
        <p className="text-xs mt-2">
          Shila Tower, BH/22 Samarth Park Apartments, near BAPS Hospital, Adajan, Surat, Gujarat 395009<br />
          <a
            href="https://goo.gl/maps/4v8Z2x5J6Qk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#7a9f90] hover:underline"
          >
            Get Directions
          </a>
        </p>
        <br />
        <p>
          Contact us: <a href="tel:+919860849086" className="hover:underline font-medium">+91 98608 49086</a>
        </p>
        <p className="text-xs mt-1">© 2025 blinkers. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// ----------------------
// Static Content Lists
// ----------------------
const servicesList = [
  { title: "Comprehensive Eye Exams", image: Comprehensive, desc: "Thorough eye health and vision assessments." },
  { title: "LASIK & Laser Surgery", image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528", desc: "Modern vision correction procedures." },
  { title: "Pediatric Eye Care", image: Pediatric, desc: "Specialized care for children's vision." },
  { title: "Cataract Surgery", image: Cataract, desc: "Advanced cataract removal and lens implants." }
];

const testimonials = [
  { name: "Rina D.", feedback: "I had an amazing LASIK experience at blinkers. The doctors are truly experts!" },
  { name: "Amit P.", feedback: "The pediatric eye care was top-notch. My daughter felt safe and happy." }
];

// ----------------------
// Home Page Sections
// ----------------------
const Hero = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-[#7a9f90] to-[#3c544b] text-white py-20 px-4 md:px-16">
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between"
    >
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 glass-text">
          See the Future<br /><span className="text-white/80">Clearly</span>
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Blinkers delivers world-class eye care with compassion, precision, and vision technology excellence.
        </p>
        <Link to="/services" className="inline-block bg-white hover:bg-[#eaf2ee] text-[#3c544b] px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300 border border-[#3c544b]">
          Explore Services
        </Link>
      </div>
      <div className="flex-1 mt-10 md:mt-0 flex justify-center">
        <motion.div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70 w-full max-w-md md:max-w-2xl" whileHover={{ scale: 1.05 }}>
          <iframe
            className="w-full aspect-video"
            src="https://www.youtube.com/embed/tfa76DBQ-Eg?autoplay=1&mute=1&controls=0&loop=1&playlist=tfa76DBQ-Eg"
            title="Blinkers Eye Care Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          ></iframe>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

const Services = () => (
  <section id="services" className="py-16 px-4 md:px-16 bg-white">
    <h2 className="text-4xl font-bold text-center text-[#3c544b] mb-12">Our Eye Care Services</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {servicesList.map((service, idx) => (
        <Tilt key={idx} glareEnable glareMaxOpacity={0.3} className="rounded-xl">
          <div className="bg-[#eaf2ee] p-5 rounded-xl shadow-lg hover:shadow-2xl transition border border-[#7a9f90]/40">
            <img src={service.image} alt={service.title} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-lg font-bold text-[#3c544b] mb-2">{service.title}</h3>
            <p className="text-[#3c544b]/80 text-sm">{service.desc}</p>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

const VisionTech = () => (
  <section className="py-20 bg-[#f7fbf9] px-4 md:px-16">
    <div className="max-w-5xl mx-auto text-center">
      <h2 className="text-4xl font-bold text-[#3c544b] mb-6">Vision Meets Technology</h2>
      <p className="text-[#3c544b]/80 max-w-2xl mx-auto mb-10">
        Our clinic is equipped with AI-driven diagnostic systems, ultra-HD retinal scanners, and fully automated optical instruments.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold text-[#3c544b]">AI-Powered Diagnostics</h4>
          <p className="text-[#3c544b]/70 mt-2">Quick and accurate eye condition analysis using advanced AI models.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold text-[#3c544b]">Retinal Scanners</h4>
          <p className="text-[#3c544b]/70 mt-2">Ultra HD imaging to detect early signs of retinal diseases.</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h4 className="font-semibold text-[#3c544b]">Automated Lensometer</h4>
          <p className="text-[#3c544b]/70 mt-2">Precise measurement of lens prescriptions in seconds.</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-[#7a9f90] text-white px-4 md:px-16">
    <h2 className="text-4xl font-bold text-center mb-12">What Our Patients Say</h2>
    <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
      {testimonials.map((t, idx) => (
        <motion.div
          key={idx}
          className="bg-white/20 backdrop-blur-md rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg italic mb-4">&quot;{t.feedback}&quot;</p>
          <p className="font-semibold text-right">— {t.name}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

// ----------------------
// Home Page Component
// ----------------------
const Home = () => (
  <>
    <Hero />
    <Services />
    <VisionTech />
    <Testimonials />
  </>
);

// ----------------------
// Main App Component
// ----------------------
const App = () => (
  <Router>
    <Navbar />
    <main className="min-h-[calc(100vh-8rem)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h2 className="p-8 text-center text-red-600">404 - Page Not Found</h2>} />
      </Routes>
    </main>
    <Footer />
  </Router>
);

export default App;
