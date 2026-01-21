import { Bot, Clock, Inbox, Users } from "lucide-react";
import StatCard from "../ui/StatsCard";

interface StatItem {
  icon: string;
  value: string;
  label: string;
}

interface AboutProps {
  data: {
    title: string;
    subtitle: string;
    stats: StatItem[];
  };
}

const iconMap: Record<string, any> = {
  Users,
  Inbox,
  Clock,
  Bot,
};

export default function About({ data }: AboutProps) {
  const statsWithIcons = data.stats.map((stat) => ({
    ...stat,
    icon: iconMap[stat.icon] || Users,
  }));

  return (
    <section id="about" className="md:py-15 p-4 md:px-16.75 md:scroll-mt-35">
      {/* Header Text */}
      <div className="mb-10 space-y-2 md:py-3.75 md:space-y-4.5 text-center">
        <h2 className="text-[28px]/9.5 text-center text-[#f5f5f5] font-bold max-w-[15ch] mx-auto md:max-w-none md:text-[44px]/14.5 ">
          {data.title}
        </h2>
        <p className="text-[#f5f5f5] text-base/6 max-w-[35ch] md:text-[18px]/6.75 md:max-w-[73ch] mx-auto">
          {data.subtitle}
        </p>
      </div>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-[1.18fr_1fr_1fr_1.18fr] md:items-start md:gap-[37.33px]">
        {statsWithIcons.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
    </section>
  );
}
