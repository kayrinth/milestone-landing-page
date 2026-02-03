import { ProductItems } from "../molecules/productItem";
export function Products() {
  return (
    <section className="my-20 max-w-7xl mx-auto">
      <div className="mb-10 text-center space-y-3">
        <h2 className="font-semibold text-4xl">All Product</h2>
        <p className="mx-48">
          The products we provide only for you as our service are selected from
          the
          <br /> best products with number 1 quality in the world
        </p>
      </div>
      <ProductItems />
    </section>
  );
}
