import React from "react";
import ConferenceExpCard from "../ui/ConferenceExpCard";

const ConferenceExp = () => {
  return (
    <main className="bg-[#E0E0E059] py-[87px] h-fit xl:h-[1500px] ">
      <section className="  flex justify-center items-center flex-col">
        <h1 className="md:text-[60px] text-[30px] ">
          Conference
          <span className="text-[#39B54A] text-center "> Experience</span>
        </h1>
        <div className="bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] "></div>
        <p className="font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] md:mb-[72px] max-w-[739px] text-center ">
          Three days packed with learning, networking, and inspiration from
          Nigeria's tech ecosystem
        </p>
      </section>
      <div className=" xl:relative my-[50px] xl:my-[95px] flex flex-col  xl:grid grid-cols-2 md:w-[80%] place-self-center place-items-center xl:h-[642px] justify-center ">
        <ConferenceExpCard
          classname="xl:absolute top-[-12%] left-0 "
          icon="iconoir:calendar"
          date="Day 1-Oct 22-23,2025 . 10:00am-10:00am"
          header="24Hrs Hackathon Challenge"
          paragraph="Build platforms that empower MSMEs to reach wider markets and streamline online sales"
        />
        <ConferenceExpCard
          classname="xl:absolute top-[36%] right-0 "
          icon="iconoir:calendar"
          date="Day 2-Oct 23,2025 . 11:00am-4:00pm"
          header="Keynote Presentations"
          paragraph="A full-day summit featuring expert talks, founder stories, policy panels, and showcases,exploring how to ignite and sustain MSME growth in Nigeria."
        />
        <ConferenceExpCard
          classname="xl:absolute bottom-[-25%] left-0 "
          icon="iconoir:calendar"
          date="Day 3-Oct 24,2025 . 11:00am-4:00pm"
          header="Celebration of nHub @ 10"
          paragraph="A full-day celebration of nHub’s 10-year impact with tech talks, founder stories, policy chats, and innovation showcases"
        />
        <div className="absolute hidden xl:flex top-0 h-[642px] bg-black w-[2px]  "></div>
        <div className=" absolute hidden xl:flex top-0 left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] "></div>
        <div className=" absolute  hidden xl:flex top-[48%] left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] "></div>
        <div className=" absolute hidden xl:flex bottom-0 left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] "></div>
      </div>
      <div className="w-full md:pt-[95px] flex justify-center ">
        <button className="bg-[#33C36C] hover:bg-[#44D47D] py-[10px] md:px-[45px] px-[20px] md:text-[28px] text-[20px] rounded-[30px] cursor-pointer text-white ">
          View Event Details
        </button>
      </div>
    </main>
  );
};

export default ConferenceExp;
