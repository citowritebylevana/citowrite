import PricingCard from "../ui/PricingCard";

interface PricingCard {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted: boolean;
}

interface PricingProps {
  data: {
    title: string;
    subtitle: string;
    cards: PricingCard[];
    cta_text: string;
    cta_link: string;
  };
}

export default function Pricing({ data }: PricingProps) {
  return (
    <section
      id="pricing"
      className="w-full min-h-screen md:py-16 p-4 md:px-17.5 md:scroll-mt-15"
    >
      {/* Header Section */}
      <div className="text-center mb-10 space-y-2 md:space-y-4">
        <h2 className="text-[28px]/9.5 md:text-[44px]/14.5 font-bold text-white">
          {data.title}
        </h2>
        <p className="text-white text-center max-w-[70ch] mx-auto mb:4 md:text-base/6 ">
          {data.subtitle}
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 lg:gap-10 my-7.5  md:mt-0 md:mb-10">
        {data.cards.map((card, index) => (
          <PricingCard key={index} {...card} />
        ))}
      </div>

      {/* Bottom Floating CTA */}
      <div className="flex justify-center">
        <a
          href={data.cta_link}
          target="_blank"
          className="bg-violet-500 hover:bg-purple-600 text-[#f5f5f5] font-semibold
            py-2.5 px-4 md:px-8 text-sm rounded-[50px] transition-colors duration-200"
        >
          {data.cta_text}
        </a>
      </div>
    </section>
  );
}
