import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import doctorPhoto from "./PHOTO-2025-05-16-02-25-37.jpg";

const Doctor: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => {
    setModalOpen(true);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top when modal opens
  }, []);

  const closeModal = useCallback(() => setModalOpen(false), []);

  return (
    <main
      className="min-h-screen bg-gradient-to-br from-[#e4f4f1] via-white to-[#d0e7e1] flex items-center justify-center p-8"
      aria-labelledby="doctor-title"
    >
      <section className="relative max-w-4xl w-full p-12 bg-white bg-opacity-30 backdrop-blur-lg rounded-3xl shadow-2xl border border-[#7a9f90] overflow-hidden">
        {/* Background Circles */}
        <div className="absolute -top-16 -left-16 w-40 h-40 bg-[#7a9f90] rounded-full opacity-20 animate-slow-spin blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-28 h-28 bg-[#a2b9ae] rounded-full opacity-30 animate-pulse blur-2xl"></div>
        <div className="absolute top-1/2 left-0 w-24 h-24 bg-[#8ba89e] rounded-full opacity-15 animate-float blur-xl"></div>

        {/* Doctor Info */}
        <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px #7a9f90" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#8cb59b] via-[#7a9f90] to-[#6e8e81] opacity-60 blur-3xl"></div>
            <img
              src={doctorPhoto}
              alt="Monil Champaneria"
              loading="lazy"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
            />
          </motion.div>

          <motion.div
            className="text-center md:text-left max-w-xl"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <h2
              id="doctor-title"
              className="text-5xl font-extrabold text-[#7a9f90] drop-shadow-md"
            >
              Optom. Monil Champaneria
            </h2>
            <p className="text-xl text-[#405941] font-semibold mt-2">
              B.Optom (Gold Medalist), Pune.<br />
              Fellow of Sankara Netralaya, Chennai.
            </p>
            <p className="italic text-[#4b5d44] mt-4 text-lg">
              “Vision is more than just eyesight — it's a way of life.”
            </p>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          className="mt-12 text-[#364b3c] text-lg leading-relaxed max-w-3xl mx-auto text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <p>
            <span className="font-semibold text-[#405941]">Blinkers Eye Clinic and Optical Showroom</span><br /><br />
            Founded in 2023, Blinkers is the brainchild of
            <span className="font-semibold text-[#527a65]"> Monil Champaneria</span>, a passionate and highly skilled optometrist dedicated to delivering exceptional, personalized eye care in Surat, India.
          </p>
          <br />
          <p>
            Monil completed his Bachelor’s degree in Optometry from the esteemed
            <span className="font-semibold text-[#527a65]"> Bharati Vidyapeeth, Pune (2017–2021)</span>. He then pursued advanced clinical training at
            <span className="font-semibold text-[#527a65]"> Sankara Nethralaya, Chennai</span>, completing a prestigious
            <span className="font-semibold text-[#527a65]"> Postgraduate Fellowship in Specialty Contact Lenses</span> in 2022. His pursuit of excellence further led him to the
            <span className="font-semibold text-[#527a65]"> L.V. Prasad Eye Institute, Hyderabad</span>, where he received intensive training in scleral lenses and PROSE lenses.
          </p>
          <br />
          <p>
            With a deep-rooted expertise in fitting
            <span className="font-semibold text-[#405941]"> specialty contact lenses</span> for conditions like
            <span className="font-semibold text-[#405941]"> keratoconus</span>,
            <span className="font-semibold text-[#405941]"> corneal trauma</span>,
            <span className="font-semibold text-[#405941]"> severe dryness</span>, and
            <span className="font-semibold text-[#405941]"> post-surgical corneas</span>, Monil brings a rare combination of clinical precision and compassionate care.
          </p>
          <br />
          <p>
            His professional interests also include
            <span className="font-semibold text-[#405941]"> orthokeratology (Ortho-K)</span> — a non-surgical, overnight vision correction technique — and
            <span className="font-semibold text-[#405941]"> myopia control</span>, especially for children and young adults.
          </p>
          <br />
          <p>
            At Blinkers, the goal is simple: to provide
            <span className="font-semibold text-[#527a65]"> world-class optometric services</span> locally — from
            <span className="font-semibold text-[#405941]"> routine eye exams</span> to
            <span className="font-semibold text-[#405941]"> advanced lens solutions</span> — all under one roof, backed by
            <span className="font-semibold text-[#527a65]"> knowledge</span>,
            <span className="font-semibold text-[#527a65]"> integrity</span>, and
            <span className="font-semibold text-[#527a65]"> care</span>.
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-[#7a9f90] mb-5 flex items-center gap-3">
            <span role="img" aria-label="trophy">🏆</span> Achievements
          </h3>
          <ul className="list-disc pl-8 space-y-3 text-[#4b5d44] text-lg font-medium">
            <li>Gold Medalist in Optometry from Bharati Vidyapeeth University, Pune</li>
            <li>Fellow of Sankara Netralaya, Chennai</li>
            <li>Speaker & researcher at global eye care symposiums</li>
            <li>Recognized by the Indian Medical Association for leading rural vision health camps</li>
          </ul>
        </motion.div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center relative z-20">
          <motion.button
            onClick={openModal}
            className="px-8 py-4 bg-gradient-to-r from-[#7a9f90] to-[#a2b9ae] text-white font-semibold rounded-full shadow-lg hover:scale-110 hover:shadow-[0_0_20px_#7a9f90] transition-transform duration-500 focus:outline-none focus:ring-4 focus:ring-[#7a9f90]/50"
            whileTap={{ scale: 0.95 }}
            aria-haspopup="dialog"
          >
            Book Consultation
          </motion.button>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {modalOpen && (
            <motion.div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              aria-modal="true"
              role="dialog"
              aria-labelledby="modal-title"
            >
              <motion.div
                className="bg-white rounded-xl p-8 max-w-md w-full relative"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 id="modal-title" className="text-2xl font-bold text-[#7a9f90] mb-4">
                  Book Consultation
                </h2>
                <p className="mb-6 text-[#364b3c]">
                  To book a consultation with Monil Champaneria, please call us at{" "}
                  <a href="tel:+919860849086" className="text-[#527a65] underline hover:text-[#405941]">
                    +91 98608 49086
                  </a>{" "}
                  or email{" "}
                  <a href="mailto:blinkers.in@gmail.com" className="text-[#527a65] underline hover:text-[#405941]">
                    blinkers.in@gmail.com
                  </a>.
                </p>
                <button
                  onClick={closeModal}
                  className="px-6 py-3 bg-gradient-to-r from-[#7a9f90] to-[#a2b9ae] text-white rounded-full shadow hover:scale-105 transition-transform duration-300"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animations */}
        <style>{`
          @keyframes slow-spin {
            0% { transform: rotate(0deg);}
            100% { transform: rotate(360deg);}
          }
          .animate-slow-spin {
            animation: slow-spin 40s linear infinite;
            will-change: transform;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0);}
            50% { transform: translateY(-15px);}
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
            will-change: transform;
          }
        `}</style>
      </section>
    </main>
  );
};

export default Doctor;
