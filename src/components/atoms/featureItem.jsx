import { Check } from "lucide-react";
export function FeatureItem({ title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="inline-flex shrink-0 items-center justify-center w-6 h-6 rounded-full bg-black">
        <Check size={16} color="white" strokeWidth={4} />
      </div>

      <div>
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-md md:text-lg">{desc}</p>
      </div>
    </div>
  );
}
