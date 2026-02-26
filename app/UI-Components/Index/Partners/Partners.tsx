"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"

import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"
import brand1 from "@/public/Images/partner-1.svg"
import brand2 from "@/public/Images/partner-2.svg"
import brand3 from "@/public/Images/partner-3.svg"
import brand4 from "@/public/Images/partner-4.svg"
import brand5 from "@/public/Images/partner-5.svg"
import brand6 from "@/public/Images/partner-6.svg"
import brand7 from "@/public/Images/partner-7.svg"
import brand8 from "@/public/Images/partner-8.svg"
import brand9 from "@/public/Images/partner-9.svg"
import brand10 from "@/public/Images/partner-10.svg"
import count1 from "@/public/Images/count-icon1.svg"
import count2 from "@/public/Images/count-icon2.svg"
import count3 from "@/public/Images/count-icon3.svg"
import count4 from "@/public/Images/count-icon4.svg"
import CountUp from "react-countup";


const partners = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  brand6,
  brand7,
  brand8,
  brand9,
  brand10,
];

const CountData = [
  {
    image: count1,
    title: "Annual Partner",
    countnum: 100
  },
  {
    image: count2,
    title: "Annual Partner",
    countnum: 90
  },
  {
    image: count3,
    title: "Annual Partner",
    countnum: 75
  },
  {
    image: count4,
    title: "Annual Partner",
    countnum: 25
  },
]


const Partners = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-16">
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col justify-center text-center "
        >
          <motion.h2
            variants={fadeIn("down", 0.2)}
            className="text-4xl Unbounded mb-2"
          >
            Clients & Partners
          </motion.h2>

          <motion.p
            variants={fadeIn("up", 0.2)}
            className="text-gray-400 mb-10"
          >
            Dedicated and Trusted Partners
          </motion.p>
        </motion.div>

        {/* Swiper */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-5"
        >
          <Swiper
            slidesPerView={6}
            spaceBetween={10}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: { slidesPerView: 6 },
              1024: { slidesPerView: 5 },
              768: { slidesPerView: 3 },
              425: { slidesPerView: 3 },
            }}
          >
            {
              partners.map((img, index) => (
                <SwiperSlide key={index} className="py-3 flex items-center">
                  <Image
                    src={img}
                    alt="partner"
                    className="cursor-pointer hover:scale-150 transition-all duration-300"
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </motion.div>

        {/* CountUp */}
        <div className="mt-20 lg:mt-20">
          <motion.div
            variants={staggerContainer(0.3, 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {CountData.map((cnt, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1)}
                className="flex items-center gap-5 shadow-md shadow-white/15 hover:bg-prim group cursor-pointer transition-all duration-300 p-6 rounded-2xl"
              >
                <Image
                  src={cnt.image}
                  alt="count"
                  width={50}
                  height={50}
                  className="group-hover:invert group-hover:brightness-0 transition-all duration-300"
                />

                <div className="flex flex-col">
                  <h1 className="Unbounded text-3xl">
                    + <CountUp
                      start={0}
                      end={cnt.countnum}
                      duration={2.5}
                      separator=","
                    />
                  </h1>

                  <h2 className="Unbounded">
                    {cnt.title}
                  </h2>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Partners