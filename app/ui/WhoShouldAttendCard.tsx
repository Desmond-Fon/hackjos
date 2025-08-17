"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Image from "next/image";

type CardProps = {
  image: string; // path relative to /public
  header: string;
  paragraph: string;
  hoverImage: string; // iconify name
};

const WhoShouldAttendCard: React.FC<CardProps> = ({
  image,
  header,
  paragraph,
  hoverImage,
}) => {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group w-full rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                 border border-black/[0.06] px-[20px] py-[22px] md:px-[24px] md:py-[26px]"
      aria-label={header}
    >
      <div className="flex flex-col items-center space-y-4 md:space-y-5">
        {/* Avatar/Image with overlay icon */}
        <div className="relative w-[90px] h-[90px] md:w-[100px] md:h-[100px]">
          <Image
            src={`/${image}`}
            alt={`${header} avatar`}
            fill
            sizes="120px"
            className="rounded-full object-cover"
            priority={false}
          />
          {/* Dark overlay + icon on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-black/55 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Icon
              icon={hoverImage}
              width={30}
              height={30}
              className="text-white"
              aria-hidden
            />
          </motion.div>
          {/* Ring on hover */}
          <span className="pointer-events-none absolute -inset-1 rounded-full ring-2 ring-transparent group-hover:ring-[#33C36C]/50 transition" />
        </div>

        <h2 className="text-center font-semibold md:text-[22px] text-[18px] leading-tight">
          {header}
        </h2>

        <p className="text-center text-black/75 text-[15px] md:text-[18px] leading-[1.7] max-w-[90%]">
          {paragraph}
        </p>
      </div>

      {/* Bottom accent bar */}
      <div className="mx-auto mt-5 h-[3px] w-12 rounded-full bg-[#33C36C]/70 group-hover:w-20 transition-all" />
    </motion.article>
  );
};

export default WhoShouldAttendCard;
