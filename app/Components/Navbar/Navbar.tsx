"use client"

import Link from "next/link";
import { useEffect, useState } from "react";


type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/UI-Components/Jobs" },
  { label: "Recruters", href: "/UI-Components/Recruter" },
  { label: "Candidates", href: "/UI-Components/Candidats" },
  { label: "Blog", href: "/UI-Components/Blogs" },
  {
    label: "Pages",
    href: "/UI-Components/Pages/About",
    dropdown: [
      { label: "About", href: "/UI-Components/Pages/About" },
      { label: "FAQ", href: "/UI-Components/Pages/Faqs" },
      { label: "Contact", href: "/UI-Components/Pages/Contact" },
    ],
  },
  { label: "Dashboard", href: "/Dashboard" }
]


const Navbar = () => {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((prev) => (prev === label ? null : label));
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`
      w-full bg-white z-99999 shadow-sm transition-all py-4 lg:py-4 duration-500
      ${isFixed ? "fixed top-0 left-0 z-50 fixed-nav" : ""}
    `}
    >
      <div className="flex items-center justify-between px-[8%] lg:px-[16%] pb-2 lg:pb-0 text-gray-700">
        <Link href="/" className="text-4xl font-bold Merienda text-black">
          Job<span className="text-prim">Linker</span>
        </Link>

        <nav className="hidden lg:flex space-x-6 menu-link relative">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="relative group z-999999">
                <Link href={link.href} className="flex items-center gap-1 text-lg font-semibold hover:text-prim transition-all">
                  {link.label} <i className="ri-arrow-down-s-line"></i>
                </Link>

                <div className="absolute left-0 top-full opacity-0 scale-95 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 bg-white shadow-xl border border-gray-100 rounded-lg min-w-[150px]">
                  {link.dropdown.map((item) => (
                    <Link key={item.label} href={item.href} className="block font-semibold px-3 py-2 rounded-md hover:bg-prim hover:text-white transition-all ">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="text-lg font-semibold hover:text-prim transition-all">
                {link.label}
              </Link>
            )
          )}
        </nav>

        <button className="nav-button items-center cursor-pointer bg-prim text-white rounded-full font-bold px-5 py-2 hover:bg-black trasnsition-all duration-300 hidden lg:flex">
          <Link href="/UI-Components/Signup">
            Sign Up
          </Link>
        </button>

        <div className="lg:hidden flex items-center justify-between gap-4">
          <button
            className="text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex items-center gap-x-5">
              <i className="ri-menu-line"></i>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden bg-white border-t border-gray-200 shadow-md overflow-hidden transition-all duration-500
        ${mobileMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}  
      `}
      >
        <nav className="flex flex-col px-[8%] py-3 space-y-1">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.label} className="flex flex-col border-s border-r border-gray-300 rounded-md text-black">
                <button
                  className="flex justify-between items-center w-full px-2 py-2 font-medium rounded-md hover:bg-gray-100"
                  onClick={() => toggleDropdown(link.label)}
                >
                  {link.label} {" "}
                  <i
                    className={`ri-arrow-down-s-line transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                  ></i>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${activeDropdown === link.label ? "max-h-60 mt-1 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="flex flex-col bg-prim-light p-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link key={item.label} href={item.href} className="px-2 py-1 bg-white text-black border border-gray-300 rounded-md text-lg font-medium hover:bg-gray-100">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={link.label} href={link.href} className="block px-3 py-2 text-lg font-medium text-gray-700 hover:bg-gray-100 rounded-md">
                {link.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  )
}

export default Navbar