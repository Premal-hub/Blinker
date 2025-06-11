import React from "react";
import {
  FaEye,
  FaRegEye,
  FaGlasses,
  FaTint,
  FaCheckCircle,
} from "react-icons/fa";

// Service data structure for eye clinic
const services = [
  {
    title: "Comprehensive Eye Exams",
    color: "from-blue-400 to-blue-600",
    // icon: <FaEye className="text-blue-600 w-8 h-8" aria-hidden="true" />,
   icon: (
  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white via-[#eaf3f0] to-[#d4e6e0] shadow-inner shadow-white/70 border border-[#c2d5ce] flex items-center justify-center">
    <FaEye className="text-[#2f4f4f] w-7 h-7 drop-shadow-md" aria-hidden="true" />
  </div>
)

    {/* Glassy background circle */}
    <div className="relative z-10 w-14 h-14 rounded-full bg-white/30 backdrop-blur-md shadow-xl border border-white/40 group-hover:scale-105 transition-transform duration-300">
      <div className="w-full h-full flex items-center justify-center">
        <FaEye className="text-blue-700 w-8 h-8 drop-shadow-md" aria-hidden="true" />
      </div>
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
    icon: <FaCheckCircle className="text-green-600 w-8 h-8" aria-hidden="true" />,
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
      // icon: <FaGlasses className="text-yellow-600 w-8 h-8" aria-hidden="true" />,

{
  title: "Vision Therapy for Amblyopia (Lazy Eye)",
  color: "from-yellow-400 to-yellow-600",
  icon: React.createElement(FaRegEye, {
    className: "text-red-600 w-8 h-8",
    "aria-hidden": "true",
  }),
  description:
    "Personalized therapy to improve eye coordination, depth perception, and visual performance beyond glasses.",
  details: (
    <>
      <p>
        <strong>We offer evidence-based vision therapy programs for:</strong>
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Children and adults with amblyopia (lazy eye)</li>
        <li>Strabismus (eye turn) and binocular vision dysfunctions</li>
        <li>Challenges in depth perception and visual coordination</li>
      </ul>
      <p className="mt-4">
        Our therapy includes a combination of digital and interactive exercises designed to:
      </p>
      <ul className="list-disc list-inside mt-2 text-gray-700">
        <li>Strengthen eye teaming and coordination</li>
        <li>Enhance depth perception and visual tracking</li>
        <li>Support functional vision improvement beyond glasses</li>
      </ul>
    </>
  ),
},
  

  {
    title: "Dry Eye Treatment",
    color: "from-purple-400 to-purple-600",
    icon: <FaTint className="text-purple-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Don’t let dry, irritated eyes hold you back. Our expert treatments soothe, heal, and protect your vision.",
    details: (
      <>
        <strong>Care includes:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Personalized treatment plans</li>
          <li>Advanced therapies like thermal treatment & medicated drops</li>
          <li>Guidance on lifestyle changes for lasting relief</li>
        </ul>
        <p className="mt-2">
          Feel the difference and enjoy comfortable, healthy eyes every day.
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
