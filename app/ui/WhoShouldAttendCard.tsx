"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import "../globals.css";

type CardProps = {
  image: string;
  header: string;
  paragraph: string;
  hoverImage: string;
};

const WhoShouldAttendCard: React.FC<CardProps> = ({
  image,
  header,
  paragraph,
  hoverImage,
}) => {
  const [shown, setShown] = useState(false);

  return (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      {" "}
      <section
        className={`md:max-w-[627px] max-md:w-[300px] shadow-blur rounded-[20px]  bg-white space-y-[33px] mb-[51px] md:max-h-[443px]  `}
      >
        <div className='px-[20px] flex flex-col items-center space-y-[15px] pb-[40px]'>
          <div className='relative  w-[80px] aspect-[1/1]'>
            <img
              src={image}
              className='w-full h-full object-cover rounded-full transition-all duration-700'
              alt='profile'
            />
            <div
              className={`absolute inset-0 bg-black/60 rounded-full flex items-center justify-center transition-all duration-[.7s] ${
                shown ? "opacity-100" : "opacity-0 "
              }`}
            >
              <Icon
                icon={hoverImage}
                width={32}
                height={32}
                className='text-white'
              />
            </div>
          </div>

          <h2 className='font-medium md:text-[28px] text-[20px] md:leading-[36px] leading-[26px] '>
            {header}
          </h2>
          <p className='md:text-[20px] text-center text-[15px] font-normal md:leading-[38px] leading-[28px] text-black/75 '>
            {paragraph}
          </p>
        </div>
      </section>
    </div>
  );
};

export default WhoShouldAttendCard;
