import HeroSection from "@/components/home/HeroSection";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import GalleryShowcase from "@/components/home/GalleryShowcase";
import BlogSection from "@/components/home/BlogSection";
import CalculatorSection from "@/components/home/CalculatorSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "Aadhar Interlocks | Best Paving Tiles in Kerala",
  description: "Explore our premium range of interlocking pavers, designer patio tiles, and heavy-duty driveway blocks designed for supreme durability in Kerala.",
};

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection />
      <FeaturedProducts />
      <GalleryShowcase />
      <BlogSection />
      <CalculatorSection />
      <TestimonialsSection />
    </div>
  );
}
