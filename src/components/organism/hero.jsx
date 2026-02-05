import { getHero } from "@/api/furniture.api";
import { useEffect, useState } from "react";

export function Hero() {
  const [loading, setLoading] = useState(true);
  const [hero, setHero] = useState(null);
  useEffect(() => {
    const fetchHero = async () => {
      try {
        const data = await getHero();
        setHero(data);
      } catch (err) {
        console.error("Failed to fetch hero data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchHero();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="relative h-screen overflow-hidden" id="home">
      <div>
        <div className="bg-black h-full w-full absolute top-0 left-0 opacity-20"></div>
        <img
          src={hero?.banner}
          alt={hero?.title}
          className="w-screen h-screen object-cover object-[95%_center]  md:object-cover md:object-[center_80%]"
        />
      </div>

      <div className="absolute top-[24%] left-[15%] md:block hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition border border-white">
          <span className="h-3 w-3 rounded-full bg-white"></span>
        </div>
      </div>
      <div className="absolute top-[66%] left-[20%] md:block hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition border border-white">
          <span className="h-3 w-3 rounded-full bg-white"></span>
        </div>
      </div>
      <div className="absolute top-[77%] right-[12%] md:block hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition border border-white">
          <span className="h-3 w-3 rounded-full bg-white"></span>
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full p-16 md:p-0 gap-10 flex flex-col items-center">
        <h1 className="text-2xl md:text-7xl font-semibold md:w-275 mx-auto">
          {hero?.title}
        </h1>
        <p className="text-sm md:text-xl font-light md:w-150 mx-auto">
          {hero?.description}
        </p>
        <button className="px-10 md:px-24 py-3 md:py-4 rounded-lg bg-white/40 backdrop-blur-md text-white font-semibold hover:bg-white/40 transition">
          Shop Now
        </button>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-linear-to-b from-transparent to-white"></div>
    </section>
  );
}
