import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#1B5E20] px-5 lg:px-20 pt-16 lg:pt-28 pb-13 text-white">
      <div className="flex max-md:flex-col md:justify-between md:items-start gap-[30px] lg:gap-[64px]">
        <div className="md:w-[30%]">
          <div className="mb-8 max-md:flex max-md:flex-col max-md:gap-[20px]">
            <h2 className="font-bold text-[45px] leading-[48px] text-white">
              HackJos
            </h2>
            <p className="text-lg lg:text-[24px] text-green-200 font-medium">
              Celebrating nHub @10
            </p>
          </div>
          <p className="lg:text-xl md:leading-[32px] lg:leading-[40px] text-green-100 font-normal">
            Join Nigeria's premier hackathon and tech conference as we celebrate
            a decade of innovation and reimagine the future of MSMEs through
            technology.
          </p>
        </div>

        <div className="flex max-md:gap-[30px] max-md:flex-col md:justify-between items-start md:w-[65%]">
          <div className="md:w-[30%]">
            <h2 className="text-2xl leading-[32px] font-bold mb-[20px] text-white border-b-2 border-green-400 pb-2">
              Event
            </h2>
            <ul className="flex flex-col gap-3 items-start font-medium lg:text-xl">
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/about"}>About HackJos</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Schedule</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Challenges</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Speakers</Link>
              </li>
            </ul>
          </div>

          <div className="md:w-[30%]">
            <h2 className="text-2xl leading-[32px] font-bold mb-[20px] text-white border-b-2 border-green-400 pb-2">
              Participate
            </h2>
            <ul className="flex flex-col gap-3 items-start font-medium lg:text-xl">
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/apply"}>Apply Now</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Become a Speaker</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Become a Sponsor</Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"/"}>Volunteer</Link>
              </li>
            </ul>
          </div>

          <div className="md:w-[40%]">
            <h2 className="text-2xl leading-[32px] font-bold mb-[20px] text-white border-b-2 border-green-400 pb-2">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-3 items-start font-medium lg:text-lg">
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"mailto:partnerships@hackjos.ng"}>
                  partnerships@hackjos.ng
                </Link>
              </li>
              <li className="hover:text-green-300 transition-colors duration-200">
                <Link href={"tel:+2348031234567"}>+234 806 889 7177</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex max-md:flex-col max-md:gap-[20px] justify-between items-center my-8">
        <div className="flex justify-start items-center gap-4">
          <div className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-colors duration-200">
            <Image src={"/social4.svg"} alt="social" width={28} height={28} />
          </div>
          <Link
            href={"https://x.com/HackjosCON?t=eKvj8b5KF0xUWu_-dfh5Rg&s=09"} target="_blank" rel="noreferrer"
            className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-colors duration-200"
          >
            <Image src={"/social3.svg"} alt="social" width={28} height={28} />
          </Link>
          <div className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-colors duration-200">
            <Image src={"/social2.svg"} alt="social" width={28} height={28} />
          </div>
          <div className="p-3 bg-green-600 hover:bg-green-500 rounded-full transition-colors duration-200">
            <Image src={"/social1.svg"} alt="social" width={28} height={28} />
          </div>
        </div>

        <div className="px-6 py-4 bg-green-700 border-2 border-green-500 rounded-[16px]">
          <div className="flex justify-start items-center gap-3 mb-2">
            <div className="p-2 bg-green-600 rounded-lg">
              <Image
                src={"/calendar.svg"}
                alt="calendar"
                width={24}
                height={24}
              />
            </div>
            <p className="text-[20px] font-bold text-white">
              22-24, 2025 • Jos, Nigeria
            </p>
          </div>
          <p className="text-green-200 font-medium text-center">
            Jos, Plateau State, Nigeria
          </p>
        </div>
      </div>

      <div className="bg-green-600 h-[2px] w-full my-8" />

      <div className="flex max-md:flex-col max-md:gap-4 justify-between items-center">
        <h3 className="text-[20px] max-md:py-[20px] text-green-100 font-medium">
          © 2025 HackJos. All rights reserved.
        </h3>
        {/* <Link href="/admin" className="text-green-300 text-sm hover:text-white hover:underline transition-colors duration-200 font-medium">
          Admin
        </Link> */}
      </div>
    </div>
  );
};

export default Footer;