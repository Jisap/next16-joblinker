"use client"

import Image from "next/image"
import Link from "next/link";
import BlogsData from "@/app/JsonData/Blogs.json"
import { motion } from "framer-motion"
import { fadeIn, staggerContainer } from "@/app/Utils/animations/variants"
import { useParams } from "next/navigation";
import Candidat1 from "@/public/Images/Candidat-1.webp"
import Newsletter from "../../Index/Newsletter/Newsletter";

const BlogDetail = () => {

  const { id } = useParams();
  const blog = BlogsData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="p-10 text-center text-gray-500">
        Blog not found
      </div>
    )
  }

  return (
    <>
      <div className="px-[8%] lg:px-[16%] pt-30 py-10 pb-0">
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg mb-10">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="rounded-xl object-cover"
          />
        </div>

        <div className="">
          <div className="text-gray-400 mb-2">
            <p className="flex items-center gap-2 mb-4">
              <span className="bg-gray-500/50 px-5 py-1 rounded-full text-gray-300 group-hover:text-white transition-all duration-300">
                {blog.tag}
              </span>

              <span className="text-gray-400 Unbounded text-[15px] pt-1 group-hover:text-white transition-all duration-300">
                {blog.date}
              </span>
            </p>

            <h1 className="Unbounded text-4xl mb-6">
              {blog.title}
            </h1>

            <p className="text-gray-300 leading-8">
              {blog.desc}
            </p>

            <div className="text-gray-400 leading-7 space-y-2">
              <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo
                est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis.
                Mauris facilisis hendrerit nulla at vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo
                est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis.
                Mauris facilisis hendrerit nulla at vehicula.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <h2 className="Unbounded text-2xl mb-3">
              More Info
            </h2>

            <p className="text-gray-400 mt-3">
              Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.
            </p>

            <p className="text-gray-400 mt-3">
              Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id
            </p>

            <p className="text-gray-400 mt-3">
              interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
              Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
            </p>

            <p className="text-gray-400 mt-3">
              interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
              Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
            </p>
          </div>

          <div className="px-0 md:px-10">
            <div className="border border-gray-600 rounded-2xl mt-10 px-5 md:px-10 py-5">
              <div className="flex items-center gap-4">
                <Image
                  src={Candidat1}
                  alt="Candidat1"
                  width={50}
                  height={50}
                  className="rounded-2xl"
                />

                <div className="flex flex-col">
                  <h2 className="Unbounded text-2xl">
                    Geraldine Tusoy
                  </h2>

                  <p className="text-gray-400">
                    CEO, Co Founders
                  </p>
                </div>
              </div>

              <p className="text-gray-400 mt-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus omnis impedit, autem laborum excepturi tempora, assumenda vero consequatur placeat dolorum accusamus expedita delectus similique deserunt mollitia illum non officia eius!
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <button className="items-center cursor-pointer font-light bg-gray-100/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300">
            <Link href="/UI-Components/Blogs">
              View More Articles
            </Link>
          </button>
        </div>
      </div>

      <Newsletter />
    </>
  )
}

export default BlogDetail