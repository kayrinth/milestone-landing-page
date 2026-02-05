import features from "../../assets/features.webp";
import { FeatureItem } from "../atoms/featureItem";

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="order-1 md:order-2 text-start text-[#23262F] w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            We Create your home
            <br /> more aesthetic
          </h2>
          <p className="text-md md:text-lg">
            Furniture power is a software as services for multipurpose business
            management system
          </p>
          <div className="mt-8 flex flex-col gap-6">
            <FeatureItem
              title="Easy to Customize"
              desc="Furniture power is a software as services for multipurpose business management system"
            />
            <FeatureItem
              title="Easy to Customize"
              desc="Furniture power is a software as services for multipurpose business management system"
            />
          </div>
        </div>
        <div className="order-2 md:order-1 w-full md:w-1/2 h-96">
          <img
            src={features}
            alt="Features"
            className="w-full h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
