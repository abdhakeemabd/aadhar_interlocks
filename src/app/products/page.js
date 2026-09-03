export const metadata = {
  title: "Products | Aadhar Interlocks",
  description: "Browse our premium collection of interlocking pavers and tiles.",
};

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export default function Products() {
  const getWhatsAppLink = (message) => `https://wa.me/919000000000?text=${encodeURIComponent(message)}`;

  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">Our Products</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">High-density concrete interlocking pavers, drive-way blocks, and designer patio tiles.</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          
          {/* New Arrivals Highlight */}
          <div className="mb-20 bg-white p-8 rounded-3xl border border-emerald-100 shadow-xl shadow-emerald-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl font-bold flex items-center gap-2 text-sm uppercase tracking-wider">
              <Sparkles className="w-4 h-4" /> New Arrival
            </div>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="lg:w-1/2">
                <div className="h-72 w-full rounded-xl bg-[url('/hero_interlock_bricks_1788447301913.png')] bg-cover bg-center shadow-inner border border-slate-100"></div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-4">Premium Dual-Tone Textured Pavers</h2>
                <p className="text-slate-600 mb-6 text-lg">
                  Elevate your driveway with our latest addition. These 60mm and 80mm dual-tone pavers offer a natural stone look with the M50 grade strength of high-density concrete. Perfect for luxury homes and high-traffic commercial spaces.
                </p>
                <Button asChild className="bg-[#FFD100] hover:bg-[#E6BC00] text-black font-bold h-12 px-8 text-lg rounded-full shadow-lg">
                  <a href={getWhatsAppLink("Hi, I want details on the New Dual-Tone Textured Pavers.")} target="_blank" rel="noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" /> Inquire About New Arrival
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-8 border-b pb-4">Full Catalog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Unipave (Zig-Zag)", thick: "60mm & 80mm", use: "Commercial & Driveways", str: "M40 - M50", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
              { name: "I-Shape Blocks", thick: "80mm", use: "Heavy Duty & Industrial", str: "M50", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
              { name: "Hexagonal Pavers", thick: "60mm", use: "Residential Courtyards", str: "M30", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
              { name: "Grass Pavers", thick: "60mm", use: "Eco-Friendly Parking", str: "M30", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
              { name: "Textured Antique Stone", thick: "60mm", use: "Premium Patios", str: "M30", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
              { name: "Cobblestone Finish", thick: "60mm", use: "Walkways & Gardens", str: "M30", img: "bg-[url('/paver_blocks_showcase_1788447321836.png')] bg-cover bg-center" },
            ].map((product, idx) => (
              <Card key={idx} className="group overflow-hidden border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className={`h-64 ${product.img} relative overflow-hidden flex items-center justify-center bg-slate-100`}>
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-sm text-slate-800">
                    {product.use}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins text-slate-900">{product.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Thickness</span>
                    <span className="font-semibold text-slate-900">{product.thick}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500 font-medium">Strength</span>
                    <span className="font-semibold text-slate-900">{product.str} Grade</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full border-[#059669] text-[#059669] hover:bg-[#059669] hover:text-white">
                    <a href={getWhatsAppLink(`Hi, I would like to inquire about the ${product.name} pavers.`)} target="_blank" rel="noreferrer">
                      <MessageCircle className="w-4 h-4 mr-2" /> Inquire
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
