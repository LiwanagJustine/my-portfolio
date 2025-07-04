"use client";
import Link from "next/link";
import { memo } from "react";

interface MenuItemProps {
  href: string;
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  theme: 'light' | 'dark';
}

const MenuItem = memo(function MenuItem({ href, isActive, icon, label, theme }: MenuItemProps) {
  const baseClasses = "menu-item group w-full p-4 flex items-center gap-3 font-semibold rounded-lg transition-all duration-200";
  
  const activeClass = isActive 
    ? (theme === 'dark' ? 'text-white' : 'text-gray-800')
    : (theme === 'dark' ? 'text-[#a8a9b4]' : 'text-gray-600');
  
  const hoverClasses = theme === 'dark' 
    ? 'hover:text-white hover:bg-gray-800/30' 
    : 'hover:text-gray-800 hover:bg-gray-100';
  
  return (
    <li className={`${baseClasses} ${activeClass} ${hoverClasses}`}>
      {icon}
      <Link href={href} className="transition-colors duration-200 mt-1 flex-1">
        {label}
      </Link>
    </li>
  );
});

export default MenuItem;
