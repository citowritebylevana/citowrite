import { ChevronDown } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const Chevron = ({ isOpen }: { isOpen: boolean }) => (
  <ChevronDown className={`w-6 h-6 transition-transform duration-300 text-violet-500 ${isOpen ? 'rotate-180' : 'rotate-0'
    }`} />
);

export default function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
  return (
    <div
      className={`rounded-[10px] overflow-hidden transition-all duration-300 w-full 
            shadow-[inset_-20px_-20px_40px_0px_rgba(255,255,255,0.05),inset_5px_5px_15px_0px_rgba(0,0,0,0.4),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)] 
              ${isOpen
          ? 'shadow-[inset_0px_4px_29px_0px_rgba(97,95,255,0.4),inset_0px_0px_0px_0px_rgb(0,0,0),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)]'
          : 'bg-transparent'
        }`}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group gap-4"
      >
        <span
          className={`text-lg/5.75 font-semibold transition-colors duration-200 ${isOpen ? 'text-violet-500' : 'text-[#f5f5f5]'
            }`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 transition-colors h-6 w-6`}
        >
          <Chevron isOpen={isOpen} />
        </div>
      </button>

      {/* Accordion Animation */}
      <div
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 pt-0">
            <p className="text-[#f5f5f5] text-base/6 border-t border-white/5 pt-4">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

