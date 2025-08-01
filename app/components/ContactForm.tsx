import React from "react";

const ContactForm = () => {
  return (
    <main className='px-[78px] py-[128px] w-full '>
      <section className=' w-full rounded-[30px]  place-self-center bg-gradient-to-b from-[#33C36C] to-[#185D34] flex justify-center items-center '>
        <section className=' w-full 2xl:w-[573px] flex flex-1/2 2xl:flex-2/5  '>
          <img src='./contactImage.png' alt='' className='w-full h-full  ' />
        </section>
        <section className='flex-1/2 2xl:flex-3/5  flex felx-col items-center justify-center  '>
          <form
            action=''
            method='post'
            className='flex w-[80%]  gap-[18px] bg-white/15 border border-white rounded-[30px] px-[26px] py-[45px]   flex-col'
          >
            <h1 className=' text-[#FFFFFF] font-semibold text-[30px] leading-[32px] w-full '>
              Get in Touch
            </h1>
            <input
              type='text'
              placeholder='Full Name'
              className='h-[55px] w-full placeholder:text-[white]/75 border border-white  p-[10px] rounded-[12px] '
            />
            <input
              type='text'
              placeholder='Email'
              className='h-[55px] w-full placeholder:text-[white]/75 border border-white  p-[10px] rounded-[12px] '
            />
            <h2 className='text-[#fff] text-[16px] leading-[20px] '>Message</h2>
            <textarea
              name=''
              id=''
              placeholder='Type here...'
              className=' h-[129px] w-full placeholder:text-[white]/75 border border-white  p-[10px] rounded-[12px] '
            ></textarea>
            <button
              type='submit'
              className=' text-[18px] text-white cursor-pointer hover:bg-[#22b25b] leading-[32px] w-[229px] h-[50px] p-[10px] font-medium text-center rounded-[15px] bg-[#33C36C] '
            >
              Submit
            </button>
          </form>
        </section>
      </section>
    </main>
  );
};

export default ContactForm;
