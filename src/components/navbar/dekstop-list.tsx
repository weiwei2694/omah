// constants
import { lists } from '@/app/constants';
// utils
import { cn } from '@/lib/utils';
// vendors
import { usePathname } from 'next/navigation';
// components
import { Button } from '../ui/button';

const DekstopList = () => {
  const path = usePathname()
  return (
    <ul className='hidden xl:flex gap-x-12 items-center'>
      {lists.map(e => {
        const isActive = path === '/' && e === 'Home';

        return (
          <li key={e} className={cn('text-base tracking-[1%] cursor-pointer', isActive ? 'text-black' : 'text-gray')}>{e}</li>
        )
      })}
      <li>
        <Button>Log In</Button>
      </li>
    </ul>
  )
}

export default DekstopList