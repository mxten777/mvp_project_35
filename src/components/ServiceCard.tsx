import { LucideParkingCircle, LucideCpu, LucideCamera } from "lucide-react";
import { cn } from "../lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export default function ServiceCard({ icon, title, description, className, children }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center text-center p-4 m-0 border-0 outline-none w-full h-full rounded-lg transition-all duration-300 hover:bg-orange-50",
        className
      )} 
      style={{ border: 'none !important', outline: 'none !important', boxShadow: 'none !important' }}
    >
      <div className="mb-4 text-[#ff9800] border-0 outline-none p-3 bg-orange-50 rounded-full flex items-center justify-center w-16 h-16">{icon}</div>
      <h3 className="font-bold text-lg mb-2 text-[#222] border-0 outline-none">{title}</h3>
      <p className="text-gray-600 text-sm md:text-base font-medium border-0 outline-none max-w-[280px] mx-auto">{description}</p>
      {children && <div className="mt-auto pt-4 border-0 outline-none">{children}</div>}
    </div>
  );
}

export const ServiceIcons = {
  parking: <LucideParkingCircle size={36} strokeWidth={1.5} className="text-orange-500" />,
  iot: <LucideCpu size={36} strokeWidth={1.5} className="text-orange-500" />,
  cctv: <LucideCamera size={36} strokeWidth={1.5} className="text-orange-500" />,
};
