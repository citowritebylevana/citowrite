import { Quote } from "lucide-react";
import Image from "next/image"; // 1. Import komponen Image

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
  image?: string; // 2. Tambahkan prop image (opsional)
}

export default function TestimonialCard({
  content,
  name,
  role,
  image,
}: TestimonialCardProps) {
  return (
    <div className="rounded-[20px] m-1 mt-7.5 md:mt-1 p-3.5 flex flex-col min-h-125 shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.02),inset_10px_7px_15px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]">

      {/* 3. Image Container */}
      <div className="relative w-full h-58 rounded-2xl overflow-hidden bg-gray-400/30">
        {image ? (
          <Image
            src={image}
            alt={`Project oleh ${name}`}
            fill // Mengisi container parent
            className="object-cover" // Agar gambar tidak gepeng (crop tengah)
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Optimasi loading
          />
        ) : (
          // Fallback jika tidak ada gambar (Placeholder lama)
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            <span className="text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Quote Icon */}
      <Quote className="w-8 h-8 my-2.5 text-transparent fill-violet-500" />

      {/* Text Content */}
      <p className="text-white text-base/6 mb-5 grow line-clamp-4">{content}</p>

      {/* User Info */}
      <div className="flex items-center gap-x-2.5 mt-auto">
        {/* Avatar */}
        <div className="w-11.5 h-11.5 md:w-12 md:h-12 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="flex flex-col gap-y-1.25 min-w-0">
          <span className="text-[#f5f5f5] font-semibold text-base/5">
            {name}
          </span>
          <span className="text-[#f5f5f5] text-base/5">{role}</span>
        </div>
      </div>
    </div>
  );
}
