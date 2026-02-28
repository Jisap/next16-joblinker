"use client"

import { motion } from "framer-motion"
import { fadeIn } from "@/app/Utils/animations/variants"
import CandidateData from "@/app/JsonData/Candidates.json"
import Link from "next/link"
import Image from "next/image"

const Candidats = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.2)}
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
          variants={fadeIn("down", 0.2)}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-5 mt-10">
          {CandidateData.map((candidat, index) => (
            <Link
              key={index}
              href={`/UI-Components/Candidats/${candidat.id}`}
              className="flex flex-col shadow-xl shadow-white/15 p-5 rounded-md group hover:bg-prim cursor-pointer"
            >
              <Image
                src={candidat.image}
                alt={candidat.name}
                width={60}
                height={60}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default Candidats