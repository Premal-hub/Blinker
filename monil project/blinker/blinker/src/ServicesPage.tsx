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

// Service data structure for eye clinic
const services = [
  {
    title: "Comprehensive Eye Exams",
    color: "from-blue-400 to-blue-600",
   // icon: <FaEye className="text-blue-600 w-8 h-8" aria-hidden="true" />,
icon: (
  <div className="relative w-14 h-14 rounded-full bg-white/50 backdrop-blur-md border border-gray-200 shadow-sm transition-transform duration-500 transform-gpu hover:rotate-3 hover:scale-105 group/icon">
    
    {/* Ambient glow */}
    <div className="absolute inset-0 rounded-full bg-white opacity-20 blur-md z-0" />

    {/* Eye Icon stays large */}
    <div className="relative z-10 flex items-center justify-center w-full h-full">
      <FaEye className="text-blue-600 w-8 h-8 drop-shadow-sm group-hover/icon:scale-110 transition-transform duration-300 ease-in-out" aria-hidden="true" />
    </div>
  </div>
),
    
    
    description:
      "Our detailed eye exams are more than just checking a prescription. We evaluate the overall health of your eyes using advanced equipment, assessing for refractive errors, binocular vision issues, eye pressure (for glaucoma risk), and signs of retinal or corneal diseases. Early detection is the key to long-term vision health.",
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
    // icon: <FaCheckCircle className="text-green-600 w-8 h-8" aria-hidden="true" />,

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



    
    description:
      "Say goodbye to guesswork! Our precise digital instruments measure your exact lens power with incredible accuracy.",
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
     // icon: <FaRegEye className="text-red-600 w-8 h-8" aria-hidden="true" />,
     icon: <FaGlasses className="text-yellow-600 w-8 h-8" aria-hidden="true" />,
 
    description:
      "Comfort meets clarity — find your perfect contact lens fit, whether daily, monthly, or colored lenses!",
    details: (
      <>
        <strong>We specialize in fitting a wide range of specialty contact lenses, including:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
       
           <li>
        <strong>Scleral Lenses:</strong> Ideal for complex corneal conditions like keratoconus, post-LASIK ectasia, ocular surface disease, and severe dry eye. These lenses vault over the cornea, providing both vision correction and therapeutic relief.
      </li>
      <li>
        <strong>PROSE Lenses:</strong> Advanced prosthetic devices designed for patients with extreme ocular surface irregularities or scarring.
      </li>
      <li>
        <strong>Custom Soft & RGP Lenses:</strong> For high refractive errors, irregular corneas, or specific lifestyle needs.
      </li>
        </ul>
        <p className="mt-2">
         Each fit is customized with corneal topography and slit lamp evaluations to ensure optimal comfort and performance.
        </p>
      </>
    ),
  },

{
 
  title: "Vision Therapy for Amblyopia (Lazy Eye)",
  color: "from-yellow-400 to-yellow-600",
  icon: React.createElement(FaBrain, {
    className: "text-yellow-600 w-8 h-8 animate-pulse", // animate-pulse for soft future animation
    "aria-hidden": "true",
  }),
  description:
    "We offer evidence-based vision therapy programs for children and adults with amblyopia, strabismus, or other binocular vision issues. Our digital and interactive therapy improves visual coordination, eye teaming, and depth perception — enhancing vision beyond just glasses.",
  details: (
    <>
      <p>
        <strong>Key therapy benefits include:</strong>
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>
          <strong>Targeted for Amblyopia:</strong> Effective therapy for 'lazy
          eye' in both children and adults.
        </li>
        <li>
          <strong>Strabismus & Eye Turn:</strong> Improve alignment and
          coordination between both eyes.
        </li>
        <li>
          <strong>Enhanced Depth Perception:</strong> Train your brain and eyes
          to work together in 3D space.
        </li>
        <li>
          <strong>Binocular Vision Support:</strong> Strengthen eye teaming for
          better focus and tracking.
        </li>
        <li>
          <strong>Functional Vision Improvement:</strong> Go beyond glasses with
          lasting visual skill gains.
        </li>
      </ul>
    </>
  ),

},
  
{
    title: "Low Vision Aids",
    color: "from-purple-400 to-purple-600",
    icon: <FaSearchPlus className="text-purple-600 w-8 h-8" aria-hidden="true" />,
    description:
      "We provide customized low vision solutions to help patients with permanent vision loss live more independently and comfortably.",
    details: (
      <>
        <strong>Tailored solutions for conditions like macular degeneration, diabetic retinopathy, or retinal dystrophies:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Magnifying Devices:</strong> Enhance near and distance vision for reading and daily tasks.</li>
          <li><strong>High-Powered Reading Aids:</strong> Specialized lenses and tools to boost reading clarity.</li>
          <li><strong>Contrast-Enhancing Filters:</strong> Improve visual definition and safety in low-light environments.</li>
          <li><strong>Assistive Tools for Daily Living:</strong> Practical tools and training to improve independence.</li>
        </ul>
        <p className="mt-2">
          Our goal is to help you make the most of your remaining vision and enhance your quality of life with smart, effective support.
        </p>
      </>
    ),
  },
  {
    title: "Dry Eye Evaluation & Management",
    color: "from-blue-400 to-blue-600",
    icon: <FaEyeDropper className="text-blue-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Chronic dry eyes can cause discomfort, blurred vision, and damage to your eyes. At Blinkers, we offer a comprehensive dry eye evaluation to identify the root causes and develop an effective management plan.",
    details: (
      <>
        <strong>Our dry eye workup includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>Tear Film Analysis:</strong> Evaluating the quality and quantity of your tears to detect dryness.</li>
          <li><strong>Meibomian Gland Assessment:</strong> Checking the glands that secrete oil into your tears to prevent evaporation.</li>
          <li><strong>Fluorescein Staining:</strong> A test to check for damage to the ocular surface caused by dryness.</li>
          <li><strong>Environmental & Lifestyle Screening:</strong> Identifying external factors and habits contributing to dry eyes.</li>
        </ul>
        <p className="mt-2">
          Based on these findings, we create a personalized treatment plan that includes lubricants, in-office therapies, lid hygiene, and preventive care tailored to your needs.
        </p>
      </>
    ),
  },

];

export default function Services() {
  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1
        className="text-5xl font-extrabold text-center mb-6 text-[#7a9f90]"
        aria-label="Our Eye Care Services"
      >
        Our Eye Care Services
      </h1>

    <p className="max-w-3xl mx-auto text-center text-gray-700 mb-12 text-lg italic">
  At <span className="text-2xl font-extrabold text-[#7a9f90] drop-shadow-md">Blinkers</span>, we go beyond basic eye tests — we provide comprehensive, personalized care for every eye at every stage of life. Our range of services includes:
</p>


      <section
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto"
        aria-label="Service cards"
      >
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

