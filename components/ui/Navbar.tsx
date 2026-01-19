'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from '@/public/logos/site/logo.png'
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efek untuk mendeteksi scroll agar background navbar berubah
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Testimoni', href: '#testimoni' },
    { name: 'Service', href: '#service' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? 'bg-[#111111]/80 backdrop-blur-md py-0.5' : 'py-1 bg-transparent'}`}
    >
      <div className="max-w-450 mx-auto md:px-17.5">
        <div className="flex items-center justify-between">

          {/* Logo Section */}
          <Link href="/" className="cursor-pointer h-25 w-25">
            <Image
              src={logo}
              height={150}
              width={150}
              alt='Website logo' />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-7.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#f5f5f5] text-base/5 transition-colors relative group"
              >
                {link.name}
                {/* Underline hover effect */}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-[#111111] border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden
        ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-purple-400 font-medium px-4 py-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
