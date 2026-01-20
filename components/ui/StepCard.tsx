interface StepCardProps {
  number: string;
  title: string;
  description: string;
  isFilled: boolean;
}

export default function StepCard({
  number,
  title,
  description,
}: StepCardProps) {
  return (
    <div
      className="flex flex-col justify-center items-center p-5 rounded-[20px] transition-all duration-300 group min-w-75
      shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.05),inset_7px_7px_10px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]
      
      hover:bg-[#2f2f2f] hover:shadow-none
      "
    >
      {/* Number */}
      <div
        className="inline-flex items-center
        justify-center w-11.5 h-11.5 md:w-13 md:h-13 rounded-full text-[20px]/6.5 md:text-2xl/8 font-bold mb-4.25 
         text-violet-500 border border-violet-500 group-hover:bg-violet-500 group-hover:text-[#333333] transition-colors duration-300">
        {number}
      </div>

      {/* Title */}
      <h3 className="text-[18px]/5.75 md:text-[20px]/6.5 font-bold text-white mb-2">{title}</h3>

      {/* Description */}
      <p className="text-base/6 text-gray-300 text-center">{description}</p>
    </div>
  );
}
