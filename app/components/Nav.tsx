import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-[#0E0E0E59] to-[#0E0E0E] px-20 text-white py-6 relative z-50 flex justify-between items-center">
        <h1 className="text-[32px] font-medium">HackJos</h1>

        <ul className="flex justify-center items-center gap-12 text-xl">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/"}>HackJos</Link>
          </li>
          <li>
            <Link href={"/"}>Partners</Link>
          </li>
        </ul>

        <button className="border-[2px] border-white rounded-full h-[60px] font-medium text-xl px-12">
          Contact Us
        </button>
      </div>
    </>
  );
};

export default Nav;
