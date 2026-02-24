"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/autoplay"
import Image, { StaticImageData } from "next/image"
import SCIcon1 from "@/public/Images/SC-Icon1.svg"
import SCIcon2 from "@/public/Images/SC-Icon2.svg"
import SCIcon3 from "@/public/Images/SC-Icon3.svg"
import SCIcon4 from "@/public/Images/SC-Icon4.svg"
import SCIcon5 from "@/public/Images/SC-Icon5.svg"
import SCIcon6 from "@/public/Images/SC-Icon6.svg"
import SCIcon7 from "@/public/Images/SC-Icon7.svg"
import SCIcon8 from "@/public/Images/SC-Icon8.svg"
import SCIcon9 from "@/public/Images/SC-Icon9.svg"
import SCIcon10 from "@/public/Images/SC-Icon10.svg"
import { SectionHeader } from "@/app/Components/SectionHeader"

type CategoryType = {
  image: StaticImageData
  title: string;
  subtitle: string;
}

const CategoryData: CategoryType[] = [

  {
    image: SCIcon1,
    title: "Software \n Engineer",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon2,
    title: "Data \n Scientist",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon3,
    title: "Web \n Developer",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon4,
    title: "Graphic \n Designer",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon5,
    title: "Project \n Manager",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon6,
    title: "Marketing \n Specialist",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon7,
    title: "Financial \n Analyst",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon8,
    title: "Human \n Resources",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon9,
    title: "Sales \n Represent",
    subtitle: "2 Open Position",
  },
  {
    image: SCIcon10,
    title: "Content \n Writer",
    subtitle: "2 Open Position",
  },
]

const Categories = () => {
  return (
    <>
      <div className="px-[8%] lg:px-[16%] py-15">
        <SectionHeader
          title="Search by Category"
          text="Explore Exciting Opportunities in the Digital World"
          linkText="All Categories"
        />

        <div className="mt-15">
          <Swiper
            slidesPerView={5}
            spaceBetween={20}
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {CategoryData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="p-3">
                  <div className="category-card shadow-light flex flex-col items-center text-center group rounded-2xl p-3 hover:bg-prim transition-all duration-300 cursor-pointer">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={60}
                      height={60}
                      className="group-hover:invert group-hover:brightness-0"
                    />

                    <h2 className="Unbounded text-2xl my-4 font-light">
                      {item.title}
                    </h2>

                    <p className="text-gray-300">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Categories