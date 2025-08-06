import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className='h-[100vh] flex items-center justify-center px-4'>
        {/* Background image */}
        <div
          className='absolute inset-0 bg-cover bg-center z-0 zoom-slow'
          style={{
            backgroundImage: `url('/header.jpg')`,
          }}
        />

        {/* Black Overlay */}
        <div className='absolute inset-0 bg-black/55 z-10' />

        <div className='flex h-full flex-col justify-center text-white relative z-20  items-center'>
          <h1 className='font-bold text-[50px] md:text-[66px] xl:text-[96px] md:leading-[120px]'>
            HackJos 2025
          </h1>
          <div className='flex justify-center items-center gap-1'>
            <h2 className='text-[#33C36C] text-[30px] md:text-[60px] font-bold md:leading-[66px]'>
              X
            </h2>
            <h2 className='text-[18px] md:text-[36px] font-semibold'>
              Celebrating nHub@10
            </h2>
          </div>
          <div className='max-w-3xl mt-3'>
            <p className='text-[16px] md:text-[18px] xl:text-[22px] text-center'>
              Join Nigeria's top hackathon and conference as we celebrate 10
              years <br className='hidden lg:block' /> of innovation and shape
              the future of MSMEs with tech-driven{" "}
              <br className='hidden lg:block' />
              solutions.
            </p>
          </div>

          <div className='flex justify-center items-center gap-3 mt-7'>
            <Image
              src={"/calendar.svg"}
              alt='calendar'
              width={48}
              height={48}
              className=' max-xl:w-[25px] '
            />
            <p className=' text-[16px] md:text-[20px] xl:text-[28px] font-medium'>
              October 22-24, 2025 • Jos, Nigeria
            </p>
          </div>

          <div className='flex justify-center items-center gap-6 mt-11'>
            <button className='xl:h-[75px] md:h-[50px] h-[40px] rounded-[20px] md:rounded-[30px] px-4 md:px-10 bg-[#33C36C] md:text-[20px] xl:text-[28px] font-medium'>
              Apply for HackJos
            </button>
            <button className='xl:h-[75px] md:h-[50px] h-[40px] rounded-[20px] md:rounded-[30px] px-4 md:px-10 text-[#33C36C] bg-white md:text-[20px] xl:text-[28px] font-medium'>
              Register to Attend{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
