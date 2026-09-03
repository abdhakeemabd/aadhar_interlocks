"use client";
import { ArrowRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import gallery1 from "@/images/products/gallery_19.jpg";
import gallery2 from "@/images/products/gallery_20.jpg";
import gallery3 from "@/images/products/gallery_2.jpg";
import gallery4 from "@/images/products/gallery_3.jpg";

export default function GalleryShowcase() {
  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">Project Gallery</h2>
            <p className="text-lg text-slate-600">See our interlocks in action across beautiful Kerala landscapes.</p>
          </div>
          <Link href="/gallery">
            <Button variant="link" className="text-[#FFD100] font-semibold hidden md:flex items-center gap-1">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {[
              { title: "Residential Courtyard", src: gallery1 },
              { title: "Commercial Driveway", src: gallery2 },
              { title: "Garden Walkway", src: gallery3 },
              { title: "Heavy Duty Parking", src: gallery4 },
            ].map((item, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                <div className="group relative h-80 rounded-xl overflow-hidden shadow-md">
                  <Image src={item.src} alt={item.title} fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center text-white z-20">
                    <div>
                      <h4 className="font-bold text-lg font-poppins">{item.title}</h4>
                      <p className="text-sm text-slate-300">Malappuram, Kerala</p>
                    </div>
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>
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
