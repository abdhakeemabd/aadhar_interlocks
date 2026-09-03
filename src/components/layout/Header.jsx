"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PhoneCall, MessageCircle, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";
import logo from "../../../public/logo.webp";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const getDesktopClasses = (path) => {
    return pathname === path 
      ? "text-sm font-bold text-black border-b-2 border-[#FFD100] pb-1 transition-colors" 
      : "text-sm font-semibold text-slate-600 hover:text-black pb-1 transition-colors";
  };

  const getMobileClasses = (path) => {
    return pathname === path 
      ? "text-lg font-bold text-black transition-colors" 
      : "text-lg font-medium text-slate-600 hover:text-black transition-colors";
  };

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
        
        <nav className="hidden md:flex items-center gap-8 pt-1">
          <Link href="/" className={getDesktopClasses("/")}>Home</Link>
          <Link href="/about" className={getDesktopClasses("/about")}>About</Link>
          <Link href="/products" className={getDesktopClasses("/products")}>Products</Link>
          <Link href="/gallery" className={getDesktopClasses("/gallery")}>Gallery</Link>
          <Link href="/blog" className={getDesktopClasses("/blog")}>Blog</Link>
          <Link href="/contact" className={getDesktopClasses("/contact")}>Contact</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" className="hidden lg:flex gap-2 font-semibold border-black text-black hover:bg-black hover:text-white" onClick={() => window.location.href="tel:+918594077711"}>
            <PhoneCall className="w-4 h-4" /> Call Now
          </Button>
          <Button className="bg-[#FFD100] hover:bg-[#E6BC00] text-black gap-2 font-bold shadow-lg shadow-yellow-500/30 animate-pulse-slow" onClick={() => window.open("https://wa.me/+918594077711", "_blank")}>
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
            <Menu className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col h-full pt-12 pb-6 px-6">
              <div className="flex flex-col gap-6">
                <Link href="/" className={getMobileClasses("/")} onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/about" className={getMobileClasses("/about")} onClick={() => setIsOpen(false)}>About</Link>
                <Link href="/products" className={getMobileClasses("/products")} onClick={() => setIsOpen(false)}>Products</Link>
                <Link href="/gallery" className={getMobileClasses("/gallery")} onClick={() => setIsOpen(false)}>Gallery</Link>
                <Link href="/blog" className={getMobileClasses("/blog")} onClick={() => setIsOpen(false)}>Blog</Link>
                <Link href="/contact" className={getMobileClasses("/contact")} onClick={() => setIsOpen(false)}>Contact</Link>
              </div>
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="outline" className="w-full justify-start gap-2 border-black text-black h-12" onClick={() => { window.location.href="tel:+918594077711"; setIsOpen(false); }}><PhoneCall className="w-5 h-5" /> Call Now</Button>
                <Button className="w-full justify-start gap-2 bg-[#FFD100] hover:bg-[#E6BC00] text-black font-bold h-12" onClick={() => { window.open("https://wa.me/+918594077711", "_blank"); setIsOpen(false); }}><MessageCircle className="w-5 h-5" /> WhatsApp</Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
