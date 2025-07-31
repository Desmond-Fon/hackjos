import React from "react";
import { Icon } from "@iconify/react";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
  image: string;
};

const Card: React.FC<CardProps> = ({ image, icon, header, paragraph }) => {
  return (
    <section className='md:max-w-[627px] max-md:w-[300px] rounded-[20px] bg-white space-y-[33px] mb-[51px] md:max-h-[443px]'>
      <div>
        <img
          src={image}
          alt={header}
          className='rounded-lg w-full md:h-[245px] h-[150px] '
        />
      </div>
      <div className='px-[20px] space-y-[15px] pb-[40px]  '>
        <div className='flex gap-[16px]'>
          <Icon
            icon={icon}
            width={38}
            height={38}
            className='p-[9px] rounded-[50%] text-white bg-[#33C36C] '
          />
          <h2 className='font-medium md:text-[28px] text-[20px] leading-[36px] '>
            {header}
          </h2>
        </div>
        <p className='md:text-[18px] text-[15px] font-normal leading-[30px] text-black/75 '>
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default Card;
