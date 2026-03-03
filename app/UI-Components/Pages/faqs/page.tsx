"use client"

import { fadeIn } from '@/app/Utils/animations/variants'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Newsletter from '../../Index/Newsletter/Newsletter'

type FAQItem = {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is JobLiker?",
    answer: "JobLiker is a job portal that helps employers and candidates find the right fit."
  },
  {
    question: "How do I create an account?",
    answer: "You can create an account by clicking on the 'Sign Up' button in the top right corner."
  },
  {
    question: "How do I search for jobs?",
    answer: "You can search for jobs by clicking on the 'Jobs' button in the top navigation bar."
  },
  {
    question: "How do I apply for a job?",
    answer: "You can apply for a job by clicking on the 'Apply' button in the job details page."
  },
  {
    question: "How do I contact customer support?",
    answer: "You can contact customer support by clicking on the 'Contact' button in the footer."
  },
]


const Faq = () => {

  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
          Faqs
        </h2>

        <p className="text-gray-300">
          Work for the best companies in the world
        </p>
      </motion.div>

      <div className='px-[8%] lg:px-[16%] py-15 pb-0'>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='Unbounded text-3xl mb-4'>
            Frequently Asked Questions
          </h2>

          <p className='text-gray-300'>
            Unleash Your Curiosity with Engaging Articles, Expert Opinions, and Inspiring Stories
          </p>
        </div>

        <div className='space-y-4 w-full py-15'>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-lg overflow-hidden transition-all duration-300
                ${openIndex === index ? "text-white" : "bg-gray-300 text-black"}
              `}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className='w-full flex justify-between items-center px-6 py-6 text-left focus:outline-none cursor-pointer'
              >
                <span className='md:text-lg Unbounded'>
                  {faq.question}
                </span>

                <div className={`text-xl ${openIndex === index ? "bi bi-chevron-up" : "bi bi-chevron-down"}`} />
              </button>

              {openIndex === index && (
                <div className='px-6 py-4 border-t border-r-gray-200 text-white/90'>
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default Faq