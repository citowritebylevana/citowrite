import { ArrowUpRight } from "lucide-react";

export default function ContactCard({
  icon: Icon,
  title,
  value,
  href
}: {
  icon: React.FC,
  title: string,
  value: string,
  href: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 py-4 px-7.5 rounded-xl   
      group shadow-[inset_-20px_-20px_40px_0px_rgba(255,255,255,0.04),inset_10px_1px_30px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3),0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    >
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-sm flex items-center justify-center
        shadow-[inset_-2px_-2px_5px_0px_rgba(255,255,255,0.05),inset_2px_2px_5px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]">
        <Icon />
      </div>

      {/* Text Info */}
      <div className="flex-1">
        <h4 className="text-violet-500 font-semibold text-base/5 mb-0.5">{title}</h4>
        <p className="text-[#f5f5f5] text-base/6">{value}</p>
      </div>

      {/* Arrow Icon */}
      <div className="w-8.5 h-8.5 rounded-full flex items-center justify-center bg-[#f5f5f5]/8">
        <ArrowUpRight className="w-6 h-6 text-violet-500" />
      </div>
    </a>
  );
}
