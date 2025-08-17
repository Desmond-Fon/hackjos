"use client";

import React from "react";
import WhoShouldAttendCard from "../ui/WhoShouldAttendCard";
import Link from "next/link";
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
    transition: { type: "tween", ease: "easeOut", duration: 0.55 },
  },
};

const WhoShouldAttend = () => {
  return (
    <main className="relative flex flex-col bg-white py-[72px] md:py-[96px] overflow-hidden">
      {/* Soft ambient accents */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#33C36C]/12 blur-3xl"
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-black/10 blur-3xl"
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.06, 1] }}
        transition={{
          duration: 5.4,
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
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="flex flex-col items-center text-center px-6"
      >
        <motion.h1
          variants={fadeUp}
          className="font-bold leading-[1.05] text-[30px] md:text-[56px]"
        >
          Who Should Attend
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          variants={fadeUp}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{
            type: "tween",
            ease: "easeOut",
            duration: 0.5,
            delay: 0.05,
          }}
          className="origin-left bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] rounded-full mt-2"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 mb-12 max-w-[780px] text-center text-black/70 text-[16px] md:text-[20px] leading-[1.75]"
        >
          HackJos 2025 brings together diverse voices from across Nigeria&apos;s
          tech ecosystem
        </motion.p>
      </motion.section>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="mx-auto grid w-full max-w-[1279px] grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-6 lg:px-[80px]"
      >
        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067610 (1).png"
            header="Developers"
            paragraph="Software engineers, mobile developers, and tech enthusiasts ready to build solutions"
            hoverImage="material-symbols:code-rounded"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067611.png"
            header="Designers"
            paragraph="UI/UX designers, product designers, and creative professionals"
            hoverImage="ph:pen-nib"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067611 (1).png"
            header="Entrepreneurs"
            paragraph="Startup founders, business owners, and aspiring entrepreneurs"
            hoverImage="streamline-ultimate:space-rocket-earth"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067610 (2).png"
            header="Investors"
            paragraph="VCs, angel investors, and funding partners seeking innovative startups"
            hoverImage="fluent:arrow-growth-24-regular"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067611 (2).png"
            header="Policymakers"
            paragraph="Government officials and policy experts shaping tech regulation"
            hoverImage="hugeicons:court-law"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <WhoShouldAttendCard
            image="imageOne/Frame 1418067611 (3).png"
            header="Students"
            paragraph="University students, recent graduates, and emerging tech talent"
            hoverImage="la:users"
          />
        </motion.div>
      </motion.div>

      {/* CTA Banner */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="mx-auto mt-12 w-[88%] max-w-[1100px] rounded-[16px] py-[44px] md:py-[61px] px-[18px] md:px-[24px]
                   bg-gradient-to-r from-[#33C36C] to-[#185D34] flex flex-col items-center justify-center text-center"
      >
        <h2 className="text-white font-semibold text-[22px] md:text-[32px]">
          Join 500+ Innovators
        </h2>
        <p className="text-white/95 text-[16px] md:text-[22px] max-w-[820px] mt-2">
          Be part of Nigeria&apos;s largest tech gathering and shape the future
          of innovation
        </p>
        <Link href="/register" className="mt-[18px] md:mt-[22px]">
          <button
            className="group rounded-[30px] bg-white px-[20px] md:px-[45px] py-[10px]
                       text-[#33C36C] text-[18px] md:text-[24px] font-medium
                       hover:bg-white/90 transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
          >
            Register Today
            <span className="ml-2 inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </Link>
      </motion.div>
    </main>
  );
};

export default WhoShouldAttend;
