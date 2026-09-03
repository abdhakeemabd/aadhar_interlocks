"use client";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import feature1 from "@/images/products/gallery_15.webp";
import feature2 from "@/images/products/gallery_16.webp";
import feature3 from "@/images/products/gallery_17.webp";
import feature4 from "@/images/products/gallery_18.webp";
import { getWhatsAppLink } from "@/lib/utils";

export default function FeaturedProducts() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">Premium Paving Solutions</h2>
            <p className="text-lg text-slate-600">Engineered for durability and designed for elegance.</p>
          </div>
          <Button variant="link" render={<Link href="/products" />} className="text-[#FFD100] font-semibold hidden md:flex items-center gap-1">
            View All Products <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {[
              { name: "Unipave (Zig-Zag)", thick: "60mm & 80mm", use: "Commercial & Driveways", src: feature1 },
              { name: "I-Shape Blocks", thick: "80mm", use: "Heavy Duty", src: feature2 },
              { name: "Hexagonal Pavers", thick: "60mm", use: "Residential Courtyards", src: feature3 },
              { name: "Textured Stone", thick: "60mm", use: "Premium Patios", src: feature4 },
            ].map((product, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="h-64 relative overflow-hidden flex items-center justify-center bg-slate-100">
                    <Image src={product.src} alt={product.name} fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500 z-10"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm text-slate-800 z-20">
                      {product.use}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl font-poppins text-slate-900">{product.name}</CardTitle>
                  </CardHeader>
                  <CardFooter>
                    <Button 
                      variant="outline" 
                      render={<a href={getWhatsAppLink(`Hi, I would like to inquire about the ${product.name} pavers.`)} target="_blank" rel="noreferrer" />}
                      className="w-full border-[#047857] text-[#047857] hover:bg-[#047857] hover:text-white"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" /> Inquire
                    </Button>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
