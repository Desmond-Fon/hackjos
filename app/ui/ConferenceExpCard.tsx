"use client";

import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

type CardProps = {
  icon: string;
  date: string;
  header: string;
  paragraph: string;
  classname?: string;
};

const ConferenceExpCard: React.FC<CardProps> = ({
  icon,
  date,
  header,
  paragraph,
  classname = "",
}) => {
  return (
    <motion.section
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className={`w-full md:max-w-[600px] rounded-[20px] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                  px-[28px] py-[28px] md:py-[36px] space-y-[20px] ${classname}`}
    >
      <div className="flex flex-col md:flex-row md:items-center gap-3">
        <span className="flex items-center justify-center h-12 w-12 rounded-full bg-[#33C36C] text-white">
          <Icon icon={icon} width={28} height={28} />
        </span>
        <h2 className="text-[15px] md:text-[18px] font-medium text-black/75 bg-[#F3F4F6] rounded-full px-4 py-2">
          {date}
        </h2>
      </div>

      <h3 className="font-semibold text-[20px] md:text-[26px] leading-tight">
        {header}
      </h3>
      <p className="text-[16px] md:text-[18px] leading-[1.7] text-black/70">
        {paragraph}
      </p>
    </motion.section>
  );
};

export default ConferenceExpCard;
