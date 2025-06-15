import React from "react";
import {
  FaEye,
  FaRegEye,
  FaGlasses,
  FaTint,
  FaCheckCircle,
  FaSearchPlus,
  FaEyeDropper,
  FaBrain,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Service data (unchanged)
const services = [
  {
    title: "Comprehensive Eye Exams",
    color: "from-blue-400 to-blue-600",
    icon: (
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm transition-transform transform-gpu hover:rotate-3 hover:scale-105 group/icon">
        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md z-0" />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <FaEye className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8 drop-shadow-sm group-hover/icon:scale-110 transition-transform duration-300 ease-in-out" />
        </div>
      </div>
    ),
    description:
      "Our detailed eye exams are more than just checking a prescription...",
    details: (
      <>
        <strong>What you get:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li>Precise vision testing & prescription updates</li>
          <li>Screenings for glaucoma, cataracts & more</li>
          <li>Assessment of eye coordination & depth perception</li>
          <li>Personalized advice for maintaining eye health</li>
        </ul>
        <p className="mt-2">Your eyes deserve the best care — and that’s exactly what we deliver.</p>
      </>
    ),
  },
  {
    title: "Eye Number Testing",
    color: "from-green-400 to-green-600",
    icon: (
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-500 shadow-md flex items-center justify-center">
        <svg
          className="w-6 h-6 sm:w-10 sm:h-10 text-white"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M138 262 L222 346 L370 198"
            stroke="currentColor"
            strokeWidth="40"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="motion-tick"
          />
        </svg>
        <style>
          {`
            .motion-tick {
              stroke-dasharray: 300;
              stroke-dashoffset: 300;
              animation: drawTick 1s ease-in-out infinite;
            }
            @keyframes drawTick {
              0% {
                stroke-dashoffset: 300;
              }
              100% {
                stroke-dashoffset: 0;
              }
            }
          `}
        </style>
      </div>
    ),
    description: "Say goodbye to guesswork! Our precise digital instruments...",
    details: (
      <>
        <strong>Experience includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li>Instant, real-time vision simulations</li>
          <li>Custom lens recommendations tailored to your needs</li>
          <li>Comfortable & quick testing process</li>
        </ul>
        <p className="mt-2">Step into a world of clear sight with confidence!</p>
      </>
    ),
  },
  {
    title: "Advanced Contact Lens Fitting",
    color: "from-red-400 to-red-600",
    icon: (
      <motion.div
        className="relative w-12 h-12 sm:w-14 sm:h-14 bg-white/70 backdrop-blur-lg rounded-full shadow-xl overflow-hidden flex items-center justify-center"
        whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ type: "spring", damping: 10, stiffness: 80, repeat: Infinity, duration: 2 }}
        style={{ perspective: 1000 }}
      >
        <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-20 blur-md z-0" />
        <FaGlasses className="text-yellow-800 w-6 h-6 sm:w-8 sm:h-8 z-10 drop-shadow" />
        <motion.div
          className="absolute top-0 left-[-50%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    ),
    description: "Comfort meets clarity — find your perfect contact lens fit...",
    details: (
      <>
        <strong>We specialize in fitting a wide range of specialty lenses:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li><strong>Scleral Lenses:</strong> For keratoconus, LASIK issues, dry eye.</li>
          <li><strong>PROSE Lenses:</strong> Advanced therapy for damaged corneas.</li>
          <li><strong>Custom Soft & RGP Lenses:</strong> Personalized for your eyes.</li>
        </ul>
        <p className="mt-2">Each fit is customized with corneal topography and evaluations to ensure comfort.</p>
      </>
    ),
  },
  {
    title: "Vision Therapy for Amblyopia (Lazy Eye)",
    color: "from-yellow-400 to-yellow-600",
    icon: <FaBrain className="text-yellow-600 w-6 h-6 sm:w-8 sm:h-8 animate-pulse" />,
    description:
      "We offer evidence-based therapy for amblyopia and binocular vision...",
    details: (
      <>
        <strong>Key therapy benefits include:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li><strong>Amblyopia:</strong> Effective therapy for lazy eye.</li>
          <li><strong>Strabismus:</strong> Improve alignment & coordination.</li>
          <li><strong>3D Vision:</strong> Better eye teaming and depth perception.</li>
        </ul>
      </>
    ),
  },
  {
    title: "Low Vision Aids",
    color: "from-purple-400 to-purple-600",
    icon: <FaSearchPlus className="text-purple-600 w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      "We provide customized low vision tools to help patients with vision loss.",
    details: (
      <>
        <strong>Solutions include:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li><strong>Magnifying Devices:</strong> For reading and tasks.</li>
          <li><strong>High-Powered Lenses:</strong> For clear reading.</li>
          <li><strong>Contrast Filters:</strong> For better visibility.</li>
        </ul>
        <p className="mt-2">We help you maximize your remaining vision and live independently.</p>
      </>
    ),
  },
  {
    title: "Dry Eye Evaluation & Management",
    color: "from-blue-400 to-blue-600",
    icon: <FaEyeDropper className="text-blue-600 w-6 h-6 sm:w-8 sm:h-8" />,
    description:
      "Chronic dry eyes? We evaluate causes and provide effective treatment.",
    details: (
      <>
        <strong>Our dry eye workup includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700 text-sm">
          <li><strong>Tear Film Analysis</strong> and quality check</li>
          <li><strong>Meibomian Gland Test</strong> to reduce evaporation</li>
          <li><strong>Ocular Staining</strong> for surface damage</li>
        </ul>
        <p className="mt-2">We create a personalized treatment plan using the latest therapies.</p>
      </>
    ),
  },
];

export default function Services() {
  return (
    <main className="px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl sm:text-4xl font-extrabold text-center mb-6 text-[#7a9f90]">
        Our Eye Care Services
      </h1>

      <p className="max-w-2xl mx-auto text-center text-gray-700 mb-10 text-sm sm:text-base px-2">
        At <span className="text-lg font-bold text-[#7a9f90]">Blinkers</span>, we go beyond basic eye tests — we provide comprehensive, personalized care for every eye at every stage of life. Our range of services includes:
      </p>

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {services.map(({ title, color, icon, description, details }, idx) => (
          <article
            key={idx}
            className={`bg-white rounded-xl shadow-md p-5 sm:p-6 flex flex-col gap-3 border-l-8 border-gradient-to-b ${color} hover:shadow-lg transition-transform duration-300`}
          >
            <header className="flex items-start gap-3">
              <div className="flex-shrink-0">{icon}</div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{title}</h2>
            </header>
            <p className="text-gray-700 text-sm sm:text-base">{description}</p>
            <div className="text-gray-700 text-sm">{details}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
