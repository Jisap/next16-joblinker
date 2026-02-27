"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"

const footerLinks = [
  {
    title: "About Us",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/" },
      { name: "Jobs", href: "/" },
      { name: "Jobs Details", href: "/" },
    ]
  },
  {
    title: "Company",
    links: [
      { name: "Pricing", href: "/" },
      { name: "Contact", href: "/" },
      { name: "Company", href: "/" },
      { name: "Company Details", href: "/" },
    ]
  },
  {
    title: "Pages",
    links: [
      { name: "About", href: "/" },
      { name: "Faqs", href: "/" },
      { name: "Blogs", href: "/" },
      { name: "Contact", href: "/" },
    ]
  },
  {
    title: "Policy",
    links: [
      { name: "Privacy Policy", href: "/" },
      { name: "T. & Conditions", href: "/" },
      { name: "Cookies Policy", href: "/" },
      { name: "Refund Policy", href: "/" },
    ]
  }
]

const socialIcons = ["facebook", "twitter", "instagram", "linkedin", "youtube"]

const Footer = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="px-[8%] lg:px-[12%] py-20 pb-5 border-t border-gray-600 footer"
    >
      <div className="flex flex-col lg:flex-row gap-10 pb-5">
        <motion.div
          variants={fadeIn("right", 0.2)}
          className="w-full lg:w-1/3"
        >
          <div className="footer-content">
            <a href="/" className="text-4xl font-bold Merienda text-white">Jobs<span className="text-prim">Linker</span></a>

            <p className="text-gray-300 mt-5">
              Joblinker is a unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.
            </p>

            <div className="social-icons flex items-center gap-3 mt-5">
              {socialIcons.map((icon) => (
                <i key={icon} className={`bi bi-${icon} text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300`}></i>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-13"
        >
          {footerLinks.map((section, index) => (
            <div key={index} className="footer-content flex flex-col">
              <h2 className="Unbounded text-2xl mb-5">
                {section.title}
              </h2>

              {section.links.map((link, linkIndex) => (
                <Link key={linkIndex} href={link.href} className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        className="border-t border-gray-700 pt-5"
      >
        <div className="flex justify-center items-center">
          <p className="text-gray-400 text-lg">
            © 2025 <span className="text-prim">JobsLinker</span>. All rights reserved.
          </p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer