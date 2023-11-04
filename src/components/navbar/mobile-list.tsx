// vendors
import { usePathname } from "next/navigation";
// constants
import { lists } from "@/app/constants";
// shadcn
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
// utils
import { cn } from "@/lib/utils";
// icon
import { AlignRight } from "lucide-react"
// components
import { Button } from "../ui/button";

const MobileList = () => {
  const path = usePathname()

  return (
    <div className='block xl:hidden'>
      <Sheet>
        <SheetTrigger>
          <AlignRight className='w-4 h-4' />
        </SheetTrigger>
        <SheetContent side='top'>
          <SheetHeader>
            <ul className='text-center flex flex-col space-y-5'>
              {lists.map(e => {
                const isActive = path === '/' && e === 'Home';

                return (
                  <li key={e} className={cn('text-base tracking-[1%] cursor-pointer', isActive ? 'text-black' : 'text-gray')}>{e}</li>
                )
              })}
              <li>
                <Button className='w-full'>Log In</Button>
              </li>
            </ul>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default MobileList