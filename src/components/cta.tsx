import Heading from "./sharing/heading"
import { Button } from "./ui/button"

const Cta = () => {
  return (
    <section className='section__margin-left bg-orange'>
      <div className='flex flex-col space-y-10 justify-center items-center section__padding !py-0'>
        <Heading className='text-white text-center'>
          Subscribe to get a discount<br />
          of 30%
        </Heading>
        <form className='bg-white p-3 w-full max-w-full xl:max-w-[740px] gap-x-3 flex items-center'>
          <input type='email' placeholder='Enter your email address' className='w-full border-none outline-none ps-8' />
          <Button type='submit' size='sm'>Subscribe</Button>
        </form>
      </div>
    </section>
  )
}

export default Cta