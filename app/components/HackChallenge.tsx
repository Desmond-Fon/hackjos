import React from "react";
import Card from "../ui/ChallengeCard";

const HackChallenge = () => {
  return (
    <main className='flex flex-col bg-white py-[87px] '>
      <section className='flex justify-center items-center flex-col'>
        <h1 className='md:text-[60px] text-[30px] '>
          HackJos
          <span className='text-[#39B54A] text-center '> Challenge</span>
        </h1>
        <div className='bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] '></div>
        <p className='font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[739px] text-center '>
          Choose your challenge track and build solutions that will transform
          how Nigerian MSMEs operate and thrive
        </p>
      </section>
      <div className='grid max-xl:flex max-xl:flex-wrap md:grid-cols-2 justify-center items-center 2xl:m-auto max-w-[1279px] mx-[80px] gap-[33px] place-items-center '>
        <Card
          icon='proicons:cart'
          header='Founders Chat'
          paragraph="Intimate conversations with nHub's founding team, sharing insights from a decade of innovation and growth."
        />
        <Card
          icon='circum:bank'
          header='nHub@10 Showcase'
          paragraph='Explore the incredible journey of nHub through interactive displays and success stories from our community.'
        />
        <Card
          icon='fluent:arrow-growth-24-regular'
          header='Recognition Ceremony'
          paragraph="Honoring the outstanding contributors, partners, and innovators who have shaped nHub's remarkable journey."
        />
        <Card
          icon='mage:globe'
          header='Toast'
          paragraph='An elegant evening celebration bringing together the entire nHub community for networking and festivities.'
        />
      </div>
      <div className='w-full flex justify-center '>
        <button className='bg-[#33C36C] hover:bg-[#44D47D] py-[10px] md:px-[45px] px-[20px] md:text-[28px] text-[20px] rounded-[30px] cursor-pointer text-white '>
          View Challenge Details
        </button>
      </div>
    </main>
  );
};

export default HackChallenge;
