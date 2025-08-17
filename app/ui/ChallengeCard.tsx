"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion, type Variants } from "framer-motion";
import Link from "next/link";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
};

const cardFx: Variants = {
  rest: { y: 0, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 18px 48px rgba(0,0,0,0.14)",
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  tap: { scale: 0.995 },
};

const ChallengeCard: React.FC<CardProps> = ({ icon, header, paragraph }) => {
  return (
    <motion.article
      variants={cardFx}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="
        group w-full overflow-hidden rounded-2xl bg-white
        border border-black/[0.06] shadow-sm
        px-[20px] pt-[20px] pb-[24px] md:px-6 md:pt-6 md:pb-6
        focus-within:ring-2 focus-within:ring-[#33C36C] focus-within:ring-offset-2 focus-within:ring-offset-white
      "
      aria-label={header}
    >
      <div className="mb-3 flex items-start gap-3">
        <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#33C36C1A] text-[#33C36C]">
          <Icon icon={icon} width={24} height={24} aria-hidden />
        </span>
        <h2 className="text-[18px] md:text-[22px] font-semibold leading-[1.3]">
          {header}
        </h2>
      </div>

      <p className="text-[15px] md:text-[17px] leading-[1.7] text-black/75">
        {paragraph}
      </p>

      <Link href={'/mission'}>
        <button
          className="mt-5 text-[#33C36C] hover:text-black/70 md:text-[18px] text-[16px] font-medium
                     inline-flex items-center gap-1 transition-colors"
          aria-label={`Learn more about ${header}`}
        >
          Learn More
          <span className="inline-block translate-x-0 transition-transform duration-300 group-hover:translate-x-1">
            ➤
          </span>
        </button>
      </Link>

      {/* subtle bottom accent */}
      <div className="mt-5 h-[3px] w-16 rounded-full bg-[#33C36C]/70 group-hover:w-24 transition-all" />
    </motion.article>
  );
};

export default ChallengeCard;