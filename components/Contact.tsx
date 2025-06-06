"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Add your submission logic here, e.g., email API or form backend
    setSubmitted(true);
  }

  return (
    <section id="contact" className="max-w-2xl mx-auto py-20 px-6">
      <motion.h2
        className="text-4xl font-bold text-[#a78bfa] mb-10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Get in Touch
      </motion.h2>
      {submitted ? (
        <p className="text-center text-[#94a3b8] text-lg">
          Thanks for reaching out! I will get back to you soon.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 bg-[#111827] p-8 rounded-xl shadow-lg border border-[#7c3aed]"
        >
          <input
            required
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="bg-[#1e293b] border border-[#7c3aed] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
          />
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="bg-[#1e293b] border border-[#7c3aed] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
          />
          <textarea
            required
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="bg-[#1e293b] border border-[#7c3aed] rounded-md p-3 text-white focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
          />
          <button
            type="submit"
            className="bg-[#7c3aed] hover:bg-[#6d28d9] transition py-3 rounded-lg font-semibold text-white shadow-md"
          >
            Send Message
          </button>
        </form>
      )}
    </section>
  );
}
