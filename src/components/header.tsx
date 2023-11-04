'use client';

// vendors
import Image from 'next/image'
// Shadcn
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from './ui/button';
// components
import Navbar from './navbar/navbar';
import Heading from './sharing/heading'
import SubHeading from './sharing/subheading'
// constant
import { listsFindHome } from '@/app/constants';

const Header = () => {
  return (
    <header>
      {/* Nav */}
      <Navbar />

      {/* Content */}
      <div>
        {/* Heading */}
        <section className='section__padding flex flex-col xl:flex-row justify-start xl:justify-between items-start xl:items-center'>
          <Heading className='text-[64px]'>Ready to<br /> find your new home</Heading>
          <div className='flex gap-x-5 items-start justify-start'>
            <div className='w-[50px] h-[3px] rounded bg-orange mt-3' />
            <SubHeading className='hidden xl:block'>
              looking for a house with a low price<br />
              and quality here, and sell your house<br />
              quickly here
            </SubHeading>
            <SubHeading className='block xl:hidden'>
              looking for a house with a low price
              and quality here, and sell your house
              quickly here
            </SubHeading>
          </div>
        </section>

        {/* Sub Section */}
        <section className='section__margin-right relative hidden xl:block'>
          <Image
            src='/header-picture.webp'
            alt='Picture of Omah'
            width={1305}
            height={483}
            className='object-cover w-full'
          />

          <div className='absolute bottom-5 right-0 bg-white h-fit p-3 shadow-xl'>
            <ul className='flex gap-x-12 items-center'>
              {listsFindHome.map(e => (
                <li key={e.title}>
                  <Select>
                    <SelectTrigger className="w-fit">
                      <SelectValue placeholder={e.title} />
                    </SelectTrigger>
                    <SelectContent>
                      {e.children.map(children => (
                        <SelectItem key={children} value={children}>{children}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </li>
              ))}
              <li>
                <Button size='sm'>Search</Button>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </header>
  )
}

export default Header