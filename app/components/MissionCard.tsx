import { Icon } from "@iconify/react";

type CardProps = {
  Image: string;
  header2: string;
  greenHeader2: string;
  paragraph: string;
  Icon1: string;
  Icon2: string;
  Icon3: string;
};

const MissionCard: React.FC<CardProps> = ({
  Image,
  header2,
  greenHeader2,
  paragraph,
  Icon1,
  Icon2,
  Icon3,
}) => {
  return (
    <div className=' max-w-[396px] lg:w-[396px] m-[20px] '>
      <img src={Image} alt='' />
      <section className=' flex flex-col gap-[20px] p-[10px] bg-white rounded-[20px] shadow-[0_4px_24px_rgba(0,0,0,0.1)] '>
        <h2 className=' text-[20px] font-medium leading-[30px] '>{header2}</h2>
        <h2 className='  text-[18px] font-medium leading-[27px] text-[#33C36C] '>
          {greenHeader2}
        </h2>
        <p className=' text-[16px] leading-[24px] font-normal text-black/75 '>
          {paragraph}
        </p>
        <div className='flex gap-[15px] '>
          <div className='flex gap-[10px] bg-[#33C36C26] w-[40px] h-[40px] p-[10px] rounded-[50%] '>
            <Icon
              icon={Icon1}
              width={18}
              height={18}
              className=' text-[#33C36C] '
            />
          </div>
          <div className='flex gap-[10px] bg-[#33C36C26] w-[40px] h-[40px] p-[10px] rounded-[50%] '>
            <Icon
              icon={Icon2}
              width={18}
              height={18}
              className=' text-[#33C36C] '
            />
          </div>
          <div className='flex gap-[10px] bg-[#33C36C26] w-[40px] h-[40px] p-[10px] rounded-[50%] '>
            <Icon
              icon={Icon3}
              width={18}
              height={18}
              className=' text-[#33C36C] '
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionCard;
