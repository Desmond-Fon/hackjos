"use client";

import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
  link: string;
  linkName: string;
};

const GetInvolvedCard: React.FC<CardProps> = ({
  icon,
  header,
  paragraph,
  li1,
  li2,
  li3,
  li4,
  link,
  linkName,
}) => {
  return (
    <motion.section
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 240, damping: 18 }}
      className="flex flex-col gap-4 rounded-[16px] bg-white p-[32px] md:w-[380px] shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                 border-t-[8px] border-[#33C36C] transition-all"
    >
      {/* Icon badge */}
      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full bg-gradient-to-b from-[#33C36C] to-[#185D34]">
        <Icon icon={icon} width={30} height={30} className="text-white" />
      </div>

      {/* Title + description */}
      <h2 className="text-[20px] md:text-[24px] font-semibold">{header}</h2>
      <p className="text-[14px] md:text-[16px] text-black/70 leading-relaxed">
        {paragraph}
      </p>

      {/* Benefits list */}
      <ul className="mt-2 flex flex-col gap-2">
        {[li1, li2, li3, li4].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <Icon
              icon="charm:circle-tick"
              width={18}
              height={18}
              className="text-[#13A829]"
            />
            <span className="text-[13px] md:text-[15px] text-black/70">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href={link}>
        <motion.button
          whileHover={{
            scale: 1.03,
            backgroundColor: "#22b35b",
            color: "#fff",
          }}
          whileTap={{ scale: 0.96 }}
          className="mt-auto w-full rounded-[20px] border border-[#33C36C] py-2 md:py-3 text-[#33C36C] font-medium
                     transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-[#33C36C]/30"
        >
          {linkName} →
        </motion.button>
      </Link>
    </motion.section>
  );
};

export default GetInvolvedCard;
