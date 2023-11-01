import Link from "next/link"
import Heading from "./sharing/heading"
import { forSale } from "@/app/constants"
import Image from "next/image"
import SubHeading from "./sharing/subheading"

const TheLatest = () => {
  return (
    <section className='section__padding flex flex-col space-y-12'>
      {/* Heading */}
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-x-16'>
          <Heading>The latest</Heading>
          <ul className='flex gap-x-10'>
            <li className='text-2xl tracking-[1%] font-light text-orange cursor-pointer'>For Sale</li>
            <li className='text-2xl tracking-[1%] font-light text-gray cursor-pointer'>To rent</li>
          </ul>
        </div>

        <Link href='/' className='viewall'>View All</Link>
      </div>

      {/* Content */}
      <div className='flex flex-wrap justify-between gap-5'>
        {forSale.map(e => (
          <div className='flex flex-col space-y-2'>
            <div className='relative'>
              <Image
                src={e.image}
                alt={e.title}
                width={370}
                height={351}
                className='object-contain'
              />

              <div className='absolute bottom-0 left-0 py-4 px-3 bg-white'>
                <p className='text-orange font-medium tracking-[1%]'>{e.total_room}</p>
              </div>

              <div className='absolute top-4 right-4 bg-white p-3 rounded-full cursor-pointer'>
                <Image
                  src='/heart-icon.svg'
                  alt='Heart Icon'
                  width={21}
                  height={21}
                  className='object-contain'
                />
              </div>
            </div>
            <Heading className='text-[32px]'>{e.title}</Heading>
            <SubHeading>{e.content}</SubHeading>
            <Heading className='text-2xl text-orange'>{e.price}</Heading>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TheLatest