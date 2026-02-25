"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant, zoomIn } from "@/app/Utils/animations/variants"

const Banner = () => {
  return (
    <div className="px-[8%] lg:px-[16%] py-15">
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="banner px-5 md:px-[20] py-15 rounded-2xl flex flex-col justify-center items-center gap-5"
      >
        <motion.h2
          variants={textVariant(0.4)}
          className="Unbounded text-3xl md:text-5xl text-center"
        >
          Discover Career opportunities
        </motion.h2>

        <motion.p
          variants={fadeIn("up", 0.5)}
          className="text-gray-300 text-lg text-center w-full lg:w-[70%]"
        >
          We help candidates know whether they’re qualified for a job – and allow you to see their match potential – giving you a better pool of qualified candidates
        </motion.p>

        <motion.button
          variants={zoomIn(0.6, 0.5)}
          className="items-center text-xl cursor-pointer bg-prim text-white rounded-md font-bold px-6 py-3 hover:bg-black transition-all duration-300"
        >
          <Link href="/UI-Components/Jobs">
            All Jobs Offers
          </Link>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Banner