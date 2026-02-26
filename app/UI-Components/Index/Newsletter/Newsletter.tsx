"use client"

import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"


const Newsletter = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-20">
        <motion.div
          variants={staggerContainer(0.1, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="newsletter px-10 md:px-20 py-16 rounded-2xl flex flex-col justify-center items-center gap-5"
        >
          <motion.h2
            variants={fadeIn("up", 0.2)}
            className="Unbounded text-3xl md:text-5xl text-center"
          >
            Stay Up to Date
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-gray-300 text-lg text-center"
          >
            Subscribe to our newsletter to recive our weekly feed.
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.2)}
            className="flex bg-black w-full lg:w-[50%] justify-between items-center gap-3 p-2 rounded-md z-50"
          >
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full text-white outline-none text-lg ps-3"
            />
            <button className="items-center cursor-pointer text-white rounded-md font-bold bg-prim px-5 py-2 hover:bg-white hover:text-black transition-all duration-300">
              Subscribe
            </button>
          </motion.div>
        </motion.div>
      </div>
    </>
  )
}

export default Newsletter