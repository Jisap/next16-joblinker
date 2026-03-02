"use client"

import Image from "next/image"
import Link from "next/link";
import BlogsData from "@/app/JsonData/Blogs.json"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"

const Blogs = () => {
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
          Our Blog
        </h2>

        <p className="text-gray-300">
          Work for the best companies in the world
        </p>
      </motion.div>

      <div className="px-[8%] lg:px-[16%] py-10">
        <motion.div
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 "
        >
          <div>
            <h2 className="text-2xl font-semibold">
              Showing {BlogsData.length} Blogs
            </h2>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BlogsData.map((blog, index) => (
            <Link key={index} href={`/UI-Components/Blogs/${blog.id}`}>
              <motion.div
                variants={fadeIn("up", 0.2)}
                className="flex flex-col shadow shadow-white/550 rounded-2xl group cursor-pointer h-full"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover rounded-t-2xl opacity-70 group-hover:opacity-100 transition-all duration-300"
                />

                <div className="p-3 mt-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-gray-500/50 px-5 py-1 rounded-full text-gray-300 group-hover:text-white transition-all duration-300">
                      {blog.tag}
                    </span>

                    <span className="text-gray-400 Unbounded text-[15px] pt-1 group-hover:text-white transition-all duration-300">
                      {blog.date}
                    </span>
                  </div>

                  <h2 className="Unbounded text-2xl mt-5 font-light text-gray-300 hover:text-blue-400 group-hover:text-white transition-all duration-300">
                    {blog.title}
                  </h2>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default Blogs