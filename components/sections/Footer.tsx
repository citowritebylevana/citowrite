'use client'; // Pastikan ada directive ini karena menggunakan useState

import React, { useState } from 'react'; // Tambahkan useState
import Link from 'next/link';
import logo from '@/public/logos/site/logo-horizontal.png'
import Image from 'next/image';
import { ChevronDown, Linkedin } from 'lucide-react'; // Tambahkan icon untuk indikator accordion
import { SiInstagram, SiX } from '@icons-pack/react-simple-icons';

export default function Footer() {
  // State untuk accordion mobile
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  return (
    <footer className="pt-10 pb-8 px-4 md:px-17.5 max-w-450 mx-auto">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-5 md:gap-12 md:mb-10">

        {/* Brand Column */}
        <div className="max-w-md">
          <div className="mb-2.5">
            <Image src={logo} alt='' height={50} width={160} />
          </div>
          <p className="text-violet-400 leading-relaxed text-sm md:text-base/6">
            CITO Write membantu mahasiswa kedokteran, PPDS, dan
            dokter klinisi menyusun karya ilmiah yang rapi dan siap
            submit melalui pendampingan terstruktur dan standar
            akademik yang jelas.
          </p>
        </div>

        {/* Links & Socials Container */}
        <div className="flex flex-col sm:flex-row mt-5 md:mt-0 md:gap-24">

          {/* Quick Links (Accordion di Mobile, List di Desktop) */}
          <div className="border-y border-[#f5f5f5] py-2.5 md:border-none">
            <button
              onClick={() => setIsLinksOpen(!isLinksOpen)}
              className="w-full flex justify-between items-center sm:block cursor-pointer sm:cursor-default py-4 sm:py-0"
            >
              <h3 className="text-[#f5f5f5] text-base/5 font-medium mb-0 sm:mb-3.75">Quick Links</h3>
              <ChevronDown className={`w-5 h-5 text-violet-400 transition-transform sm:hidden ${isLinksOpen ? 'rotate-180' : ''}`} />
            </button>

            <ul className={`space-y-2.5 transition-all duration-300 overflow-hidden sm:max-h-none ${isLinksOpen ? 'max-h-40 pb-4 opacity-100' : 'max-h-0 opacity-0 sm:opacity-100'}`}>
              {['About', 'Services', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-violet-400 hover:text-[#d8b4fe] transition-colors block text-sm sm:text-base"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className='mt-5 md:m-0'>
            <h3 className="text-[#f5f5f5] text-base/5 font-medium">Social Media</h3>
            <div className="flex gap-6 my-2.5 text-violet-400">
              <a href="#" aria-label="Instagram"><SiInstagram /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="X"><SiX /></a>
            </div>
            <p className="text-[#f5f5f5] text-base/5 font-medium">@Citowrite</p>
          </div>

        </div>
      </div>

      {/* Bottom Section (Copyright) */}
      <div className="text-center pt-8 border-t border-white/10">
        <p className="text-gray-400 text-sm">
          © 2026 Citowrite. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
