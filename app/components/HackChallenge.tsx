"use client";

import React from "react";
import Card from "../ui/ChallengeCard";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

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

const HackChallenge: React.FC = () => {
  return (
    <main className="relative flex flex-col bg-white py-[72px] md:py-[96px] overflow-hidden">
      {/* Ambient accents */}
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
          HackJos{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#33C36C] to-[#39B54A]">
            Challenge
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
          className="origin-left bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] rounded-full mt-2"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 mb-12 max-w-[780px] text-center text-black/70 text-[16px] md:text-[20px] leading-[1.75]"
        >
          Choose your challenge track and build solutions that will transform
          how Nigerian MSMEs operate and thrive
        </motion.p>
      </motion.section>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="mx-auto grid w-full max-w-[1279px] grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:gap-8"
      >
        <motion.div variants={fadeUp}>
          <Card
            icon="proicons:cart"
            header="E‑commerce Solutions"
            paragraph="Build platforms that empower MSMEs to reach wider markets and streamline online sales."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            icon="circum:bank"
            header="Financial Inclusion"
            paragraph="Create fintech solutions that make financial services accessible to underserved communities."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            icon="fluent:arrow-growth-24-regular"
            header="Productivity Tools"
            paragraph="Develop applications that enhance operational efficiency and business management."
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <Card
            icon="mage:globe"
            header="Market Access"
            paragraph="Design solutions that connect MSMEs with suppliers, customers, and business opportunities."
          />
        </motion.div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="w-full flex justify-center mt-10 px-6"
      >
        <Link href={'/about'}>
          <button
            className="group rounded-[30px] bg-[#33C36C] px-[20px] md:px-[45px] py-[10px]
                       text-white text-[18px] md:text-[24px] xl:text-[28px] font-medium
                       shadow-[0_10px_24px_rgba(51,195,108,0.28)] hover:shadow-[0_16px_40px_rgba(51,195,108,0.38)]
                       transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
          >
            View Challenge Details
            <span className="ml-2 inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </button>
        </Link>
      </motion.div>
    </main>
  );
};

export default HackChallenge;
