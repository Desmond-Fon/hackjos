import React from "react";
import ConferenceExpCard from "../ui/ConferenceExpCard";

const ConferenceExp = () => {
  return (
    <main className='bg-[#33C36C1A] py-[87px] h-[1500px] '>
      <section className='  flex justify-center items-center flex-col'>
        <h1 className='md:text-[60px] text-[30px] '>
          Conference
          <span className='text-[#39B54A] text-center '> Experience</span>
        </h1>
        <div className='bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] '></div>
        <p className='font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[739px] text-center '>
          Three days packed with learning, networking, and inspiration from
          Nigeria's tech ecosystem
        </p>
      </section>
      <div className=' relative my-[95px] grid grid-cols-2 w-[80%] place-self-center place-items-center h-[642px] justify-center '>
        <ConferenceExpCard
          classname='absolute top-[-12%] left-0 '
          icon='iconoir:calendar'
          date='Day 1-Oct 22-23,2025 . 10:00am-10:00am'
          header='24Hrs Hackathon Challenge'
          paragraph='Build platforms that empower MSMEs to reach wider markets and streamline online sales'
        />
        <ConferenceExpCard
          classname='absolute top-[36%] right-0 '
          icon='iconoir:calendar'
          date='Day 1-Oct 22-23,2025 . 10:00am-10:00am'
          header='24Hrs Hackathon Challenge'
          paragraph='Build platforms that empower MSMEs to reach wider markets and streamline online sales'
        />
        <ConferenceExpCard
          classname='absolute bottom-[-25%] left-0 '
          icon='iconoir:calendar'
          date='Day 1-Oct 22-23,2025 . 10:00am-10:00am'
          header='24Hrs Hackathon Challenge'
          paragraph='Build platforms that empower MSMEs to reach wider markets and streamline online sales'
        />
        <div className='absolute  top-0 h-[642px] bg-black w-[2px]  '></div>
        <div className=' absolute  top-0 left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] '></div>
        <div className=' absolute  top-[48%] left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] '></div>
        <div className=' absolute  bottom-0 left-[48.5%] w-[20px] aspect-[1/1] p-[20px] bg-white border-[3px] border-[#33C36C] rounded-[50%] '></div>
      </div>
      <div className='w-full pt-[95px] flex justify-center '>
        <button className='bg-[#33C36C] hover:bg-[#44D47D] py-[10px] md:px-[45px] px-[20px] md:text-[28px] text-[20px] rounded-[30px] cursor-pointer text-white '>
          View Event Details
        </button>
      </div>
    </main>
  );
};

export default ConferenceExp;
