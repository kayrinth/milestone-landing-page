import { getTestimonials } from "@/api/furniture.api";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
export function TestimoniItem() {
  const [testimonial, setTestimonial] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await getTestimonials({ page, limit: 1 });
      setTestimonial(res.testimonials[0]);
      setTotalPages(res.totalPages);
    };
    fetchTestimonials();
  }, [page]);

  if (!testimonial) return null;

  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-20 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold text-2xl">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground text-gray-500">
            {testimonial.title}
          </p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed">“{testimonial.message}”</p>
      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="p-3 rounded-full drop-shadow shadow-md bg-[#286F6C] text-white disabled:bg-white disabled:opacity-30 disabled:text-black"
        >
          <ArrowLeft size={16} />
        </button>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="p-3 rounded-full  drop-shadow shadow-md bg-[#286F6C] text-white disabled:bg-white disabled:opacity-30 disabled:text-black"
        >
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
