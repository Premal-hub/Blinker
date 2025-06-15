import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function FAQ() {
  return (
    <motion.div
      className="max-w-5xl mx-auto px-4 md:px-8 py-12 bg-white rounded-lg shadow-xl space-y-10 mt-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center text-[#7a9f90]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Frequently Asked Questions
      </motion.h1>

      <motion.p
        className="text-center text-gray-700 text-lg max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Below are some basic questions and answers to help you with common eye care concerns.
        For any serious or personalized issues, please don't hesitate to{" "}
        <strong>contact us directly</strong>.
      </motion.p>

      <motion.div
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {faqData.map(({ question, answer }, index) => (
          <motion.details
            key={index}
            className="bg-gray-100 p-4 rounded shadow"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <summary className="font-semibold cursor-pointer text-lg">
              {question}
            </summary>
            <p className="mt-2 text-gray-700">{answer}</p>
          </motion.details>
        ))}
      </motion.div>

      <div className="flex justify-center mt-10">
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#7a9f90] text-white font-semibold rounded-full shadow-lg hover:bg-[#679f7a] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#7a9f90]/50"
          aria-label="Contact us for serious concerns"
        >
          Contact Us for Serious Concerns
        </Link>
      </div>
    </motion.div>
  );
}

const faqData = [
  {
    question: "How often should I get my eyes checked?",
    answer: "At least once a year, especially if you use screens regularly or wear glasses.",
  },
  {
    question: "Do you offer child eye checkups?",
    answer: "Yes, we have a dedicated pediatric vision program and playful testing tools for kids.",
  },

  {
    question: "Can I walk in without appointment?",
    answer: "Yes, walk-ins are accepted, but appointments help reduce wait time.",
  },
  {
    question: "Do you provide contact lens fittings?",
    answer: "Yes, we offer comprehensive contact lens fittings with personalized guidance.",
  },
  {
    question: "What brands of eyeglasses do you carry?",
    answer: "We stock a variety of designer and budget-friendly frames to suit all styles.",
  },
  {
    question: "How do I know if I need prescription sunglasses?",
    answer: "If you wear glasses and spend time outdoors, prescription sunglasses help protect your eyes from UV rays.",
  },
  {
    question: "Are eye exams covered by insurance?",
    answer: "Many insurance plans cover routine eye exams. We recommend checking with your provider beforehand.",
  },
  {
    question: "What should I do if my eyes feel dry or irritated?",
    answer: "Dry or irritated eyes can be due to various causes; please schedule a consultation for proper diagnosis and treatment.",
  },
  {
    question: "Can you help with vision problems caused by diabetes?",
    answer: "Yes, we offer specialized diabetic eye exams to monitor and manage diabetic retinopathy and related conditions.",
  },
];
