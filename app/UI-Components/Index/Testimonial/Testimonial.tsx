"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import "swiper/css"

import Candidat1 from "@/public/Images/Candidat-1.webp"
import Candidat2 from "@/public/Images/Candidat-2.webp"
import Candidat3 from "@/public/Images/Candidat-3.webp"
import Candidat4 from "@/public/Images/Candidat-4.webp"
import Candidat5 from "@/public/Images/Candidat-5.webp"
import Candidat6 from "@/public/Images/Candidat-6.webp"
import Candidat7 from "@/public/Images/Candidat-7.webp"
import Candidat8 from "@/public/Images/Candidat-8.webp"
import Candidat9 from "@/public/Images/Candidat-9.webp"
import Candidat10 from "@/public/Images/Candidat-10.webp"
import Candidat11 from "@/public/Images/Candidat-11.webp"
import Candidat12 from "@/public/Images/Candidat-12.webp"
import { useRef } from "react"


const testimonial = [
  {
    img: Candidat1,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat2,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat3,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat4,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat5,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat6,
    name: "Jenny Missy",
    role: "Web Developer",
    pere: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
]


const Testimonial = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <>
      <div className='px-[8%] lg:px-[12%] py-15'>
        <div className="testimonial relative">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            modules={[Autoplay, Navigation]}
          >
            {testimonial.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="text-center px-4 relative">
                  <div className="border border-gray-600/50 rounded-2xl py-10 md:py-20">
                    <h2 className="Unbounded text-3xl mb-2">
                      Why Our Clients Admire Us
                    </h2>

                    <p className="text-gray-300 mb-10">
                      Testimonials that Showcase our Exceptional Service and Dedication
                    </p>

                    <div className="testimonial-content flex flex-col items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        className="rounded-full object-cover"
                      />

                      <p className="text-gray-300 w-[90%] lg:w-[60%] leading-loose text-lg mb-3">
                        {item.pere}
                      </p>

                      <h3 className="font-semibold Unbounded text-xl">
                        {item.name}
                      </h3>

                      <p className="text-gray-400 mb-3">
                        {item.role}
                      </p>

                      <div className="testi-star flex gap-2 items-center justify-center">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Image
            src={Candidat8}
            alt="candidat8"
            width={80}
            height={80}
            className="border border-gray-700/70 rounded-full p-4 bg-gray-800/60 absolute top-20 left-20 hidden md:block"
          />

          <Image
            src={Candidat9}
            alt="candidat9"
            width={80}
            height={80}
            className="border border-gray-700/70 rounded-full p-4 bg-gray-800/60 absolute top-100 left-30 hidden md:block"
          />

          <Image
            src={Candidat10}
            alt="candidat10"
            width={80}
            height={80}
            className="border border-gray-700/70 rounded-full p-4 bg-gray-800/60 absolute top-120 md:top-100 right-30 hidden md:block"
          />

          <Image
            src={Candidat11}
            alt="candidat11"
            width={80}
            height={80}
            className="border border-gray-700/70 rounded-full p-4 bg-gray-800/60 absolute top-20 right-15 lg:right-30 hidden md:block"
          />

          <div ref={prevRef} className="swiper-btn arrow-left border z-50 absolute top-[35%] lg:top-[30%] left-15 md:left-30 lg:left-50 px-4 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <i className="bi bi-arrow-left"></i>
          </div>

          <div ref={nextRef} className="swiper-btn arrow-right border z-50 absolute top-[35%] lg:top-[30%] right-15 md:right-30 lg:right-50 px-4 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer">
            <i className="bi bi-arrow-right"></i>
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimonial