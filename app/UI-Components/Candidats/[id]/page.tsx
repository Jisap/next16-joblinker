"use client"

import { useParams } from "next/navigation"
import CandidateData from "@/app/JsonData/Candidates.json"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants";
import Image from "next/image";

const CandidatesDetails = () => {

  const { id } = useParams();
  const candidate = CandidateData.find((c) => c.id === id);

  if (!candidate) {
    return (
      <div className="p-10 text-center text-gray-500">
        Candidate not found
      </div>
    )
  }


  return (
    <>
      <div className="px-[8%] lg:px-[16%] pt-30 pb-10">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="Recruter-detail-banner relative"
          >
            <Image
              src={candidate.image}
              alt={candidate.name}
              width={100}
              height={100}
              className="rounded-xl bg-white object-cover border-3 border-white absolute bottom-5 left-5 translate-y-1/2"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between gap-5">
            {/* left side */}
            <div className="w-full lg:w-1/1">
              <div className="flex flex-col mt-15">
                <p className="text-gray-300">
                  <i className="bi bi-geo-alt"></i>
                  {" "}{candidate.location}
                </p>

                <h2 className="Unbounded text-3xl mt-4">
                  {candidate.name}
                </h2>

                <p className="text-gray-400">
                  {candidate.role}
                </p>
              </div>

              <h2 className="Unbounded text-3xl my-5 font-light">
                About ({candidate.name})
              </h2>

              <p className="text-gray-500 mb-5">
                {candidate.name} is a telented {candidate.role} based in {candidate.location}.
                They bring strong skills and experience in
                their field, contributing innovative solutions and great teamwork
                in every project.
              </p>

              <h2 className="Unbounded text-3xl my-5 font-light">
                Skills
              </h2>

              <div className="flex flex-wrap gap-3 mt-5">
                {candidate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-[12px] Unbounded bg-gray-400/20 px-4 py-2 rounded-full text-white font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <h2 className="Unbounded text-2xl my-5 font-light">
                Work Experience
              </h2>

              <div className="flex flex-col mt-8 ps-8">
                {candidate.experience?.map((exp, index) => (
                  <div
                    key={index}
                    className="candidat-exp flex-col items-start gap-3 mb-8 relative"
                  >
                    <span className="bg-gray-400/20 px-4 py-2 rounded-full text-gray-400 text-sm">
                      {exp.year}
                    </span>
                    <p className="mt-3 ps-2 text-gray-400">{exp.desc}</p>
                  </div>
                ))}
              </div>

              <h2 className="Unbounded text-2xl my-5 font-light">
                Education & Training
              </h2>

              <div className="flex flex-col mt-8 ps-8">
                {candidate.education?.map((edu, index) => (
                  <div
                    key={index}
                    className="candidat-exp flex-col items-start gap-3 mb-8 relative"
                  >
                    <span className="bg-gray-400/20 px-4 py-2 rounded-full text-gray-400 text-sm">
                      {edu.year}
                    </span>
                    <p className="mt-3 ps-2 text-gray-400">{edu.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* right side */}

          </div>
        </motion.div>
      </div>
    </>
  )
}

export default CandidatesDetails