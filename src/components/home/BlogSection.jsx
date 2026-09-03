"use client";
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";
import Image from "next/image";
import blog1 from "@/images/products/gallery_4.webp";
import blog2 from "@/images/products/gallery_5.webp";
import blog3 from "@/images/products/gallery_6.webp";

export default function BlogSection() {
  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">Latest Insights & Tips</h2>
            <p className="text-lg text-slate-600">Expert advice on courtyard design and paver maintenance.</p>
          </div>
          <Link href="/blog">
            <Button variant="link" className="text-[#FFD100] font-semibold hidden md:flex items-center gap-1">
              Read More Articles <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent>
            {[
              { title: "How to Choose the Right Paver Thickness for Your Driveway", date: "Sept 1, 2026", src: blog1, excerpt: "Discover why 80mm blocks are essential for commercial driveways." },
              { title: "Top 5 Courtyard Design Trends in Kerala", date: "Aug 15, 2026", src: blog2, excerpt: "See what homeowners in Malappuram are choosing this year." },
              { title: "The Science of Hydraulic Compression in Interlocks", date: "Aug 2, 2026", src: blog3, excerpt: "Learn why our zero-air-pocket manufacturing process creates better pavers." }
            ].map((post, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                <Card className="overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                  <div className="h-48 relative overflow-hidden">
                    <Image src={post.src} alt={post.title} fill placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover" />
                  </div>
                  <CardHeader className="pb-3 flex-1">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                      <Calendar className="w-4 h-4" /> {post.date}
                    </div>
                    <CardTitle className="text-xl font-poppins font-bold text-slate-900 leading-tight">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <Link href="/blog" className="text-[#FFD100] font-semibold flex items-center gap-1 hover:underline">
                      Read More <ArrowRight className="w-4 h-4" />
                    </Link>
                  </CardContent>
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
