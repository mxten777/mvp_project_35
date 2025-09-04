import { Button } from "./ui/button";
import type { ReactNode } from "react";

export default function CTAButton({ children, ...props }: { children: ReactNode } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button className="bg-blue-600 hover:bg-blue-700 text-white" {...props}>
      {children}
    </Button>
  );
}
