"use client"

import Image from "next/image"
import Link from "next/link"
import hand from "@/public/Images/hand.svg"
import { useState } from "react"


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
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-2">
              <Image
                src={hand}
                alt="hand"
                className="w-5 h-5"
              />

              <h2 className="Unbounded">Hey there! We’re Nubi</h2>
            </div>

            <h1 className="Unbounded my-4 text-5xl">
              Effective and affordable Job solutions
            </h1>

            <p className="text-gray-300">
              Each month, more than 3 million job seekers turn to website in
              their search for work, making over 140,000 applications every
              single day
            </p>

            <div className="flex items-center gap-3 my-8">
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero