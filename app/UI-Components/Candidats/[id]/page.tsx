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
        </motion.div>
      </div>
    </>
  )
}

export default CandidatesDetails