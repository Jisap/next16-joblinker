"use client"

import Image from "next/image"
import Link from "next/link"
import hand from "@/public/Images/hand.svg"
import { useState } from "react"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/app/Utils/animations/variants"

const Hero = () => {

  const [selected, setSelected] = useState("Select a job");
  const [isOpen, setIsOpen] = useState(false);

  const roles = [
    "Software Engineer",
    "Data Scientist",
    "Project Manager",
    "Web Developer",
    "Marketing Specialist",
    "Financial Analyst",
    "Human Resources",
    "Sales Representative",
    "Content Writer",
  ]


  return (
    <>
      <div className="px-[8%] lg:px-[16%] pt-28 lg:pt-36 pb-12 hero">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col lg:flex-row justify-between items-center gap-5"
        >
          {/* izquierda */}
          <motion.div variants={fadeIn("right", 0.2)} className="w-full lg:w-1/2">
            <motion.div variants={textVariant(0.1)} className="flex items-center gap-2">
              <Image
                src={hand}
                alt="hand"
                className="w-5 h-5"
              />

              <h2 className="Unbounded">Hey there! We’re Nubi</h2>
            </motion.div>

            <motion.h1 variants={textVariant(0.2)} className="Unbounded my-4 text-5xl">
              Effective and affordable Job solutions
            </motion.h1>

            <motion.p variants={textVariant(0.3)} className="text-gray-300">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </motion.p>

            <motion.div variants={fadeIn("up", 0.4)} className="flex items-center gap-3 my-8">
              <div className="relative w-[50%] lg:w-[30%]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-white cursor-pointer border border-gray-400 rounded-md px-4 py-2 flex justify-between items-center text-gray-700 hover:border-prim transition-all duration-300"
                >
                  <span>{selected}</span>
                  <i className={`
                    bi bi-caret-down-fill text-gray-500 transition-transform duration-300
                    ${isOpen ? "rotate-180" : "rotate-0"}
                  `}></i>
                </button>

                {isOpen && (
                  <ul className="absolute z-10 mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto dropdown-scrollbar">
                    {roles.map((role, index) => (
                      <li
                        key={index}
                        onClick={() => {
                          setSelected(role)
                          setIsOpen(false)
                        }}
                        className="px-4 py-2 hover:bg-prim hover:text-white cursor-pointer text-gray-700"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-400 px-4 py-2 rounded-md w-full"
                />

                <button className="nav-button items-center cursor-pointer bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 hidden lg:flex">
                  <Link href="/UI-Components/Jobs">
                    Search
                  </Link>
                </button>
              </div>
            </motion.div>

            <motion.p variants={fadeIn("up", 0.5)} className="text-gray-400">
              <span className="text-lg text-gray-300">Popular Searches :</span> {" "}
              Designer, Developer, Web, IOS, PHP, Senior, Engineer
            </motion.p>
          </motion.div>

          {/* derecha */}
          <motion.div variants={fadeIn("left", 0.2)} className="w-full lg:w-1/2">
            <div className="flex justify-center items-center relative">
              <motion.div variants={zoomIn(0.2, 1)} className="hero-image">

              </motion.div>

              {/* tarjeta1 */}
              <motion.div variants={zoomIn(0.3, 0.5)} className="job-offer-span1 flex flex-col gap-2 absolute top-[5%] sm:top-[40%] -left-7 md:left-0 text-black px-5 py-2 rounded-2xl shadow-md shadow-white bg-white">
                <h2 className="text-2xl font-semibold text-prim">
                  <span className="text-5xl Merienda pr-2">25</span>Job Offers
                </h2>

                <p className="text-gray-800">
                  In Software Engineer
                </p>
              </motion.div>
              {/* tarjeta2 */}
              <motion.div variants={zoomIn(0.4, 0.5)} className="job-offer-span1 flex flex-col gap-2 absolute top-[20%] sm:top-[45%] -right-7 md:right-0 text-black px-5 py-2 rounded-2xl shadow-md shadow-white bg-white">
                <h2 className="text-2xl font-semibold text-prim">
                  <span className="text-5xl Merienda pr-2">20</span>Job Offers
                </h2>

                <p className="text-gray-800">
                  In Web Development
                </p>
              </motion.div>
              {/* tarjeta3 */}
              <motion.div variants={zoomIn(0.5, 0.5)} className="job-offer-span3 flex flex-col gap-2 absolute bottom-[20%] sm:bottom-[10%] -left-7 md:left-0 text-black px-5 py-2 rounded-2xl shadow-md shadow-white bg-white">
                <h2 className="text-2xl font-semibold text-prim">
                  <span className="text-5xl Merienda pr-2">15</span>Job Offers
                </h2>

                <p className="text-gray-800">
                  In Data Scientist
                </p>
              </motion.div>
              {/* tarjeta4 */}
              <motion.div variants={zoomIn(0.6, 0.5)} className="job-offer-span4 flex flex-col gap-2 absolute bottom-[5%] -right-7 md:right-0 text-black px-5 py-2 rounded-2xl shadow-md shadow-white bg-white">
                <h2 className="text-2xl font-semibold text-prim">
                  <span className="text-5xl Merienda pr-2">12</span>Job Offers
                </h2>

                <p className="text-gray-800">
                  In Graphic Designer
                </p>
              </motion.div>


            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Hero