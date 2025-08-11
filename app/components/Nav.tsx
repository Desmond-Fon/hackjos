"use client";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={`${
          pathname === "/"
            ? "bg-gradient-to-b from-[#0E0E0E59] to-[#0E0E0E]"
            : "bg-[#33C36C]"
        } px-6 md:px-20 text-white py-4 xl:py-6 relative z-50`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-[28px] md:text-[32px] font-medium">
          <Link href={"/"} className="cursor-pointer">
            HackJos
          </Link>
        </h1>

        <ul className="lg:flex hidden justify-center items-center gap-12 text-xl">
          <li>
            <Link
              href={"/"}
              className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href={"/"}
              className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            >
              HackJos
            </Link>
          </li>
          <li>
            <Link
              href={"/partners"}
              className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            >
              Partners
            </Link>
          </li>
        </ul>

        <button className="border-[2px] hover:text-[#33C36C] hover:border-[#33C36C] transition-all duration-[0.5s] hidden lg:block border-white rounded-full h-[60px] font-medium text-[20px] px-[48px] cursor-pointer ">
          Contact Us
        </button>

        <div className="lg:hidden z-50" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon
            icon={menuOpen ? "mdi:close" : "mdi:menu"}
            className="text-3xl cursor-pointer"
          />
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "max-h-fit absolute bg-gradient-to-b from-[#0E0E0E59] to-[#0E0E0E] left-0 w-full px-[15px] py-[34px]"
            : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-6 text-[18px] px-[8px]">
          <Link
            href={"/"}
            className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/"}
            className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            onClick={() => setMenuOpen(false)}
          >
            HackJos
          </Link>
          <Link
            href={"/partners"}
            className="hover:text-[#33C36C] transition-all duration-[0.5s] "
            onClick={() => setMenuOpen(false)}
          >
            Partners
          </Link>
          <button className="border-[2px] hover:text-[#33C36C] hover:border-[#33C36C] transition-all duration-[0.5s] border-white rounded-full h-[50px] font-medium text-[18px] px-[32px] cursor-pointer ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
