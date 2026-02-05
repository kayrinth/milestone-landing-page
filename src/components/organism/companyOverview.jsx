import company from "../../assets/company.webp";

export function CompanyOverview() {
  return (
    <section id="company-overview" className="py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-semibold mb-5">
            The Best Furniture <br />
            Manufacturer of your choice
          </h2>

          <p className="text-md md:text-lg text-muted-foreground leading-relaxed">
            Furnitre power is a software as services for multiperpose business
            management system, especially for them who are running two or more
            business explore the future Furnitre power is a software as services
            \
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={company}
            alt="Company overview"
            className="w-full h-auto object-cover rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}
