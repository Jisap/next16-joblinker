"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"
import CandidateData from "@/app/JsonData/Candidates.json"
import Link from "next/link"
import Image from "next/image"
import Newsletter from "../Index/Newsletter/Newsletter"

const Candidats = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-banner px-[8%] lg:px-[16%] h-[350px] relative w-full flex flex-col justify-center items-center mt-20"
      >
        <h2 className="Unbounded text-4xl mb-3">
          Candidates
        </h2>

        <p className="text-gray-300">
          Work with the most talented candidates in the world
        </p>
      </motion.div>

      <div className="px-[8%] lg:px-[16%] py-10">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8"
        >
          <div>
            <h2 className="text-2xl font-semibold">
              Showing {CandidateData.length} Candidates
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-5 mt-10"
        >
          {CandidateData.map((candidat, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.2)}
            >
              <Link
                href={`/UI-Components/Candidats/${candidat.id}`}
                className="flex flex-col justify-center items-center shadow-xl shadow-white/15 p-5 rounded-md group hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={candidat.image}
                  alt={candidat.name}
                  width={60}
                  height={60}
                  className="rounded-xl bg-prim"
                />

                <div className="flex flex-col items-center my-3">
                  <h2 className="Unbounded text-xl group-hover:text-white transition-all duration-300">
                    {candidat.name}
                  </h2>

                  <h2 className="Unbounded mt-1 text-[13px] font-light text-gray-400 group-hover:text-white transition-all duration-300">
                    {candidat.role}
                  </h2>

                  <span className="text-gray-300 text-xl mt-3 group-hover:text-white transition-all duration-300">
                    <i className="ri-map-pin-line"></i> {candidat.location}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Newsletter />
    </>
  )
}

export default Candidats