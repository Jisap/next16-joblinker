"use client"

import { motion } from 'framer-motion'
import { fadeIn } from '@/app/Utils/animations/variants'
import Image from 'next/image'
import ContactIcons1 from "@/public/Images/contact-icon1.svg"
import ContactIcons2 from "@/public/Images/contact-icon2.svg"
import ContactIcons3 from "@/public/Images/contact-icon3.svg"



const Contact = () => {
  return (
    <>
      {/* Page Banner (Unified) */}
      <motion.div
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="section-banner px-[8%] lg:px-[16%] h-[350px] relative w-full flex flex-col justify-center items-center mt-20"
      >
        <h2 className="Unbounded text-4xl mb-3">
          Contact Us
        </h2>

        <p className="text-gray-300">
          We will be glad to hear from you
        </p>
      </motion.div>

      <div className='px-[8%] lg:px-[16%] py-15 pb-15'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='Unbounded text-4xl mb-4'>
            Get in Touch
          </h2>

          <p className='text-gray-300'>
            We will be glad to hear from you
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15'>
          <div className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
            <div className='flex items-center gap-2'>
              <div className='contact-icons'>
                <Image src={ContactIcons1} alt="Contact Icon 1" width={70} height={70} />
              </div>
            </div>

            <h2 className='text-3xl font-bold Unbounded'>
              Phone
            </h2>

            <div className='contact-content'>
              <p className='text-xl text-gray-300 font-semibold'>
                +1 234 567 890
              </p>
              <p className='text-xl text-gray-300 font-semibold'>
                +2 345 678 901
              </p>
            </div>
          </div>

          <div className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
            <div className='flex items-center gap-2'>
              <div className='contact-icons'>
                <Image src={ContactIcons2} alt="Contact Icon 2" width={70} height={70} />
              </div>
            </div>

            <h2 className='text-3xl font-bold Unbounded'>
              Email
            </h2>

            <div className='contact-content'>
              <p className='text-xl text-gray-300 font-semibold'>
                JobLiker@gmail.com
              </p>
              <p className='text-xl text-gray-300 font-semibold'>
                JobLiker2@gmail.com
              </p>
            </div>
          </div>

          <div className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
            <div className='flex items-center gap-2'>
              <div className='contact-icons'>
                <Image src={ContactIcons3} alt="Contact Icon 3" width={70} height={70} />
              </div>
            </div>

            <h2 className='text-3xl font-bold Unbounded'>
              Address
            </h2>

            <div className='contact-content'>
              <p className='text-xl text-gray-300 font-semibold'>
                123 Main St, Anytown, USA
              </p>
              <p className='text-xl text-gray-300 font-semibold'>
                456 Elm St, Anytown, USA
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
    </>
  )
}

export default Contact

//