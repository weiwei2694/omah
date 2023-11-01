import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
}

const SubHeading = ({ children, className }: Props) => {
  return (
    <p className={cn('text-gray tracking-[1%] leading-9 text-xl font-light', className)}>{children}</p>
  )
}

export default SubHeading