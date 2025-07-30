import React from "react";
import { Icon } from "@iconify/react";
import "../globals.css";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
};
const ChallengeCard: React.FC<CardProps> = ({ icon, header, paragraph }) => {
  return (
    <section className='md:max-w-[627px] max-md:w-[300px] shadow-blur rounded-[20px] bg-white space-y-[33px] mb-[51px] md:max-h-[443px]'>
      <div className='px-[20px] space-y-[15px] pb-[40px]  '>
        <div className='flex gap-[16px] items-center'>
          <Icon
            icon={icon}
            width={45}
            height={45}
            className='p-[9px] rounded-[50%] text-black bg-[#33C36C] '
          />
          <h2 className='font-medium md:text-[28px] text-[20px] md:leading-[36px] leading-[26px] '>
            {header}
          </h2>
        </div>
        <p className='md:text-[22px] text-[18px] font-normal md:leading-[38px] leading-[28px] text-black/75 '>
          {paragraph}
        </p>
        <button className='text-[#33C36C] hover:text-black/45 md:text-[24px] text-[20px] font-normal '>
          Learn More ➤
        </button>
      </div>
    </section>
  );
};

export default ChallengeCard;
