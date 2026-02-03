import {
  CardProduct,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/atoms/card";
import { getProducts } from "@/api/furniture.api";
import { useEffect, useState } from "react";
import { Plus } from "lucide-react";
import { Pagination } from "../atoms/pagination";

export function ProductItems() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const limit = 8;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await getProducts({ page, limit });

        setProducts(res.products);
        setTotalPages(res.totalPages);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };

    fetchProducts();
  }, [page]);

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((item) => (
          <CardProduct key={item.id} className="pt-0">
            <div className="relative h-64 bg-muted rounded-2xl p-4 flex items-center justify-center border border-gray-300">
              <img
                src={item.image}
                alt={item.title}
                className="max-h-full max-w-full object-contain rounded-2xl"
              />
              <div className="absolute bottom-4 right-4 bg-gray-200 rounded-full p-2">
                <Plus size={18} />
              </div>
            </div>

            <CardHeader className="-ml-4">
              <CardTitle>{item.title}</CardTitle>
              <div className="flex gap-3 mt-2">
                <CardDescription>$ {item.price}</CardDescription>
                {item.price_after_discount && (
                  <CardDescription className="line-through text-gray-400">
                    $ {item.price_after_discount}
                  </CardDescription>
                )}
              </div>
            </CardHeader>
          </CardProduct>
        ))}
      </div>
      <Pagination page={page} totalPages={totalPages} onChange={setPage} />
    </>
  );
}
