import Blog from '@/components/blog'
import Header from '@/components/header'
import Testimonials from '@/components/testimonials'
import TheLatest from '@/components/the-latest'

export default function Home() {
  return (
    <>
      <Header />
      <TheLatest />
      <Testimonials />
      <Blog />
    </>
  )
}
