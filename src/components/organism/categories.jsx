import { Category } from "@/components/molecules/categoryItem";

export function Categories() {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-9xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-1/4 flex flex-col text-left xl:ml-28 2xl:ml-72 text-[#23262F]">
          <h2 className="text-3xl font-bold mb-28">
            New In <br /> Store Now
          </h2>
          <p className="text-base text-muted-foreground mb-18">
            Get the latest items immediately <br />
            with promo prices
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-medium hover:underline"
          >
            Check All <span aria-hidden>→</span>
          </a>
        </div>
        <div className="w-full md:w-3/4">
          <Category />
        </div>
      </div>
    </section>
  );
}
