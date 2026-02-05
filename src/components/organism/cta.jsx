import cta from "../../assets/cta.webp";
import { SubscribeForm } from "@/components/molecules/subscribeForm";
export function Cta() {
  return (
    <section className="w-full" id="contact">
      <div className="relative w-full md:aspect-16/5 h-86 md:h-auto">
        <img
          src={cta}
          alt="Call to Action"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-1/4 left-1/2 md:top-1/4 md:left-1/2 md:ml-40 -translate-x-1/2 gap-6 md:gap-8 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-semibold text-white ">
            Get more discount <br /> Off your order
          </h1>
          <p className="text-white text-sm md:text-md">Join our mailing list</p>
          <SubscribeForm />
        </div>
      </div>
    </section>
  );
}
