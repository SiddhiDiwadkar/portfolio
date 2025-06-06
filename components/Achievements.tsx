"use client";

import { motion } from "framer-motion";

const achievements = [
  "Completed Advanced Training in Machine Learning, IoT, and SAP ABAP on BTP",
  "Tata Group Cybersecurity Analyst Program (Forage)",
  "Google Certificate – Foundations of Cybersecurity (Coursera)",
  "NPTEL – Data Science for Engineers",
  "Web Development Internship – Octanet Services Pvt. Ltd.",
  "Participated in SAP Innovation Marathon",
];

export default function Achievements() {
  return (
    <motion.section
      id="achievements"
      className="max-w-4xl mx-auto py-20 px-6"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      <h2 className="text-4xl font-bold text-[#a78bfa] mb-10 text-center">
        Achievements
      </h2>
      <ul className="list-disc list-inside text-[#c7d2fe] space-y-4 text-lg">
        {achievements.map((item, i) => (
          <li
            key={i}
            className="hover:text-[#7c3aed] transition-colors cursor-default"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
