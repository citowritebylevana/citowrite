export default function StatCard({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <div className="min-h-[210px] flex flex-col items-center justify-center py-7.5 px-17.5
      rounded-2xl shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.05),inset_7px_7px_10px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)] ">
      <Icon className="w-12 h-12 mb-2.5 text-center text-[#f5f5f5]" />
      <div className="text-[44px]/12.5 font-semibold mb-2 text-violet-500">
        {value}
      </div>
      <div className="text-white font-semibold text-sm md:text-[18px]/6.75">
        {label}
      </div>
    </div>
  );
}
