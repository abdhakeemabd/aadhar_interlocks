export const metadata = {
  title: "Blog & Tips | Aadhar Interlocks",
  description: "Read our latest articles on courtyard design, paving tips, and landscaping in Kerala.",
};

import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">Our Blog</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">Insights, landscaping tips, and news from Aadhar Interlocks.</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "How to Choose the Right Paver Thickness for Your Driveway", date: "Sept 1, 2026", img: "bg-[url('/commercial_driveway_1788448127530.webp')]", excerpt: "Discover why 80mm blocks are essential for commercial driveways and when 60mm blocks are sufficient for residential patios." },
              { title: "Top 5 Courtyard Design Trends in Kerala", date: "Aug 15, 2026", img: "bg-[url('/kerala_courtyard_1788448111679.webp')]", excerpt: "From dual-tone terracotta designs to modern slate grey zig-zags, see what homeowners in Malappuram are choosing this year." },
              { title: "The Science of Hydraulic Compression in Interlocks", date: "Aug 2, 2026", img: "bg-[url('/paver_blocks_showcase_1788447321836.webp')]", excerpt: "Learn why our zero-air-pocket manufacturing process creates pavers that outlast the heavy Kerala monsoons." }
            ].map((post, idx) => (
              <Card key={idx} className="overflow-hidden border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <div className={`h-56 ${post.img} bg-cover bg-center`}></div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                    <Calendar className="w-4 h-4" /> {post.date}
                  </div>
                  <CardTitle className="text-xl font-poppins font-bold text-slate-900 line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-6 line-clamp-3">{post.excerpt}</p>
                  <Link href="#" className="text-[#C2410C] font-semibold flex items-center gap-1 hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
