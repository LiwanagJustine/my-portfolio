"use client";
import Link from 'next/link';
import { ReactNode, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';

interface LoadingLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  [key: string]: any;
}

export default function LoadingLink({ 
  href, 
  children, 
  className, 
  onClick, 
  ...props 
}: LoadingLinkProps) {
  const pathname = usePathname();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Only trigger loading for different routes and not for anchors
    if (pathname !== href && !href.startsWith('#')) {
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Link 
      href={href} 
      className={className} 
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
