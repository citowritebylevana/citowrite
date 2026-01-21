"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import logo from "@/public/logos/site/logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Efek untuk mendeteksi scroll agar background navbar berubah
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Service", href: "#service" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleSmoothScroll = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
  ) => {
    if (pathname === "/order") {
      e.preventDefault();
      router.push("/" + href);
    } else {
      // Jika sudah di landing page, scroll smooth ke section
      e.preventDefault();
      const sectionId = href.replace("#", "");
      const element = document.getElementById(sectionId);

      if (element) {
        const navHeight = 80; // Approximate navbar height
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
      ${scrolled ? "bg-[#111111]/80 backdrop-blur-md py-0.5" : "py-1 backdrop-blur-md"}`}
    >
      <style>{`
        @keyframes slideDownMenu {
          from {
            opacity: 0;
            transform: translateY(-10px);
            visibility: hidden;
          }
          to {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
        }

        @keyframes slideUpMenu {
          from {
            opacity: 1;
            transform: translateY(0);
            visibility: visible;
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
            visibility: hidden;
          }
        }

        @keyframes slideInMenuItem {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes rotateMenuIcon {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(90deg);
          }
        }

        @keyframes rotateCloseIcon {
          from {
            transform: rotate(90deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .mobile-menu-open {
          animation: slideDownMenu 0.3s ease-out forwards;
        }

        .mobile-menu-close {
          animation: slideUpMenu 0.3s ease-in forwards;
        }

        .menu-item-animate {
          animation: slideInMenuItem 0.3s ease-out backwards;
        }

        .menu-icon-open {
          animation: rotateMenuIcon 0.3s ease-out forwards;
        }

        .menu-icon-close {
          animation: rotateCloseIcon 0.3s ease-in forwards;
        }
      `}</style>

      <div className="max-w-450 mx-auto px-4 md:px-17.5">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="h-10.5 w-10.5 cursor-pointer md:h-25 md:w-25"
          >
            <Image src={logo} height={150} width={150} alt="Website logo" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-x-7.5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleSmoothScroll(link.href, e)}
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
              className={`text-white py-5 hover:bg-white/10 rounded-lg transition-colors ${
                isOpen ? "menu-icon-open" : "menu-icon-close"
              }`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden flex flex-col px-4 py-4 space-y-4 mobile-menu-open">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleSmoothScroll(link.href, e)}
              className="text-gray-300 hover:text-purple-400 font-medium px-4 py-2 hover:bg-white/5 rounded-lg transition-colors menu-item-animate"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
