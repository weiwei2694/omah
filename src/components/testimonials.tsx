import { testimonials } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"
import Heading from "./sharing/heading"

const Testimonials = () => {
  return (
    <section className='section__padding flex flex-col space-y-12'>
      {/* Heading */}
      <div className='flex justify-between items-center'>
        <Heading>
          Some people are very<br />
          satisfied buying a house here
        </Heading>
        <Link href='/' className='viewall'>View All</Link>
      </div>

      {/* Content */}
      <div className='grid grid-cols-2 gap-5'>
        {testimonials.map(e => (
          <div key={e.name} className='flex flex-col space-y-8'>
            <div className='relative'>
              <Image
                src={e.image}
                alt={e.title}
                width={570}
                height={400}
                className='object-contain w-full'
              />

              <div className='absolute bottom-0 left-0 py-4 px-3 bg-white'>
                <p className='text-orange font-medium tracking-[1%]'>{e.name}</p>
              </div>
            </div>
            <Heading className='text-2xl'>{e.title}</Heading>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials