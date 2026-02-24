"use client"

import { SectionHeader } from '@/app/Components/SectionHeader'
import Image from 'next/image'





const JobOffers = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-15'>
        <SectionHeader
          title="Featured Job Offers"
          text="Explore Exciting with Prominent Employers"
          linkText="All Job Offers"
        />
      </div>
    </>
  )
}

export default JobOffers