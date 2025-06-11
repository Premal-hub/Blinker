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
    icon: <FaEye className="text-blue-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Discover the power of crystal-clear vision! Our thorough eye exams use state-of-the-art technology to detect issues early and keep your eyes healthy.",
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
    title: "Contact Lens Fitting",
    color: "from-red-400 to-red-600",
    icon: <FaRegEye className="text-red-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Comfort meets clarity — find your perfect contact lens fit, whether daily, monthly, or colored lenses!",
    details: (
      <>
        <strong>Our fitting process ensures:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Thorough eye health check before fitting</li>
          <li>Trial lenses to guarantee perfect fit & comfort</li>
          <li>Expert tips on lens care & safe wear</li>
        </ul>
        <p className="mt-2">
          Enjoy freedom and clear vision with hassle-free contacts tailored just for you.
        </p>
      </>
    ),
  },
  {
    title: "Designer Glasses & Sunglasses",
    color: "from-yellow-400 to-yellow-600",
    icon: <FaGlasses className="text-yellow-600 w-8 h-8" aria-hidden="true" />,
    description:
      "Make a statement with eyewear that’s uniquely you. Trendy, classic, or bold — we’ve got the styles to fit your vibe.",
    details: (
      <>
        <strong>Highlights:</strong>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>Wide range of prescription & non-prescription frames</li>
          <li>Expert styling advice based on your face shape</li>
          <li>UV protection & polarized lenses for outdoor comfort</li>
        </ul>
        <p className="mt-2">Look great and see clearly — your perfect pair awaits.</p>
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
       At <h3 className="text-2xl font-extrabold text-[#7a9f90] drop-shadow-md">Blinkers</h3>, we go beyond basic eye tests — we provide comprehensive, personalized care for every eye at every stage of life. Our range of services includes:

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
