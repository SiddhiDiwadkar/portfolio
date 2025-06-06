"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-extrabold tracking-tight text-[#a78bfa]"
      >
        Siddhi Diwadkar
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 text-lg md:text-2xl max-w-xl text-[#c7d2fe]"
      >
        Full Stack Developer | Computer Engineer | Tech Enthusiast
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="mt-8 flex gap-6"
      >
        <a
          href="#contact"
          className="px-8 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#6d28d9] transition text-white font-semibold shadow-lg"
        >
          Contact Me
        </a>
        <a
          href="/Siddhi_Diwadkar_Resume.pdf"
          download
          className="px-8 py-3 rounded-xl border-2 border-[#7c3aed] text-[#7c3aed] hover:bg-[#7c3aed] hover:text-white transition font-semibold shadow-lg"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
