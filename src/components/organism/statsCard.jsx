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
    <section id="about">
      <div className="relative z-10 -mt-20 md:-mt-12 mx-auto max-w-7xl px-10 md:px-0">
        <div className="md:flex grid grid-cols-2 md:grid-cols-4 rounded-2xl bg-[#286F6C] text-white shadow-xl justify-around items-center md:flex-row flex-col py-6 divide-x md:divide-x-0">
          <StatItem value={data?.experience} label="Year Experience" />
          <div className="border-l border-white h-28 md:block hidden"></div>
          <StatItem value={data?.country} label="Opened in the country" />
          <div className="border-l border-white h-28 md:block hidden"></div>
          <StatItem value={data?.sold} label="Furniture sold" />
          <div className="border-l border-white h-28 md:block hidden"></div>
          <StatItem value={data?.variant} label="Variant Furniture" />
        </div>
      </div>
    </section>
  );
}
