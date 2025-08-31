"use client";

import Image from "next/image";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { motion, type Variants, useReducedMotion } from "framer-motion";


import "swiper/css";
import "swiper/css/free-mode";

const duplicatedImages = [
  "/partner.png",
  "/partner2.svg",
  "/partner3.svg",
  "/partner4.jpeg",
  "/partner5.svg",
  "/partner.png",
  "/partner2.svg",
  "/partner3.svg",
  "/partner4.jpeg",
  "/partner5.svg",
  "/partner.png",
  "/partner2.svg",
  "/partner3.svg",
  "/partner4.jpeg",
  "/partner5.svg",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.6 },
  },
};

const slideIn: Variants = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.7 },
  },
};

const Partners = () => {
  const prefersReduced = useReducedMotion();

  return (
    <>
      <div className="pb-24 lg:pb-32">
        <Hero
          title="Years of Partnerships & Impact"
          description="Our journey has been powered by visionary partners who believe in innovation, entrepreneurship, and the future of technology in Northern Nigeria."
        />

        {/* Intro section */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          className="my-16 lg:my-24 px-5 container mx-auto"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-20">
            <motion.div
              variants={slideIn}
              className="lg:w-1/2 text-center lg:text-left space-y-6"
            >
              <div className="text-slate-600 text-lg lg:text-xl leading-relaxed space-y-4">
                <p>
                  Over the past decade, nHub has thrived because of the unwavering
                  support of our partners—organizations, institutions, and
                  individuals committed to driving innovation, entrepreneurship, and
                  digital transformation in Northern Nigeria.
                </p>
                <p>
                  As we celebrate 10 years of impact, we honor those who have walked
                  this journey with us—supporting programs, sponsoring events,
                  mentoring startups, and helping us scale our mission.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:w-1/2">
              <div className="relative">
                <Image
                  src="/partners.png"
                  alt="Collage of partners supporting nHub"
                  width={630}
                  height={320}
                  className="w-full rounded-2xl border border-slate-200"
                  priority
                />
                {/* Decorative element */}
                <div className="absolute -top-3 -right-3 w-6 h-6 bg-emerald-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-blue-500 rounded-full opacity-20"></div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Strategic Partners */}
        <SectionHeading
          title="Strategic Partners"
          subtitle="These organizations have played a pivotal role in shaping our ecosystem and championing tech growth over the past decade."
        />
        
        <div className="mt-12">
          <LogoMarquee
            images={duplicatedImages}
            prefersReduced={prefersReduced}
          />
        </div>

        {/* Partner Categories */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="mt-20 lg:mt-32 px-5 container mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            <PartnerCategory
              icon={
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H3m2 0h4M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8h1m4 0h1" />
                </svg>
              }
              title="Government Partners"
              description="Federal and state agencies supporting our mission through policy and funding initiatives."
            />
            <PartnerCategory
              icon={
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6" />
                </svg>
              }
              title="Corporate Partners"
              description="Leading companies investing in Northern Nigeria's tech ecosystem and talent development."
            />
            <PartnerCategory
              icon={
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              }
              title="Academic Partners"
              description="Universities and research institutions fostering innovation through education and collaboration."
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -80px 0px" }}
          className="mt-20 lg:mt-32 mb-16 lg:mb-24 flex justify-center items-center mx-auto px-5"
        >
          <div className="max-w-2xl w-full border-2 border-slate-200 rounded-3xl p-8 lg:p-12 flex flex-col items-center gap-8 text-center bg-slate-50/50">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight">
                Join Our Mission
              </h2>
              <p className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-lg">
                We're always looking for partners who share our vision of
                transforming technology. If you're interested in making a
                difference, we'd love to hear from you.
              </p>
            </div>

            <motion.button
              whileHover={{
                scale: prefersReduced ? 1 : 1.02,
                y: prefersReduced ? 0 : -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-emerald-600 hover:bg-emerald-700 rounded-2xl h-14 lg:h-16 px-8 lg:px-12 flex justify-center items-center gap-3 text-white font-semibold text-lg lg:text-xl
                         border-2 border-emerald-600 hover:border-emerald-700 transition-all duration-200"
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
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.75 8.5L11.165 12.366C11.4269 12.4863 11.7118 12.5486 12 12.5486C12.2882 12.5486 12.5731 12.4863 12.835 12.366L21.25 8.5"
                  stroke="white"
                  strokeWidth="2"
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
}: {
  title: string;
  subtitle: string;
}) => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    className="flex flex-col gap-6 lg:gap-8 justify-center items-center text-center px-5 mt-20 lg:mt-32"
  >
    <motion.h2
      variants={fadeUp}
      className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight"
    >
      {title}
    </motion.h2>
    <motion.p
      variants={fadeUp}
      className="text-slate-600 text-lg lg:text-xl leading-relaxed max-w-4xl"
    >
      {subtitle}
    </motion.p>
  </motion.div>
);

const PartnerCategory = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={fadeUp}
    className="text-center space-y-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 transition-colors duration-200"
  >
    <div className="flex justify-center">{icon}</div>
    <h3 className="text-xl lg:text-2xl font-semibold text-slate-900">{title}</h3>
    <p className="text-slate-600 leading-relaxed">{description}</p>
  </motion.div>
);

const LogoMarquee = ({
  images,
  prefersReduced,
}: {
  images: string[];
  prefersReduced: boolean | null;
}) => (
  <div className="w-full bg-white relative overflow-x-hidden py-8">
    <Swiper
      modules={[Autoplay, FreeMode]}
      loop
      speed={prefersReduced ? 0 : 5000}
      freeMode
      slidesPerView="auto"
      spaceBetween={24}
      autoplay={
        prefersReduced
          ? false
          : { delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }
      }
      aria-label="Partner logos carousel"
      className="partner-swiper"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="!w-[160px] lg:!w-[220px] flex-shrink-0"
        >
          <motion.div
            whileHover={{ 
              y: prefersReduced ? 0 : -6, 
              scale: prefersReduced ? 1 : 1.02 
            }}
            transition={{ type: "tween", ease: "easeOut", duration: 0.2 }}
            className="h-24 lg:h-32 rounded-xl border-2 border-slate-200 bg-white p-4 lg:p-6 flex items-center justify-center hover:border-slate-300 transition-colors duration-200"
          >
            <Image
              loading="lazy"
              src={image}
              alt={`Partner ${index + 1}`}
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              width={180}
              height={90}
            />
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);