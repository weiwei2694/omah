import Link from "next/link"
import Heading from "./sharing/heading"
import { blogs } from "@/app/constants"
import Image from "next/image"
import SubHeading from "./sharing/subheading"

const Blog = () => {
  return (
    <section className='section__padding flex flex-col space-y-12'>
      {/* Heading */}
      <div className='flex justify-between items-center'>
        <Heading>
          Always check our<br />
          latest blog
        </Heading>
        <Link href='/' className='viewall'>View All</Link>
      </div>

      {/* Content */}
      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-5'>
        <div className='flex flex-col space-y-5'>
          <div className='relative'>
            <Image
              src='/blog-picture-1.webp'
              alt='Tips and tricks in choosing a house'
              width={570}
              height={400}
              className='object-contain w-full'
            />

            <div className='absolute bottom-0 left-0 py-4 px-3 bg-white flex flex-row gap-x-2 items-center'>
              <Image
                src='/yusuf-firdaus.webp'
                alt='Yusuf Firdaus'
                width={50}
                height={50}
                className='object-contain rounded-full'
              />
              <div className='flex flex-col -space-y-1'>
                <h5 className='font-medium text-[13px] tracking-[1%] text-black'>Yusuf firdaus</h5>
                <p className='text-[13px] tracking-[1%] text-gray font-medium'>admin</p>
              </div>
            </div>
          </div>
          <Heading className='text-2xl cursor-pointer hover:underline'>Tips and tricks in choosing a house</Heading>
          <SubHeading>tips and tricks to buy a house easily here is to buy at a low price</SubHeading>
        </div>
        <div className='flex flex-col space-y-10'>
          {blogs.map(e => (
            <div key={e.image} className='flex flex-col-reverse xl:flex-row justify-start xl:justify-between gap-5 xl:gap-10'>
              <div className='flex flex-col justify-start xl:justify-between space-y-5 xl:space-y-3 max-w-full xl:max-w-[260px]'>
                <Heading className='text-2xl cursor-pointer hover:underline'>{e.title}</Heading>
                <SubHeading>{e.name}</SubHeading>
              </div>
              <Image
                src={e.image}
                alt={e.image}
                width={286}
                height={184}
                className='object-cover w-full xl:w-[286px] h-full'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog