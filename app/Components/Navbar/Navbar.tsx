"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

type NavLink = {
  label: string;
  href: string;
  dropdown?: { label: string; href: string }[];
};

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Jobs", href: "/UI-Components/Jobs" },
  { label: "Recruiters", href: "/UI-Components/Recruter" },
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
  { label: "Dashboard", href: "/Dashboard" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isFixed, setIsFixed] = useState(false);
  const pathname = usePathname();

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

  // Cerrar menú móvil al cambiar de ruta
  // useEffect(() => {
  //   setMobileMenuOpen(false);
  // }, [pathname]);

  return (
    <header
      className={`
        w-full bg-white z-[99999] shadow-sm transition-all py-4 lg:py-4 duration-500
        ${isFixed
          ? "fixed top-0 left-0 bg-white/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.08)] py-3 fixed-nav"
          : "absolute top-0 left-0 bg-white py-4 lg:py-5 shadow-sm"
        }
      `}
    >
      <div className="flex items-center justify-between px-[5%] xl:px-[8%] text-gray-700">
        <Link href="/" className="text-3xl lg:text-4xl font-bold Merienda text-black flex items-center gap-1 group">
          Job<span className="text-prim group-hover:text-black transition-colors duration-300">Linker</span>
          <motion.div
            className="w-2 h-2 rounded-full bg-prim mb-[-12px]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ repeat: Infinity, duration: 2.5 }}
          />
        </Link>

        {/* NAVEGACION DESKTOP */}
        <nav className="hidden lg:flex space-x-2 xl:space-x-6 items-center relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.dropdown && link.dropdown.some(d => d.href === pathname));

            return link.dropdown ? (
              <div key={link.label} className="relative group py-2">
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-[16px] font-semibold transition-all duration-300 ${isActive ? "text-prim" : "hover:text-prim text-gray-700"
                    }`}
                >
                  {link.label}
                  <motion.i
                    className="ri-arrow-down-s-line text-xl"
                    whileHover={{ y: 2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                </Link>

                <div className="absolute left-0 top-full pt-2 opacity-0 scale-[0.97] translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 z-50">
                  <div className="bg-white/90 backdrop-blur-xl shadow-xl shadow-black/5 border border-gray-100 rounded-2xl min-w-[190px] p-2 flex flex-col gap-1 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-prim/10 blur-2xl rounded-full pointer-events-none" />

                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className={`block font-medium px-4 py-3 rounded-xl transition-all duration-200 
                          ${pathname === item.href
                            ? "bg-prim text-white shadow-md shadow-prim/20 translate-x-1"
                            : "hover:bg-prim/10 hover:text-prim text-gray-600 hover:translate-x-1"
                          }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="relative px-3 py-2 group"
              >
                <span className={`
                  text-[16px] font-semibold transition-colors duration-300 relative z-10 
                  ${isActive
                    ? "text-prim"
                    : "group-hover:text-prim text-gray-700"
                  }`}>
                  {link.label}
                </span>
                {/* Subrraydo link active */}
                {isActive && (
                  <motion.span
                    layoutId="desktop-active-nav"
                    className="absolute inset-x-0 -bottom-1 h-0.5 bg-prim rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* BOTONES Y MENU HAMBURGUESA */}
        <div className="flex items-center gap-4">
          <Link href="/UI-Components/Signup" className="hidden lg:block relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-prim to-black rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <button className="relative bg-prim text-white rounded-full font-bold px-7 py-2.5 hover:bg-black transition-all duration-300 transform group-hover:-translate-y-0.5 shadow-lg shadow-prim/30 flex items-center gap-2">
              Sign In
              <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform"></i>
            </button>
          </Link>

          {/* ICONO ANIMADO MENU MOVIL */}
          <button
            className="lg:hidden relative w-11 h-11 flex flex-col justify-center items-center gap-[6px] focus:outline-none z-[99999] bg-gray-50/80 hover:bg-gray-100 rounded-full transition-colors border border-gray-100"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            <motion.span
              animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-black block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-black block rounded-full"
            />
            <motion.span
              animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-5 h-[2px] bg-black block rounded-full"
            />
          </button>
        </div>
      </div>

      {/* MENU MOVIL EXPANDIBLE */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl overflow-hidden absolute w-full left-0 top-full origin-top z-[99998]"
          >
            <div className="px-[5%] py-6 flex flex-col gap-3 max-h-[80vh] overflow-y-auto custom-scrollbar pb-10">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href;

                return (
                  <motion.div
                    key={link.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 + 0.1, duration: 0.3 }}
                  >
                    {link.dropdown ? (
                      <div className={`flex flex-col rounded-2xl border transition-colors ${activeDropdown === link.label ? 'bg-gray-50/80 border-gray-200' : 'bg-transparent border-transparent'}`}>
                        <button
                          className="flex justify-between items-center w-full px-5 py-4 font-semibold text-gray-800 hover:bg-gray-50/80 rounded-2xl transition-all"
                          onClick={() => toggleDropdown(link.label)}
                        >
                          {link.label}
                          <motion.div
                            animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center justify-center bg-gray-100 w-8 h-8 rounded-full"
                          >
                            <i className="ri-arrow-down-s-line text-lg text-gray-600" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="flex flex-col p-3 gap-2">
                                {link.dropdown.map((item) => {
                                  const isItemActive = pathname === item.href;
                                  return (
                                    <Link
                                      key={item.label}
                                      href={item.href}
                                      className={`px-4 py-3.5 rounded-xl font-medium transition-all duration-500 ease-out ${isItemActive
                                        ? "bg-prim/10 text-prim border border-prim/20"
                                        : "text-gray-600 hover:bg-white hover:shadow-sm border border-transparent"
                                        }`}
                                    >
                                      {item.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className={`block px-5 py-4 font-semibold rounded-2xl transition-all duration-500 ease-out ${isActive
                          ? "bg-prim text-white shadow-lg shadow-prim/20"
                          : "text-gray-800 hover:bg-gray-50/80"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 + 0.2, duration: 0.3 }}
                className="mt-6 pt-6 border-t border-gray-100"
              >
                <Link href="/UI-Components/Signup" className="block">
                  <button className="w-full bg-black text-white rounded-xl font-bold px-5 py-4 hover:bg-prim transition-all duration-300 shadow-xl shadow-black/10 flex justify-center items-center gap-2">
                    Sign In Now
                    <i className="ri-user-add-line"></i>
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;