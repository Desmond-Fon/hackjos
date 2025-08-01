import React from "react";
import { Icon } from "@iconify/react";

type CardProps = {
  icon: string;
  date: string;
  header: string;
  paragraph: string;
  classname: string;
};

const ConferenceExpCard: React.FC<CardProps> = ({
  icon,
  date,
  header,
  paragraph,
  classname,
}) => {
  return (
    <section
      className={` md:max-w-[595px] max-md:w-[300px] py-[21px] px-[40px] shadow-blur-2 rounded-[20px] bg-white space-y-[33px] mb-[51px] md:max-h-[240px] ${classname} `}
    >
      <div className='px-[20px] space-y-[15px] pb-[40px]  '>
        <div className='flex gap-[16px] items-center'>
          <Icon
            icon={icon}
            width={45}
            height={45}
            className='p-[9px] rounded-[50%] text-white bg-[#33C36C] '
          />
          <h2 className='font-medium text-black/75 bg-[#E0E0E059] rounded-[30px] px-[15px] py-[10px] md:text-[20px] text-[16px] md:leading-[36px] leading-[26px]'>
            {date}
          </h2>
        </div>
        <h2 className='font-medium md:text-[28px] text-[20px] md:leading-[36px] leading-[26px]'>
          {header}
        </h2>
        <p className='md:text-[22px] text-[18px] font-normal md:leading-[38px] leading-[28px] text-black/75 '>
          {paragraph}
        </p>
      </div>
    </section>
  );
};

export default ConferenceExpCard;
