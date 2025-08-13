"use client";
import Hero from "../components/Hero";
import DescTag from "../components/DescTag";
import Footer from "../components/Footer";
import Image from "next/image";
import { Icon } from "@iconify/react";
import MissionCard from "../components/MissionCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

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

const page = () => {
  return (
    <main>
      <div>
        <Hero
          title='Our Story & Mission'
          description='Join HackJos 2025 and compete for amazing prizes while solving real-world challenges'
        />
        <div className='text-center px-[10px]   mb-10'>
          <h2 className='text-[40px] md:text-[60px] font-Inter font-bold'>
            About <span className='text-[#33C36C]'>HackJos 2025</span>
          </h2>
          <p className='mt-[24px] text-gray-700 md:text-[24px] max-w-[1181px] leading-[36px] font-normal mx-auto'>
            HackJos 2025 is more than just a hackathon, it’s a celebration of
            innovation, collaboration, and the incredible journey of nHub over
            the past decade. As we mark nHub’s 10th anniversary, we’re bringing
            together Nigeria’s brightest minds to reimagine the future of Micro,
            Small, and Medium Enterprises (MSMEs) through cutting-edge
            technology solutions.
          </p>
        </div>
        <div className='grid md:grid-cols-2 max-xl:flex max-xl:flex-col max-w-[1270px] m-auto gap-10 items-center'>
          {/* Left Text Section */}
          <div className='px-10'>
            <h3 className='text-[35px] max-md:text-center md:text-[45px] font-semibold mb-4'>
              Our Mission
            </h3>
            <p className='text-gray-700 md:text-[20px] mb-6'>
              We’re on a mission to empower Nigeria’s entrepreneurial ecosystem
              by fostering innovation that directly impacts the growth and
              sustainability of MSMEs. Through this three-day event,
              participants will develop groundbreaking solutions that address
              real-world challenges faced by small businesses across Nigeria.
            </p>

            <ul className='space-y-[18px] md:text-[20px]  text-gray-800'>
              <li className='flex items-start'>
                <span className='text-[#33C36C] mr-2'>
                  <Icon
                    icon='charm:circle-tick'
                    className=' w-[20px] lg:w-[32px] h-[20px] lg:h-[32px] '
                    width={32}
                    height={32}
                  />
                </span>
                48 hours of intensive innovation and collaboration
              </li>
              <li className='flex items-start'>
                <span className='text-[#33C36C] mr-2'>
                  <Icon
                    icon='charm:circle-tick'
                    className=' w-[20px] lg:w-[32px] h-[20px] lg:h-[32px] '
                    width={32}
                    height={32}
                  />
                </span>
                Mentorship from industry experts and thought leaders
              </li>
              <li className='flex items-start'>
                <span className='text-[#33C36C] mr-2'>
                  <Icon
                    icon='charm:circle-tick'
                    className=' w-[20px] lg:w-[32px] h-[20px] lg:h-[32px] '
                    width={32}
                    height={32}
                  />
                </span>
                Opportunity to showcase solutions to potential investors
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className='w-full mx-auto flex justify-center max-md:px-10 '>
            <Image
              src='/mission-img-1.png'
              alt='HackJos Team'
              width={600}
              height={400}
              className='rounded-lg  object-cover shadow-md'
            />
          </div>
        </div>
      </div>
      <section>
        <DescTag
          top='Speakers'
          title='Meet Our Speakers'
          description='Our 10-Year Celebration features a lineup of industry leaders, inspiring founders, and policy shapers who are driving innovation across Africa.'
        />
        <section className='flex flex-wrap justify-center gap-[18px] m-auto'>
          <MissionCard
            Image='/missionHuman.png'
            Icon1='pajamas:twitter'
            Icon2='streamline:linkedin'
            Icon3='circum:mail'
            header2='Sarah Williams'
            greenHeader2='CEO & Co-Founder Techyy'
            paragraph='A leading voice in African innovation, [Name] has built solutions that impact thousands, advocating for technology as a driver of economic growth'
          />
          <MissionCard
            Image='/missionHuman.png'
            Icon1='pajamas:twitter'
            Icon2='streamline:linkedin'
            Icon3='circum:mail'
            header2='Sarah Williams'
            greenHeader2='CEO & Co-Founder Techyy'
            paragraph='A leading voice in African innovation, [Name] has built solutions that impact thousands, advocating for technology as a driver of economic growth'
          />
          <MissionCard
            Image='/missionHuman.png'
            Icon1='pajamas:twitter'
            Icon2='streamline:linkedin'
            Icon3='circum:mail'
            header2='Sarah Williams'
            greenHeader2='CEO & Co-Founder Techyy'
            paragraph='A leading voice in African innovation, [Name] has built solutions that impact thousands, advocating for technology as a driver of economic growth'
          />
        </section>
        <div className='mt-[30px] lg:mt-[81px] mb-[60px] lg:mb-[110px] flex justify-center items-center mx-auto px-5'>
          <div className='lg:w-[50%] shadow-lg rounded-[20px] p-6 flex flex-col items-center gap-[30px]'>
            <div className='space-y-6'>
              <h1 className='text-center text-[36px] lg:text-[45px] font-[500]'>
                Join Our Mission
              </h1>
              <p className='text-center text-[#000000A6] lg:text-[22px]'>
                We're always looking for passionate individuals who share our
                vision of transforming technology. If you're interested in
                making a difference, we'd love to hear from you.
              </p>
            </div>

            <button className='bg-[#33C36C] rounded-[20px] h-[50px] lg:h-[65px] px-[56px] flex justify-center items-center gap-3 text-white font-medium lg:text-[20px]'>
              <svg
                width='24'
                height='25'
                viewBox='0 0 24 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18.25 4.75H5.75C4.09315 4.75 2.75 6.09315 2.75 7.75V17.25C2.75 18.9069 4.09315 20.25 5.75 20.25H18.25C19.9069 20.25 21.25 18.9069 21.25 17.25V7.75C21.25 6.09315 19.9069 4.75 18.25 4.75Z'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M2.75 8.5L11.165 12.366C11.4269 12.4863 11.7118 12.5486 12 12.5486C12.2882 12.5486 12.5731 12.4863 12.835 12.366L21.25 8.5'
                  stroke='white'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              Get In Touch
            </button>
          </div>
        </div>
      </section>
      <DescTag
        top='Media'
        title='Hackjos 2024'
        description='Relive the energy, creativity, and collaboration from our past HackJos hackathons.'
      />

      <div className='w-full bg-white relative -my-10  overflow-hidden h-full'>
        <Swiper
          modules={[Autoplay, FreeMode]}
          loop={true}
          speed={4500}
          freeMode={true}
          slidesPerView='auto'
          spaceBetween={20}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
        >
          {duplicatedImages.map((image, index) => (
            <SwiperSlide key={index} className='!w-auto flex'>
              <Image
                loading='lazy'
                src={image}
                alt={`Slide ${index}`}
                className=' w-screen max-lg:px-[20px] lg:w-[574.5px] h-[383px] mb-[218px] mt-[108px]  max-lg:rounded-[10%] rounded-[15px] object-cover'
                width={574.5}
                height={383}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <Footer />
    </main>
  );
};

export default page;
