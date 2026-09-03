"use client";
import Link from "next/link";
import { PhoneCall, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../public/logo.webp";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src={logo} alt="Aadhar Interlocks Logo" className="w-12 h-12 object-contain" />
          <div className="flex flex-col">
            <span className="font-poppins font-black text-2xl tracking-tight text-slate-900 leading-none">AADHAR</span>
            <span className="font-poppins text-xs font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">Interlock</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">About</Link>
          <Link href="/products" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Products</Link>
          <Link href="/gallery" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Gallery</Link>
          <Link href="/blog" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Blog</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-black transition-colors">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="hidden lg:flex gap-2 font-semibold border-black text-black hover:bg-black hover:text-white">
            <PhoneCall className="w-4 h-4" /> Call Now
          </Button>
          <Button className="bg-[#FFD100] hover:bg-[#E6BC00] text-black gap-2 font-bold shadow-lg shadow-yellow-500/30 animate-pulse-slow">
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </Button>
        </div>

        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col gap-6 mt-8">
              <Link href="/" className="text-lg font-semibold">Home</Link>
              <Link href="/about" className="text-lg font-semibold">About</Link>
              <Link href="/products" className="text-lg font-semibold">Products</Link>
              <Link href="/gallery" className="text-lg font-semibold">Gallery</Link>
              <Link href="/blog" className="text-lg font-semibold">Blog</Link>
              <Link href="/contact" className="text-lg font-semibold">Contact</Link>
              <div className="flex flex-col gap-3 mt-4">
                <Button variant="outline" className="w-full justify-start gap-2 border-black text-black"><PhoneCall className="w-4 h-4" /> Call Now</Button>
                <Button className="w-full justify-start gap-2 bg-[#FFD100] hover:bg-[#E6BC00] text-black font-bold"><MessageCircle className="w-4 h-4" /> WhatsApp</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
