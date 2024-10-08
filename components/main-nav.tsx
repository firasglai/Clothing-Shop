"use client";
import { cn } from "@/lib/utils";
import { Category , CategoryResponse } from "@/types";

import Link from "next/link";
import { usePathname } from "next/navigation";
interface MainNavProps {
  data: CategoryResponse; // The entire response object
}
const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathName = usePathname();
  const categories = data.data;
  
  const routes = categories.map((route) => ({
    id: route.id,
    href: `/category/${route.id}`,
    label: route.attributes.name,
    active: pathName === `/category/${route.id}`,
  }));
  
  return (
    <nav className="mx-3 md:mx-6 flex overflow-auto scrollbar-hide whitespace-nowrap items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.id}
          href={route.href}
          className={cn(
            "text-sm font-medium inline-block text-center transition-colors hover:text-black",
            route.active ? "text-black" : "text-neutral-500"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
