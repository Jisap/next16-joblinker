"use client"

import Link from "next/link"



const Banner = () => {
  return (
    <div className="px-[8%] lg:px-[16%] py-15">
      <div className="banner px-5 md:px-[20] py-15 rounded-2xl flex flex-col justify-center items-center gap-5">
        <h2 className="Unbounded text-3xl md:text-5xl text-center">
          Discover Career opportunities
        </h2>

        <p className="text-gray-300 text-lg text-center w-full lg:w-[70%]">
          We help candidates know whether they’re qualified for a job – and allow you to see their match potential – giving you a better pool of qualified candidates
        </p>

        <button className="items-center text-xl cursor-pointer bg-prim text-white rounded-md font-bold px-6 py-3 hover:bg-black transition-all duration-300">
          <Link href="/UI-Components/Jobs">
            All Jobs Offers
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Banner