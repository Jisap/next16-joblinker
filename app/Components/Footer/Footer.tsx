"use client"

import Link from "next/link"





const Footer = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[12%] py-15 pb-5 border-t border-gray-600 footer">
        <div className="flex flex-col lg:flex-row gap-10 pb-5">
          <div className="w-full lg:w-1/3">
            <div className="footer-content">
              <a href="/" className="text-4xl font-bold Merienda text-white">Jobs<span className="text-prim">Linker</span></a>

              <p className="text-gray-300 mt-5">
                Joblinker is a unique and beautiful collection of UI elements that are all flexible and modular. A complete and customizable solution to building the website of your dreams.
              </p>

              <div className="social-icons flex items-center gap-3 mt-5">
                <i className="bi bi-facebook text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300"></i>
                <i className="bi bi-twitter text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300"></i>
                <i className="bi bi-instagram text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300"></i>
                <i className="bi bi-linkedin text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300"></i>
                <i className="bi bi-youtube text-2xl text-gray-400 hover:text-white hover:-translate-y-1 cursor-pointer transition-all duration-300"></i>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-13">
            <div className="footer-content flex flex-col">
              <h2 className="Unbounded text-2xl mb-5">
                About Us
              </h2>

              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Home
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                About
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Jobs
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Jobs Details
              </Link>
            </div>

            <div className="footer-content flex flex-col">
              <h2 className="Unbounded text-2xl mb-5">
                Company
              </h2>

              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Pricing
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Conctact
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Company
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Company Details
              </Link>
            </div>

            <div className="footer-content flex flex-col">
              <h2 className="Unbounded text-2xl mb-5">
                Pages
              </h2>

              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                About
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Faqs
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Blogs
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Contact
              </Link>
            </div>

            <div className="footer-content flex flex-col">
              <h2 className="Unbounded text-2xl mb-5">
                Policy
              </h2>

              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                T. & Conditions
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Cookies Policy
              </Link>
              <Link href="/" className="mb-2 text-gray-400 text-lg hover:text-white hover:ml-2 transition-all duration-300">
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-5">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-lg">
              © 2025 JobsLinker. All rights reserved.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer