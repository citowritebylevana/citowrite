'use client';
import { usePathname } from 'next/navigation';
import Footer from '../sections/Footer';

interface FooterWrapperProps {
  data?: any;
}

export default function FooterWrapper({ data }: FooterWrapperProps) {
  const pathname = usePathname();
  if (pathname === '/order') return null;
  return <Footer data={data} />;
}
