import { Check } from "lucide-react";

// Tipe data untuk properti kartu
interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  isHighlighted?: boolean; // Untuk kartu yang menyala (glow)
}

export default function PricingCard({
  title,
  description,
  price,
  features,
  isHighlighted = false,
}: PricingCardProps) {
  return (
    <div
      className={`flex flex-col p-6 rounded-[20px] transition-all ease-out duration-300 h-full
      ${isHighlighted
          ? 'border border-violet-500 shadow-[inset_-1px_4px_20.8px_rgba(123,57,255,0.25),0px_0px_30px_0_rgba(97,95,255,1)] bg-linear-to-b from-[rgba(33,33,33,0)] to-[rgba(97,95,255,0.3)] z-10'
          : `shadow-[inset_-10px_-10px_70px_0px_rgba(255,255,255,0.1),inset_20px_20px_50px_0px_rgba(0,0,0,0.7),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)] 

            hover:shadow-[inset_-1px_0px_140.4px_rgba(123,57,255,0.25),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]`
        }`}
    >
      {/* Title */}
      <h3 className={`text-[28px]/9.5 font-semibold mb-2.5 ${isHighlighted ? 'text-indigo-400' : 'text-white'}`
      }>
        {title}
      </h3 >

      {/* Description */}
      < p className="text-white text-base mb-10" >
        {description}
      </p >

      {/* Price */}
      < div className="text-[28px]/9.5 font-semibold text-white mb-2.5" >
        {price}
      </div >

      {/* Benefits Label */}
      < div className="text-white text-base/6 mb-2.5" > Benefit :</div >

      {/* Features List */}
      < ul className="space-y-1.5 mb-10 grow" >
        {
          features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 text-indigo-50 text-sm">
              <Check className="w-6 h-6 shrink-0 text-violet-500" />
              <span>{feature}</span>
            </li>
          ))
        }
      </ul >

      {/* CTA Button */}
      < button
        className={`w-full py-2.5 px-8 rounded-[50px] font-medium transition-all duration-200
        ${isHighlighted
            ? 'bg-violet-500 hover:bg-purple-700 text-white shadow-lg shadow-purple-900/20'
            : 'bg-transparent border border-violet-500 text-gray-200 hover:border-gray-400 hover:bg-white/5'
          }`}
      >
        Pesan Sekarang
      </button >
    </div >
  );
};


