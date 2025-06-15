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

const services = [
  {
    title: "Comprehensive Eye Exams",
    color: "from-blue-400 to-blue-600",
    icon: (
      <div className="relative w-14 h-14 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm transition-transform duration-500 transform-gpu hover:rotate-3 hover:scale-105 group/icon">
        <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md z-0" />
        <div className="relative z-10 flex items-center justify-center w-full h-full">
          <FaEye className="text-blue-600 w-8 h-8 drop-shadow-sm group-hover/icon:scale-110 transition-transform duration-300 ease-in-out" aria-hidden="true" />
        </div>
      </div>
    ),
    description:
      "Our detailed eye exams are more than just checking a prescription...",
    details: (
      <>
        <strong>What you get:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Precise vision testing & prescription updates</li>
          <li>Screenings for glaucoma, cataracts & more</li>
          <li>Assessment of eye coordination & depth perception</li>
          <li>Personalized advice for maintaining eye health</li>
        </ul>
        <p className="mt-2">
          Your eyes deserve the best care — and that’s exactly what we deliver.
        </p>
      </>
    ),
  },
  {
    title: "Eye Number Testing",
    color: "from-green-400 to-green-600",
    icon: (
      <div className="relative w-14 h-14 rounded-full bg-green-500 shadow-md flex items-center justify-center">
        <svg
          className="w-10 h-10 text-white"
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
              0% { stroke-dashoffset: 300; }
              100% { stroke-dashoffset: 0; }
            }
          `}
        </style>
      </div>
    ),
    description:
      "Say goodbye to guesswork! Our precise digital instruments measure your exact lens power...",
    details: (
      <>
        <strong>Experience includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
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
        className="relative w-14 h-14 bg-white/70 backdrop-blur-lg rounded-full shadow-xl overflow-hidden flex items-center justify-center"
        whileHover={{ rotateY: 10, rotateX: -5, scale: 1.05 }}
        animate={{ y: [0, -2, 0] }}
        transition={{ type: "spring", damping: 10, stiffness: 80, repeat: Infinity, duration: 2 }}
        style={{ perspective: 1000 }}
      >
        <div className="absolute inset-0 rounded-full bg-yellow-300 opacity-20 blur-md z-0" />
        <FaGlasses className="text-yellow-800 w-8 h-8 z-10 drop-shadow" />
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
        <strong>We specialize in fitting a wide range of specialty contact lenses, including:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Scleral Lenses:</strong> Ideal for complex corneal conditions...</li>
          <li><strong>PROSE Lenses:</strong> Advanced prosthetic devices...</li>
          <li><strong>Custom Soft & RGP Lenses:</strong> For high refractive errors...</li>
        </ul>
        <p className="mt-2">
          Each fit is customized with corneal topography and slit lamp evaluations...
        </p>
      </>
    ),
  },
  {
    title: "Vision Therapy for Amblyopia (Lazy Eye)",
    color: "from-yellow-400 to-yellow-600",
    icon: <FaBrain className="text-yellow-600 w-8 h-8 animate-pulse" aria-hidden="true" />,
    description:
      "We offer evidence-based vision therapy programs for children and adults...",
    details: (
      <>
        <strong>Key therapy benefits include:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Targeted for Amblyopia:</strong> Effective therapy...</li>
          <li><strong>Strabismus & Eye Turn:</strong> Improve alignment...</li>
          <li><strong>Enhanced Depth Perception:</strong> Train your brain...</li>
          <li><strong>Binocular Vision Support:</strong> Strengthen eye teaming...</li>
          <li><strong>Functional Vision Improvement:</strong> Go beyond glasses...</li>
        </ul>
      </>
    ),
  },
  {
    title: "Low Vision Aids",
    color: "from-purple-400 to-purple-600",
    icon: <FaSearchPlus className="text-purple-600 w-8 h-8" aria-hidden="true" />,
    description:
      "We provide customized low vision solutions to help patients with permanent vision loss...",
    details: (
      <>
        <strong>Tailored solutions for conditions like macular degeneration:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Magnifying Devices:</strong> Enhance near and distance vision...</li>
          <li><strong>High-Powered Reading Aids:</strong> Specialized lenses and tools...</li>
          <li><strong>Contrast-Enhancing Filters:</strong> Improve visual definition...</li>
          <li><strong>Assistive Tools:</strong> Practical tools and training...</li>
        </ul>
        <p className="mt-2">Our goal is to help you make the most of your remaining vision...</p>
      </>
    ),
  },
  {
    title: "Dry Eye Evaluation & Management",
    color: "from-blue-400 to-blue-600",
    icon: <FaEyeDropper className="text-blue-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Chronic dry eyes can cause discomfort, blurred vision, and damage...",
    details: (
      <>
        <strong>Our dry eye workup includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Tear Film Analysis:</strong> Evaluating tear quality...</li>
          <li><strong>Meibomian Gland Assessment:</strong> Checking glands...</li>
          <li><strong>Fluorescein Staining:</strong> Checks for damage...</li>
          <li><strong>Environmental & Lifestyle Screening:</strong> Identifying causes...</li>
        </ul>
        <p className="mt-2">
          Based on these findings, we create a personalized treatment plan...
        </p>
      </>
    ),
  },
];

export default function Services() {
  return (
    <main className="px-4 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-[#7a9f90]">
        Our Eye Care Services
      </h1>

      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-base md:text-lg italic px-2">
        At <span className="text-xl md:text-2xl font-extrabold text-[#7a9f90] drop-shadow-md">Blinkers</span>, we go beyond basic eye tests — we provide comprehensive, personalized care for every eye at every stage of life.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto px-2 md:px-4" aria-label="Service cards">
        {services.map(({ title, color, icon, description, details }, idx) => (
          <article
            key={idx}
            className={`bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-6 flex flex-col gap-5 border-l-8 border-gradient-to-b ${color} hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300`}
          >
            <header className="flex items-center gap-4 flex-wrap">
              <div className="flex-shrink-0">{icon}</div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                {title}
              </h2>
            </header>
            <p className="text-gray-800 font-semibold text-sm md:text-base">{description}</p>
            <div className="text-gray-700 text-sm md:text-base">{details}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
