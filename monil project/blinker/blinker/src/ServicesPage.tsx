// Services.tsx

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const services = [
  {
    title: "Comprehensive Eye Exams",
    description: "Thorough evaluations using the latest technology to assess your vision and eye health.",
    icon: <FaEye />,
  },
  {
    title: "Pediatric Eye Care",
    description: "Gentle and friendly eye care tailored for children to ensure healthy vision development.",
    icon: <FaRegEye />,
  },
  {
    title: "Eyewear and Glasses",
    description: "Wide range of stylish frames and high-quality lenses to match your needs and style.",
    icon: <FaGlasses />,
  },
  {
    title: "Contact Lens Fitting",
    description: "Precise fitting and guidance for first-time and experienced contact lens users.",
    icon: <FaTint />,
  },
  {
    title: "Dry Eye Treatment",
    description: "Advanced solutions to relieve irritation and improve eye moisture.",
    icon: <FaCheckCircle />,
  },
  {
    title: "Vision Therapy",
    description: "Personalized programs to improve coordination, focus, and visual processing.",
    icon: <FaBrain />,
  },
  {
    title: "LASIK Consultation",
    description: "Expert advice and pre-surgery evaluations for laser vision correction.",
    icon: <FaSearchPlus />,
  },
  {
    title: "Color Vision Testing",
    description: "Detailed tests to identify color blindness and related conditions.",
    icon: <FaEyeDropper />,
  },
];

// ✅ Gallery Data
const galleryItems = [
  {
    type: "image",
    src: "/images/eye1.jpg",
    title: "Advanced Diagnostics",
    description: "State-of-the-art equipment for accurate eye exams.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/2xBY3H6CZ1o",
    title: "Dry Eye Explained",
    description: "A quick video on how dry eye syndrome works and how we treat it.",
  },
  {
    type: "image",
    src: "/images/eye2.jpg",
    title: "Contact Lens Lab",
    description: "Custom fitting lab for specialized lenses.",
  },
  {
    type: "youtube",
    src: "https://www.youtube.com/embed/hhVGZvn7HfA",
    title: "Children Eye Health",
    description: "Why early eye care is crucial for kids.",
  },
  {
    type: "image",
    src: "/images/eye3.jpg",
    title: "Vision Therapy Room",
    description: "Dedicated space for guided eye exercises and digital therapy.",
  },
];

export default function Services() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="px-4 py-10 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#7a9f90] mb-6">Our Services</h2>
      <p className="text-center text-gray-600 mb-10">
        We offer a comprehensive range of eye care services tailored to meet the unique needs of every patient.
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
          >
            <div className="text-4xl text-[#7a9f90] mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-gray-600 text-sm">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Gallery Section */}
      <section className="w-full px-4 py-16 bg-gray-100 mt-16 rounded-xl">
        <h2 className="text-4xl font-bold text-center mb-10 text-[#7a9f90]">Clinic Gallery & Videos</h2>

        <div className="relative flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
          {galleryItems.map((item, index) => {
            const isSelected = selected === index;

            return (
              <motion.div
                key={index}
                layout
                onClick={() => setSelected(index)}
                className={`relative cursor-pointer w-[280px] sm:w-[300px] md:w-[320px] transition-transform duration-300 ${
                  isSelected ? "z-50 scale-105" : "z-10 hover:z-20 hover:scale-105"
                }`}
                style={{
                  marginLeft: index % 2 === 0 ? "-40px" : "0",
                  marginRight: index % 2 !== 0 ? "-40px" : "0",
                }}
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="rounded-xl shadow-lg w-full h-56 object-cover"
                  />
                ) : (
                  <div className="w-full h-56 rounded-xl overflow-hidden shadow-lg">
                    <iframe
                      src={item.src}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="w-full h-full"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}

                {/* Description Box */}
                <AnimatePresence>
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className={`absolute top-0 ${
                        index % 2 === 0 ? "right-full mr-4" : "left-full ml-4"
                      } w-64 bg-white p-4 rounded-xl shadow-xl z-50`}
                    >
                      <h3 className="text-lg font-semibold text-[#7a9f90]">{item.title}</h3>
                      <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
