import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
}

const Heading = ({ children, className }: Props) => {
  return (
    <h2 className={cn('text-black font-medium text-[40px] tracking-[1%]', className)}>{children}</h2>
  )
}

export default Heading