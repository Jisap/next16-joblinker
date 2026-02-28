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
              className="w-full lg:w-1/1"
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
            <div className="w-full lg:w-1/2 sticky top-25 left-0 h-full mt-35">
              <motion.div
                variants={fadeIn("left", 0.6)}
                className="shadow-light rounded-2xl p-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={recruter.image}
                    alt={recruter.name}
                    width={100}
                    height={100}
                    className="rounded-xl bg-white object-cover border-3 border-white"
                  />

                  <div className="flex flex-col gap-1">
                    <h5 className="Unbounded">
                      {recruter.name}
                    </h5>

                    <p className="text-gray-300">
                      <i className="bi bi-geo-alt"> {recruter.location}</i>
                    </p>
                  </div>
                </div>

                <div className="my-5">
                  <h2 className="Unmbounded text-gray-400">
                    Industry
                  </h2>

                  <p className="Unbounded font-light text-xl">
                    Finance
                  </p>
                </div>

                <div className="my-5">
                  <h2 className="Unmbounded text-gray-400">
                    Company Size
                  </h2>

                  <p className="Unbounded font-light text-xl">
                    219 employees
                  </p>
                </div>

                <div className="my-5">
                  <h2 className="Unmbounded text-gray-400">
                    Founded in
                  </h2>

                  <p className="Unbounded font-light text-xl">
                    2018
                  </p>
                </div>

                <div className="my-5">
                  <h2 className="Unmbounded text-gray-400 text-sm">
                    Location
                  </h2>

                  <p className="Unbounded font-light text-xl">
                    {recruter.location}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="my-6">
            <div className="my-5 flex items-center gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social, index) => (
                <motion.i
                  key={social}
                  variants={fadeIn("up", 0.1 * index + 0.8)}
                  className={`bi bi-${social} border rounded-full px-2 py-1 text-2xl text-gray-400 hover:text-white hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                ></motion.i>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <Newsletter />
    </>
  )
}

export default RecruterDetails