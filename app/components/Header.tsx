import Image from "next/image";

const Header = () => {
    return (
      <>
        <div className="h-screen flex items-center justify-center px-4">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 zoom-slow"
            style={{
              backgroundImage: `url('/header.jpg')`,
            }}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/55 z-10" />

          <div className="flex h-full flex-col justify-center text-white relative z-20  items-center">
            <h1 className="font-bold text-[96px] leading-[120px]">
              HackJos 2025
            </h1>
            <div className="flex justify-center items-center gap-1">
              <h2 className="text-[#33C36C] text-[60px] font-bold leading-[66px]">
                X
              </h2>
              <h2 className="text-[36px] font-semibold">Celebrating nHub@10</h2>
            </div>
            <div className="max-w-3xl mt-3">
              <p className="text-[22px] text-center">
                Join Nigeria's top hackathon and conference as we celebrate 10
                years <br className="hidden lg:block" /> of innovation and shape
                the future of MSMEs with tech-driven{" "}
                <br className="hidden lg:block" />
                solutions.
              </p>
            </div>

            <div className="flex justify-center items-center gap-3 mt-7">
              <Image
                src={"/calendar.svg"}
                alt="calendar"
                width={48}
                height={48}
              />
              <p className="text-[28px] font-medium">
                October 22-24, 2025 • Jos, Nigeria
              </p>
            </div>

            <div className="flex justify-center items-center gap-6 mt-11">
              <button className="h-[75px] rounded-[30px] px-10 bg-[#33C36C] text-[28px] font-medium">
                Apply for HackJos
              </button>
              <button className="h-[75px] rounded-[30px] px-10 text-[#33C36C] bg-white text-[28px] font-medium">
                Register to Attend{" "}
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
 
export default Header;