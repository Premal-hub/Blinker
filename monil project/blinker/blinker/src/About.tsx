import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="mb-12 p-6 md:p-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-3xl border border-[#c6ddd5]/50"
  >
    <h2 className="text-3xl font-bold mb-4 text-[#31473d] border-l-4 border-[#7a9f90] pl-4">
      {title}
    </h2>
    <div className="text-[#3c544b]/90 space-y-3">{children}</div>
  </motion.section>
);

interface CounterProps {
  value: number;
  label: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ value, label, duration = 2 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="bg-white p-4 rounded-2xl shadow-md"
  >
    <span className="text-4xl font-bold text-[#3c544b]">
      <CountUp end={value} duration={duration} />+
    </span>
    <div className="mt-1 text-sm text-[#7a9f90]">{label}</div>
  </motion.div>
);

const About: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/contact", { replace: false });
  };

  return (
    <div className="font-sans bg-gradient-to-b from-[#eaf2ee] to-white min-h-screen text-[#3c544b] pb-20">
      <main className="max-w-5xl mx-auto pt-14 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl font-extrabold mb-4 text-center text-[#31473d]"
        >
          Welcome to <span className="text-[#7a9f90]">Blinkers</span>
        </motion.h1>

        <p className="text-lg mb-10 text-center max-w-3xl mx-auto leading-relaxed">
          At <b>Blinkers</b>, we believe your vision is priceless. We combine compassionate care with cutting-edge technology to deliver eye health solutions tailored uniquely to you. Every blink matters, and so does your experience with us — warm, expert, and always patient-focused.
        </p>

        {/* Sections */}
        <Section title="Our Story">
          <p>
            Born from a passion for advancing eye care, <b>Blinkers</b> traces its roots back to the renowned <b>Contact Lens Institute of Pune (CLIP)</b>. Since our inception on <b>March 1st, 2020</b>, we have grown into Surat's leading center for specialized contact lens treatments.
          </p>
          <p>
            Our journey is one of dedication and transformation — evolving from a vision of accessibility and excellence into a trusted name where patients receive not only treatment but heartfelt care.
          </p>
        </Section>

        <Section title="What Makes Blinkers Unique?">
          <ul className="list-disc pl-6 space-y-2">
            <li><b>State-of-the-art diagnostics:</b> Latest imaging and lens tech.</li>
            <li><b>Compassionate care:</b> A warm, stress-free environment.</li>
            <li><b>Customized treatments:</b> Individualized for all age groups.</li>
            <li><b>Specialized expertise:</b> Handling the most complex cases.</li>
            <li><b>Follow-up commitment:</b> Evidence-based monitoring.</li>
          </ul>
        </Section>

        <Section title="Our Vision, Mission & Values">
          <p>
            <b>Vision:</b> To be the gold standard in eye care — where technology meets empathy.
          </p>
          <p>
            <b>Mission:</b> Innovate in contact lens design and clinical excellence.
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Patient-first care philosophy.</li>
            <li>Strict confidentiality & hygiene protocols.</li>
            <li>Respect and empathy in every interaction.</li>
          </ul>
        </Section>

        {/* Achievement Counters */}
        <motion.section
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16 p-6 md:p-8 bg-white/70 backdrop-blur-lg shadow-lg rounded-3xl border border-[#c6ddd5]/50"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#31473d]">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {inView && (
              <>
                <Counter value={15} label="Specialized Areas of Expertise" />
                <Counter value={500} label="Satisfied Patients Served" duration={2.5} />
                <Counter value={5} label="Years of Clinical Excellence" />
                <Counter value={3} label="Awards and accolades" />
              </>
            )}
          </div>
        </motion.section>

        <Section title="Why Choose Blinker?">
          <ul className="list-disc pl-6 space-y-2">
            <li><b>Advanced Contact Lens Care:</b> Safe, accurate fittings every time.</li>
            <li><b>Standardized Protocols:</b> Consistent, proven outcomes.</li>
            <li><b>Modern Facilities:</b> Designed for comfort and efficiency.</li>
            <li><b>Expert Team:</b> Skilled professionals with patient-first values.</li>
          </ul>
        </Section>

        <Section title="Your Vision is Our Passion">
          <p>
            We prioritize your eye health above all. Our assessments precede every lens dispensing to ensure safety and effectiveness.
          </p>
          <p className="font-bold text-[#7a9f90]">
            Blinker stands firmly against any non-clinical dispensing practices — your eyes deserve expert care only.
          </p>
        </Section>

        {/* Contact Button */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={handleContactClick}
            className="bg-[#7a9f90] hover:bg-[#3c544b] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7a9f90]"
            aria-label="Contact Us"
          >
            Contact Us
          </button>
        </motion.section>
      </main>
    </div>
  );
};

export default About;
