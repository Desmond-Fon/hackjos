import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#33C36C] px-20 pt-28 pb-13 text-white">
      <div className="flex justify-between items-start gap-[64px]">
        <div className="w-[30%]">
          <div className="mb-6">
            <h2 className="font-bold text-[45px] leading-[32px]">HackJos</h2>
            <p className="text-[24px]">Celebrating nHub @10</p>
          </div>
          <p className="text-xl leading-[32px]">
            Join Nigeria's premier hackathon and tech conference as we celebrate
            a decade of innovation and reimagine the future of MSMEs through
            technology.
          </p>
        </div>

        <div className="flex justify-between items-start w-[65%]">
          <div className="w-[30%]">
            <h2 className="text-2xl leading-[32px] font-semibold mb-[18px]">
              Event
            </h2>
            <ul className="flex flex-col gap-2 items-start font-medium text-xl">
              <li>
                <Link href={"/"}>About HackJos</Link>
              </li>
              <li>
                <Link href={"/"}>Schedule</Link>
              </li>
              <li>
                <Link href={"/"}>Challenges</Link>
              </li>
              <li>
                <Link href={"/"}>Speakers</Link>
              </li>
            </ul>
          </div>
          <div className="w-[30%]">
            <h2 className="text-2xl leading-[32px] font-semibold mb-[18px]">
              Participate
            </h2>
            <ul className="flex flex-col gap-2 items-start font-medium text-xl">
              <li>
                <Link href={"/"}>Apply Now</Link>
              </li>
              <li>
                <Link href={"/"}>Become a Speaker</Link>
              </li>
              <li>
                <Link href={"/"}>Become a Sponsor</Link>
              </li>
              <li>
                <Link href={"/"}>Volunteer</Link>
              </li>
            </ul>
          </div>
          <div className="w-[40%]">
            <h2 className="text-2xl leading-[32px] font-semibold mb-[18px]">
              Contact Us
            </h2>
            <ul className="flex flex-col gap-2 items-start font-medium text-lg">
              <li>
                <Link href={"/"}>partnerships@hackjos.ng</Link>
              </li>
              <li>
                <Link href={"/"}>+234 803 123 4567</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center my-5">
        <div className="flex justify-start items-center gap-4">
          <Image src={"/social4.svg"} alt="social" width={54} height={54} />
          <Image src={"/social3.svg"} alt="social" width={54} height={54} />
          <Image src={"/social2.svg"} alt="social" width={54} height={54} />
          <Image src={"/social1.svg"} alt="social" width={54} height={54} />
        </div>

        <div className="px-4 py-9 bg-[#FFFFFF26] rounded-[12px]">
          <div className="flex justify-start items-center gap-3 ">
            <Image
              src={"/calendar.svg"}
              alt="calendar"
              width={48}
              height={48}
            />
            <p className="text-[20px] font-medium">
              22-24, 2025 • Jos, Nigeria
            </p>
          </div>
          <p>Jos, Plateau State, Nigeria</p>
        </div>
      </div>

      <div className="bg-white h-[1px] w-full my-8" />

      <div>
        <h3 className="text-[20px]">© 2025 HackJos. All rights reserved.</h3>
      </div>
    </div>
  );
};

export default Footer;
