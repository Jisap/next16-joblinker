"use client"

import { motion } from 'framer-motion'
import { fadeIn, staggerContainer } from '@/app/Utils/animations/variants'
import Image from 'next/image'
import ContactIcons1 from "@/public/Images/contact-icon1.svg"
import ContactIcons2 from "@/public/Images/contact-icon2.svg"
import ContactIcons3 from "@/public/Images/contact-icon3.svg"
import Link from 'next/link'
import Newsletter from '../../Index/Newsletter/Newsletter'



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
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-center justify-center'>
          <h2 className='Unbounded text-4xl mb-4'>
            Get in Touch
          </h2>

          <p className='text-gray-300'>
            We will be glad to hear from you
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-15'>
          <motion.div variants={fadeIn("up", 0.2)} className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
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
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)} className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
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
          </motion.div>

          <motion.div variants={fadeIn("up", 0.2)} className='contact-card flex flex-col items-center gap-5 hover:border-prim hover:-translate-y-2 transition-all duration-300 cursor-pointer border border-gray-300 rounded-2xl p-10'>
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
          </motion.div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <div className='px-[8%] lg:px-[16%] pb-10'>
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col items-center justify-center'>
          <h2 className='Unbounded text-4xl mb-4'>
            Write your opinion
          </h2>

          <p className='text-gray-300'>
            We will be glad to hear from you
          </p>
        </motion.div>

        <motion.div variants={staggerContainer(0.3, 0.4)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}
          className='flex flex-col lg:flex-row items-start mt-10 gap-5'>
          <motion.div variants={fadeIn("right", 0.2)} className='contact-form w-full lg:w-1/2 flex flex-col rounded-2xl'>
            <div className='flex flex-col mb-5'>
              <input
                type="text"
                placeholder='Name'
                className='font-semibold mt-4 w-full text-white border border-gray-500 p-3 py-4 rounded-xl focus:outline-none focus:border-prim'
              />

              <input
                type="email"
                placeholder='Email@example.com'
                className='font-semibold mt-4 w-full text-white border border-gray-500 p-3 py-4 rounded-xl focus:outline-none focus:border-prim'
              />
              <input
                type="text"
                placeholder='Subject'
                className='font-semibold mt-4 w-full text-white border border-gray-500 p-3 py-4 rounded-xl focus:outline-none focus:border-prim'
              />

              <textarea
                rows={6}
                placeholder="Message"
                className='font-semibold mt-4 w-full text-white border border-gray-500 p-3 py-4 rounded-xl focus:outline-none focus:border-prim'
              >
              </textarea>
            </div>

            <button className='nav-button w-25 items-center cursor-pointer bg-prim text-white rounded-md font-bold px-5 py-2 hover:bg-white hover:text-black transition-all duration-300 hidden lg:flex'>
              <Link href="#">
                Submit
              </Link>
            </button>
          </motion.div>

          <motion.div variants={fadeIn("left", 0.2)} className='contact-map w-full lg:w-1/2 pt-5'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d232559.02673210207!2d-3.844343464188269!3d40.438098610297125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e1!3m2!1ses!2ses!4v1772548855607!5m2!1ses!2ses" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" className='rounded-2xl'></iframe>
          </motion.div>
        </motion.div>
      </div>

      <Newsletter />
    </>
  )
}

export default Contact

//