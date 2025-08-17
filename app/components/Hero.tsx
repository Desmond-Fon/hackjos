"use client";

import { motion } from "framer-motion";

type Props = { title: string; description: string };

const Hero = ({ title, description }: Props) => {
  return (
    <div className="hero flex flex-col text-center items-center h-[350px] pt-[38px]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-[90%] lg:max-w-3xl flex flex-col text-center items-center"
      >
        <div className="flex justify-center items-center">
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
            className="bg-[#33C36C40] w-fit text-lg lg:text-2xl font-medium h-[50px] lg:h-[60px] px-[70px] flex justify-center items-center rounded-[15px] text-[#33C36C]"
          >
            HackJos
          </motion.div>
        </div>
        <h1 className="text-[32px] lg:text-[45px] lg:leading-[55px] font-medium pt-5">
          {title}
        </h1>
        <p className="text-[#000000BF] text-base lg:text-2xl pt-[18px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
