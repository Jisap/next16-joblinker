"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"
import WhyChooseUs from "../../Index/WhyChooseUs/WhyChooseUs"
import Testimonial from "../../Index/Testimonial/Testimonial"
import Team1 from "@/public/Images/Team-1.png"
import Team2 from "@/public/Images/Team-2.png"
import Team3 from "@/public/Images/Team-3.png"
import Team4 from "@/public/Images/Team-4.png"
import Team5 from "@/public/Images/Team-5.png"
import Team6 from "@/public/Images/Team-6.png"
import Team7 from "@/public/Images/Team-7.png"
import Team8 from "@/public/Images/Team-8.png"
import Newsletter from "../../Index/Newsletter/Newsletter"

const team = [
  {
    img: Team1,
    name: "Geraldine",
    role: "CEO & Co Founders",
  },
  {
    img: Team2,
    name: "Clara Kolawole",
    role: "CEO-Founders",
  },
  {
    img: Team3,
    name: "Chris Fulton",
    role: "Project-Manager",
  },
  {
    img: Team4,
    name: "Patrick",
    role: "Developer",
  },
  {
    img: Team5,
    name: "Sarah",
    role: "Software Engineer",
  },
  {
    img: Team6,
    name: "Michele",
    role: "Designer",
  },
  {
    img: Team7,
    name: "John",
    role: "Marketing",
  },
  {
    img: Team8,
    name: "David",
    role: "Support",
  },
]

const About = () => {
  return (
    <>
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-banner px-[8%] lg:px-[16%] h-[350px] relative w-full flex flex-col justify-center items-center mt-20"
      >
        <h2 className="Unbounded text-4xl mb-3">
          About Us
        </h2>

        <p className="text-gray-300">
          We help emplyers and candidates find the right fit
        </p>
      </motion.div>

      {/* Why choose us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonial />

      {/* Team */}
      <div className="px-[8%] lg:px-[16%] py-15">
        <div className="flex flex-col items-center justify-center">
          <h2 className="Unbounded text-3xl mb-2">
            Creative Team Members
          </h2>

          <p className="text-gray-300 text-lg mb-8">
            What our customers say about us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border border-gray-700 hover:bg-prim group pb-5 rounded-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
            >
              <div className="w-full h-full mb-3 bg-white rounded-2xl">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={500}
                  height={500}
                  className="object-cover rounded-2xl"
                />
              </div>

              <h3 className="font-semibold Unbounded text-lg mb-1">
                {member.name}
              </h3>

              <p className="text-gray-400 mb-3 group-hover:text-white transition duration-300">
                {member.role}
              </p>

              <div className="flex gap-2">
                <i className="ri-facebook-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-instagram-fill"></i>
                <i className="ri-linkedin-fill"></i>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default About