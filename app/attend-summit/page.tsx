import Image from "next/image";
import Hero from "../components/Hero";
import Link from "next/link";

const AttendSummit = () => {
  return (
    <div className="pb-[100px]">
      <Hero
        title="Register to Attend the Innovation Summit"
        description="Join HackJos 2025 and compete for amazing prizes while solving
            real-world challenges"
      />
      <div className="mx-auto w-[90%] lg:max-w-4xl mt-8 lg:mt-[65px]">
        <Link href={"/"} className="flex justify-start items-center gap-2">
          <Image src={"/back.svg"} height={40} width={40} alt="back" />
          <p className="lg:text-xl">Back Home</p>
        </Link>

        <form
          action=""
          className="mt-5 lg:mt-10 pt-5 pb-8 lg:py-11 bg-white shadow-lg rounded-[20px] lg:rounded-[30px]"
        >
          <h2 className="font-medium text-[28px] px-4 lg:px-11 py-[20px] lg:pb-[30px] border-b-[1px] border-b-[#00000025]">
            Register
          </h2>

          <div className="px-4 lg:px-11 py-6 lh:py-12 flex flex-col w-full gap-4 lg:gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Full Name
              </label>
              <input
                type="text"
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name=""
                id="name"
                placeholder="Enter full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Email Address
              </label>
              <input
                type="email"
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                name=""
                id="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 lg:gap-10">
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                <label
                  htmlFor="phone"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                  name=""
                  id="phone"
                  placeholder="Enter phone number"
                />
              </div>
              <div className="col-span-2 lg:col-span-1 flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="font-[500] lg:text-[20px] text-[#00000065]"
                >
                  Category(Student, Freelancer e.t.c)
                </label>
                <select
                  name=""
                  id=""
                  className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
                >
                  <option value="" disabled selected>
                    Select category
                  </option>
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Organization{" "}
              </label>
              <select
                name=""
                id=""
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
              >
                <option value="" disabled selected>
                  Select organization
                </option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-[500] lg:text-[20px] text-[#00000065]"
              >
                Profession{" "}
              </label>
              <select
                name=""
                id=""
                className="rounded-[10px] lg:rounded-[15px] border h-[40px] lg:h-[65px] px-2 w-full border-[#00000045] font-[500] lg:text-[20px]"
              >
                <option value="" disabled selected>
                  Select profession
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="mt-8 lg:mt-[75px] flex justify-between items-center gap-6 lg:gap-[45px] px-4 lg:px-11">
            <button className="w-full border border-[#00000035] h-10 lg:h-[65px] rounded-[6px] font-medium text-[18px] text-[#00000065]">
              Cancel
            </button>
            <button className="w-full bg-[#33C36C] text-white h-10 lg:h-[65px] rounded-[6px] font-medium text-[18px]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AttendSummit;
