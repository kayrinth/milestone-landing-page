import { Category } from "@/components/molecules/categoryItem";

export function Categories() {
  return (
    <section className="w-full py-16">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row gap-12 items-start px-4 md:px-0">
        <div className="w-full md:w-1/4 ml-0 md:ml-28 flex md:flex-col text-left text-[#23262F] items-center md:items-start justify-between">
          <h2 className="text-3xl md:text-4xl font-bold mb-0 md:mb-28">
            New In <br /> Store Now
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground mb-0 md:mb-18">
            Get the latest items immediately <br />
            with promo prices
          </p>
          <div className="mt-auto hidden md:block">
            <a
              href="#"
              className="flex items-center gap-2 font-medium hover:underline"
            >
              Check All <span aria-hidden>→</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-3/4">
          <Category />
        </div>
      </div>
    </section>
  );
}
