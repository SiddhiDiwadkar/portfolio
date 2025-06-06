"use client";

import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const skillsData = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Django"],
  },
  { title: "Backend", items: ["Node.js", "Express.js", "TypeScript"] },
  { title: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { title: "DevOps & Deployment", items: ["AWS", "Vercel"] },
  { title: "BI & Visualization", items: ["Power BI"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-[#a78bfa] mb-10 text-center">
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {skillsData.map(({ title, items }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer bg-[#111827] rounded-xl p-6 shadow-lg border border-[#7c3aed] transition"
          >
            <h3 className="text-2xl font-semibold mb-3 text-[#a78bfa]">
              {title}
            </h3>
            <ul className="list-disc list-inside text-[#c7d2fe] space-y-1">
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center space-x-8 mt-12">
        <a
          href="https://www.linkedin.com/in/siddhi-diwadkar-2179332a7/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0e76a8] hover:text-[#a78bfa] transition-colors text-4xl"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://github.com/SiddhiDiwadkar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-[#a78bfa] transition-colors text-4xl"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  );
}
