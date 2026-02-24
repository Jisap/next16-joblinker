"use client"


import jobsData from "@/app/JsonData/Jobs.json"
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"


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
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="job-detail-banner relative"
          >
            <Image
              src={job.image}
              alt={job.title}
              width={100}
              height={100}
              className="rounded-xl bg-white object-cover border-3 border-white absolute bottom-5 left-5 translate-y-1/2"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="w-full lg:w-1/2"
            >
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
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.4)}
              className="w-full lg:w-1/2 flex justify-end"
            >
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
            </motion.div>
          </div>

          <div className="mt-10 flex flex-col lg:flex-row gap-10 justify-between">
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="w-full lg:w-1/1"
            >
              <h2 className="Unbounded text-xl my-8">
                Overview
              </h2>

              <p className="text-gray-400 text-lg">
                As a Human Resources Coordinator, you will work within a Product Delivery Team fused with UX, engineering, product and data talent. You will help the team design beautiful interfaces that solve business challenges for our clients. We work with a number of Tier 1 banks on building web-based applications for AML, KYC and Sanctions List management workflows. This role is ideal if you are looking to segue your career into the FinTech or Big Data arenas.
              </p>

              <h2 className="Unbounded text-xl my-8">
                Responsabilities
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  "Be involved in every step of the product design cycle from discovery to developer handoff and user acceptance testing.",
                  "Work with BAs, product managers and tech teams to lead the Product Design",
                  "Maintain quality of the design process and ensure that when designs are translated into code they accurately reflect the design specifications.",
                  "Accurately estimate design tickets during planning sessions",
                  "Contribute to sketching sessions involving non-designersCreate, iterate and maintain UI deliverables including sketch files, style guides, high fidelity prototypes, micro interaction specifications and pattern libraries.",
                  "Ensure design choices are data led by identifying assumptions to test each sprint, and work with the analysts in your team to plan moderated usability test sessions.",
                  "Design pixel perfect responsive UI’s and understand that adopting common interface patterns is better for UX than reinventing the wheel",
                  "Present your work to the wider business at Show & Tell sessions."
                ].map((item, index) => (
                  <motion.p
                    key={index}
                    variants={fadeIn("up", 0.1 * index + 0.8)}
                    className="text-gray-400 text-lg flex items-start gap-2"
                  >
                    <span className="text-white">-</span> {item}
                  </motion.p>
                ))}
              </div>

              <motion.button
                variants={fadeIn("up", 1.6)}
                className="mt-5 items-center cursor-pointer bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 hidden lg:flex"
              >
                <Link href="/UI-Components/Signup">
                  Apply Now
                </Link>
              </motion.button>
            </motion.div>

            <motion.div
              variants={fadeIn("left", 0.8)}
              className="w-full lg:w-1/2 sticky top-20 left-0 h-full"
            >
              <div className="grid grid-cols-1 gap-5">
                <div className="shadow-light rounded-2xl p-4">
                  {[
                    { label: "Experience", value: "2-3 Years" },
                    { label: "Work Level", value: "Mid-Level" },
                    { label: "Employment Type", value: "Full-Time" },
                    { label: "Salary", value: "50k - 60k / Yearly" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      variants={fadeIn("up", 0.1 * index + 1)}
                      className="my-5"
                    >
                      <h2 className="Unmbounded text-gray-400">
                        {item.label}
                      </h2>
                      <p className="Unbounded font-light text-xl">
                        {item.value}
                      </p>
                    </motion.div>
                  ))}

                  <motion.div
                    variants={fadeIn("up", 1.4)}
                    className="shadow-light rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={job.image}
                        alt={job.name}
                        width={100}
                        height={100}
                        className="rounded-xl bg-white object-cover border-3 border-white"
                      />

                      <div className="flex flex-col gap-1">
                        <h5 className="Unbounded">
                          {job.title}
                        </h5>

                        <p className="text-gray-300">
                          <i className="bi bi-geo-alt"> {job.location}</i>
                        </p>
                      </div>
                    </div>

                    <div className="my-5">
                      <h2 className="Unmbounded text-gray-400">
                        Industry
                      </h2>

                      <p className="Unbounded font-light text-xl">
                        Finance
                      </p>
                    </div>

                    <div className="my-5">
                      <h2 className="Unmbounded text-gray-400">
                        Company Size
                      </h2>

                      <p className="Unbounded font-light text-xl">
                        219 employees
                      </p>
                    </div>

                    <div className="my-5">
                      <h2 className="Unmbounded text-gray-400">
                        Founded in
                      </h2>

                      <p className="Unbounded font-light text-xl">
                        2018
                      </p>
                    </div>

                    <div className="my-5">
                      <h2 className="Unmbounded text-gray-400 text-sm">
                        Location
                      </h2>

                      <p className="Unbounded font-light text-xl">
                        {job.location}
                      </p>
                    </div>
                  </motion.div>

                  <div className="my-6">
                    <div className="my-5 flex items-center gap-3">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                        <motion.i
                          key={social}
                          variants={fadeIn("up", 0.1 * index + 1.6)}
                          className={`bi bi-${social} border rounded-full px-2 py-1 text-2xl text-gray-400 hover:text-white hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                        ></motion.i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>


    </>
  )
}

export default JobDetails
