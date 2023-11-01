import Heading from '@/components/sharing/heading'
import SubHeading from '@/components/sharing/subheading'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className='section__padding'>
        <Heading>Started Project</Heading>
      </section>
      <section className='section__padding-left'>
        <SubHeading>looking for a house with a low price and quality here, and sell your house quickly here</SubHeading>
        <Button>Test Button</Button>
      </section>
    </>
  )
}
