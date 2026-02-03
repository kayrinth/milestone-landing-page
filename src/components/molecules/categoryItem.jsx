import * as React from "react";
import { useEffect, useState } from "react";
import { CardCategory, CardContent } from "@/components/atoms/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/atoms/carousel";
import { getCategory } from "@/api/furniture.api";

export function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const res = await getCategory();
        setCategories(Array.isArray(res?.category) ? res.category : []);
      } catch (err) {
        console.error("Failed to fetch category data", err);
        setCategories([]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
  }, []);

  if (loading) {
    return <p className="text-sm text-muted-foreground">Loading category...</p>;
  }

  if (!categories.length) {
    return <p className="text-sm text-muted-foreground">No category found</p>;
  }

  return (
    <Carousel className="max-w-9xl">
      <CarouselContent className="-ml-1">
        {categories.map((item, index) => (
          <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/4">
            <div className="p-1">
              <CardCategory>
                <CardContent className="relative h-96 p-0 overflow-hidden items-start flex justify-start">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-0 w-full p-4 text-center">
                    <span className="text-white text-2xl font-semibold ">
                      {item.title}
                    </span>
                  </div>
                </CardContent>
              </CardCategory>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
