import { Icon } from "@iconify/react";
import React from "react";

type CardProps = {
  icon: string;
  header: string;
  paragraph: string;
  li1: string;
  li2: string;
  li3: string;
  li4: string;
};

const GetInvolvedCard: React.FC<CardProps> = ({
  icon,
  header,
  paragraph,
  li1,
  li2,
  li3,
  li4,
}) => {
  return (
    <div>
      <section className="bg-white border-t-[8px] flex flex-col gap-[15px] md:w-[399px] w-fit h-[505px] border-[#33C36C] p-[35px] rounded-[15px] ">
        <div className="bg-gradient-to-b from-[#33C36C] to-[#185D34] rounded-[50%] p-[10px] md:p-[16px] w-fit h-fit flex justify-center items-center ">
          <Icon
            icon={icon}
            width={32}
            height={32}
            className=" text-white max-md:w-[26px] max-md:h-[26px] "
          />
        </div>
        <h2 className="md:text-[28px] text-[18px] font-medium leading-[36px] ">
          {header}
        </h2>
        <p className=" md:text-[16px] text-[12px] h-[74px] font-normal md:leading-[27px] text-black/65 ">
          {paragraph}
        </p>
        <ul className=" flex flex-col gap-[8px] ">
          <li className="flex gap-[6px]">
            <Icon
              icon={"charm:circle-tick"}
              width={16}
              height={16}
              className="  text-[#13A829] "
            />
            <span className=" md:text-[14px] text-[11px] font-normal leading-[24px] text-black/65 ">
              {li1}
            </span>
          </li>
          <li className="flex gap-[6px]">
            <Icon
              icon={"charm:circle-tick"}
              width={16}
              height={16}
              className=" text-[#13A829] "
            />
            <span className=" md:text-[14px] text-[11px] font-normal leading-[24px] text-black/65 ">
              {li2}
            </span>
          </li>
          <li className="flex gap-[6px]">
            <Icon
              icon={"charm:circle-tick"}
              width={16}
              height={16}
              className=" text-[#13A829] "
            />
            <span className=" md:text-[14px] text-[11px] font-normal leading-[24px] text-black/65 ">
              {li3}
            </span>
          </li>
          <li className="flex gap-[6px]">
            <Icon
              icon={"charm:circle-tick"}
              width={16}
              height={16}
              className=" text-[#13A829] "
            />
            <span className=" md:text-[14px] text-[11px] font-normal leading-[24px] text-black/65 ">
              {li4}
            </span>
          </li>
        </ul>
        <button className="border  border-[#33C36C] hover:bg-[#22b35b] w-full py-[8px] md:py-[10px] mt-[16px] cursor-pointer text-[#33C36C] hover:text-white font-[500] rounded-[20px]  ">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default GetInvolvedCard;
