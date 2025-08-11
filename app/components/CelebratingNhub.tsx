import React from "react";
import Card from "../ui/Card";

const CelebratingNhub: React.FC = () => {
  return (
    <main className="flex flex-col bg-[#E0E0E059] py-[87px] ">
      <section className="flex justify-center items-center flex-col">
        <h1 className="md:text-[60px] text-[30px] ">
          Celebrating
          <span className="text-[#39B54A] text-center "> nHub@10</span>
        </h1>
        <div className="bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] "></div>
        <p className="font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[1095px] text-center ">
          Founded in 2015, nHub has been a catalyst for digital transformation
          in Northern Nigeria, mentoring startups, training tech talent, and
          shaping public policy around innovation and entrepreneurship. This
          October, we proudly mark 10 years of impact.
        </p>
      </section>
      <div className="grid md:grid-cols-2 max-xl:flex max-xl:flex-wrap justify-center items-center 2xl:m-auto max-w-[1279px] lg:mx-[80px] lg:gap-[33px] place-items-center ">
        <Card
          image="Frame 1418067579.png"
          icon="fluent:chat-48-regular"
          header="Founders Chat"
          paragraph="Intimate conversations with nHub's founding team, sharing insights from a decade of innovation and growth."
        />
        <Card
          image="Frame 1418067579 (1).png"
          icon="solar:cup-outline"
          header="nHub@10 Showcase"
          paragraph="Explore the incredible journey of nHub through interactive displays and success stories from our community."
        />
        <Card
          image="Frame 1418067579 (2).png"
          icon="simple-line-icons:badge"
          header="Recognition Ceremony"
          paragraph="Honoring the outstanding contributors, partners, and innovators who have shaped nHub's remarkable journey."
        />
        <Card
          image="Frame 1418067579 (3).png"
          icon="game-icons:wine-glass"
          header="Toast"
          paragraph="An elegant evening celebration bringing together the entire nHub community for networking and festivities."
        />
      </div>
    </main>
  );
};

export default CelebratingNhub;
