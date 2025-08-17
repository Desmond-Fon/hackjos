"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type Variants,
} from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "tween", ease: "easeOut", duration: 0.7 },
  },
};

const Header = () => {
  const prefersReduced = useReducedMotion();

  // Parallax + subtle zoom on scroll (disabled if user prefers reduced motion)
  const { scrollYProgress } = useScroll();
  const bgScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? [1, 1] : [1, 1.08]
  );
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReduced ? ["0%", "0%"] : ["0%", "8%"]
  );

  return (
    <header
      role="banner"
      className="flex items-center justify-center z-10 h-[100vh] overflow-hidden text-white"
    >
      {/* Background image with parallax/zoom */}
      <motion.div
        className="absolute inset-0 -z-10 will-change-transform"
        style={{ scale: bgScale, y: bgY }}
        aria-hidden="true"
      >
        <Image
          src="/header.jpg"
          alt="" // decorative
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Overlays for legibility */}
      <div className="absolute inset-0 -z-10 bg-black/55" aria-hidden="true" />
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_30%,rgba(51,195,108,0.18),transparent_60%)]"
        aria-hidden="true"
      />

      {/* Decorative soft lights */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <motion.span
          className="absolute top-[15%] left-[10%] h-40 w-40 rounded-full bg-emerald-400/10 blur-2xl"
          animate={
            prefersReduced
              ? undefined
              : { opacity: [0.45, 0.9, 0.45], scale: [1, 1.05, 1] }
          }
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.span
          className="absolute bottom-[18%] right-[12%] h-52 w-52 rounded-full bg-white/10 blur-3xl"
          animate={
            prefersReduced
              ? undefined
              : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.06, 1] }
          }
          transition={{
            duration: 4.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        className="h-full px-4 flex flex-col items-center justify-center text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div variants={fadeUp} className="mb-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur px-3 py-1 text-xs md:text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Nigeria’s premier hackathon & conference
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="font-extrabold leading-none
                     text-[clamp(2.5rem,6vw,6.5rem)]"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
            HackJos
          </span>{" "}
          <span className="tracking-tight">2025</span>
        </motion.h1>

        {/* Collab line */}
        <motion.div
          variants={fadeUp}
          className="mt-2 flex items-center justify-center gap-2 md:gap-3"
        >
          <h2 className="text-[#33C36C] text-[clamp(1.6rem,5vw,3.4rem)] font-bold leading-none">
            X
          </h2>
          <h2 className="text-[clamp(1.125rem,3.5vw,2.25rem)] font-semibold leading-none">
            Celebrating nHub@10
          </h2>
        </motion.div>

        {/* Theme + subcopy */}
        <motion.div variants={fadeUp} className="max-w-3xl mt-4">
          <p className="text-[clamp(1rem,2.2vw,1.375rem)] font-medium/relaxed">
            Theme:{" "}
            <span className="font-semibold italic">
              “Igniting MSMEs Growth Through Innovation”
            </span>
          </p>
          <p className="mt-2 text-[clamp(1rem,2.2vw,1.375rem)] text-white/90">
            Join Nigeria&apos;s top hackathon and conference as we celebrate 10
            years <br className="hidden lg:block" />
            of innovation and shape the future of MSMEs with tech‑driven{" "}
            <br className="hidden lg:block" />
            solutions.
          </p>
        </motion.div>

        {/* Date/Location */}
        <motion.div
          variants={fadeUp}
          className="flex justify-center items-center gap-3 mt-7"
        >
          <Image
            src="/calendar.svg"
            alt="Calendar icon"
            width={48}
            height={48}
            className="max-xl:w-[25px]"
          />
          <p className="text-[clamp(1rem,2.4vw,1.75rem)] font-medium">
            October 22–24, 2025 • Jos, Nigeria
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mt-10"
        >
          <Link href="/apply" aria-label="Apply for HackJos Challenge">
            <motion.button
              whileHover={{
                scale: prefersReduced ? 1 : 1.04,
                y: prefersReduced ? 0 : -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="group h-[44px] md:h-[50px] xl:h-[75px] rounded-[20px] md:rounded-[30px]
                         px-5 md:px-10 bg-[#33C36C] text-white md:text-[20px] xl:text-[28px] font-medium
                         shadow-[0_10px_24px_rgba(51,195,108,0.28)] hover:shadow-[0_16px_40px_rgba(51,195,108,0.38)]
                         transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/40"
            >
              Apply for HackJos{" "}
              <span className="hidden lg:inline">Challenge</span>
              <motion.span
                className="ml-2 inline-block"
                animate={prefersReduced ? undefined : { x: [0, 2, 0] }}
                transition={{
                  duration: 0.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>

          <Link href="/register" aria-label="Register to attend">
            <motion.button
              whileHover={{
                scale: prefersReduced ? 1 : 1.03,
                y: prefersReduced ? 0 : -2,
              }}
              whileTap={{ scale: 0.98 }}
              className="h-[44px] md:h-[50px] xl:h-[75px] rounded-[20px] md:rounded-[30px]
                         px-5 md:px-10 text-[#33C36C] bg-white md:text-[20px] xl:text-[28px] font-medium
                         border border-white/70 hover:border-white shadow-[0_6px_18px_rgba(0,0,0,0.15)]
                         hover:shadow-[0_10px_28px_rgba(0,0,0,0.22)]
                         transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
            >
              Register to Attend
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating chevron */}
        <motion.div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/85"
          animate={
            prefersReduced
              ? {}
              : {
                  y: [0, 8, 0],
                  transition: {
                    duration: 2.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }
          }
          aria-hidden="true"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5H7z" />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
