import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300 pt-20 pb-10 border-t-4 border-[#FFD100]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <img src="/logo.jpg" alt="Aadhar Interlocks Logo" className="w-12 h-12 rounded-md object-contain bg-white" />
              <div className="flex flex-col">
                <span className="font-poppins font-black text-2xl text-white tracking-tight leading-none">AADHAR</span>
                <span className="font-poppins text-xs font-bold text-[#FFD100] uppercase tracking-widest leading-none mt-1">Interlock</span>
              </div>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed text-sm">
              Premier manufacturer of concrete pavers, interlocking stones, and outdoor tiles in Malappuram, Kerala.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/aadhar_interlocks/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FFD100] hover:text-black transition-colors text-white">
                <span className="font-bold text-sm">IG</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#FFD100] hover:text-black transition-colors text-white">
                <span className="font-bold text-sm">FB</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
                <span className="text-slate-400">Areacode - Manjeri Road,<br/>Malappuram District, Kerala</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FFD100] shrink-0" />
                <a href="tel:+910000000000" className="text-slate-400 hover:text-[#FFD100] transition-colors">+91 00000 00000</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#FFD100] shrink-0 mt-0.5" />
                <span className="text-slate-400">Mon - Sat: 9:00 AM - 9:00 PM<br/>Sun: Closed</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">Our Products</Link></li>
              <li><Link href="/gallery" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">Project Gallery</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-[#FFD100] hover:underline transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6">Location</h4>
            <div className="w-full h-40 bg-slate-800 rounded-lg overflow-hidden border border-slate-700 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3914.5422894563875!2d76.04289841480415!3d11.221151691993437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba645d94711dbf5%3A0xb35384f936eebc82!2sAreacode%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709214431234!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Aadhar Interlocks. All rights reserved.</p>
          <p>Designed for premium courtyards.</p>
        </div>
      </div>

      {/* Floating WhatsApp Widget */}
      <a 
        href={`https://wa.me/919000000000?text=${encodeURIComponent("Hi Aadhar Interlocks, I would like to know more about your products.")}`} 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 group"
      >
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-50 animate-ping"></span>
        <MessageCircle className="w-7 h-7 relative z-10" />
      </a>
    </footer>
  );
}
