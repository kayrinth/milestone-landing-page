import Navbar from "@/components/templates/navbar";
import { Hero } from "@/components/organism/hero";
import { StatsCard } from "@/components/organism/statsCard";
import { Features } from "@/components/organism/features";
import { Categories } from "@/components/organism/categories";
import { CompanyOverview } from "@/components/organism/companyOverview";
import { Products } from "@/components/organism/product";
import { Testimonials } from "@/components/organism/testimonials";
import { Cta } from "@/components/organism/cta";
import { Footer } from "@/components/templates/footer";
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StatsCard />
      <Features />
      <Categories />
      <CompanyOverview />
      <Products />
      <Testimonials />
      <Cta />
      <Footer />
    </>
  );
}
