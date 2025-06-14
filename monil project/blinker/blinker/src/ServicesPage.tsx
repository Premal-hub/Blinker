import React from "react";
import {
  FaEye,
  FaSearchPlus,
  FaGlasses,
  FaEyeDropper,
  FaLowVision,
  FaTint,
} from "react-icons/fa";
import { MdRemoveRedEye } from "react-icons/md";

const services = [
  {
    icon: <FaEye className="text-blue-600 text-2xl" />,
    title: "Comprehensive Eye Exams",
    description: `Our detailed eye exams are more than just checking a prescription. We evaluate the overall health of your eyes using advanced equipment, assessing for refractive errors, binocular vision issues, eye pressure (for glaucoma risk), and signs of retinal or corneal diseases. Early detection is the key to long-term vision health.`,
    listTitle: "What you get:",
    points: [
      "Precise vision testing & prescription updates",
      "Screenings for glaucoma, cataracts & more",
      "Assessment of eye coordination & depth perception",
      "Personalized advice for maintaining eye health",
    ],
  },
  {
    icon: <FaSearchPlus className="text-green-600 text-2xl" />,
    title: "Eye Number Testing",
    description: `Say goodbye to guesswork! Our precise digital instruments measure your exact lens power with incredible accuracy.`,
    listTitle: "Experience includes:",
    points: [
      "Instant, real-time vision simulations",
      "Custom lens recommendations tailored to your needs",
      "Comfortable & quick testing process",
    ],
    footer: "Step into a world of clear sight with confidence!",
  },
  {
    icon: <FaGlasses className="text-amber-600 text-2xl" />,
    title: "Advanced Contact Lens Fitting",
    description: `Comfort meets clarity — find your perfect contact lens fit, whether daily, monthly, or colored lenses! We specialize in fitting a wide range of specialty contact lenses, including:`,
    listTitle: "",
    points: [
      "**Scleral Lenses:** Ideal for complex corneal conditions like keratoconus, post-LASIK ectasia, ocular surface disease, and severe dry eye.",
      "**PROSE Lenses:** Advanced prosthetic devices designed for patients with extreme ocular surface irregularities.",
      "**Custom Soft & RGP Lenses:** For high refractive errors, irregular corneas, or specific lifestyle needs.",
    ],
    footer:
      "Each fit is customized with corneal topography and slit lamp evaluations to ensure optimal comfort and performance.",
  },
  {
    icon: <MdRemoveRedEye className="text-red-600 text-2xl" />,
    title: "Vision Therapy for Amblyopia (Lazy Eye)",
    description: `We offer evidence-based vision therapy programs for children and adults with amblyopia, strabismus, or other binocular vision issues.`,
    listTitle: "Key therapy benefits include:",
    points: [
      "Targeted for Amblyopia: Effective therapy for 'lazy eye' in both children and adults.",
      "Strabismus & Eye Turn: Improve alignment and coordination between both eyes.",
      "Enhanced Depth Perception: Train your brain and eyes to work together in 3D space.",
      "Binocular Vision Support: Strengthen eye teaming for better focus and tracking.",
      "Functional Vision Improvement: Go beyond glasses with lasting visual skill gains.",
    ],
  },
  {
    icon: <FaLowVision className="text-purple-600 text-2xl" />,
    title: "Low Vision Aids",
    description: `We provide customized low vision solutions to help patients with permanent vision loss live more independently and comfortably.`,
    listTitle:
      "Tailored solutions for conditions like macular degeneration, diabetic retinopathy, or retinal dystrophies:",
    points: [
      "Magnifying Devices: Enhance near and distance vision for reading and daily tasks.",
      "High-Powered Reading Aids: Specialized lenses and tools to boost reading clarity.",
      "Contrast-Enhancing Filters: Improve visual definition and safety in low-light environments.",
      "Assistive Tools for Daily Living: Practical tools and training to improve independence.",
    ],
    footer:
      "Our goal is to help you make the most of your remaining vision and enhance your quality of life with smart, effective support.",
  },
  {
    icon: <FaTint className="text-indigo-600 text-2xl" />,
    title: "Dry Eye Evaluation & Management",
    description: `Chronic dry eyes can cause discomfort, blurred vision, and damage to your eyes. At Blinkers, we offer a comprehensive dry eye evaluation to identify the root causes and develop an effective management plan.`,
    listTitle: "Our dry eye workup includes:",
    points: [
      "Tear Film Analysis: Evaluating the quality and quantity of your tears to detect dryness.",
      "Meibomian Gland Assessment: Checking the glands that secrete oil into your tears to prevent evaporation.",
      "Fluorescein Staining: A test to check for damage to the ocular surface caused by dryness.",
      "Environmental & Lifestyle Screening: Identifying external factors and habits contributing to dry eyes.",
    ],
    footer:
      "Based on these findings, we create a personalized treatment plan that includes lubricants, in-office therapies, lid hygiene, and preventive care tailored to your needs.",
  },
];

const Services = () => {
  return (
    <section className="px-6 md:px-12 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-700">
          Our Eye Care Services
        </h2>
        <p className="text-gray-600 mt-2">
          At <span className="italic font-semibold text-green-600">Blinkers</span>, we go
          beyond basic eye tests — we provide comprehensive, personalized care for every
          eye at every stage of life. Our range of services includes:
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-4">
              <div className="mr-3">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">{service.description}</p>
            {service.listTitle && (
              <h4 className="font-semibold text-gray-800 mb-1">{service.listTitle}</h4>
            )}
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              {service.points.map((point, i) => (
                <li key={i}>
                  {point.includes("**") ? (
                    <span
                      dangerouslySetInnerHTML={{
                        __html: point.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                      }}
                    />
                  ) : (
                    point
                  )}
                </li>
              ))}
            </ul>
            {service.footer && (
              <p className="text-gray-700 text-sm mt-3">{service.footer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
