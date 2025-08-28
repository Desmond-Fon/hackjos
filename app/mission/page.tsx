"use client";

import Hero from "../components/Hero";
import DescTag from "../components/DescTag";
import Footer from "../components/Footer";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MissionCard from "../components/MissionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, type Variants, useReducedMotion } from "framer-motion";

// import "swiper/css";
// import "swiper/css/free-mode";

const duplicatedImages = [
  "/swipe1.png",
  "/swipe2.png",
  "/swipe3.png",
  "/swipe4.png",
  "/swipe5.png",
  "/swipe1.png",
  "/swipe2.png",
  "/swipe3.png",
  "/swipe4.png",
  "/swipe5.png",
  "/swipe1.png",
  "/swipe2.png",
  "/swipe3.png",
  "/swipe4.png",
  "/swipe5.png",
];

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

const Page = () => {
  const prefersReduced = useReducedMotion();

  return (
    <main>
      <Hero
        title="Our Story & Mission"
        description="Join HackJos 2025 and compete for amazing prizes while solving real-world challenges"
      />

      {/* About section */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "0px 0px -120px 0px" }}
        className="text-center px-2 md:px-6 mb-10"
      >
        <motion.h2
          variants={fadeUp}
          className="text-[40px] md:text-[60px] font-Inter font-bold"
        >
          About <span className="text-[#33C36C]">HackJos 2025</span>
        </motion.h2>

        {/* animated underline */}
        <motion.div
          variants={fadeUp}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.45 }}
          className="mx-auto mt-2 h-[5px] w-[150px] md:w-[206px] rounded-full bg-[#33C36C] origin-left"
        />

        <motion.p
          variants={fadeUp}
          className="mt-6 text-gray-700 md:text-[24px] max-w-[1181px] leading-[36px] font-normal mx-auto"
        >
          HackJos 2025 is more than just a hackathon, it’s a celebration of
          innovation, collaboration, and the incredible journey of nHub over the
          past decade. As we mark nHub’s 10th anniversary, we’re bringing
          together Nigeria’s brightest minds to reimagine the future of Micro,
          Small, and Medium Enterprises (MSMEs) through cutting-edge technology
          solutions.
        </motion.p>
      </motion.div>

      {/* Mission split */}
      <div className="grid md:grid-cols-2 max-xl:flex max-xl:flex-col max-w-[1270px] m-auto gap-10 items-center px-4">
        {/* Left Text */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          className="px-0 md:px-6"
        >
          <motion.h3
            variants={fadeUp}
            className="text-[35px] max-md:text-center md:text-[45px] font-semibold mb-4"
          >
            Our Mission
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-gray-700 md:text-[20px] mb-6"
          >
            We’re on a mission to empower Nigeria’s entrepreneurial ecosystem by
            fostering innovation that directly impacts the growth and
            sustainability of MSMEs. Through this three-day event, participants
            will develop groundbreaking solutions that address real-world
            challenges faced by small businesses across Nigeria.
          </motion.p>

          <motion.ul
            variants={container}
            className="space-y-[18px] md:text-[20px] text-gray-800"
          >
            {[
              "48 hours of intensive innovation and collaboration",
              "Mentorship from industry experts and thought leaders",
              "Opportunity to showcase solutions to potential investors",
            ].map((item) => (
              <motion.li
                key={item}
                variants={fadeUp}
                className="flex items-start"
              >
                <span className="text-[#33C36C] mr-2 mt-1">
                  <Icon
                    icon="charm:circle-tick"
                    className="w-[20px] lg:w-[28px] h-[20px] lg:h-[28px]"
                  />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 24, rotate: -0.5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ type: "tween", ease: "easeOut", duration: 0.7 }}
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          className="w-full mx-auto flex justify-center max-md:px-4"
        >
          <motion.div
            whileHover={prefersReduced ? {} : { scale: 1.02, y: -3 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="relative rounded-[16px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.15)]"
          >
            <Image
              src="/mission-img-1.png"
              alt="HackJos team collaborating"
              width={900}
              height={600}
              className="object-cover "
              priority={false}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
          </motion.div>
        </motion.div>
      </div>

      {/* Speakers */}
      <section>
        <DescTag
          top="Speakers"
          title="Meet Our Speakers"
          description="Our 10-Year Celebration features a lineup of industry leaders, inspiring founders, and policy shapers who are driving innovation across Africa."
        />

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="flex flex-col lg:flex-row items-center justify-center gap-[18px] m-auto px-4"
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div key={i} variants={fadeUp}>
              <MissionCard
                Image="/missionHuman.png"
                Icon1="pajamas:twitter"
                Icon2="streamline:linkedin"
                Icon3="circum:mail"
                header2="Sarah Williams"
                greenHeader2="CEO & Co-Founder Techyy"
                paragraph="A leading voice in African innovation, [Name] has built solutions that impact thousands, advocating for technology as a driver of economic growth"
              />
            </motion.div>
          ))}
        </motion.section>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-[30px] lg:mt-[81px] mb-[60px] lg:mb-[110px] flex justify-center items-center mx-auto px-5"
        >
          <div className="lg:w-[50%] w-full shadow-lg rounded-[20px] p-6 md:p-8 flex flex-col items-center gap-[24px] text-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-[28px] md:text-[36px] lg:text-[45px] font-[600] leading-tight">
                Join Our Mission
              </h1>
              <p className="text-[#000000A6] md:text-[18px] lg:text-[22px]">
                We&apos;re always looking for passionate individuals who share
                our vision of transforming technology. If you&apos;re interested
                in making a difference, we&apos;d love to hear from you.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: prefersReduced ? 1 : 1.03,
                y: prefersReduced ? 0 : -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#33C36C] rounded-[20px] h-[50px] lg:h-[65px] px-[40px] md:px-[56px] flex justify-center items-center gap-3 text-white font-medium lg:text-[20px]
                         shadow-[0_10px_24px_rgba(51,195,108,0.28)] hover:shadow-[0_16px_40px_rgba(51,195,108,0.38)] transition-all"
            >
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.75 8.5L11.165 12.366C11.4269 12.4863 11.7118 12.5486 12 12.5486C12.2882 12.5486 12.5731 12.4863 12.835 12.366L21.25 8.5"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Media rail */}
      <DescTag
        top="Media"
        title="Hackjos 2024"
        description="Relive the energy, creativity, and collaboration from our past HackJos hackathons."
      />

      <div className="relative w-full bg-white overflow-hidden">
        {/* edge fade gradients */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white to-transparent z-10" />

        <Swiper
          modules={[Autoplay, FreeMode]}
          loop
          speed={prefersReduced ? 0 : 4500}
          freeMode
          slidesPerView="auto"
          spaceBetween={20}
          autoplay={
            prefersReduced
              ? false
              : {
                  delay: 0,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }
          }
          aria-label="Media highlights carousel"
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className="!w-auto flex">
              <motion.div
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
                className="relative"
              >
                <Image
                  loading="lazy"
                  src={image}
                  alt={`Media slide ${index + 1}`}
                  className="w-screen max-lg:px-[20px] lg:w-[574.5px] h-[383px] my-[108px] lg:my-[108px] rounded-[10%] lg:rounded-[15px] object-cover shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
                  width={574.5}
                  height={383}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </main>
  );
};

export default Page;
