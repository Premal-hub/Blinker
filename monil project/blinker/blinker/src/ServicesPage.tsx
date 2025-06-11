import React from "react";
import { motion } from "framer-motion";
import {
  FaRegEye,
  FaGlasses,
  FaTint,
  FaCheckCircle,
  FaSearchPlus,
  FaEyeDropper,
  FaBrain,
} from "react-icons/fa";

// Custom Blinking Eye Icon Component
const BlinkingEyeIcon = () => (
  <div className="relative w-14 h-14 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm flex items-center justify-center overflow-hidden">
    <motion.svg
      className="w-10 h-10 text-blue-600"
      viewBox="0 0 64 64"
      initial="open"
      animate="blink"
      variants={{
        open: { scaleY: 1 },
        blink: {
          scaleY: [1, 0.1, 1],
          transition: { repeat: Infinity, duration: 4, times: [0, 0.1, 1] }
        }
      }}
    >
      <path
        d="M2 32c0 0 10-20 30-20s30 20 30 20-10 20-30 20S2 32 2 32z"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <circle cx="32" cy="32" r="8" fill="currentColor" />
    </motion.svg>
  </div>
);

// Services array
const services = [
  {
    title: "Comprehensive Eye Exams",
    color: "from-blue-400 to-blue-600",
    icon: <BlinkingEyeIcon />,
    description:
      "Our detailed eye exams go beyond checking a prescription. We evaluate your overall eye health using advanced diagnostics.",
    details: (
      <>
        <strong>What you get:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Vision testing & prescription updates</li>
          <li>Screening for glaucoma, cataracts, etc.</li>
          <li>Eye coordination & depth perception</li>
          <li>Eye health advice</li>
        </ul>
        <p className="mt-2">Your eyes deserve the best care — and that’s what we deliver.</p>
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
      "Say goodbye to guesswork! Our precise digital instruments measure your lens power with accuracy.",
    details: (
      <>
        <strong>Experience includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Vision simulations</li>
          <li>Custom lens suggestions</li>
          <li>Quick & comfortable testing</li>
        </ul>
        <p className="mt-2">Step into a world of clear sight with confidence!</p>
      </>
    ),
  },
  {
    title: "Advanced Contact Lens Fitting",
    color: "from-red-400 to-red-600",
    icon: <FaGlasses className="text-yellow-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Comfort meets clarity — find your perfect contact lens fit, whether daily, monthly, or colored lenses!",
    details: (
      <>
        <strong>We specialize in:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Scleral Lenses:</strong> Great for keratoconus or dry eyes</li>
          <li><strong>PROSE Devices:</strong> For serious surface disease</li>
          <li><strong>Custom Lenses:</strong> High errors or lifestyle fit</li>
        </ul>
      </>
    ),
  },
  {
    title: "Vision Therapy for Amblyopia (Lazy Eye)",
    color: "from-yellow-400 to-yellow-600",
    icon: <FaBrain className="text-yellow-600 w-8 h-8 animate-pulse" aria-hidden="true" />,
    description:
      "We offer interactive therapy for amblyopia, strabismus, and binocular vision issues — beyond just glasses.",
    details: (
      <>
        <strong>Key benefits:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Train lazy eye & alignment</li>
          <li>Boost eye teaming</li>
          <li>Improve depth & 3D coordination</li>
        </ul>
      </>
    ),
  },
  {
    title: "Low Vision Aids",
    color: "from-purple-400 to-purple-600",
    icon: <FaSearchPlus className="text-purple-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Solutions for permanent vision loss from macular degeneration or diabetic retinopathy.",
    details: (
      <>
        <strong>We provide:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Magnifiers & high-power readers</li>
          <li>Contrast-enhancing filters</li>
          <li>Assistive tools for daily life</li>
        </ul>
      </>
    ),
  },
  {
    title: "Dry Eye Evaluation & Management",
    color: "from-blue-400 to-blue-600",
    icon: <FaEyeDropper className="text-blue-600 w-8 h-8" aria-hidden="true" />,
    description:
      "We diagnose and treat chronic dry eyes using modern tear film and gland analysis.",
    details: (
      <>
        <strong>Includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Tear quality & volume tests</li>
          <li>Oil gland assessments</li>
          <li>Ocular surface damage checks</li>
        </ul>
      </>
    ),
  },
];

export default function Services() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-extrabold text-center mb-6 text-[#7a9f90]">
        Our Eye Care Services
      </h1>
      <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-lg italic">
        At <span className="text-2xl font-extrabold text-[#7a9f90] drop-shadow-md">Blinkers</span>, we go beyond basic eye tests — we provide comprehensive, personalized care for every eye at every stage of life.
      </p>
      <section className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map(({ title, color, icon, description, details }, idx) => (
          <article
            key={idx}
            className={`bg-white bg-opacity-70 backdrop-blur-md rounded-xl shadow-lg p-8 flex flex-col gap-5 border-l-8 border-gradient-to-b ${color} hover:shadow-2xl hover:scale-[1.05] transition-transform duration-300 cursor-pointer`}
            role="region"
            aria-labelledby={`service-${idx}`}
          >
            <header className="flex items-center gap-4">
              <div className="flex-shrink-0">{icon}</div>
              <h2
                id={`service-${idx}`}
                className="text-3xl font-semibold text-gray-800"
              >
                {title}
              </h2>
            </header>
            <p className="text-gray-800 font-semibold">{description}</p>
            <div className="text-gray-700">{details}</div>
          </article>
        ))}
      </section>
    </main>
  );
}
