'use client'; // Pastikan ada directive ini karena menggunakan useState

import { useState } from 'react'; // Tambahkan useState
import Link from 'next/link';
import logo from '@/public/logos/site/logo.png'
import Image from 'next/image';
import { ChevronDown } from 'lucide-react'; // Tambahkan icon untuk indikator accordion
import { SiGmail, SiInstagram, SiWhatsapp } from '@icons-pack/react-simple-icons';

interface SocialItem {
  name: string;
  icon: string;
  url: string;
}

interface FooterProps {
  data?: {
    description: string;
    socials: SocialItem[];
  };
}

export default function Footer({ data }: FooterProps) {
  // State untuk accordion mobile
  const [isLinksOpen, setIsLinksOpen] = useState(false);

  const icons: { [key: string]: React.ElementType } = {
    SiInstagram: SiInstagram,
    SiGmail: SiGmail,
    SiWhatsapp: SiWhatsapp
  };

  return (
    <footer className="pt-10 pb-8 px-4 md:px-17.5 max-w-450 mx-auto">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between mb-5 md:gap-12 md:mb-10">

        {/* Brand Column */}
        <div className="max-w-md">
          <div className="mb-2.5">
            <Image src={logo} alt='' height={250} width={500} className="w-25 md:w-35" />
          </div>
          <p className="text-violet-400 leading-relaxed text-sm md:text-base/6">
            {data?.description || "CITO Write membantu mahasiswa kedokteran, PPDS, dan dokter klinisi menyusun karya ilmiah yang rapi dan siap submit melalui pendampingan terstruktur dan standar akademik yang jelas."}
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
              {data?.socials && data.socials.length > 0 ? (
                data.socials.map((social, index) => {
                  const Icon = icons[social.icon] || SiInstagram;
                  return (
                    <a key={index} href={social.url} target='_blank' aria-label={social.name}>
                      <Icon />
                    </a>
                  );
                })
              ) : (
                <>
                  <a href="https://instagram.com/citowrite.id" target='_blank' aria-label="Instagram"><SiInstagram /></a>
                  <a href='mailto:citowrite.id@gmail.com' target='_blank' aria-label="Gmail"><SiGmail /></a>
                  <a href="https://wa.me/08114341297" target='_blank' aria-label="Whatsapp"><SiWhatsapp /></a>
                </>
              )}
            </div>
            <p className="text-[#f5f5f5] text-base/5 font-medium">@citowrite.id</p>
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
