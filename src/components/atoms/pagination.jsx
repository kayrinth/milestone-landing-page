import { ArrowLeft, ArrowRight } from "lucide-react";

export function Pagination({ page, totalPages, onChange }) {
  return (
    <div className="mt-12 flex items-center justify-center gap-6">
      <button
        onClick={() => onChange(page - 1)}
        disabled={page === 1}
        className="p-3 rounded-full bg-white drop-shadow shadow-md disabled:opacity-30"
      >
        <ArrowLeft />
      </button>
      <div className="flex gap-3">
        {Array.from({ length: totalPages }).map((_, index) => {
          const current = index + 1;
          return (
            <button
              key={current}
              onClick={() => onChange(current)}
              className={`h-3 w-3 rounded-full border-2 transition
                ${page === current ? "bg-black" : "bg-white"}
              `}
            />
          );
        })}
      </div>
      <button
        onClick={() => onChange(page + 1)}
        disabled={page === totalPages}
        className="p-3 rounded-full bg-white drop-shadow shadow-md disabled:opacity-30"
      >
        <ArrowRight />
      </button>
    </div>
  );
}
