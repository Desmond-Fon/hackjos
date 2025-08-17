"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import { supabase } from "../utils/supabase";
import { ContactFormData } from "../types";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.5 },
  },
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  // honeypot
  const [botTrap, setBotTrap] = useState("");

  const isValidEmail = useMemo(
    () => /^\S+@\S+\.\S+$/.test(formData.email.trim()),
    [formData.email]
  );
  const canSubmit =
    !loading &&
    formData.fullName.trim().length >= 2 &&
    isValidEmail &&
    formData.message.trim().length >= 10 &&
    !botTrap;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setLoading(true);
    setError(null);
    setSubmitted(null);

    try {
      const submissionData = {
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        message: formData.message.trim(),
        createdAt: new Date().toISOString(),
      };

      const { error } = await supabase
        .from("contact_submissions")
        .insert(submissionData);

      if (error) throw error;

      setFormData({ fullName: "", email: "", message: "" });
      setSubmitted(
        "Thank you! We've received your message and will get back to you soon."
      );

      // hide success after 6s
      const t = setTimeout(() => setSubmitted(null), 6000);
      return () => clearTimeout(t);
    } catch (err: any) {
      console.error("Error submitting form:", err?.message || err);
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="contact" className="md:px-[78px] py-[96px] w-full">
      <section className="w-full md:rounded-[30px] overflow-hidden max-xl:py-[20px] bg-gradient-to-b from-[#33C36C] to-[#185D34] flex justify-center items-stretch">
        {/* Left visual (xl+) */}
        <div className="relative hidden xl:flex flex-1 min-h-[520px]">
          <Image
            src="/contactImage.png"
            alt="Partners collaborating at HackJos"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-end p-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-[28px] 2xl:text-[36px] font-semibold text-white">
                Partner with Us
              </h2>
              <p className="text-white/95 text-sm 2xl:text-lg mt-1 max-w-[560px]">
                Partner with HackJos 2025 to showcase your commitment to
                innovation and connect with the next generation of tech leaders.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="flex flex-1 items-center justify-center py-10">
          <motion.form
            onSubmit={handleSubmit}
            variants={container}
            initial="hidden"
            animate="show"
            className="w-[88%] max-w-[640px] bg-white/12 border border-white/30 backdrop-blur-md rounded-[24px] px-6 md:px-8 py-8 md:py-10 text-white"
            noValidate
          >
            <motion.h1
              variants={fadeUp}
              className="font-semibold text-[28px] md:text-[30px]"
            >
              Get in Touch
            </motion.h1>

            {/* Alerts */}
            {submitted && (
              <motion.div
                variants={fadeUp}
                className="mt-4 rounded-lg border border-emerald-300/60 bg-emerald-100/70 text-emerald-900 px-4 py-3"
                role="status"
              >
                {submitted}
              </motion.div>
            )}
            {error && (
              <motion.div
                variants={fadeUp}
                className="mt-4 rounded-lg border border-red-300/60 bg-red-100/70 text-red-900 px-4 py-3"
                role="alert"
              >
                {error}
              </motion.div>
            )}

            {/* Honeypot (hidden) */}
            <input
              type="text"
              name="company"
              value={botTrap}
              onChange={(e) => setBotTrap(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {/* Fields */}
            <motion.div variants={fadeUp} className="mt-6">
              <label htmlFor="fullName" className="sr-only">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                minLength={2}
                required
                autoComplete="name"
                className="h-[56px] w-full rounded-[12px] bg-white/10 text-white placeholder:text-white/70
                           border border-white/30 px-3 outline-none
                           focus:border-white focus:ring-4 focus:ring-white/20 transition-all
                           autofill:shadow-[inset_0_0_0_1000px_rgba(255,255,255,0.1)]"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                inputMode="email"
                required
                autoComplete="email"
                className="h-[56px] w-full rounded-[12px] bg-white/10 text-white placeholder:text-white/70
                           border border-white/30 px-3 outline-none
                           focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
              />
              {!isValidEmail && formData.email.length > 0 && (
                <p className="mt-1 text-sm text-red-200">
                  Please enter a valid email.
                </p>
              )}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4">
              <label htmlFor="message" className="text-white/90 text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type here…"
                minLength={10}
                required
                className="mt-1 h-[140px] w-full rounded-[12px] bg-white/10 text-white placeholder:text-white/70
                           border border-white/30 px-3 py-2 outline-none resize-vertical
                           focus:border-white focus:ring-4 focus:ring-white/20 transition-all"
              />
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6">
              <button
                type="submit"
                disabled={!canSubmit}
                className={`inline-flex items-center justify-center w-[229px] h-[50px] rounded-[14px]
                            font-medium text-[18px] transition-all focus:outline-none
                            focus-visible:ring-4 focus-visible:ring-emerald-300/40
                            ${
                              loading
                                ? "bg-emerald-500/70"
                                : "bg-[#33C36C] hover:bg-[#22b25b]"
                            }
                            ${
                              !canSubmit
                                ? "cursor-not-allowed opacity-70"
                                : "cursor-pointer text-white"
                            }`}
                aria-busy={loading}
              >
                {loading ? "Submitting…" : "Submit"}
                {!loading && (
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 2, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    →
                  </motion.span>
                )}
              </button>
            </motion.div>

            {/* tiny footnote */}
            <motion.p variants={fadeUp} className="mt-3 text-xs text-white/70">
              By submitting, you agree to our processing of your info for this
              request.
            </motion.p>
          </motion.form>
        </div>
      </section>
    </main>
  );
};

export default ContactForm;
