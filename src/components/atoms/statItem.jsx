export function StatItem({ value, label }) {
  return (
    <div className="flex flex-col items-center justify-center py-4 md:py-10 px-6 text-center">
      <span className="text-3xl md:text-4xl font-bold">{value}</span>
      <span className="mt-2 text-md md:text-lg opacity-90 ">{label}</span>
    </div>
  );
}
