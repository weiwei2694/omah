import Image from "next/image"
import Heading from "./sharing/heading"

const Footer = () => {
  return (
    <footer className='section__padding !pt-40 flex items-center justify-between'>
      <Heading className='text-gray text-2xl'>
        Omah by @dzakimuzh
      </Heading>
      <div className='flex items-center gap-x-6'>
        <Image
          src='/ig-icon.svg'
          alt='Instagram'
          width={48}
          height={48}
          className='object-contain'
        />
        <Image
          src='/fb-icon.svg'
          alt='Facebook'
          width={48}
          height={48}
          className='object-contain'
        />
        <Image
          src='/tw-icon.svg'
          alt='Twitter'
          width={48}
          height={48}
          className='object-contain'
        />
      </div>
    </footer>
  )
}

export default Footer