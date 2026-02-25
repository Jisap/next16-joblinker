"use client"

import Image from "next/image"
import Citiesdata from "@/app/JsonData/Cities.json"




const Cities = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-15'>
        <div className="flex flex-col">
          <h2 className="text-4xl Unbounded mb-2">
            Popular Cities
          </h2>

          <p className="text-gray-300 mb-10">
            Thriving Hubs for Career Advancement and Exciting Opportunities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 gap-y-8">
          {
            Citiesdata.map((item) => (
              <div key={item.id}>
                <div className="h-full flex flex-col justify-center items-center text-center p-5 shadow-light rounded-2xl gap-2 group hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <Image
                    src={item.image}
                    alt=""
                    width={150}
                    height={150}
                    className="object-contain rounded-2xl group-hover:scale-105 transition-all duration-300"
                  />

                  <h2 className="Unbounded mt-3">
                    {item.name}
                  </h2>

                  <p className="text-gray-400">
                    {item.positions}
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Cities