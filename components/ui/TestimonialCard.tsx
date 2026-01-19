import { Quote } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  name: string;
  role: string;
}

export default function TestimonialCard({
  content,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="rounded-[20px] my-1 p-3.5 flex flex-col min-h-125 shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.02),inset_10px_7px_15px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]">
      {/* Image Placeholder */}
      <div className="w-full h-58 bg-gray-400/30 rounded-2xl">
        {/* Placeholder visual */}
      </div>

      {/* Quote Icon */}
      <Quote className="w-8 h-8 my-2.5 text-transparent fill-violet-500" />

      {/* Text Content */}
      <p className="text-white text-base/6 mb-5 grow line-clamp-4">{content}</p>

      {/* User Info */}
      <div className="flex items-center gap-x-2.5 mt-auto">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-violet-500 to-purple-600 flex items-center justify-center shrink-0">
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
