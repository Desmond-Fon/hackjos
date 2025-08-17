"use client";

import React from "react";
import GetInvolvedCard from "../ui/GetInvolvedCard";
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const GetInvolved = () => {
  return (
    <div className="bg-[#E0E0E026] py-[80px] px-6 lg:px-[81px] relative overflow-hidden">
      {/* Ambient gradient accents */}
      <motion.span
        aria-hidden
        className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#33C36C]/15 blur-3xl"
        animate={{ opacity: [0.25, 0.55, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.span
        aria-hidden
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-black/10 blur-3xl"
        animate={{ opacity: [0.15, 0.35, 0.15], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* Header */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        className="flex flex-col items-center text-center"
      >
        <motion.h1
          variants={fadeUp}
          className="md:text-[56px] text-[32px] font-bold leading-tight"
        >
          Get<span className="text-[#39B54A]"> Involved</span>
        </motion.h1>

        <motion.div
          variants={fadeUp}
          className="mt-3 h-[5px] w-[150px] md:w-[206px] rounded-full bg-[#33C36C]"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 mb-[60px] max-w-[760px] px-4 text-black/70 text-[16px] md:text-[20px] leading-[1.75]"
        >
          Multiple ways to be part of HackJos 2025 and contribute to
          Nigeria&apos;s tech revolution
        </motion.p>
      </motion.section>

      {/* Cards */}
      <motion.section
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -80px 0px" }}
        className="flex flex-wrap justify-center gap-[40px]"
      >
        <motion.div variants={fadeUp}>
          <GetInvolvedCard
            icon="mynaui:users-group"
            header="HackJos 2025"
            paragraph="Join as a participant and compete for amazing prizes while solving real-world challenges"
            li1="Team formation support"
            li2="Mentorship access"
            li3="Prize eligibility"
            li4="Networking opportunities"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <GetInvolvedCard
            icon="stash:mic-solid"
            header="Become a Speaker"
            paragraph="Share your expertise by proposing a workshop, panel discussion, or keynote presentation"
            li1="Brand visibility"
            li2="Talent access"
            li3="Industry leadership"
            li4="Community investment"
          />
        </motion.div>

        <motion.div variants={fadeUp}>
          <GetInvolvedCard
            icon="si:heart-line"
            header="Become a Sponsor"
            paragraph="Partner with us to support innovation and connect with Nigeria's brightest tech minds."
            li1="Brand visibility"
            li2="Talent access"
            li3="Industry leadership"
            li4="Community investment"
          />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default GetInvolved;
