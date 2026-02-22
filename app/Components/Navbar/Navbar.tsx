"use client"

import Link from "next/link";
import { useEffect, useState } from "react";



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
      </div>
    </div>
  )
}

export default Navbar