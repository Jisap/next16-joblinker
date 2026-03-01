"use client"

import Image from "next/image";
import { useParams } from "next/navigation"
import RecruterData from "@/app/JsonData/Recruters.json"
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants";
import Newsletter from "../../Index/Newsletter/Newsletter";

const Gallerys = [
  "/Images/Recruter-gallery1.webp",
  "/Images/Recruter-gallery2.webp",
  "/Images/Recruter-gallery3.webp",
  "/Images/Recruter-gallery4.webp",
  "/Images/Recruter-gallery5.webp",
  "/Images/Recruter-gallery6.webp"
]


const RecruterDetails = () => {

  const { id } = useParams();
  const recruter = RecruterData.find((r) => r.id === id);

  if (!recruter) {
    return (
      <div className="p-10 text-center text-gray-500">
        Recruter not found
      </div>
    )
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] pt-30 pb-10">
        {/* Banner de cabezera */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative"
        >
          <motion.div
            variants={fadeIn("up", 0.2)}
            className="Recruter-detail-banner relative"
          >
            <Image
              src={recruter.image}
              alt={recruter.name}
              width={100}
              height={100}
              className="rounded-xl bg-white object-cover border-3 border-white absolute bottom-5 left-5 translate-y-1/2"
            />
          </motion.div>

          <div className="flex flex-col md:flex-row items-start justify-between gap-5">
            {/* Nombre, ubicacion y gallery izquierda*/}
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="w-full lg:w-2/3"
            >
              <div className="flex flex-col mt-15">
                <h2 className="Unbounded text-3xl my-4">
                  {recruter.name}
                </h2>

                <p className="text-gray-300">
                  <i className="bi bi-geo-alt"></i>
                  {" "}{recruter.location}
                </p>
              </div>

              <h2 className="Unbounded text-3xl my-5 font-light">
                About: ({recruter.name})
              </h2>

              <p className="text-gray-500 mb-5">
                As a Human Resources Coordinator, you will work within a Product
                Delivery Team fused with UX, engineering, product and data talent.
                You will help the team design beautiful interfaces that solve business
                challenges for our clients. We work with a number of Tier 1 banks on
                building web-based applications for AML, KYC and Sanctions List management
                workflows. This role is ideal if you are looking to segue your career
                into the FinTech or Big Data arenas.
              </p>

              <h2 className="Unbounded text-3xl my-5 font-light">
                Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                {Gallerys.map((img, index) => (
                  <motion.div
                    key={index}
                    variants={fadeIn("up", 0.1 * index + 0.6)}
                  >
                    <Image
                      src={img}
                      alt={`gallery-${index}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain rounded-2xl opacity-70 hover:opacity-100 cursor-pointer transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Informacion del recruter derecha */}
            <div className="w-full lg:w-1/3 sticky top-25 left-0 h-fit mt-35">
              <motion.div
                variants={fadeIn("left", 0.6)}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl relative overflow-hidden group"
              >
                {/* Decorative background element */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-prim/20 rounded-full blur-3xl group-hover:bg-prim/30 transition-colors duration-500"></div>

                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="absolute inset-0 bg-prim/40 rounded-2xl blur-lg scale-95 group-hover:scale-110 transition-transform duration-500"></div>
                      <Image
                        src={recruter.image}
                        alt={recruter.name}
                        width={120}
                        height={120}
                        className="rounded-2xl bg-gray-800 object-cover border-2 border-white/20 relative z-10"
                      />
                    </div>

                    <h3 className="Unbounded text-xl font-bold mb-1">
                      {recruter.name}
                    </h3>

                    <div className="flex items-center gap-2 text-gray-400 mb-6 bg-white/5 px-4 py-2 rounded-full border border-white/5 text-sm">
                      <i className="bi bi-geo-alt text-prim"></i>
                      <span>{recruter.location}</span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    {[
                      { label: "Industry", value: "Finance", icon: "bi-building" },
                      { label: "Company Size", value: "219 employees", icon: "bi-people" },
                      { label: "Founded in", value: "2018", icon: "bi-calendar-check" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                        <div className="flex items-center gap-3">
                          <i className={`${item.icon} text-prim`}></i>
                          <span className="text-gray-400 text-xs Unbounded">{item.label}</span>
                        </div>
                        <span className="font-bold text-xs Unbounded">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full py-4 bg-prim hover:bg-prim/80 text-white rounded-2xl Unbounded text-sm font-semibold transition-all duration-300 shadow-lg shadow-prim/20 hover:shadow-prim/40 hover:-translate-y-1">
                    Contact Recruiter
                  </button>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex justify-center gap-4">
                      {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                        <motion.a
                          href="#"
                          key={social}
                          variants={fadeIn("up", 0.1 * index + 0.8)}
                          whileHover={{ y: -5, scale: 1.1 }}
                          className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-prim/20 hover:border-prim/30 transition-all duration-300"
                        >
                          <i className={`bi bi-${social} text-lg`}></i>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <Newsletter />
    </>
  )
}

export default RecruterDetails