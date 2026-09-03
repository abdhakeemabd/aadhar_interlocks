"use client";

import { useState } from "react";
import { MessageCircle, ArrowRight, CheckCircle2, Star, Calendar, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Link from "next/link";

export default function Home() {
  const [area, setArea] = useState("");
  const [areaUnit, setAreaUnit] = useState("sqft");
  const [thickness, setThickness] = useState("60");
  
  const calculateEstimate = () => {
    if (!area) return 0;
    const sqft = areaUnit === "cents" ? parseFloat(area) * 435.6 : parseFloat(area);
    return Math.ceil(sqft * 3.5);
  };

  const getWhatsAppLink = (message) => `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-900 text-white pb-16 pt-24 md:pt-32 md:pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
          <div className="absolute inset-0 bg-[url('/hero_interlock_bricks_1788447301913.png')] bg-cover bg-center opacity-40"></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-6">
              <div className="flex gap-1 text-yellow-400">
                <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
              </div>
              <span className="text-sm font-semibold">4.9/5 Average Rating • 64,000+ Facebook Followers</span>
            </div>
            <h1 className="font-poppins text-5xl md:text-7xl font-extrabold leading-tight mb-6 tracking-tight">
              Elevate Your Courtyard with Kerala's <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD100] to-orange-400">Strongest</span> Interlocks
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Aadhar Interlocks manufactures high-quality interlocking bricks and paver blocks for residential & commercial spaces. Join over 60,000+ satisfied customers across Malappuram and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/products">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 font-bold h-14 px-8 text-lg rounded-full w-full">
                  Explore Collections <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" className="bg-[#059669] hover:bg-[#047857] text-white font-bold h-14 px-8 text-lg rounded-full shadow-lg shadow-emerald-900/50 group w-full"
                onClick={() => window.open(getWhatsAppLink("Hi, I want a quote for interlocking pavers."), "_blank")}>
                <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> Get Instant Quote
              </Button>
            </div>
          </div>
        </div>
        
        {/* Trust Badges Strip */}
        <div className="absolute bottom-0 left-0 right-0 bg-slate-800/80 backdrop-blur-md border-t border-slate-700 py-4 z-10">
          <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-4 text-sm md:text-base font-semibold text-slate-200">
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> M30-M50 Grade Strength</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Heavy Vehicle Load Tested</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Factory Direct Pricing</div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Delivery Across Kerala</div>
          </div>
        </div>
      </section>

      {/* Featured Products (Slider) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="max-w-2xl">
              <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">Premium Paving Solutions</h2>
              <p className="text-lg text-slate-600">Engineered for durability and designed for elegance.</p>
            </div>
            <Link href="/products">
              <Button variant="link" className="text-[#FFD100] font-semibold hidden md:flex items-center gap-1">
                View All Products <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent>
              {[
                { name: "Unipave (Zig-Zag)", thick: "60mm & 80mm", use: "Commercial & Driveways", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')]" },
                { name: "I-Shape Blocks", thick: "80mm", use: "Heavy Duty", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')]" },
                { name: "Hexagonal Pavers", thick: "60mm", use: "Residential Courtyards", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')]" },
                { name: "Textured Stone", thick: "60mm", use: "Premium Patios", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')]" },
              ].map((product, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                    <div className={`h-64 ${product.img} bg-cover bg-center relative overflow-hidden flex items-center justify-center bg-slate-100`}>
                      <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm text-slate-800">
                        {product.use}
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-2xl font-poppins text-slate-900">{product.name}</CardTitle>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white"
                        onClick={() => window.open(getWhatsAppLink(`Hi, I would like to inquire about the ${product.name} pavers.`), "_blank")}>
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

      {/* Gallery Showcase (Slider) */}
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
                { title: "Residential Courtyard", bg: "bg-[url('/kerala_courtyard_1788448111679.png')]" },
                { title: "Commercial Driveway", bg: "bg-[url('/commercial_driveway_1788448127530.png')]" },
                { title: "Garden Walkway", bg: "bg-[url('/kerala_courtyard_1788448111679.png')]" },
                { title: "Heavy Duty Parking", bg: "bg-[url('/commercial_driveway_1788448127530.png')]" },
              ].map((item, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <div className={`group relative h-80 rounded-xl overflow-hidden ${item.bg} bg-cover bg-center shadow-md`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center text-white">
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

      {/* Latest Blog Posts (Slider) */}
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
                { title: "How to Choose the Right Paver Thickness for Your Driveway", date: "Sept 1, 2026", img: "bg-[url('/commercial_driveway_1788448127530.png')]", excerpt: "Discover why 80mm blocks are essential for commercial driveways." },
                { title: "Top 5 Courtyard Design Trends in Kerala", date: "Aug 15, 2026", img: "bg-[url('/kerala_courtyard_1788448111679.png')]", excerpt: "See what homeowners in Malappuram are choosing this year." },
                { title: "The Science of Hydraulic Compression in Interlocks", date: "Aug 2, 2026", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')]", excerpt: "Learn why our zero-air-pocket manufacturing process creates better pavers." }
              ].map((post, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3 p-2">
                  <Card className="overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className={`h-48 ${post.img} bg-cover bg-center`}></div>
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

      {/* Interactive Estimator */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="font-poppins text-4xl font-bold mb-6">Plan Your Project</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Use our quick estimator to find out exactly how many interlocking blocks you need for your driveway or courtyard.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <span className="font-bold text-[#FFD100]">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Measure your Area</h4>
                    <p className="text-slate-400">Enter your total area in Square Feet or Cents.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full">
              <Card className="bg-white text-slate-900 shadow-2xl border-0 rounded-2xl overflow-hidden">
                <CardHeader className="bg-slate-50 border-b pb-6">
                  <CardTitle className="text-2xl font-poppins text-center text-[#FFD100]">Tile Quantity Estimator</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Unit</label>
                      <div className="flex rounded-md shadow-sm">
                        <button onClick={() => setAreaUnit("sqft")} className={`flex-1 py-2 text-sm font-medium border rounded-l-md ${areaUnit === "sqft" ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300'}`}>Sq Ft</button>
                        <button onClick={() => setAreaUnit("cents")} className={`flex-1 py-2 text-sm font-medium border-t border-b border-r rounded-r-md ${areaUnit === "cents" ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-700 border-slate-300'}`}>Cents</button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">Total Area</label>
                      <input 
                        type="number" 
                        value={area} 
                        onChange={(e) => setArea(e.target.value)} 
                        placeholder={areaUnit === 'cents' ? "e.g., 5" : "e.g., 1000"}
                        className="w-full border-slate-300 rounded-md shadow-sm focus:ring-[#FFD100] focus:border-[#FFD100] border p-2"
                      />
                    </div>
                  </div>
                  
                  {area && (
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center animate-in fade-in zoom-in duration-300">
                      <p className="text-sm text-slate-500 font-semibold mb-1 uppercase tracking-wider">Estimated Blocks Needed</p>
                      <p className="text-5xl font-poppins font-bold text-slate-900">{calculateEstimate().toLocaleString()}</p>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="bg-slate-50 border-t p-6">
                  <Button 
                    className="w-full bg-[#059669] hover:bg-[#047857] text-white h-12 text-lg font-bold"
                    onClick={() => {
                      if(!area) return;
                      const msg = `Hi Aadhar Interlocks, I need an estimate for ${area} ${areaUnit} of ${thickness}mm pavers. Estimated blocks: ${calculateEstimate()}.`;
                      window.open(getWhatsAppLink(msg), "_blank");
                    }}
                    disabled={!area}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" /> Send Estimate to WhatsApp
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-poppins text-4xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-slate-600">Trusted by homeowners and contractors across Kerala.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "The heavy-duty blocks for our commercial driveway are incredibly strong. Highly recommend Aadhar!", name: "Mohammed Shafi", title: "Contractor, Kozhikode" },
              { text: "Beautiful terracotta pavers transformed our home's courtyard. They withstand the heavy monsoon perfectly.", name: "Amina K.", title: "Homeowner, Manjeri" },
              { text: "Factory direct pricing saved us a lot on our landscaping project. Top quality materials.", name: "Rahul V.", title: "Builder, Malappuram" },
            ].map((test, idx) => (
              <Card key={idx} className="bg-white border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="flex gap-1 text-[#FFD100] mb-4">
                    <Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" /><Star className="w-5 h-5 fill-current" />
                  </div>
                  <p className="italic text-slate-700 mb-6">"{test.text}"</p>
                  <div>
                    <h4 className="font-bold font-poppins text-slate-900">{test.name}</h4>
                    <p className="text-sm text-slate-500">{test.title}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
