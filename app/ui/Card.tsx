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
    <section className='max-w-[627px] rounded-[20px] bg-white space-y-[33px] mb-[51px] max-h-[443px]'>
      <div>
        <img
          src={image}
          alt={header}
          className='rounded-lg w-full h-[245px] '
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
          <h2 className='font-medium text-[28px] leading-[36px] '>{header}</h2>
        </div>
        <p className='text-[18px] font-normal leading-[30px] text-black/75 '>
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default Card;
