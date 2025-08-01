import React from "react";
import GetInvolvedCard from "../ui/GetInvolvedCard";

const GetInvolved = () => {
  return (
    <div className='bg-[#33C36C]/10 py-[79px] px-[81px] '>
      <section className='flex justify-center items-center flex-col'>
        <h1 className='md:text-[60px] text-[30px] '>
          Get<span className='text-[#39B54A] text-center '> Involved</span>{" "}
        </h1>
        <div className='bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] '></div>
        <p className='font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[739px] text-center '>
          Multiple ways to be part of HackJos 2025 and contribute to Nigeria's
          tech revolution
        </p>
      </section>
      <section className='flex gap-[41px] justify-center '>
        <GetInvolvedCard
          icon='mynaui:users-group'
          header='Hackjos 2025'
          paragraph='Join as a participant and compete for amazing prizes while solving real-world challenges'
          li1='Team formation support'
          li2='Mentorship access'
          li3='Prize eligibility'
          li4='Networking opportunities'
        />
        <GetInvolvedCard
          icon='stash:mic-solid'
          header='Become a Speaker'
          paragraph='Share your expertise by proposing a workshop, panel discussion, or keynote presentation'
          li1='Brand visibility'
          li2='Talent access'
          li3='Industry leadership'
          li4='Community investment'
        />
        <GetInvolvedCard
          icon='si:heart-line'
          header='Become a Sponsor'
          paragraph="Partner with us to support innovation and connect with Nigeria's brightest tech minds."
          li1='Brand visibility'
          li2='Talent access'
          li3='Industry leadership'
          li4='Community investment'
        />
      </section>
    </div>
  );
};

export default GetInvolved;
