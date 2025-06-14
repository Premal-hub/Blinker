// Services.tsx
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

const services = [
  {
    title: "Comprehensive Eye Exams",
    icon: <FaEye className="text-3xl text-blue-600" />,
    description: (
      <>
        <p className="mb-2">
          Our detailed eye exams are more than just checking a prescription. We
          evaluate the overall health of your eyes using advanced equipment,
          assessing for refractive errors, binocular vision issues, eye pressure
          (for glaucoma risk), and signs of retinal or corneal diseases. Early
          detection is the key to long-term vision health.
        </p>
        <p className="font-semibold mb-1">What you get:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Precise vision testing & prescription updates</li>
          <li>Screenings for glaucoma, cataracts & more</li>
          <li>Assessment of eye coordination & depth perception</li>
          <li>Personalized advice for maintaining eye health</li>
        </ul>
      </>
    ),
  },
  {
    title: "Eye Number Testing",
    icon: <FaSearchPlus className="text-3xl text-green-600" />,
    description: (
      <>
        <p className="mb-2">
          Say goodbye to guesswork! Our precise digital instruments measure your
          exact lens power with incredible accuracy.
        </p>
        <p className="font-semibold mb-1">Experience includes:</p>
        <ul className="list-disc list-inside space-y-1">
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
    icon: <FaGlasses className="text-3xl text-orange-500" />,
    description: (
      <>
        <p className="mb-2">
          Comfort meets clarity — find your perfect contact lens fit, whether
          daily, monthly, or colored lenses!
        </p>
        <p className="font-semibold mb-1">We specialize in fitting:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>
            <strong>Scleral Lenses:</strong> Complex conditions like keratoconus,
            ocular surface disease, etc.
          </li>
          <li>
            <strong>PROSE Lenses:</strong> For extreme corneal scarring or
            irregularities.
          </li>
          <li>
            <strong>Custom Soft & RGP Lenses:</strong> For high refractive
            errors, irregular corneas, and lifestyle needs.
          </li>
        </ul>
        <p className="mt-2">
          Each fit is customized with corneal topography and slit lamp
          evaluations.
        </p>
      </>
    ),
  },
  {
    title: "Vision Therapy for Amblyopia (Lazy Eye)",
    icon: <FaRegEye className="text-3xl text-red-500" />,
    description: (
      <>
        <p className="mb-2">
          We offer evidence-based therapy for amblyopia, strabismus, or other
          binocular vision issues. Our programs enhance coordination and depth
          perception — going beyond just glasses.
        </p>
        <p className="font-semibold mb-1">Key therapy benefits:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Targeted therapy for children & adults</li>
          <li>Improves alignment (Strabismus & Eye Turn)</li>
          <li>Enhances depth perception & binocular vision</li>
          <li>Strengthens tracking & visual skills</li>
        </ul>
      </>
    ),
  },
  {
    title: "Low Vision Aids",
    icon: <FaEyeDropper className="text-3xl text-purple-600" />,
    description: (
      <>
        <p className="mb-2">
          We provide customized solutions to help patients with permanent vision
          loss live more independently and comfortably.
        </p>
        <p className="font-semibold mb-1">Solutions include:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Magnifying Devices</li>
          <li>High-Powered Reading Aids</li>
          <li>Contrast-Enhancing Filters</li>
          <li>Assistive Tools for Daily Living</li>
        </ul>
        <p className="mt-2">
          Our goal: help you get the most out of your remaining vision.
        </p>
      </>
    ),
  },
  {
    title: "Dry Eye Evaluation & Management",
    icon: <FaTint className="text-3xl text-blue-500" />,
    description: (
      <>
        <p className="mb-2">
          Chronic dry eyes can cause discomfort, blurred vision, and eye damage.
          We identify the root causes and offer an effective plan.
        </p>
        <p className="font-semibold mb-1">Our dry eye workup includes:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Tear Film Analysis</li>
          <li>Meibomian Gland Assessment</li>
          <li>Fluorescein Staining</li>
          <li>Environmental & Lifestyle Screening</li>
        </ul>
        <p className="mt-2">
          Based on findings, we create a personalized treatment plan that may
          include lubricants, in-office therapies, and more.
        </p>
      </>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-extrabold text-green-700 mb-2">
          Our Eye Care Services
        </h2>
        <p className="text-gray-500 italic">
          At <span className="font-semibold text-green-700">Blinkers</span>, we
          go beyond basic eye tests — we provide comprehensive, personalized
          care for every eye at every stage of life.
        </p>
        <p className="text-gray-500 mt-1">
          Our range of services includes:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-xl transition"
          >
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
            </div>
            <div className="text-sm text-gray-700">{service.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
