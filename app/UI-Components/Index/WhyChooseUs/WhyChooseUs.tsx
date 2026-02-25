"use client"
import Image from "next/image"
import Why from "@/public/Images/Why.png"
import WCIcon1 from "@/public/Images/WC-Icon1.svg"
import WCIcon2 from "@/public/Images/WC-Icon2.svg"
import WCIcon3 from "@/public/Images/WC-Icon3.svg"
import WCIcon4 from "@/public/Images/WC-Icon4.svg"








const WhyChooseUs = () => {
  return (
    <div className="px-[8%] lg:px-[16%] py-15">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3 bg-white rounded-2xl h-full">
          <Image
            src={Why}
            alt="Why Choose Us"
            className="w-full object-cover h-[600px] rounded-2xl"
          />
        </div>

        <div className="w-full lg:w-2/3 pt-5">
          <h2 className="text-3xl Unbounded mb-2">
            Why Choose Us?
          </h2>

          <p className="text-gray-300 mb-10">
            At our job website, we prioritize delivering an exceptional customer experience that sets us apart from the competition. Here are some reasons why our customers love
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="why-card border border-gray-500 group hover:bg-prim hover:border-transparent rounded-2xl p-3 transition-all duration-300 cursor-pointer">
              <Image
                src={WCIcon1}
                alt="Why Choose Us1"
                className="w-10 h-10 mb-3 group-hover:invert-100 group-hover:brightness-0"
              />

              <h3 className="Unbounded text-xl mb-2">
                Job Opportunities
              </h3>

              <p className="text-gray-300 text-lg">
                We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors.
              </p>
            </div>

            <div className="why-card border border-gray-500 group hover:bg-prim hover:border-transparent rounded-2xl p-3 transition-all duration-300 cursor-pointer">
              <Image
                src={WCIcon2}
                alt="Why Choose Us2"
                className="w-10 h-10 mb-3 group-hover:invert-100 group-hover:brightness-0"
              />

              <h3 className="Unbounded text-xl mb-2">
                Search and Filtering
              </h3>

              <p className="text-gray-300 text-lg">
                Our powerful search and filtering options allow users to refine their job searches based on specific criteria such as location
              </p>
            </div>

            <div className="why-card border border-gray-500 group hover:bg-prim hover:border-transparent rounded-2xl p-3 transition-all duration-300 cursor-pointer">
              <Image
                src={WCIcon3}
                alt="Why Choose Us3"
                className="w-10 h-10 mb-3 group-hover:invert-100 group-hover:brightness-0"
              />

              <h3 className="Unbounded text-xl mb-2">
                Resources and Advices
              </h3>

              <p className="text-gray-300 text-lg">
                Resources and Advice In addition to job listings, we offer a wealth of career resources and advice. Our blog, articles, and guides cover a wide.
              </p>
            </div>

            <div className="why-card border border-gray-500 group hover:bg-prim hover:border-transparent rounded-2xl p-3 transition-all duration-300 cursor-pointer">
              <Image
                src={WCIcon4}
                alt="Why Choose Us4"
                className="w-10 h-10 mb-3 group-hover:invert-100 group-hover:brightness-0"
              />

              <h3 className="Unbounded text-xl mb-2">
                Trust and Reliability
              </h3>

              <p className="text-gray-300 text-lg">
                We provide our customers with access to a vast and diverse range of job opportunities across various industries and sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs