"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "GrowVatika",
    tech: "Next.js, Node.js, PostgreSQL, Turborepo",
    desc: "A full-stack multi-vendor plant commerce platform with real-time inventory and order tracking.",
    link: "https://github.com/SiddhiDiwadkar/GrowVatika_Advance",
  },
  {
    title: "Electricity Consumption Dashboard",
    tech: "Power BI, Excel, DAX",
    desc: "Interactive dashboard to analyze electricity usage, costs, and patterns by date and location.",
    link: "https://powerbidashboard.example.com",
  },
  {
    title: "IAM Solution Design for TechCorp",
    tech: "RBAC, MFA, PAM, Cloud APIs",
    desc: "Designed secure access control system during Tata Group cybersecurity internship project.",
    link: "https://techcorp-iam.example.com",
  },
  {
    title: "E-Health Care Management System",
    tech: "Java, PHP, XML, SQL",
    desc: "Developed patient data management system with QR code access for hospitals and doctors.",
    link: "https://ehealthcare.example.com",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-[#a78bfa] mb-12 text-center">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map(({ title, tech, desc, link }, i) => (
          <motion.a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #7c3aed" }}
            className="bg-[#111827] p-6 rounded-xl shadow-md border border-[#7c3aed] cursor-pointer transition block"
          >
            <h3 className="text-2xl font-semibold text-[#a78bfa] mb-2">
              {title}
            </h3>
            <p className="text-sm text-[#94a3b8] mb-3">{tech}</p>
            <p className="text-[#c7d2fe]">{desc}</p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
