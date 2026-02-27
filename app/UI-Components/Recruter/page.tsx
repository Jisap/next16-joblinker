"use client"

import Image from "next/image"
import Link from "next/link"
import RecruterData from "@/app/JsonData/Recruters.json"
import Newsletter from "../Index/Newsletter/Newsletter"





const Recruters = () => {
  return (
    <>
      <div className="section-banner px-[8%] lg:px-[16%] h-[350px] relative w-full flex flex-col justify-center items-center mt-20">
        <h2 className="Unbounded text-4xl mb-3">
          Recruters
        </h2>

        <p className="text-gray-400">
          Work for the best companies in the world
        </p>
      </div>

      <div className="px-[8%] lg:px-[12%] py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <h2 className="text-2xl font-semibold">
            Showing {RecruterData.length} Recruters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-7 gap-5">
          {RecruterData.map((item, index) => (
            <Link key={index} href={`/UI-Components/Recruter/${item.id}`} className="flex flex-col shadow-xl shadow-white/15 p-5 rounded-md group hover:bg-prim cursor-pointer transition-all duration-300">
              <div className="flex items-center gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={60}
                  height={60}
                  className=""
                />

                <div className="flex flex-col">
                  <h2 className="Unbounded text-xl group-hover:text-white transition-all duration-300">
                    {item.name}
                  </h2>

                  <span className="text-gray-300 group-hover:text-white transition-all duration-300">
                    <i className="bi bi-geo-alt"></i> {item.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-400 text-md mt-5 leading-7 group-hover:text-white transition-all duration-300">
                {item.desc}
              </p>

              <h4 className="Unbounded text-xl mt-4">
                {item.jobs}
              </h4>
            </Link>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default Recruters