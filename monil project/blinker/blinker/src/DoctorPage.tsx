import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Doctor: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(() => setModalOpen(true), []);
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

        {/* Doctor Info Section */}
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
              src="./blinker/monil project/blinker/blinker/PHOTO-2025-05-16-02-25-37.jpg"
              alt="Dr. Monil Champaneria"
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
              Dr. Monil Champaneria
            </h2>
            <p className="text-xl text-[#405941] font-semibold mt-2">
              M.D., Ophthalmology – AIIMS, Delhi
            </p>
            <p
              className="italic text-[#4b5d44] mt-4 text-lg"
              aria-label="Doctor's vision quote"
            >
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
          With over{" "}
          <strong className="text-[#527a65] font-semibold">
            15 years of clinical experience
          </strong>
          , Dr. Champaneria stands as a pillar in the eye care field. Her
          specialties include{" "}
          <span className="font-semibold text-[#405941]">
            pediatric ophthalmology
          </span>
          , advanced{" "}
          <span className="font-semibold text-[#405941]">
            laser vision correction
          </span>
          , and{" "}
          <span className="font-semibold text-[#405941]">
            glaucoma management
          </span>
          . Known for her empathetic approach and clinical precision, she’s
          dedicated to offering personalized vision solutions based on the
          latest advancements in eye care.
        </motion.div>

        {/* Achievements */}
        <motion.div
          className="mt-10 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.7 }}
        >
          <h3 className="text-3xl font-bold text-[#7a9f90] mb-5 flex items-center gap-3">
            <span role="img" aria-label="trophy">
              🏆
            </span>{" "}
            Achievements
          </h3>
          <ul className="list-disc pl-8 space-y-3 text-[#4b5d44] text-lg font-medium">
            <li>Gold Medalist in Ophthalmology from AIIMS, Delhi</li>
            <li>Speaker & researcher at global eye care symposiums</li>
            <li>
              Recognized by the Indian Medical Association for leading rural
              vision health camps
            </li>
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
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
                <h2
                  id="modal-title"
                  className="text-2xl font-bold text-[#7a9f90] mb-4"
                >
                  Book Consultation
                </h2>
                <p className="mb-6 text-[#364b3c]">
                  To book a consultation with Dr. Monil Champaneria, please call
                  us at{" "}
                  <a
                    href="tel:+1234567890"
                    className="text-[#527a65] underline hover:text-[#405941]"
                  >
                    +1 234 567 890
                  </a>{" "}
                  or email{" "}
                  <a
                    href="mailto:contact@blinkersclinic.com"
                    className="text-[#527a65] underline hover:text-[#405941]"
                  >
                    contact@blinkersclinic.com
                  </a>
                  .
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
