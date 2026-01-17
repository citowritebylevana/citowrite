import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ content, name, role }: TestimonialCardProps) {
  return (
    <div className="rounded-[20px] p-3.5 flex flex-col h-full shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.02),inset_7px_7px_10px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]">

      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-300/20 rounded-2xl mb-6 animate-pulse md:animate-none">
        {/* Placeholder visual: Kosong (abu-abu) sesuai permintaan */}
      </div>

      {/* Quote Icon */}
      <Quote className="w-8 h-8 my-2.5 text-transparent fill-violet-500" />

      {/* Text Content */}
      <p className="text-gray-300 text-base/6  mb-5 grow">
        {content}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-x-2.5 mt-auto">
        {/* Avatar Placeholder */}
        <div className="w-11.5 h-11.5 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30 overflow-hidden">
          {/* Placeholder Avatar Image (Misal SVG User simple) */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-purple-300">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="flex flex-col gap-y-1.25">
          <span className="text-white font-bold text-base">{name}</span>
          <span className="text-gray-400 text-sm">{role}</span>
        </div>
      </div>

    </div>
  );
};

