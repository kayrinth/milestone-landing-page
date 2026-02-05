import { TestimoniItem } from "@/components/molecules/testimoniItem";
import testimoni from "../../assets/testimoni.webp";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="md:max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16 px-4">
        <div className="w-full h-full md:w-1/2 flex flex-col justify-start items-start gap-8">
          <h2 className="font-semibold text-3xl md:text-4xl">
            What people are saying about us
          </h2>
          <TestimoniItem />
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={testimoni}
            alt="Testimonials"
            className="rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
