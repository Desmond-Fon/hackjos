"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { usePathname } from "next/navigation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e:any) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/register", label: "HackJos" },
    { href: "/partners", label: "Partners" },
  ];

  const isHomePage = pathname === "/";

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleContactClick = () => {
    // Add contact logic here (modal, scroll to contact section, etc.)
    console.log("Contact clicked");
  };

  return (
    <>
      <nav
        className={`${
          isHomePage
            ? "bg-gradient-to-b from-[#0E0E0E59] to-[#0E0E0E]"
            : "bg-[#33C36C]"
        } px-6 md:px-20 text-white py-4 xl:py-6 relative z-50`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-[28px] md:text-[32px] font-medium hover:opacity-80 transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent rounded"
            aria-label="HackJos - Go to homepage"
          >
            HackJos
          </Link>

          {/* Desktop Navigation */}
          <ul className="lg:flex hidden justify-center items-center gap-12 text-xl">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`hover:text-[#ffcc00] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                    pathname === item.href ? "text-[#93c333]" : ""
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Contact Button */}
          <button
            onClick={handleContactClick}
            className="border-2 hover:text-[#33C36C] hover:border-[#33C36C] hover:bg-white/5 transition-all duration-300 hidden lg:block border-white rounded-full h-[60px] font-medium text-[20px] px-12 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent"
          >
            Contact Us
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={handleMenuToggle}
            className="lg:hidden z-50 p-2 hover:bg-white/10 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <Icon
              icon={menuOpen ? "mdi:close" : "mdi:menu"}
              className="text-3xl"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
          aria-hidden={!menuOpen}
        >
          <div 
            className={`${
              isHomePage
                ? "bg-gradient-to-b from-[#0E0E0E59] to-[#0E0E0E]"
                : "bg-[#33C36C]"
            } absolute left-0 w-full px-6 py-8 shadow-lg border-t border-white/10`}
          >
            <div className="flex flex-col gap-6 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`hover:text-[#33C36C] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent rounded px-2 py-1 ${
                    pathname === item.href ? "text-[#33C36C]" : ""
                  }`}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  handleContactClick();
                  setMenuOpen(false);
                }}
                className="border-2 hover:text-[#33C36C] hover:border-[#33C36C] hover:bg-white/5 transition-all duration-300 border-white rounded-full h-12 font-medium text-lg px-8 mt-2 focus:outline-none focus:ring-2 focus:ring-[#33C36C] focus:ring-offset-2 focus:ring-offset-transparent"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Nav;