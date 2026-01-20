export default function StatCard({ icon: Icon, value, label }: { icon: any, value: string, label: string }) {
  return (
    <div className="md:min-h-52.5 flex flex-col items-center justify-center p-2.5 md:py-7.5 md:px-17.5
      rounded-2xl shadow-[inset_-10px_-10px_10px_0px_rgba(255,255,255,0.05),inset_7px_7px_10px_0px_rgba(0,0,0,0.3),1px_1px_0px_0px_rgba(255,255,255,0.3),-1px_-1px_0px_0px_rgba(255,255,255,0.3)] ">
      <Icon className="h-9.5 w-9.5 md:w-12 md:h-12 text-center text-[#f5f5f5]" />
      <div className="text-[28px]/9.5 md:text-[44px]/12.5 font-semibold my-2.5 text-violet-500">
        {value}
      </div>
      <div className="text-white font-semibold text-base/6 md:text-[18px]/6.75">
        {label}
      </div>
    </div>
  );
}
