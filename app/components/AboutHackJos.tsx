"use client";

import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.12 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.7 },
  },
};

const AboutHackJos: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.span
          aria-hidden
          className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-[#33C36C]/10 blur-3xl"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          aria-hidden
          className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-black/[0.06] blur-3xl"
          animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.06, 1] }}
          transition={{
            duration: 5.4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      </div>

      <div className="mx-auto w-full max-w-[1270px] px-6 md:px-20 pt-10 md:pt-14 pb-16 md:pb-20">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="text-center mb-10 md:mb-12"
        >
          <motion.h2
            variants={fadeUp}
            className="font-bold tracking-tight text-[32px] md:text-[56px] leading-[1.05]"
          >
            About{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33C36C] to-[#39B54A]">
              HackJos 2025
            </span>
          </motion.h2>

          {/* Animated accent bar */}
          <motion.div
            variants={fadeUp}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.6,
              delay: 0.05,
            }}
            className="origin-left mx-auto mt-3 h-[6px] w-24 rounded-full bg-[#33C36C]"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-[1000px] text-gray-700 text-[16px] md:text-[20px] leading-[1.75]"
          >
            HackJos 2025 is more than just a hackathon—it’s a celebration of
            innovation, collaboration, and the incredible journey of nHub over
            the past decade. As we mark nHub’s 10th anniversary, we’re bringing
            together Nigeria’s brightest minds to reimagine the future of Micro,
            Small, and Medium Enterprises (MSMEs) through cutting‑edge
            technology solutions.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left Text */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            <motion.h3
              variants={fadeUp}
              className="text-[26px] md:text-[36px] font-semibold mb-3 max-md:text-center"
            >
              Our Mission
            </motion.h3>

            <motion.p
              variants={fadeUp}
              className="text-gray-700 md:text-[18px] leading-[1.8] mb-5"
            >
              We’re on a mission to empower Nigeria’s entrepreneurial ecosystem
              by fostering innovation that directly impacts the growth and
              sustainability of MSMEs. Through this three‑day event,
              participants will develop groundbreaking solutions that address
              real‑world challenges faced by small businesses across Nigeria.
            </motion.p>

            <motion.ul
              variants={container}
              className="space-y-4 md:text-[18px] text-gray-900/90"
            >
              {[
                "48 hours of intensive innovation and collaboration",
                "Mentorship from industry experts and thought leaders",
                "Opportunity to showcase solutions to potential investors",
              ].map((item) => (
                <motion.li
                  key={item}
                  variants={fadeUp}
                  className="flex items-start gap-3 group"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#33C36C]/10 text-[#33C36C] group-hover:bg-[#33C36C]/15 transition-colors">
                    <Icon
                      icon="charm:circle-tick"
                      width={20}
                      height={20}
                      aria-hidden
                    />
                  </span>
                  <span className="leading-[1.7]">{item}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Image Card */}
          <motion.div
            initial={{ opacity: 0, x: 24, rotate: -0.5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.8 }}
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            className="w-full"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -2 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="relative overflow-hidden rounded-2xl bg-white/70 shadow-[0_12px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
            >
              {/* Keep a consistent aspect ratio for nicer cropping */}
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src="/about.png"
                  alt="HackJos Team collaborating"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Subtle gradient overlay for depth */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHackJos;
