import { MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import productHero from "@/images/products/gallery_14.webp";
import { getWhatsAppLink } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-24 md:pt-32 flex flex-col min-h-screen md:min-h-0 justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent z-10" />
        <Image src={productHero} alt="Hero Background" fill priority placeholder="blur" sizes="100vw" className="object-cover opacity-40" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 pb-16 md:pb-32 mt-12 md:mt-0">
        <div className="max-w-3xl">
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
            <Button 
              nativeButton={false}
              render={<a href={getWhatsAppLink("Hi, I want a quote for interlocking pavers.")} target="_blank" rel="noopener noreferrer" />} 
              size="lg" 
              className="bg-[#059669] hover:bg-[#047857] text-white font-bold h-14 px-8 text-lg rounded-full shadow-lg shadow-emerald-900/50 group w-full"
            >
              <MessageCircle className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" /> Get Instant Quote
            </Button>
          </div>
        </div>
      </div>
      
      {/* Trust Badges Strip */}
      <div className="relative z-10 mt-auto bg-slate-800/80 backdrop-blur-md border-t border-slate-700 py-4 w-full">
        <div className="container mx-auto px-4 flex flex-col md:flex-row md:flex-wrap justify-between items-start md:items-center gap-4 text-sm md:text-base font-semibold text-slate-200">
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> M30-M50 Grade Strength</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Heavy Vehicle Load Tested</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Factory Direct Pricing</div>
          <div className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-[#FFD100]" /> Delivery Across Kerala</div>
        </div>
      </div>
    </section>
  );
}
