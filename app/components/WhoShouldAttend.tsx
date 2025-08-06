import React from "react";
import WhoShouldAttendCard from "../ui/WhoShouldAttendCard";
import Image from "../../public/imageOne/Frame 1418067611.png";

const WhoShouldAttend = () => {
  return (
    <main className='flex flex-col bg-white py-[87px] '>
      <section className='flex justify-center items-center flex-col'>
        <h1 className='md:text-[60px] text-[30px] '>Who Should Attend</h1>
        <div className='bg-[#33C36C] md:w-[206px] w-[150px] h-[5px] '></div>
        <p className='font-normal md:text-[24px] text-[15px] max-md:px-[10px] leading-[36px] text-black/65 mt-[25px] mb-[72px] max-w-[739px] text-center '>
          HackJos 2025 brings together diverse voices from across Nigeria's tech
          ecosystem
        </p>
      </section>
      <div className='grid  max-xl:flex max-xl:flex-wrap md:grid-cols-3 justify-center items-center 2xl:m-auto max-w-[1279px] mx-[80px] gap-[33px] place-items-center '>
        <WhoShouldAttendCard
          image='imageOne/Frame 1418067610 (1).png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='material-symbols:code-rounded'
        />
        <WhoShouldAttendCard
          image='imageOne/Frame 1418067611.png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='ph:pen-nib'
        />
        <WhoShouldAttendCard
          image='imageOne/Frame 1418067611 (1).png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='streamline-ultimate:space-rocket-earth'
        />

        <WhoShouldAttendCard
          image='imageOne/Frame 1418067610 (2).png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='fluent:arrow-growth-24-regular'
        />
        <WhoShouldAttendCard
          image='imageOne/Frame 1418067611 (2).png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='hugeicons:court-law'
        />
        <WhoShouldAttendCard
          image='imageOne/Frame 1418067611 (3).png'
          header='Entrepreneurs'
          paragraph='Entrepreneurs looking to leverage technology for business growth and innovation.'
          hoverImage='la:users'
        />
      </div>
      <div className='w-[90%] rounded-[15px] py-[61px] gap-[9px] bg-gradient-to-r from-[#33C36C] to-[#185D34] place-self-center flex flex-col items-center justify-center '>
        <h2 className='md:text-[32px] text-[25px] font-semibold text-white '>
          Join 500+ Innovators
        </h2>
        <p className=' text-white max-md:text-center text-[18px] max-xl:px-[20px] md:text-[24px] font-normal '>
          Be part of Nigeria's largest tech gathering and shape the future of
          innovation
        </p>
        <button className='bg-white mt-[22px] hover:bg-white/80 py-[10px] md:px-[45px] px-[20px] md:text-[28px] text-[18px] rounded-[30px] cursor-pointer text-[#33C36C] '>
          Register Today
        </button>
      </div>
    </main>
  );
};

export default WhoShouldAttend;
