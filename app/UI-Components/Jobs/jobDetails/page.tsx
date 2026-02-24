"use client"


import jobsData from "@/app/JsonData/Jobs.json"
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"


const JobDetails = () => {
  const searchParams = useSearchParams()
  const id = searchParams.get("id")
  const job = jobsData.find((job) => job.id === id)

  if (!job) {
    return (
      <div className="p-10 text-center text-gray-500">
        Job not found.
      </div>
    )
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-30">
        <div className="relative">
          <div className="job-detail-banner relative">
            <Image
              src={job.image}
              alt={job.title}
              width={100}
              height={100}
              className="rounded-xl bg-white object-cover border-3 border-white absolute bottom-5 left-5 translate-y-1/2"
            />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col mt-15">
                <h5 className="Unmbounded text-gray-400">
                  {job.title}
                </h5>

                <h2 className="Unbounded text-3xl my-4">
                  {job.name}
                </h2>

                <p className="text-gray-300">
                  <i className="bi bi-geo-alt"></i>
                  {" "}{job.location}
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 flex justify-end">
              <div className="flex flex-col items-end text-end">
                <button className="mb-3 items-center cursor-pointer bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 hidden lg:flex">
                  <Link href="/UI-Components/Signup">
                    Apply Now
                  </Link>
                </button>

                <p className="">
                  <i className="bi bi-clock-history"></i>
                  {" "}{job.days}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row gap-5 justify-between">
            <div className="w-full lg:w-1/1">
              <h2 className="Unbounded text-xl my-8">
                Overview
              </h2>

              <p className="text-gray-400 text-lg">
                As a Human Resources Coordinator, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
              </p>

              <h2 className="Unbounded text-xl my-8">
                Responsabilities
              </h2>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Work with BAs, product managers and tech teams to lead the Product Design
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Accurately estimate design tickets during planning sessions
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel
              </p>

              <p className="text-gray-400 text-lg mb-4 flex items-start gap-2">
                <span className="text-white">-</span> Present your work to the wider business at Show & Tell sessions.
              </p>

              <button className="mt-5 items-center cursor-pointer bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 hidden lg:flex">
                <Link href="/UI-Components/Signup">
                  Apply Now
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default JobDetails