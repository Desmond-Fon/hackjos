import React from "react";
import Card from "../ui/ChallengeCard";

const HackChallenge = () => {
  return (
    <main className="flex flex-col bg-white py-[87px] ">
      <section className="flex justify-center items-center flex-col">
        <h1 className="md:text-[60px] text-[30px] ">
          HackJos
          <span className="text-[#39B54A] text-center "> Challenge</span>
        </h1>
        <div className="bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] "></div>
        <p className="font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[739px] text-center ">
          Choose your challenge track and build solutions that will transform
          how Nigerian MSMEs operate and thrive
        </p>
      </section>
      <div className="grid max-xl:flex max-xl:flex-wrap md:grid-cols-2 justify-center items-center 2xl:m-auto max-w-[1279px] lg:mx-[80px] lg:gap-[33px] place-items-center ">
        <Card
          icon="proicons:cart"
          header="E-commerce Solutions."
          paragraph="Build platforms that empower MSMEs to reach wider markets and streamline online sales."
        />
        <Card
          icon="circum:bank"
          header="Financial Inclusion"
          paragraph="Create fintech solutions that make financial services accessible to underserved communities."
        />
        <Card
          icon="fluent:arrow-growth-24-regular"
          header="Productivity Tools"
          paragraph="Develop applications that enhance operational efficiency and business management."
        />
        <Card
          icon="mage:globe"
          header="Market Access"
          paragraph="Design solutions that connect MSMEs with suppliers, customers, and business opportunities."
        />
      </div>
      <div className="w-full flex justify-center ">
        <button className="bg-[#33C36C] hover:bg-[#44D47D] py-[10px] md:px-[45px] px-[20px] md:text-[28px] text-[20px] rounded-[30px] cursor-pointer text-white ">
          View Challenge Details
        </button>
      </div>
    </main>
  );
};

export default HackChallenge;
