'use client';
import { usePathname } from 'next/navigation';
import Footer from '../sections/Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  if (pathname === '/order') return null;
  return <Footer />;
}
