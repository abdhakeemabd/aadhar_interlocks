export const metadata = {
  title: "Project Gallery | Aadhar Interlocks",
  description: "View our completed interlocking paver projects across Kerala.",
};

import { Play, ZoomIn } from "lucide-react";

export default function Gallery() {
  return (
    <div className="flex flex-col bg-slate-50 min-h-screen">
      <section className="bg-slate-900 text-white py-20 text-center">
        <h1 className="text-5xl font-poppins font-bold mb-4">Project Gallery & Installations</h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto">See how our premium interlocks transform ordinary spaces into elegant, highly durable landscapes.</p>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-8 border-b pb-4">Instagram Video Reels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[1, 2, 3].map((vid) => (
              <div key={vid} className="relative aspect-[9/16] bg-slate-800 rounded-xl overflow-hidden group cursor-pointer shadow-lg border border-slate-200">
                <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center group-hover:bg-slate-900/20 transition-all">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium text-sm drop-shadow-md">Aadhar Interlocks Site Installation Reel #{vid}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-poppins font-bold text-slate-900 mb-8 border-b pb-4">Installation Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Residential Courtyard", bg: "bg-[url('/kerala_courtyard_1788448111679.png')]" },
              { title: "Commercial Driveway", bg: "bg-[url('/commercial_driveway_1788448127530.png')]" },
              { title: "Garden Walkway", bg: "bg-[url('/kerala_courtyard_1788448111679.png')]" },
              { title: "Heavy Duty Parking", bg: "bg-[url('/commercial_driveway_1788448127530.png')]" },
              { title: "Modern Patio", bg: "bg-[url('/kerala_courtyard_1788448111679.png')]" },
              { title: "Industrial Estate", bg: "bg-[url('/commercial_driveway_1788448127530.png')]" },
            ].map((item, idx) => (
              <div key={idx} className={`group relative h-80 rounded-xl overflow-hidden ${item.bg} bg-cover bg-center cursor-pointer shadow-md`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 ease-in-out"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex justify-between items-center text-white">
                  <div>
                    <h4 className="font-bold text-lg font-poppins">{item.title}</h4>
                    <p className="text-sm text-slate-300">Malappuram, Kerala</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
