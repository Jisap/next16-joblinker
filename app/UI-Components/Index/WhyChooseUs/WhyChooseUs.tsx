"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer, textVariant } from "@/app/Utils/animations/variants"
import Why from "@/public/Images/Why.png"
import WCIcon1 from "@/public/Images/WC-Icon1.svg"
import WCIcon2 from "@/public/Images/WC-Icon2.svg"
import WCIcon3 from "@/public/Images/WC-Icon3.svg"
import WCIcon4 from "@/public/Images/WC-Icon4.svg"

const cards = [
  {
    icon: WCIcon1,
    title: "Job Opportunities",
    desc: "We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors."
  },
  {
    icon: WCIcon2,
    title: "Search and Filtering",
    desc: "Our powerful search and filtering options allow users to refine their job searches based on specific criteria such as location"
  },
  {
    icon: WCIcon3,
    title: "Resources and Advices",
    desc: "Resources and Advice In addition to job listings, we offer a wealth of career resources and advice. Our blog, articles, and guides cover a wide."
  },
  {
    icon: WCIcon4,
    title: "Trust and Reliability",
    desc: "We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors."
  }
]

const WhyChooseUs = () => {
  return (
    <motion.div
      variants={staggerContainer(0.1, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-[8%] lg:px-[16%] py-15"
    >
      <div className="flex flex-col lg:flex-row lg:items-center gap-8">
        <motion.div
          variants={fadeIn("right", 0.2)}
          className="w-full lg:w-1/3 bg-white rounded-2xl"
        >
          <Image
            src={Why}
            alt="Why Choose Us"
            className="w-full object-cover h-[600px] rounded-2xl"
          />
        </motion.div>

        <div className="w-full lg:w-2/3 pt-5">
          <motion.h2
            variants={textVariant(0.3)}
            className="text-3xl Unbounded mb-2"
          >
            Why Choose Us?
          </motion.h2>

          <motion.p
            variants={fadeIn("left", 0.4)}
            className="text-gray-300 mb-10"
          >
            At our job website, we prioritize delivering an exceptional customer experience that sets us apart from the competition. Here are some reasons why our customers love
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.2 * (index + 1))}
                className="why-card border border-gray-500 group hover:bg-prim hover:border-transparent rounded-2xl p-3 transition-all duration-300 cursor-pointer"
              >
                <Image
                  src={card.icon}
                  alt={card.title}
                  className="w-10 h-10 mb-3 group-hover:invert-100 group-hover:brightness-0"
                />

                <h3 className="Unbounded text-xl mb-2">
                  {card.title}
                </h3>

                <p className="text-gray-300 text-lg">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WhyChooseUs
