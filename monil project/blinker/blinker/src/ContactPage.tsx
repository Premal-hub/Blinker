import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkedAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200 py-16 px-6 font-sans text-[#2b3d3c]">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center text-[#7a9f90] mb-12"
      >
        Contact Us
      </motion.h1>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="bg-white/40 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-white/30 space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-800">Let’s Connect</h2>

          <div className="space-y-4 text-gray-700 text-lg">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#7a9f90]" />
              <a
                href="tel:+919860849086"
                className="hover:underline font-medium focus:outline-none focus-visible:ring-2 ring-[#7a9f90]"
              >
                +91 98608 49086
              </a>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#7a9f90]" />
              <a
                href="mailto:blinkers.in@gmail.com"
                className="hover:underline font-medium focus:outline-none focus-visible:ring-2 ring-[#7a9f90]"
              >
                blinkers.in@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkedAlt className="text-[#7a9f90] mt-1" />
              <a
                href="https://www.google.com/maps/place/Blinkers+Eye+Clinic+and+Optical+Showroom,+Shila+Tower,+BH%2F22+Samarth+Park+Apartments,+near+BAPS+Hospital,+Adajan,+Surat,+Gujarat+395009"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline font-medium focus:outline-none focus-visible:ring-2 ring-[#7a9f90]"
              >
{/*                 Blinkers- Eye Clinic and Optical Showroom 
                <br /> */}
                BH/22 Samarth Park ‘Shakti Tower’ Apartment Adajan Rd,<br /> 
                opp. You Telecom, Adajan,<br /> 
                Surat, Gujarat 395009 
               
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://wa.me/919860849086"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition transform hover:scale-105 focus:outline-none focus-visible:ring-2 ring-green-500"
            >
              <FaWhatsapp className="animate-bounce" />
              Chat on WhatsApp
            </a>

            <a
              href="https://www.google.com/maps/place/Blinkers+Eye+Clinic+and+Optical+Showroom,+Shila+Tower,+BH%2F22+Samarth+Park+Apartments,+near+BAPS+Hospital,+Adajan,+Surat,+Gujarat+395009"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Directions to Blinkers"
              className="flex items-center justify-center gap-2 bg-[#7a9f90] text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-[#679f7a] transition transform hover:scale-105 focus:outline-none focus-visible:ring-2 ring-[#7a9f90]"
            >
              <FaMapMarkedAlt />
              Get Directions
            </a>
          </div>

          {/* Opening Hours */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold">Opening Hours:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              <li>Mon to sat 10:00am to 2:30pm and 4:00pm to 20:30pm</li>
              <li>Sunday 11:00am to 2:00pm</li>
{/*               <li> in 24hrs</li> */}
            </ul>
          </div>
        </motion.div>

        {/* Right Column - Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl border border-white/30"
        >
          <iframe
            title="Blinkers Eye Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3709.866723980591!2d72.7967791!3d21.1908946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d10551c0299%3A0xb7e1e9aa719a0604!2sBlinkers%20Eye%20Clinic%20and%20Optical%20Showroom!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ minHeight: "500px", border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
