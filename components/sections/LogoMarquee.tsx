import Image from "next/image";

const brands = [
  { name: "Consort", logo: "/logos/brands/consort.png" },
  { name: "Jamovi", logo: "/logos/brands/jamovi.png" },
  { name: "RStudio", logo: "/logos/brands/rstudio.png" },
  { name: "SPSS", logo: "/logos/brands/spss.png" },
  { name: "Cochrane", logo: "/logos/brands/cochrane.png" },
  { name: "Matlab", logo: "/logos/brands/matlab.png" },
  { name: "Pubmed", logo: "/logos/brands/pubmed.png" },
  { name: "Meta Analysis", logo: "/logos/brands/meta-analysis.png" },
  { name: "Stata", logo: "/logos/brands/stata.png" },
  { name: "Zotero", logo: "/logos/brands/zotero.png" },
];

export default function LogoMarquee() {
  return (
    <div className="w-full p-4 md:py-15 md:px-17.5 overflow-hidden">
      <h2 className="text-center text-white text-[28px]/9.5 font-bold mb-2 md:text-[44px]/14.5 md:mb-10">
        Standard & Tools Kami
      </h2>

      <div className="relative flex overflow-hidden">
        {/* Container Utama Animasi */}
        <div className="flex w-max animate-marquee shrink-0 items-center gap-16">
          {/* Loop 2 kali: Penting untuk menyambung animasi */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center gap-5 md:gap-16">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className=""
                >
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={500}
                    height={250}
                    className="w-37.5 md:w-62.5"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}
