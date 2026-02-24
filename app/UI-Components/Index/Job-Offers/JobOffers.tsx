import { SectionHeader } from '@/app/Components/SectionHeader'
import Image from 'next/image'
import jobsData from "@/app/JsonData/Jobs.json"
import Link from 'next/link'




const JobOffers = () => {
  return (
    <>
      <div className='px-[8%] lg:px-[16%] py-15'>
        <SectionHeader
          title="Featured Job Offers"
          text="Explore Exciting with Prominent Employers"
          linkText="All Job Offers"
        />

        <div className='mt-15'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-8'>
            {jobsData.slice(0, 9).map((job, index) => (
              <Link
                key={index}
                href={`/UI-Components/Jobs/jobDetails?id=${job.id}`}
                className="block h-full"
              >
                <div className='job-card shadow-light cursor-pointer group hover:bg-prim transition-all duration-300 rounded-2xl px-8 py-5 h-full flex flex-col'>
                  <div className='flex items-center gap-3'>
                    <Image
                      src={job.image}
                      alt={job.title}
                      width={100}
                      height={100}
                    />

                    <div className='flex flex-col gap-1'>
                      <h5 className='Unbounded'>
                        {job.title}
                      </h5>

                      <p className='text-gray-300'>
                        <i className='bi bi-geo-alt'></i>
                        {job.location}
                      </p>
                    </div>
                  </div>

                  <h2 className='Unbounded text-2xl my-4'>{job.name}</h2>

                  <div className="mb-4">
                    <span className='bg-white font-medium px-4 py-[4px] rounded-full text-prim'>
                      {job.tag}
                    </span>
                  </div>

                  <div className='flex justify-between items-center gap-3 mt-auto'>
                    <p>
                      <i className='bi bi-clock-history'></i>
                      {" "}{job.days}
                    </p>

                    <h3 className='Unbounded'>
                      {job.price} <span className='text-gray-400'>/ Yearly</span>
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default JobOffers
