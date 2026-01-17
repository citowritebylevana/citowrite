import Link from 'next/link';
import logo from '@/public/logos/site/logo-horizontal.png'
import Image from 'next/image';
// --- Icons ---

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white transition-colors">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white transition-colors">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterXIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:text-white transition-colors">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

// --- Main Component ---

export default function Footer() {
  return (
    <footer className="pt-10 pb-8 px-4 md:px-17.5 max-w-450 mx-auto">

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-12 mb-10">

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
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-24">

          {/* Quick Links */}
          <div>
            <h3 className="text-[#f5f5f5] text-base/5 font-medium mb-3.75">Quick Links</h3>
            <ul className="space-y-2.5">
              {['About', 'Services', 'Contact', 'FAQ'].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-violet-400 hover:text-[#d8b4fe] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-[#f5f5f5] text-base/5 font-medium">Social Media</h3>
            <div className="flex gap-6 my-2.5 text-violet-400">
              <a href="#" aria-label="Instagram"><InstagramIcon /></a>
              <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
              <a href="#" aria-label="X"><TwitterXIcon /></a>
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
