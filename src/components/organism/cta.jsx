import cta from "../../assets/cta.webp";
import { SubscribeForm } from "@/components/molecules/subscribeForm";
export function Cta() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-16/5">
        <img
          src={cta}
          alt="Call to Action"
          className="w-full h-full object-cover"
        />

        <div className="absolute top-1/4 right-1/12 transform -translate-x-1/2 gap-8 flex flex-col items-start">
          <h1 className="text-4xl font-semibold text-white ">
            Get more discount <br /> Off your order
          </h1>
          <p className="text-white">Join our mailing list</p>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
