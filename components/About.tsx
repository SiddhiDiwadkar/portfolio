"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="max-w-4xl mx-auto py-20 px-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-[#a78bfa] mb-6 text-center">
        About Me
      </h2>
      <p className="text-lg text-[#c7d2fe] leading-relaxed text-center">
        I am a passionate Computer Engineering student at PDEA’s College of
        Engineering, Pune, with strong skills in full stack web development. I
        enjoy crafting scalable, interactive web apps and learning emerging
        tech. Proficient in Java, Python, TypeScript, Next.js, and Tailwind CSS.
      </p>
    </motion.section>
  );
}
