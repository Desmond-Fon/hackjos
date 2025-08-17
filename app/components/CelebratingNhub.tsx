"use client";

import React from "react";
import Card from "../ui/Card";
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

const CelebratingNhub: React.FC = () => {
  return (
    <main
      className="
        relative flex flex-col overflow-hidden
        bg-[#E0E0E059] py-[72px] md:py-[96px]
      "
    >
      {/* Subtle background texture for depth */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 20%, rgba(51,195,108,0.12), transparent), \
             linear-gradient(0deg, rgba(255,255,255,0.65), rgba(255,255,255,0.65))",
        }}
      />
      {/* Soft ambient blobs */}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-[#33C36C]/14 blur-3xl"
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
        viewport={{ once: true, margin: "0px 0px -140px 0px" }}
        className="mx-auto w-full max-w-[1200px] px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mx-auto mb-3 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-3 py-1 text-xs md:text-sm backdrop-blur"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-[#33C36C]" />A
          decade of impact
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="font-bold leading-[1.05] text-[28px] sm:text-[38px] md:text-[56px]"
        >
          Celebrating{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33C36C] to-[#39B54A]">
            nHub@10
          </span>
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
          className="origin-left mx-auto mt-3 h-[5px] w-[160px] md:w-[206px] rounded-full bg-[#33C36C]"
        />

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-[950px] text-[15px] sm:text-[17px] md:text-[20px] leading-[1.7] text-black/70"
        >
          Founded in 2015, nHub has been a catalyst for digital transformation
          in Northern Nigeria—mentoring startups, training tech talent, and
          shaping public policy around innovation and entrepreneurship. This
          October, we proudly mark 10 years of impact.
        </motion.p>
      </motion.section>

      {/* Cards Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="
          mx-auto mt-10 grid w-full max-w-[1279px] grid-cols-1 gap-6 px-6
          md:grid-cols-2 lg:gap-8
        "
      >
        <motion.div variants={fadeUp}>
          <Card
            image="Frame 1418067579.png"
            icon="fluent:chat-48-regular"
            header="Founders Chat"
            paragraph="Intimate conversations with nHub's founding team, sharing insights from a decade of innovation and growth."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            image="Frame 1418067579 (1).png"
            icon="solar:cup-outline"
            header="nHub@10 Showcase"
            paragraph="Explore the incredible journey of nHub through interactive displays and success stories from our community."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            image="Frame 1418067579 (2).png"
            icon="simple-line-icons:badge"
            header="Recognition Ceremony"
            paragraph="Honoring outstanding contributors, partners, and innovators who have shaped nHub's remarkable journey."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            image="Frame 1418067579 (3).png"
            icon="game-icons:wine-glass"
            header="Toast"
            paragraph="An elegant evening celebration bringing together the entire nHub community for networking and festivities."
          />
        </motion.div>
      </motion.div>
    </main>
  );
};

export default CelebratingNhub;
