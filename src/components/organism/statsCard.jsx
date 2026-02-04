import { StatItem } from "@/components/atoms/statItem";
import { getData } from "@/api/furniture.api";
import { useEffect, useState } from "react";

export function StatsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setData(data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="relative z-10 -mt-12 mx-auto  max-w-7xl">
      <div className="flex grid-cols-1 md:grid-cols-7 rounded-2xl bg-[#286F6C] text-white shadow-xl justify-around items-center md:flex-row flex-col py-6">
        <StatItem value={data?.experience} label="Year Experience" />
        <div className="border-l border-white h-28"></div>
        <StatItem value={data?.country} label="Opened in the country" />
        <div className="border-l border-white h-28"></div>
        <StatItem value={data?.sold} label="Furniture sold" />
        <div className="border-l border-white h-28"></div>
        <StatItem value={data?.variant} label="Variant Furniture" />
      </div>
    </div>
  );
}
