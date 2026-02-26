"use client"

import Image from "next/image"
import Blogs from "@/app/JsonData/Blogs.json"



const Blog = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="flex flex-col justify-center text-center">
          <h2 className="text-4xl Unbounded mb-2">
            Exploring the World of Knowledge
          </h2>

          <p className="text-gray-400 mb-19 ">
            Unleash Your Curiosity with Enganging Articles, Expert Opinions, and Inspiring Stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Blogs.slice(0, 3).map((blog, index) => (
            <div key={index} className="flex flex-col shadow shadow-white/550 rounded-2xl group cursor-pointer">
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={500}
                className="w-full h-full object-contain rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog