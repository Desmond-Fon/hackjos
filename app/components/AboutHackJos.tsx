import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Icon } from "@iconify/react";
const AboutHackJos: React.FC = () => {
  return (
    <section className='px-6 md:py-[87px] md:px-20 md:max-h-[984px] bg-white'>
      {/* Header Section */}
      <div className='text-center  mb-10'>
        <h2 className='text-[40px] md:text-[60px] font-Inter font-bold'>
          About <span className='text-[#33C36C]'>HackJos 2025</span>
        </h2>
        <p className='mt-[24px] text-gray-700 md:text-[24px] max-w-[1181px] leading-[36px] font-normal mx-auto'>
          HackJos 2025 is more than just a hackathon, it’s a celebration of
          innovation, collaboration, and the incredible journey of nHub over the
          past decade. As we mark nHub’s 10th anniversary, we’re bringing
          together Nigeria’s brightest minds to reimagine the future of Micro,
          Small, and Medium Enterprises (MSMEs) through cutting-edge technology
          solutions.
        </p>
      </div>

      {/* Main Content */}
      <div className='grid md:grid-cols-2 max-w-[1270px] m-auto gap-10 items-center'>
        {/* Left Text Section */}
        <div>
          <h3 className='text-[35px] max-md:text-center md:text-[45px] font-semibold mb-4'>
            Our Mission
          </h3>
          <p className='text-gray-700 md:text-[20px] mb-6'>
            We’re on a mission to empower Nigeria’s entrepreneurial ecosystem by
            fostering innovation that directly impacts the growth and
            sustainability of MSMEs. Through this three-day event, participants
            will develop groundbreaking solutions that address real-world
            challenges faced by small businesses across Nigeria.
          </p>

          <ul className='space-y-[18px] md:text-[20px] text-gray-800'>
            <li className='flex items-start'>
              <span className='text-[#33C36C] mr-2'>
                <Icon icon='charm:circle-tick' width={32} height={32} />
              </span>
              48 hours of intensive innovation and collaboration
            </li>
            <li className='flex items-start'>
              <span className='text-[#33C36C] mr-2'>
                <Icon icon='charm:circle-tick' width={32} height={32} />
              </span>
              Mentorship from industry experts and thought leaders
            </li>
            <li className='flex items-start'>
              <span className='text-[#33C36C] mr-2'>
                <Icon icon='charm:circle-tick' width={32} height={32} />
              </span>
              Opportunity to showcase solutions to potential investors
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className='w-full'>
          <Image
            src='/Frame 1418067566.png'
            alt='HackJos Team'
            width={600}
            height={400}
            className='rounded-lg object-cover shadow-md'
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHackJos;
