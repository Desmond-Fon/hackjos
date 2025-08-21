"use client";

import React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { motion, type Variants } from "framer-motion";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
  image: string; // path relative to /public
};

const cardFx: Variants = {
  rest: { y: 0, boxShadow: "0 12px 32px rgba(0,0,0,0.08)" },
  hover: {
    y: -4,
    boxShadow: "0 18px 48px rgba(0,0,0,0.14)",
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  tap: { scale: 0.995 },
};

const Card: React.FC<CardProps> = ({ image, icon, header, paragraph }) => {
  return (
    <motion.article
      variants={cardFx}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className="
        group w-full overflow-hidden rounded-2xl bg-white
        border border-black/[0.06]
        transition-colors
        focus-within:ring-2 focus-within:ring-[#33C36C] focus-within:ring-offset-2 focus-within:ring-offset-white
      "
      aria-label={header}
      tabIndex={-1}
    >
      {/* Image area with consistent aspect ratio */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={`/${image}`}
          alt={header}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="px-5 py-5 md:px-6 md:py-6">
        <div className="mb-2 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#33C36C] text-white">
            <Icon icon={icon} width={22} height={22} aria-hidden />
          </span>
          <h2 className="text-[18px] md:text-[22px] font-semibold leading-[1.3]">
            {header}
          </h2>
        </div>

        <p className="text-[14.5px] md:text-[16.5px] leading-[1.7] text-black/75">
          {paragraph}
        </p>

        {/* Subtle bottom bar for brand continuity */}
        <div className="mt-5 h-[3px] w-16 rounded-full bg-[#33C36C]/70 group-hover:w-24 transition-all" />
      </div>
    </motion.article>
  );
};

export default Card;
