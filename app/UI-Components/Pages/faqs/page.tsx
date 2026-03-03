"use client"

import { fadeIn, staggerContainer } from '@/app/Utils/animations/variants'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Newsletter from '../../Index/Newsletter/Newsletter'

type FAQItem = {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is JobLiker?",
    answer: "JobLiker is a cutting-edge job portal designed to bridge the gap between world-class employers and top-tier talent. We provide a seamless platform for career growth and recruitment excellence."
  },
  {
    category: "Account",
    question: "How do I create an account?",
    answer: "Getting started is easy! Simply click the 'Sign Up' button in the navigation bar. You can register using your email or social media accounts to start your journey within seconds."
  },
  {
    category: "Jobs",
    question: "How do I search for jobs?",
    answer: "Our advanced search engine allows you to filter jobs by industry, location, salary range, and job type. Just head over to the 'Jobs' section and use our intuitive filtering system."
  },
  {
    category: "Jobs",
    question: "How do I apply for a job?",
    answer: "Once you find a role that matches your skills, click on the job listing to see the full details. Hit the 'Apply Now' button, upload your CV, and you're good to go!"
  },
  {
    category: "Support",
    question: "How do I contact customer support?",
    answer: "Our dedicated support team is here to help 24/7. You can reach out through the 'Contact Us' page, or use our live chat feature for immediate assistance during business hours."
  },
]

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [searchQuery, setSearchQuery] = useState("")

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
          Faqs
        </h2>
        <p className="text-gray-300">
          Work for the best companies in the world
        </p>
      </motion.div>

      {/* Main Content */}
      <div className='px-[8%] lg:px-[16%] py-16 bg-[#090a0b]'>

        {/* Support Search Section */}
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            className="text-prim font-semibold tracking-widest uppercase text-sm mb-4 Merienda"
          >
            Help Center
          </motion.span>
          <motion.h2
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            className="Unbounded text-3xl md:text-4xl mb-8"
          >
            How can we <span className="text-prim">help?</span>
          </motion.h2>

          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="w-full max-w-2xl relative"
          >
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-4 focus:outline-none focus:border-prim focus:ring-1 focus:ring-prim transition-all duration-300 Unbounded text-sm"
            />
            <i className="bi bi-search absolute right-6 top-1/2 -translate-y-1/2 text-gray-500"></i>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: Sidebar/Info */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-8"
          >
            <div>
              <h3 className="Unbounded text-2xl mb-4">Still have questions?</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                If you can't find the answer you're looking for, please don't hesitate to contact our friendly support team.
              </p>
              <button className="bg-prim hover:bg-prim/80 text-white px-8 py-4 rounded-xl transition-all duration-300 Unbounded text-sm cursor-pointer w-full md:w-auto shadow-lg shadow-prim/20">
                Contact Support
              </button>
            </div>

            <div className="p-8 border border-white/5 rounded-3xl bg-white/2 backdrop-blur-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-prim/20 flex items-center justify-center text-prim">
                  <i className="bi bi-envelope-fill text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold Unbounded text-sm">Email us</h4>
                  <p className="text-xs text-gray-500">support@jobliker.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-prim/20 flex items-center justify-center text-prim">
                  <i className="bi bi-telephone-fill text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold Unbounded text-sm">Call us</h4>
                  <p className="text-xs text-gray-500">+1 (555) 000-0000</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: FAQs */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-8 space-y-4"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", 0.1 * index)}
                  className={`group border rounded-2xl overflow-hidden transition-all duration-500
                    ${openIndex === index
                      ? "bg-white/5 border-prim/30 shadow-[0_0_20px_rgba(97,24,191,0.05)]"
                      : "bg-white/1 border-white/5 hover:border-white/10"}
                  `}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className='w-full flex justify-between items-start px-8 py-7 text-left focus:outline-none cursor-pointer'
                  >
                    <div className="flex flex-col gap-2">
                      <span className="text-[10px] text-prim font-bold uppercase tracking-widest Unbounded opacity-70">
                        {faq.category}
                      </span>
                      <span className={`md:text-lg Unbounded transition-colors duration-300 ${openIndex === index ? "text-prim" : "text-white/90"}`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className={`mt-5 p-2 rounded-full transition-all duration-300 flex items-center justify-center
                      ${openIndex === index ? "bg-prim text-white rotate-180" : "bg-white/5 text-gray-400 group-hover:bg-white/10"}
                    `}>
                      <i className="bi bi-chevron-down" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className='px-8 pb-8 text-gray-400 leading-relaxed border-t border-white/5 pt-6'>
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-20">
                <i className="bi bi-search text-4xl text-gray-600 mb-4 block"></i>
                <h3 className="Unbounded text-xl text-gray-500">No results found for "{searchQuery}"</h3>
                <p className="text-gray-600 mt-2">Try searching for something else or browse categories.</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default Faq
