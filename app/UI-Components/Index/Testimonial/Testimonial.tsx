"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { motion, AnimatePresence } from "framer-motion"
import { useRef, useState } from "react"
import "swiper/css"

// Importaciones 
import Candidat1 from "@/public/Images/Candidat-1.webp"
import Candidat2 from "@/public/Images/Candidat-2.webp"
import Candidat3 from "@/public/Images/Candidat-3.webp"
import Candidat4 from "@/public/Images/Candidat-4.webp"
import Candidat5 from "@/public/Images/Candidat-5.webp"
import Candidat6 from "@/public/Images/Candidat-6.webp"
import Candidat8 from "@/public/Images/Candidat-8.webp"
import Candidat9 from "@/public/Images/Candidat-9.webp"
import Candidat10 from "@/public/Images/Candidat-10.webp"
import Candidat11 from "@/public/Images/Candidat-11.webp"

const testimonials = [
  {
    img: Candidat1,
    name: "Jenny Missy",
    role: "Web Developer",
    content: "Each day, I’m inspired by my colleagues to drive innovation that accomplishes this. Jobster fosters an environment of trust and support where I can drive customer success."
  },
  {
    img: Candidat2,
    name: "Alex Rivera",
    role: "UI Designer",
    content: "The attention to detail and creative approach from the team has been exceptional. I've seen a 40% increase in user engagement since we launched our new platform."
  },
  {
    img: Candidat3,
    name: "Sarah Chen",
    role: "Project Manager",
    content: "Working with this agency has been a game-changer. They don't just deliver code; they deliver strategic solutions that solve real business problems."
  },
  {
    img: Candidat4,
    name: "Michael Ross",
    role: "Marketing Director",
    content: "Professionalism at its finest. They understood our brand vision perfectly and translated it into a digital experience that our customers love."
  },
  {
    img: Candidat5,
    name: "Elena Gomez",
    role: "Fullstack Dev",
    content: "Clean code, modern architecture, and a focus on performance. It's rare to find a team that prioritizes quality as much as they do."
  },
  {
    img: Candidat6,
    name: "David Smith",
    role: "Product Owner",
    content: "Their dedication to customer success is evident in every interaction. We feel truly supported and confident in our digital strategy."
  },
]

const Testimonial = () => {
  const prevRef = useRef<HTMLButtonElement>(null)
  const nextRef = useRef<HTMLButtonElement>(null)
  const [_, setInit] = useState(false)

  return (
    <section className='relative px-[8%] lg:px-[12%] py-24 overflow-hidden bg-[#0a0a0a] text-white group'>
      {/* ... círculos y fotos flotantes ... */}

      {/* bloque de círculos y fotos  */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[1, 2, 3].map((circle) => (
          <motion.div
            key={circle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0.1, 0.15, 0.1],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: circle * 2,
              ease: "easeInOut"
            }}
            className="absolute border border-white/20 rounded-full"
            style={{
              width: `${circle * 25}%`,
              aspectRatio: "1/1",
            }}
          />
        ))}
      </div>

      <div className="hidden md:block">
        {[
          { img: Candidat8, pos: "top-20 left-10", delay: 0 },
          { img: Candidat9, pos: "bottom-40 left-20", delay: 1 },
          { img: Candidat10, pos: "bottom-20 right-20", delay: 2 },
          { img: Candidat11, pos: "top-40 right-10", delay: 3 },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
            className={`absolute ${item.pos} z-10`}
          >
            <div className="relative p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <Image src={item.img} alt="decor" width={60} height={60} className="rounded-full grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-20">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="Unbounded text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent"
          >
            Why Our Clients <span className="text-blue-400">Admire</span> Us
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed text-balance">
            Testimonials that showcase our exceptional service and dedication to your success.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto relative px-10 md:px-0"
        >
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            onInit={() => setInit(true)}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            modules={[Autoplay, Navigation]}
            className="rounded-3xl border border-white/10 bg-white/3 backdrop-blur-xl shadow-2xl relative z-10"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center p-8 md:p-16 text-center">
                  <div className="relative mb-8">
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                    <Image
                      src={item.img}
                      alt={item.name}
                      width={120}
                      height={120}
                      className="rounded-full border-4 border-white/10 relative z-10 object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-500 p-2 rounded-full z-20 shadow-lg">
                      <i className="bi bi-quote text-white text-xl"></i>
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-gray-200 font-light italic leading-relaxed mb-8 max-w-2xl">
                    "{item.content}"
                  </p>

                  <div>
                    <h3 className="Unbounded text-xl font-semibold text-white">{item.name}</h3>
                    <p className="text-blue-400 font-medium uppercase tracking-wider text-sm mt-1">{item.role}</p>
                  </div>

                  <div className="flex gap-1 mt-6">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <i key={s} className="bi bi-star-fill text-yellow-500 text-sm"></i>
                    ))}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            ref={prevRef}
            className="absolute left-[-20px] md:left-[-70px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all z-50 opacity-0 group-hover:opacity-100 shadow-xl cursor-pointer"
          >
            <i className="bi bi-chevron-left text-2xl"></i>
          </button>
          <button
            ref={nextRef}
            className="absolute right-[-20px] md:right-[-70px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all z-50 opacity-0 group-hover:opacity-100 shadow-xl cursor-pointer"
          >
            <i className="bi bi-chevron-right text-2xl"></i>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonial
