"use client";

import React from "react";
import ConferenceExpCard from "../ui/ConferenceExpCard";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.65 },
  },
};

const ConferenceExp = () => {
  return (
    <main className="relative bg-[#E0E0E059] py-[87px]">
      {/* Soft accents */}
      <motion.span
        aria-hidden
        className="absolute -top-20 left-10 h-60 w-60 rounded-full bg-[#33C36C]/10 blur-3xl"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-black/10 blur-3xl"
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.06, 1] }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Header */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="flex flex-col items-center text-center px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="md:text-[56px] text-[30px] font-bold leading-tight"
        >
          Conference{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33C36C] to-[#39B54A]">
            Experience
          </span>
        </motion.h1>
        <motion.div
          variants={fadeUp}
          className="mt-3 h-[5px] w-[150px] md:w-[206px] rounded-full bg-[#33C36C]"
        />
        <motion.p
          variants={fadeUp}
          className="mt-6 md:mb-[72px] max-w-[739px] text-[15px] md:text-[20px] leading-[1.7] text-black/70"
        >
          Three days packed with learning, networking, and inspiration from
          Nigeria&apos;s tech ecosystem.
        </motion.p>
      </motion.section>

      {/* Timeline cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="relative my-[50px] xl:my-[95px] flex flex-col gap-12 xl:grid xl:grid-cols-2 xl:h-[642px] md:w-[80%] mx-auto place-items-center"
      >
        <motion.div variants={fadeUp}>
          <ConferenceExpCard
            classname="xl:absolute top-[-12%] left-0"
            icon="iconoir:calendar"
            date="Day 1 &2 — Oct 22–23, 2025 • 9:00am"
            header="48Hrs Hackathon Challenge"
            paragraph="Build platforms that empower MSMEs to reach wider markets and streamline online sales."
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <ConferenceExpCard
            classname="xl:absolute top-[36%] right-0"
            icon="iconoir:calendar"
            date="Day 3 — Oct 23, 2025 • 9:00am–4:30pm"
            header="Keynote Presentations & Panel Sessions"
            paragraph="A full-day summit featuring expert talks, founder stories, policy panels, and showcases exploring how to ignite and sustain MSME growth in Nigeria."
          />
        </motion.div>
        <motion.div variants={fadeUp}>
          <ConferenceExpCard
            classname="xl:absolute bottom-[-25%] left-0"
            icon="iconoir:calendar"
            date="Day 3 — Oct 24, 2025 • 7:00pm–10:00pm"
            header="Dinner Celebration of nHub @ 10"
            paragraph="A night of celebration of nHub's year of impact and founder stories"
          />
        </motion.div>

        {/* Vertical timeline line */}
        <div className="absolute hidden xl:flex top-0 h-[642px] w-[2px] bg-black/20 left-[50%]" />
        {/* Dots */}
        <div className="absolute hidden xl:flex top-0 left-[50%] -translate-x-1/2 w-[20px] h-[20px] border-[3px] border-[#33C36C] rounded-full bg-white" />
        <div className="absolute hidden xl:flex top-[48%] left-[50%] -translate-x-1/2 w-[20px] h-[20px] border-[3px] border-[#33C36C] rounded-full bg-white" />
        <div className="absolute hidden xl:flex bottom-0 left-[50%] -translate-x-1/2 w-[20px] h-[20px] border-[3px] border-[#33C36C] rounded-full bg-white" />
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex justify-center pt-[50px] lg:pt-[150px]"
      >
        <button
          className="group rounded-[30px] bg-[#33C36C] px-[20px] md:px-[45px] py-[10px]
                           text-white text-[18px] md:text-[24px] font-medium
                           hover:bg-[#44D47D] transition-all duration-300 shadow-[0_10px_30px_rgba(51,195,108,0.25)]
                           focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
        >
          View Event Details
          <span className="ml-2 inline-block transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>
      </motion.div>
    </main>
  );
};

export default ConferenceExp;
