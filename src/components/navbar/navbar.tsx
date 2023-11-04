'use client';

// components
import MobileList from './mobile-list';
import DekstopList from './dekstop-list';

const Navbar = () => {
  return (
    <nav className='section__padding !py-10 flex items-center justify-between'>
      <h3 className='text-2xl tracking-[1%] font-medium text-black'>Omah<span className='text-orange'>.</span></h3>
      <DekstopList />
      <MobileList />
    </nav>
  )
}

export default Navbar