"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, type Variants, useReducedMotion } from "framer-motion";

// Swiper styles (ensure these are imported globally somewhere in app)
// import "swiper/css";
// import "swiper/css/free-mode";

const duplicatedImages = Array.from({ length: 20 }, () => "/partner.png");

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

const Partners = () => {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <div className="pb-[100px]">
        <Hero
          title="Years of Partnerships & Impact"
          description="Our journey has been powered by visionary partners who believe in innovation, entrepreneurship, and the future of technology in Northern Nigeria."
        />

        {/* Intro section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -120px 0px" }}
          className="my-[75px] px-5 container mx-auto flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-[70px]"
        >
          <motion.div
            variants={fadeUp}
            className="lg:w-1/2 text-center lg:text-left text-[#000000A6] lg:text-[24px]"
          >
            <p>
              Over the past decade, nHub has thrived because of the unwavering
              support of our partners—organizations, institutions, and
              individuals committed to driving innovation, entrepreneurship, and
              digital transformation in Northern Nigeria.
            </p>
            <br />
            <p>
              As we celebrate 10 years of impact, we honor those who have walked
              this journey with us—supporting programs, sponsoring events,
              mentoring startups, and helping us scale our mission.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="lg:w-1/2">
            <Image
              src="/partners.png"
              alt="Collage of partners supporting nHub"
              width={630}
              height={320}
              className="w-full rounded-[14px] shadow-[0_12px_36px_rgba(0,0,0,0.12)]"
              priority
            />
          </motion.div>
        </motion.div>

        {/* Strategic Partners */}
        <SectionHeading
          title="Strategic Partners"
          subtitle="These organizations have played a pivotal role in shaping our ecosystem and championing tech growth over the past decade."
        />
        <LogoMarquee
          images={duplicatedImages}
          prefersReduced={prefersReduced}
        />

        {/* Event Sponsors */}
        <SectionHeading
          title="Event Sponsors"
          subtitle="HackJos 2025 and nHub@10 are made possible through the generous support of our sponsors."
          topMargin
        />
        <LogoMarquee
          images={duplicatedImages}
          prefersReduced={prefersReduced}
        />

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="mt-10 lg:mt-[160px] mb-10 lg:mb-[80px] flex justify-center items-center mx-auto px-5"
        >
          <div className="lg:w-[50%] w-full shadow-lg rounded-[20px] p-6 md:p-8 flex flex-col items-center gap-[24px] text-center">
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-[28px] md:text-[36px] lg:text-[45px] font-[600] leading-tight">
                Join Our Mission
              </h1>
              <p className="text-[#000000A6] md:text-[18px] lg:text-[22px]">
                We’re always looking for partners who share our vision of
                transforming technology. If you’re interested in making a
                difference, we’d love to hear from you.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: prefersReduced ? 1 : 1.03,
                y: prefersReduced ? 0 : -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#33C36C] rounded-[20px] h-[50px] lg:h-[65px] px-[28px] md:px-[42px] flex justify-center items-center gap-3 text-white font-medium lg:text-[20px]
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
      </div>

      <Footer />
    </>
  );
};

export default Partners;

/* ---------- Subcomponents ---------- */

const SectionHeading = ({
  title,
  subtitle,
  topMargin = false,
}: {
  title: string;
  subtitle: string;
  topMargin?: boolean;
}) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    className={`flex flex-col gap-4 lg:gap-6 justify-center items-center text-center px-5 ${
      topMargin ? "mt-10 lg:mt-[90px]" : "mt-10 lg:mt-[90px]"
    }`}
  >
    <motion.h2
      variants={fadeUp}
      className="text-[28px] md:text-[36px] lg:text-[45px] font-medium"
    >
      {title}
    </motion.h2>
    <motion.p
      variants={fadeUp}
      className="text-[#000000A6] md:text-[18px] lg:text-[24px] max-w-[960px]"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

const LogoMarquee = ({
  images,
  prefersReduced,
}: {
  images: string[];
  prefersReduced: boolean | null;
}) => (
  <div className="w-full bg-white relative -mt-1 overflow-x-hidden h-full">
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop
      speed={prefersReduced ? 0 : 4500}
      freeMode
      slidesPerView="auto"
      autoplay={
        prefersReduced
          ? false
          : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }
      }
      aria-label="Partner logos carousel"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!w-[140px] lg:!w-[200px] flex-shrink-0 mx-2 lg:mx-3"
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.03 }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.25 }}
            className="rounded-[10px] border border-black/[0.06] bg-white p-3 lg:p-4 shadow-[0_6px_16px_rgba(0,0,0,0.06)]"
          >
            <Image
              loading="lazy"
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full h-auto object-contain grayscale hover:grayscale-0 transition"
              width={180}
              height={90}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);
