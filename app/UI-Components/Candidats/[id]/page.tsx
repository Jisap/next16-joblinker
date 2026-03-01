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
            <div className="w-full lg:w-2/3">
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
            <div className="w-full lg:w-1/3 sticky top-25 left-0 h-fit mt-22">
              <motion.div
                variants={fadeIn("left", 0.6)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
              >
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-prim/20 rounded-full blur-3xl group-hover:bg-prim/30 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-prim/40 rounded-2xl blur-lg scale-95 group-hover:scale-110 transition-transform duration-500"></div>
                      <Image
                        src={candidate.image}
                        alt={candidate.name}
                        width={120}
                        height={120}
                        className="rounded-2xl bg-gray-800 object-cover border-2 border-white/20 relative z-10"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 border-4 border-[#090a0b] rounded-full z-20"></div>
                    </div>

                    <h3 className="Unbounded text-xl font-bold mb-1">
                      {candidate.name}
                    </h3>

                    <p className="text-prim font-medium mb-4 Unbounded text-sm">
                      {candidate.role}
                    </p>

                    <div className="flex items-center gap-2 text-gray-400 mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/5 text-sm">
                      <i className="bi bi-geo-alt text-prim"></i>
                      <span>{candidate.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                      <p className="text-gray-500 text-[10px] Unbounded mb-1 uppercase tracking-wider">Experience</p>
                      <p className="font-bold Unbounded text-sm">{candidate.experience?.length || 0}+ Years</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-2xl border border-white/5 text-center">
                      <p className="text-gray-500 text-[10px] Unbounded mb-1 uppercase tracking-wider">Skills</p>
                      <p className="font-bold Unbounded text-sm">{candidate.skills.length}+ Prof.</p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="w-full py-4 bg-prim hover:bg-prim/80 text-white rounded-2xl Unbounded text-sm font-semibold transition-all duration-300 shadow-lg shadow-prim/20 hover:shadow-prim/40 hover:-translate-y-1">
                      Hire {candidate.name.split(' ')[0]}
                    </button>
                    <button className="w-full py-4 bg-white/10 hover:bg-white/20 text-white border border-white/10 rounded-2xl Unbounded text-sm font-semibold transition-all duration-300 hover:-translate-y-1">
                      Download CV
                    </button>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex justify-center gap-4">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                        <motion.a
                          href="#"
                          key={social}
                          variants={fadeIn("up", 0.1 * index + 0.8)}
                          whileHover={{ y: -5, scale: 1.1 }}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-prim/20 hover:border-prim/30 transition-all duration-300"
                        >
                          <i className={`bi bi-${social} text-lg`}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default CandidatesDetails